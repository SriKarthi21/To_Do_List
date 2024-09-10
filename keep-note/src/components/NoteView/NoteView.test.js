import React from "react";
import { render, screen } from "@testing-library/react";
import NoteView from "./NoteView";
import NoteList from "../NoteList/NoteList";

describe("Test Note  View ",()=>{
    test("Should render `title` and `NoteView` component",()=>{
        const notes=[ {
            id: 1,
            title: "Self-read",
            content: "Deep dive the first session, execute demo codes and check for expected output",
            status: "completed"
          },
          {
            id: 2,
            title: "Practice-exercise: HTML",
            content: "Develop a responsive web page using Bootstrap. Should use Bootstrap components,forms, grid layout and utilities to make the web page more asethetic. ",
            status: "yet-to-start"
          },
          {
            id: 3,
            title: "Assessment: Quiz",
            content: "Activity to be completed to increase confidence",
            status: "completed"
          },
          {
            id: 4,
            title: "Refactor practice exercise",
            content: "Code needs to be well-indented",
            status: "yet-to-start"
          },
          {
            id: 5,
            title: "Submit to RAAS",
            content: "Push the code to git and submit for auto evaluation",
            status: "yet-to-start"
          }
      ] 
        render(<NoteView data={notes}/>);
        const title = screen.getByText("Self-read");
        expect(title).toBeInTheDocument();

     


    }), 
      test("Should pass notes prop to NoteList component",()=>{
        const notes=[ {
            id: 1,
            title: "Self-read",
            content: "Deep dive the first session, execute demo codes and check for expected output",
            status: "completed"
          },
          {
            id: 2,
            title: "Practice-exercise: HTML",
            content: "Develop a responsive web page using Bootstrap. Should use Bootstrap components,forms, grid layout and utilities to make the web page more asethetic. ",
            status: "yet-to-start"
          },
          {
            id: 3,
            title: "Assessment: Quiz",
            content: "Activity to be completed to increase confidence",
            status: "completed"
          },
          {
            id: 4,
            title: "Refactor practice exercise",
            content: "Code needs to be well-indented",
            status: "yet-to-start"
          },
          {
            id: 5,
            title: "Submit to RAAS",
            content: "Push the code to git and submit for auto evaluation",
            status: "yet-to-start"
          }
      ] 
        render(<NoteList data={notes}/>);
  
    }
)
})