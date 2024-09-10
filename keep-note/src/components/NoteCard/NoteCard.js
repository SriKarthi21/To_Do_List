import React from 'react';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from '@mui/material/Grid2';


const NoteCard = ({ propUser ,onDeleteNote}) => {
  const {id, title, content, status } = propUser;

  function deleteData(){
    console.log(propUser.id)
    onDeleteNote(propUser.id);
    
  // const conf= window.confirm("do you want to delete")
  //   if(conf){
  //     axios.delete(`http://localhost:3000/notes/${id}`)
  //     .then((res)=>alert("record is deleted"+res),console.log("data deleted"))
  //     .catch((error)=>console.log(error))
  //   }else{console.log("canceled")}
  }
//   const [bgColor,setbgColor]=useState("lightgoldenrodyellow")
// if(status==='completed'){
//   bgColor="green"
// }else{
//   bgColor="lightgoldenrodyellow"
// }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: 2 }}>

    <Card item xs={12} sm={6} md={4} lg={3}
     sx={{
          boxShadow: "5px 5px 10px rgba(255, 255, 255, 0.5)",
          bgcolor: status === 'completed' ? 'lightseagreen' : 'lightgoldenrodyellow',
          }}>
     <CardContent >
      {/* <h3>{id}</h3> */}
      <Typography variant="h5" component="div">{title}</Typography>
      <Typography  variant="body2" color="text.secondary">{content}</Typography>
      <CardActions 
          sx={{ display:"flex",justifyContent:"center"}}> 
        <Link to={`/notes/${id}`}>  
            <IconButton color="info" >
              <FaEdit />
            </IconButton>
        </Link>
            <IconButton color="error"  onClick={deleteData}status={status}>
            <DeleteIcon />
            </IconButton>
      </CardActions >
      </CardContent>

    </Card>
  </Grid>
          
  );
};

export default NoteCard;
