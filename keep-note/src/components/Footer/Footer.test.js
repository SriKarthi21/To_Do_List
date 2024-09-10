import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";


describe("Test footer content",()=>{
    test("Should render footer with copyright details​",()=>{
        render(<Footer />);

        const footer=screen.getByRole("contentinfo");
        const socialIcons=screen.getAllByRole("link");
        const copyrightText = screen.getByText(/© 2024 Keep Notes\. All rights reserved\./i);

        expect(footer).toBeInTheDocument();
        expect(socialIcons).toHaveLength(3);
        expect(copyrightText).toBeInTheDocument();

    });

    test("Should verify social media URL links​", () => {
        render(<Footer />);
    
        const socialLinks = screen.getAllByRole("link");
    
        expect(socialLinks[0].href).toBe("https://facebook.com/");
        expect(socialLinks[1].href).toBe("https://instagram.com/");
        expect(socialLinks[2].href).toBe("https://linkedin.com/"); 
      });

      test("Should check for specific social media icons", () => {
        render(<Footer />);
    
        const facebookIcon = screen.getByTestId("facebook-icon"); 
        const instagramIcon = screen.getByTestId("instagram-icon"); 
    
        expect(facebookIcon).toBeInTheDocument();
        expect(instagramIcon).toBeInTheDocument();
      });
    
    
})