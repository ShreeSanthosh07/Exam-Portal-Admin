import React from "react";
import { Heading } from "../component/header.js";
import { Grid, Paper, Typography } from "@mui/material";
import Footer from "../component/footer.js";

const background123 = {backgroundImage:'url(https://wallpaperset.com/w/full/e/7/f/16452.jpg)',
                        height:'700px',backgroundRepeat:'no-repeat', backgroundSize:'cover'}
const paperStyle = {padding:'30px 20px', width:'500px',marginTop:'120px', backgroundColor:'#f6b1fa', height:'400px', borderRadius:'10px', border:'none', marginLeft:'auto', marginRight:'40px'}


function landing() {
    return (
        
        <div style={background123}>
            <Heading />
            <Grid container spacing={1.5} sx={{marginTop:'60px'}}>
                    <Grid item xs={6} md={6} align='center'sx={{marginTop:'50px'}}>
                        <Typography variant="h2" sx={{fontSize:'60px', fontWeight:'800', color:'#3e2359'}}>ONLINE EXAM</Typography><br/>
                        <Typography variant="p"  sx={{color:'#fcfcfa', fontSize:'1.5em', fontWeight:'normal', lineHeight:'40px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography><br/>
                        {/* <Button variant="contained" sx={{marginTop:'30px', padding:'15px', backgroundColor:'red'}}>Learn More</Button> */}
                    </Grid>
                <Paper style={paperStyle}>
                    <Grid item  sx={{ 
                    backgroundImage: 'url(https://img.freepik.com/free-photo/final-exam-results-test-reading-books-words-concept_53876-123721.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px'
                    
                    }}/>
                </Paper>    
            </Grid>
            <Footer/>
        </div>
        
        
    )
}

export default landing;