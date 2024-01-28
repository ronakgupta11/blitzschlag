import React from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { url } from '@/constants';
import { Button } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { selectEventsData } from '@/redux/reducers/dataReducer';

const DownloadEventsButton = () => {
  const events = useSelector(selectEventsData);
  console.log("events",events)

  const fetchDataAndDownloadExcel = async () => {
    try {
      const workbook = XLSX.utils.book_new();

      // Use for...of loop with await to ensure sequential API calls
      for (const event of events) {
        const response = await axios.get(`${url}/teams/${event.name}`);
        const apiData = response.data;
        const data = [];

        apiData.forEach((d) => {
          const obj = { ...d.team, ...d.teamLeader };
          data.push(obj);
        });

        const worksheet = XLSX.utils.json_to_sheet(data);

        // Generate a unique worksheet name
        const worksheetName = generateUniqueWorksheetName(event.name);
        XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);
      }

      // Download the workbook after all API calls are completed
      XLSX.writeFile(workbook, `events.xlsx`, { compression: true });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to generate a unique worksheet name
  const generateUniqueWorksheetName = (eventName) => {
    // Add the event name
    let uniqueName = eventName;

    // Add some random characters to make it unique
    const randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomSuffix = Array.from({ length: 5 }, () => randomChars[Math.floor(Math.random() * randomChars.length)]).join('');

    // Combine the event name with random characters
    uniqueName += `_${randomSuffix}`;

    return uniqueName;
  };

  return (
    <Button onClick={fetchDataAndDownloadExcel}>
      Download All Events
    </Button>
  );
};

export default DownloadEventsButton;
