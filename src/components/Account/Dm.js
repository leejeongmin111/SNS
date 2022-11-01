// import * as React from 'react';
// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { FixedSizeList } from 'react-window';
// import Header from "../JobSns/Header"
// import Footer from "../JobSns/Footer"
// import '../../styles/Account/Dm.scss'


// function User_id(props) {
//   const { index, style } = props;

//   return (
//     <ListItem style={style} key={index} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// }

// export default function Dm() {
//   return (
//     <>
//     <Header/>
//     <main className='Dm_main'>
//     <Box
//       sx={{ width: '100%', height: 830, maxWidth: 200, bgcolor: 'background.paper' }}
//       className='Dm_person'
//     >
//     <Box className='Dm_user_name'>My name</Box>
//       <FixedSizeList
//         height={750}
//         width={200}
//         itemSize={46}
//         itemCount={20}
//         overscanCount={5}
//       >
//         {User_id}
//       </FixedSizeList>
//     </Box>

//     <Box
//       sx={{ width: '100%', height: 830, maxWidth: 440, bgcolor: 'background.paper' }}
//       className='Dm_comment'
//     >
//     <Box className='Dm_user_name'>User name</Box>
//       <FixedSizeList
//         height={750}
//         width={440}
//         itemSize={46}
//         itemCount={50}
//         overscanCount={5}
//       >
//         {User_id}
//       </FixedSizeList>
//     </Box>

//     </main>
//     <Footer/>
//     </>
//   );
// }
