import NoteList from'../NoteList/NoteList';
import styled from 'styled-components';
import AddNoteForm from '../AddNoteForm';
const NoteViewContainer=styled.div`
    background-color: rgb(38, 40, 40);
    color :#A9A9A9;
    text-align: center;
    min-height: 400px;
    
    
`;

function NoteView({data,onAddNote,onDeleteNote}){
    // console.log(data)
    //  console.log("NoteView"+data)

    return(
        <>
        
        <NoteViewContainer>
          <h3> Checklist Chronicles: Conquering Tasks One Tick at a Time</h3>
        <AddNoteForm onAddNote={onAddNote}/>
           <NoteList  data={data} onDeleteNote={onDeleteNote}/>
        </NoteViewContainer>
        
        </>
    )
}

export default NoteView;