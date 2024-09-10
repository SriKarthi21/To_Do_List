import React from "react";
import { render, screen } from "@testing-library/react";
import NoteCard from "./NoteCard";

describe("Test Note card content",()=>{
    test("Should render card title , content",()=>{
       const card= { id: 1, title: "Self-read", content:"Deep dive the first session, execute demo codes and check for expected output",
        status: "completed"
          }
        render(<NoteCard propUser={card}/>);
        const title = screen.getByText("Self-read");
        const content = screen.getByText("Deep dive the first session, execute demo codes and check for expected output")
        expect(title).toBeInTheDocument();
        expect(content).toBeInTheDocument(); 
    })
})
