import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function Project() {
  return (
    <>
        <div>
      <Accordion style={{ backgroundColor:"black"  }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >


          {/* https://drive.google.com/file/d/1DXyL0yutMAoqYI24gjQuMgXTR9OLfiPg/view?usp=drive_link  */}

          <Typography style={{ color:"white" }} component="span">Chapter  1</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color:"white" }} >


          <embed src='../assets/pdfs/Harry_Parker.pdf' style={{width:"100%" , height:"900px"}} />

        </AccordionDetails>
      </Accordion>

    
    </div>
    </>
  )
}
