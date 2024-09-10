import{useState,useEffect} from 'react';
import Axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdDeleteForever } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";

const StyledListItem = styled.li`
  background-color: ${ ({ status }) => (status === 'completed' ? 'lightseagreen' : 'lightgoldenrodyellow') };

    margin:10px;
    height: 200px;
    border-radius: 10px;
    color:black;
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    font-family:Arial, Helvetica, sans-serif;
`;

const ButtonContainer=styled.div`
    display:flex`;
const Button=styled.button`
  margin: 10px;
  background-color: ${ ({ status }) => (status === 'completed' ? 'lightseagreen' : 'lightgoldenrodyellow') };
  font-size: 25px;
  border: none;
  size:50px;
`;

const NoteDetail = ({onEditNote,onDeleteNote}) => {
  const {id}=useParams();
const[initialNote,setNote]=useState({});
const [formData,setFormData]=useState({
  id:"",
  title:"",
  content:""})
useEffect(()=>{
  async function fetchById(){
    try{
    const response=await Axios.get(`http://localhost:3000/notes/${id}`);
    setNote(response.data);

  }catch(error){console.error("error while fetching"+error)}
  }
fetchById()
  
},[id]);

function handleChange(event) {
  const { name, value } = event.target;
  setNote({...initialNote, [name]: value});
}

const navigate=useNavigate();
const deleteData=()=>{
  onDeleteNote(initialNote.id)
console.log("delete called")
navigate("/notes")
}

const editData=async(event)=>{
  event.preventDefault();
  try{
    const updatedNote={
      id:initialNote.id,
      title:initialNote.title,
      content:initialNote.content,
      priority:initialNote.priority
    };
    console.log(updatedNote)
    // alert(JSON.stringify(updatedNote))
     onEditNote(updatedNote);
     navigate("/notes")
  }catch(error){
    console.error("error on editing",error)
  }
}
  return (

    <div>NoteDetail
    {initialNote?(  
      <StyledListItem  status={initialNote.status}>

        <form onSubmit={editData}>
          <label htmlFor='title'>Title</label>
          <input value={initialNote.title}   onChange={handleChange}

          type="text"  name="title"  placeholder='Enter Title'/>
          <br/>
          <label htmlFor="content">content</label>
          <input value={initialNote.content}  onChange={handleChange}
          type="text" name="content" placeholder="enter content"/>

<ButtonContainer> 
          <Button type="submit" status={initialNote.status}><CiBookmarkCheck /> </Button>
            <Button onClick={deleteData} status={initialNote.status}><MdDeleteForever /></Button>
            </ButtonContainer>
        </form>   
     </StyledListItem>
 ):<h1>Notes data not available</h1>}
   
    </div>
  )
}

export default NoteDetail