import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import {saveAs} from "file-saver"
import { url } from '@/constants';
import { Button } from 'flowbite-react';

const ExcelDownloadButton = ({name}) => {
  const [data, setData] = useState([]);

  const fetchDataAndDownloadExcel = async () => {
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint you want to call
      const response = await axios.get(`${url}/teams/${name}`);

      // Assuming the API response data is an array of objects
      const apiData = response.data;
      const data = []

      apiData.forEach(d=>{
        const obj ={...d.team,...d.teamLeader}
        data.push(obj)


      })

      // Update the component state with the API data
      setData(apiData);
      console.log(apiData)



      // Create a workbook with a worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(data);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

      XLSX.writeFile(workbook, `${name}.xlsx`, { compression: true });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Button onClick={fetchDataAndDownloadExcel}>
      Download Excel
    </Button>
  );
};

export default ExcelDownloadButton;
