import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';


const SheetCreator = ({formid}) => {

    const [responseList, setResponseList] = useState([]);
    
    const createSingleResponse = response => {
        const obj = {};
        for(let ques of response.data){
            obj[ques.name] = ques.answer;
        }
        return obj;
    }

  const fetchResponses = async () => {
    const res = await fetch(
      `http://localhost:5000/response/getbyform/${formid}`
    );
    const data = await res.json();
    console.log(data);
    const dataToConvert = data.slice(1).map(createSingleResponse);
    const fields = Object.keys(dataToConvert[0])
    return [dataToConvert, fields];
  };

  const convertToCSV = (data, fields) => {
    return Papa.unparse(data, fields);
  }

  const downloadCSV = async () => {

    const [data, fields] = await fetchResponses();
    const csvData = convertToCSV(data, fields);
    

    const downloadLink = document.createElement('a');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    downloadLink.setAttribute('href', url);
    downloadLink.setAttribute('download', 'data.csv');
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

  }


  return (
    <div>
        <Button onClick={downloadCSV} color='primary' variant='contained'> <Download /> Download CSV File</Button>
    </div>
  )
}

export default SheetCreator