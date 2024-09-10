import NoteCard from "../NoteCard/NoteCard";
import Grid from '@mui/material/Grid2';

function NoteList({data,onDeleteNote}){
    return(
        
           <Grid item xs={12} 
           sx={{display:"grid", justifyContent:"space-between",marginLeft:"auto",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))"      }} >  
      {      data.map((items)=>(<NoteCard onDeleteNote={onDeleteNote}
             key={items.id} propUser={items}/>)

            )}
          </Grid>   
    )
}

export default NoteList;