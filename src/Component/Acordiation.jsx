import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


import book from "../assets/pdfs/Harry_Parker.pdf"
import intro from "../assets/pdfs/intro.pdf"
import scada from "../assets/pdfs/scada.pdf"
import nodeRed from "../assets/pdfs/nodeRed.pdf"
import hmi from "../assets/pdfs/hmi.pdf"
import communication from "../assets/pdfs/communication .pdf"
import Db from "../assets/pdfs/Db.pdf"


export default function AccordionUsage() {
  return (
    <>
      <div className='background'>
        <p className='my-2.5 text-2xl lg:text-4xl font-bold capitalize mx-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'></p>
        <div className=' w-[90%] min-h-[100vh] m-auto my-2.5'>
          <div>






            <Accordion style={{ backgroundColor: "black", border: " solid white 1px" }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ color: "white" }} component="span">Our Book </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }} >
                <iframe
                  src={book}
                  style={{ width: "100%", height: "850px" }}
                  type="application/pdf"
                  allow="autoplay">
                </iframe>
              </AccordionDetails>
            </Accordion>



            <Accordion style={{ backgroundColor: "black", border: " solid white 1px" }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ color: "white" }} component="span">Introduction </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }} >
                <iframe
                  src={intro}
                  style={{ width: "100%", height: "500px" }}
                  type="application/pdf"
                  allow="autoplay">
                </iframe>
              </AccordionDetails>
            </Accordion>



            <Accordion style={{ backgroundColor: "black", border: " solid white 1px" }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ color: "white" }} component="span">HMI</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }} >
                <iframe
                  src={hmi}
                  style={{ width: "100%", height: "500px" }}
                  type="application/pdf"
                  allow="autoplay">
                </iframe>
              </AccordionDetails>
            </Accordion>



            <Accordion style={{ backgroundColor: "black", border: " solid white 1px" }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ color: "white" }} component="span">Node Red</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }} >
                <iframe
                  src={nodeRed}
                  style={{ width: "100%", height: "500px" }}
                  type="application/pdf"
                  allow="autoplay">
                </iframe>
              </AccordionDetails>
            </Accordion>



            <Accordion style={{ backgroundColor: "black", border: " solid white 1px" }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ color: "white" }} component="span">communication </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }} >
                <iframe
                  src={communication}
                  style={{ width: "100%", height: "500px" }}
                  type="application/pdf"
                  allow="autoplay">
                </iframe>
              </AccordionDetails>
            </Accordion>


            <Accordion style={{ backgroundColor: "black", border: " solid white 1px" }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ color: "white" }} component="span">Scada</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }} >
                <iframe
                  src={scada}
                  style={{ width: "100%", height: "500px" }}
                  type="application/pdf"
                  allow="autoplay">
                </iframe>
              </AccordionDetails>
            </Accordion>


            <Accordion style={{ backgroundColor: "black", border: " solid white 1px" }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography style={{ color: "white" }} component="span">Data Base </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ color: "white" }} >
                <iframe
                  src={Db}
                  style={{ width: "100%", height: "500px" }}
                  type="application/pdf"
                  allow="autoplay">
                </iframe>
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
