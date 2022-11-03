import Header from "./Notice/NoticeHeader";
import Footer from "./Notice/NoticeFooter";
import Sidebar from "./Notice/NoticeSidebar";
import "../styles/Notice.scss"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// 각 아이템 설정
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Notice(){
    return(
        <>
        <main>
        <div className="blank"></div>
        <div className="My_container">
        <Header />

            {/* 내용 작성 */}
            
            <Box sx={{ width: '80%' }} className="notice_box">
                <Stack spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>



        <Footer />
        </div>
        <div className="box">
            <Sidebar />
        </div>
        </main>
        </>
    );
}

export default Notice;