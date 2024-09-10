import styles from  "styled-components";
import { Container, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {useTheme} from "@mui/material/styles";
function Footer(){
  
  const theme = useTheme();

    return(
        <>
          
        <Container
      maxWidth="fixed"
      sx={{
        bgcolor:theme.palette.secondary.main,
        color: "whitesmoke",
        padding: "20px 0",
        alignItems:"center",
        display:"inline-flex",
        justifyContent:"space-between"
      }}
    >        <Typography variant="body2" component="p" sx={{textAlign:"center"}}>
          &copy; 2024 Keep Notes. All rights reserved.
        </Typography>
        <div>
 
     <IconButton aria-label="facebook">
        <Link
          sx={{ 
            color: theme.palette.primary.main,
           }}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon data-testid="facebook-icon" />
        </Link>
      </IconButton>
      <IconButton aria-label="instagram">
        <Link
          sx={{ color: theme.palette.primary.main  }}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon data-testid="instagram-icon" />
        </Link>
      </IconButton>
      <IconButton aria-label="linkedin">
        <Link
          sx={{ color: theme.palette.primary.main  }}
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon data-testid="linkedin-icon" />
        </Link>
      </IconButton>
      </div>
      </Container>

        </>
    )
}

export default Footer;