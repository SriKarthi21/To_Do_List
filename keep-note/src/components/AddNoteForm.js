import { useState } from 'react';
import styled from 'styled-components';
const FormContainer = styled.form`
background-color:rgb(255,240,245);
    width:400px;    margin-left:auto;   
    margin-right:auto;
color:black;    text-align: left;
  padding:10px;
`;
const FormLabel=styled.label`
font-weight:bold;
`;
const FormHeading=styled.h3`
    text-align:center;
`
const FormInput=styled.input`
    width:95%; background-color:rgb(255,240,245);
    border: none; border-bottom: 2px solid black;
`;
const FormSubmit=styled.button`
    background-color:lightblue; border-radius:7px;
`;
const FormError=styled.span`
    color:red;  font-size:0.8em;  font-weight: normal;
`;
const TogggleButton=styled.button`
width:400px;
  background-color:rgb(255,240,245);
  text-align: left;
  padding-left:10px;
  height: auto;
  font-size:1.2em;
  border:none;
`;

function AddNoteForm({onAddNote}){

    const [initialData, setInitialData] = useState({
        title: "",
        content: "",
        priority: ""
    });
    const[errors,setErrors]=useState({
        title:false,content:false
    })
   
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialData({ ...initialData, [name]: value })
        // console.log(initialData);
        
    }
    const submitData = (e) => {
        e.preventDefault();
        validateData(initialData)
    }
    const validateData=(initialData)=>{
        let error={};
        if(!initialData.title.trim()){
            setErrors({...errors,title:true})
            return error
            
         }
        let lenghtValid=initialData.content.trim().length>6;
        if(!initialData.content.trim() || !lenghtValid){
            setErrors({...errors,content:true})
            return error
        }
        else{ 
            setErrors({...errors,title:false,content:false})

            saveToServer();
        }
    }

    async function saveToServer(e){
        try{
            const newNote={
                title:initialData.title,
                content:initialData.content,
                priority:initialData.priority
            };
              onAddNote(newNote);
reset();
        }catch(error){
console.error("error on submitting")
        }
    //     const postResponse=await axios.post("http://localhost:3000/notes",initialData)
    //      .then(data=>console.log("Success ",data))
    //      .catch(error=>console.error("Error ",error))
    //     alert("Notes Added");
    //     reset()
    }
function reset(){
    setInitialData({ ...initialData, title: "",content:"", priority:"" })
}
const formContent=( 
    <div className='formdiv'>
    <FormContainer onSubmit={submitData}>
    <FormHeading>Add Note</FormHeading>

        <FormLabel>Title : </FormLabel>
<br/>        <FormInput
            name="title" value={initialData.title} onChange={handleChange}
            type='text' /><br/>
            {errors.title && <FormError> Title is required</FormError>}
<br />
        <FormLabel>Content :</FormLabel>
<br/>
        <label>Add</label>
<br/>        <FormInput
            name="content" value={initialData.content} onChange={handleChange}
            type='text' /><br/>
            {errors.content && <FormError>content is required and must be 5 character</FormError>}

<br />
      <FormLabel>Priority :</FormLabel>  
 <br/>       <input type="radio" id="low" name="priority" onChange={handleChange} value="low" />
        <label htmlFor="low">Low</label>
        <input type="radio" id="medium" name="priority" onChange={handleChange} value="medium" />
        <label htmlFor="medium">Medium</label>
        <input type="radio" id="high" name="priority" onChange={handleChange} value="high" />
        <label htmlFor="high">High</label>

        <br />
         <FormSubmit   type='submit'>Add Note</FormSubmit>
    </FormContainer>

</div>)

const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const collapseButton = (
    <TogggleButton onClick={toggleCollapse}>
      {isCollapsed ? <span >Add a Note...</span> :<span >X</span> }
    </TogggleButton>
  );
    return (<>
       
       <div>
      {collapseButton}
      {isCollapsed ? null : formContent}
    </div>
      </>
    )
}

export default AddNoteForm