import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe ("Test header content",()=>{
    test("Should render the header with children and title",()=>{
        render(<Header><h1>Welcome</h1></Header>);

        const title=screen.getAllByText(/Keep Note/i);
        expect(title[0]).toBeInTheDocument();
        expect(screen.getByText(/Welcome/i)).toBeInTheDocument();

        const keepnote = screen.getByTestId("keepnote"); 
    
        expect(keepnote).toBeInTheDocument();

    })
})