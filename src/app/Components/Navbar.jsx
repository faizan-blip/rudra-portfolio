"use client"

import { Box, Button, Divider, Drawer, IconButton, Stack, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { Suspense, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import styles from "@/app/styles/Navbar.module.css";
import { HiArrowLongLeft } from "react-icons/hi2";
const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme(); // Import useTheme

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}?${searchParams}`;

  const isSelected0 = url === '/portfolio?cloud=';
  const isSelected = url === '/service?';
  const isSelected1 = url === '/about?' || url === '/about/experience?';
  const isSelected2 = url === '/?';

  return (
    <>
    <Suspense>
      <Stack flexDirection='row' justifyContent={{md:"space-evenly" , xs:"start"}} alignItems={{md:"center" , xs:"start"}} bgcolor='#161513' height='auto' padding='1em 1em' borderBottom='1px solid #1d1b1a'>
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{display:{md:"none" , xs:"block" ,color:"#ff5e69"}}}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box display={{md:"block" ,xs:"none"}} component='img' src="/X.png" sx={{ width: "40px" }} />
        <Stack display={{md:"flex" ,xs:"none"}}  flexDirection='row' justifyContent='center' gap='1.7em'>
          <Link className={isSelected2 ? styles.selected1 : styles.navLink} style={{ color: "#f5f5f5", textDecoration: "none" }} href='/'>Home</Link>
          <Link className={isSelected1 ? styles.selected1 : styles.navLink} style={{ color: "#f5f5f5", textDecoration: "none" }} href='/about'>About</Link>
          <Link className={isSelected ? styles.selected1 : styles.navLink} style={{ color: "#f5f5f5", textDecoration: "none" }} href='/service'>Service</Link>
          <Link className={isSelected0 ? styles.selected1 : styles.navLink} style={{ color: "#f5f5f5", textDecoration: "none" }} href='/portfolio?cloud'>Portfolio</Link>
        </Stack>
        <ScrollLink to="connectSection" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
          <Button variant="contained" sx={{ textTransform: "none", background: "#fff !important", color: "#000", fontWeight: "700" ,display:{md:"block" , xs:"none"}}}>Connect With Me</Button>
        </ScrollLink>
      </Stack>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}  PaperProps={{sx:{background:"#161513"}}}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: 200 }

     }
        >
          {/* Image */}
          
          <Box component='img' src="/X.png" sx={{ width: "40px", marginTop: "1em" }} />
<Divider sx={{borderColor:"1e1e1e" , width:"100%" , marginTop:"1em"}}/>
          {/* Connect Button */}
         

          {/* Links */}
          <Link onClick={toggleDrawer(false)} style={{ color: "#f5f5f5", textDecoration: "none", padding: "1em"  , marginTop:"1em"}} href='/'>Home</Link>
          <Link onClick={toggleDrawer(false)} style={{ color: "#f5f5f5", textDecoration: "none", padding: "1em" }} href='/about'>About</Link>
          <Link onClick={toggleDrawer(false)} style={{ color: "#f5f5f5", textDecoration: "none", padding: "1em" }} href='/service'>Service</Link>
          <Link onClick={toggleDrawer(false)} style={{ color: "#f5f5f5", textDecoration: "none", padding: "1em" }} href='/portfolio?cloud'>Portfolio</Link>
          <ScrollLink to="connectSection" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
          <Button onClick={toggleDrawer(false)} variant="contained" sx={{ textTransform: "none", background: "#fff !important", color: "#000", fontWeight: "700", marginTop: "1.2em", display: { md: 'none', xs: 'block' } }}>Connect With Me</Button>
     </ScrollLink> 
        </Stack>
      </Drawer>
      </Suspense>
    </>
  );
}

export default Navbar;
