import React from "react";
import { render, screen } from "@testing-library/react";
import NoteList from "./NoteList";

describe("Test Note List content",()=>{
    test("should render a list of Note Cards",()=>{
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
      notes.forEach((note) => {
        const card = screen.getByText(new RegExp(note.title, 'i')); // Case-insensitive title match
        expect(card).toBeInTheDocument();
      });

    })
})