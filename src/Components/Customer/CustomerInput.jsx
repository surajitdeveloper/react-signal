// React Imports
import * as React from 'react'

import { connect } from 'react-redux'

// import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import Select from '@mui/material/Select'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { states, updateValue } from '../../Config/signalVariables'
import Session from '../User/Session'
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';


import { usePDF } from 'react-to-pdf';
const CustomerInput = (props) => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  // const navigate = useNavigate()
  // ReactPDF.renderToStream(<PdfExport />);
  console.log('Customer props --->', props)



  return (
    <>
      <button onClick={() => toPDF()}>Download PDF</button>
         <div ref={targetRef}>
            <PdfExport />
         </div>
    </>
  )
}

const mapStateToProps = (state, props) => {
  // console.log("machine state --->", state)
  // console.log('props --->', props)
  return { ...state, ...props }
}

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(CustomerInput)

export const PdfExport = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <div className='form-container'>
            <p>
              {' '}
              <u>1. Customer Information </u>
            </p>
            <div className='form-row'>
              <div className='form-column'>
                <span>Company:</span>
                <span>{states.value.company}</span>
              </div>
              <div className='form-column'>
                <label>Contact Email:</label>
                <span>{states.value.contactemail}</span>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-column'>
                <label>Contact Name:</label>
                <input type='text' id='textField1' name='textField1' placeholder='Enter text here' />
              </div>
              <div className='form-column'>
                <label>Delivery Date:</label>
                <input type='date' id='textField2' name='textField2' placeholder='Enter text here' />
              </div>
            </div>
          </div>
          <button type='submit'>pdf download</button>
          <br />
          <br />

          <button type='submit'>pdf mail</button>
        </div>
      </div>
    </>
  )
}
