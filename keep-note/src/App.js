import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Header from './components/Header/Header';
import NoteView from './components/NoteView/NoteView';
import Footer from './components/Footer/Footer';
import { useState, useEffect,useContext } from 'react';
import Axios from "axios";
import { useErrorBoundary } from "react-error-boundary";
import Search from './components/Search';
import Filter from './components/Filter';
import { IconName } from "react-icons/fa";
import RegestrationForm from "./components/RegestrationForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import NoteDetail from "./components/NoteDetail";
import PageNotFound from "./components/PageNotFound";
import AuthContext from "./components/AuthContext";
import { useSnackbar } from "notistack";

function App() {
  const [initialNote, setNote] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { showBoundary } = useErrorBoundary();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar(); // Initialize useSnackbar hook

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await Axios.get(`http://localhost:3000/notes`)

        if (isMounted) {
          setNote(response.data);
          
  const displayData = Filter(response.data, searchText);
  setNote(displayData)
          setError(null);
          return response.data;
        }
      }
      catch (error) {
        setError(error)
        console.error("Error fetching DATA", error)// Handle the error here, e.g., display an error message, retry the request, etc.
        showBoundary(error);
        throw new Error("Server error");

      }
      finally {
        setIsLoading(false);
      }
    }

    fetchData()
    // .then(data=>console.log("Success ",data))
    // .catch(error=>console.error("Error ",error))

    return () => {
      isMounted = false;
    }
  }, [searchText])


// setNote({...initialNote,displayData})
  function handleSearchChange(e) {
    // console.log(e.target.value)
    { setSearchText(e.target.value) }
  }
  function handleClearSearch() {
    setSearchText("");
  };
const handleAddNote=async(newNote)=>{
  try{
    const response=await Axios.post(`http://localhost:3000/notes`,newNote);
    console.log("Note added")
    setNote([...initialNote,response.data]);
    // alert("Notes added");
    enqueueSnackbar("Notes added successfully!", {
      variant: "success",
      autoHideDuration: 2000, 
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      }
    });
  }catch(error){
    console.error("error not added"+error);
    enqueueSnackbar("Error adding Notes!", { variant: "error" }); 
    showBoundary(error)
  }
};

const handleEditNote=(note)=>{
  // alert(note)
  const updatedNote=initialNote.map((n)=>(n.id===note.id ? note:n));
  setNote(updatedNote);
  const  updateEditNote=async()=>{
    try{
      const response=await Axios.put(`http://localhost:3000/notes/${note.id}`,note)
      
      console.error("Notes edited",response.data);

      setNote(updatedNote.map((n)=>(n.id===note.id ? response.data:n)))
        alert("updated successfully");    }
       catch(error){
    console.error("error on edit submitting"+error)

      }
    };
    updateEditNote();
  }

const handleDeletNote=async(id)=>{
  try{
      const conf= window.confirm("do you want to delete ?");
      console.log(id)
      if(conf){
   const response= await Axios.delete(`http://localhost:3000/notes/${id}`);
    setNote(initialNote.filter((n)=>n.id !==id))
    alert("record deleted"+response.data)
  }
  }catch(error){
    console.error("error deleting Notes");
  }
}
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
         {isLoggedIn && ( 
          <Search onSearchText={searchText} onSearch={handleSearchChange} onClear={handleClearSearch} />
        )}
        </Header>
        <Routes >
          <Route path="/" element={<Login />} />
          {isLoggedIn &&(<>
          <Route path="/notes" element={<NoteView data={initialNote} onAddNote={handleAddNote} onDeleteNote={handleDeletNote}/>} />
          
            <Route path="/notes/:id" element={<NoteDetail onEditNote={handleEditNote} onDeleteNote={handleDeletNote}/>}/>
        
          <Route path="/register" element={<RegestrationForm/>} />
          </>  )}
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
