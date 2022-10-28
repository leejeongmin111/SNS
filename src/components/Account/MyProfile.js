import ProfileIcon from "../JobSns/ProfileIcon";
import Profile from "../JobSns/Profile";
import Header from "../JobSns/Header";
import Footer from "../JobSns/Footer";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../styles/Account/Myprofile.scss'
import JobIcon from "../../Icons/JobProfile";
import LikeNone from "../../Icons/LikeNone";
import Reply from "../../Icons/Reply";
import SaveNone from "../../Icons/SaveNone";
import SnsProfile from "../../Icons/SnsProfile";
import TagIcon from "../../Icons/TagIcon";


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MyProfile(){
    return(
        <>
            <Header/>
            <React.Fragment>
              <Container>
                <Box sx={{ bgcolor: 'white', height: '100vh', marginTop :10}}>
                  <br></br>
                  <Box sx={{marginLeft:4}}>
                  <Profile></Profile>
                  </Box>
                  <hr></hr>
                  <Box sx={{marginLeft:60}}>
                    <SnsProfile/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <JobIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <SaveNone/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TagIcon/>
                  </Box>
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                    <img src={itemData[1].img} className="imgs"></img>
                    </Grid>
                    ))}
                  </Grid>
                </Box>
              </Container>
            </React.Fragment>
            <Footer/>
        </>
    )
}

export default MyProfile;