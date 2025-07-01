import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <>
    <div className='background'>
     <p className='my-2.5 text-2xl lg:text-4xl font-bold capitalize mx-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>summary for each chapter</p>
     <div className=' w-[90%] min-h-[100vh] m-auto my-2.5'>
             <div>

      <Accordion style={{ backgroundColor:"black" , border:" solid white 1px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color:"white" }} component="span">Chapter 1</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color:"white" }} >
         <p className="text-pink-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          </AccordionDetails>
      </Accordion>

 <Accordion style={{ backgroundColor:"black" , border:" solid white 1px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color:"white" }} component="span">Chapter 2</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color:"white" }} >
          <p className="text-pink-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          </AccordionDetails>
      </Accordion>


       <Accordion style={{ backgroundColor:"black" , border:" solid white 1px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color:"white" }} component="span">Chapter 3</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color:"white" }} >
         <p className="text-pink-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          </AccordionDetails>
      </Accordion>


       <Accordion style={{ backgroundColor:"black" , border:" solid white 1px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color:"white" }} component="span">Chapter 4</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color:"white" }} >
         <p className="text-pink-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          </AccordionDetails>
      </Accordion>


       <Accordion style={{ backgroundColor:"black" , border:" solid white 1px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color:"white" }} component="span">Chapter 5</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color:"white" }} >
         <p className="text-pink-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
           </AccordionDetails>
      </Accordion>


       <Accordion style={{ backgroundColor:"black" , border:" solid white 1px"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color:"white" }} component="span">Chapter 6</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ color:"" }} >
          <p className="text-pink-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          
        </AccordionDetails>
      </Accordion>
  
    </div>
     </div>
    

   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
    </div>
    </>
   
  );
}
