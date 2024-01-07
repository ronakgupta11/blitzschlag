'use client';

import { url } from '@/constants';
import axios from 'axios';
import { Table,TextInput,Label } from 'flowbite-react';
import React, { useEffect ,useState} from 'react'

function AdminUsers() {

    const [ca,setCa ]= useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(()=>{
      if (!searchTerm) {
        setSearchResults(ca);
      } else {
        // Filter events based on the search term
        const filteredEvents = ca.filter((event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredEvents);
      }
    },[searchTerm,ca])


    useEffect(()=>{
        const token = localStorage.getItem("BLITZID");
        // const profile = localStorage.getItem("BLITZUSER");
        axios.defaults.headers.common["Authorization"] = token;
axios.get(`${url}/getUsers`).then(d=>{
console.log(d.data)
    setCa(d.data)
}).catch(err=>console.log(err))
    },[])
  return (
    <div>
        

<div className='w-60 m-8'>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Search" />
        </div>
        <TextInput id="base" type="text" sizing="md" onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>

    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Blitz ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>college</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>referal</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
            {searchResults.map(e=>{
                return(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e.blitzId}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e.name}
                </Table.Cell>
                <Table.Cell>{e.email}</Table.Cell>
                <Table.Cell>{e.college}</Table.Cell>
                <Table.Cell>{e.phone || ""}</Table.Cell>
                <Table.Cell>{e.referal|| ""}</Table.Cell>
              
              </Table.Row>

                )
            })}
          

        </Table.Body>
      </Table>
    </div>
  


    </div>
  )
}

export default AdminUsers