'use client';

import { url } from '@/constants';
import axios from 'axios';
import { Table,TextInput,Label, Button } from 'flowbite-react';
import React, { useEffect ,useState} from 'react'
import { toast } from 'react-toastify';
function AdminPasses() {
    const [passes,setPasses ]= useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleVerify =(id)=>{
        axios.post(`${url}/verifyPass/${id}`).then(
            d=>{
                toast("success verify",{type:"success"})
            }
        ).catch(e=>{
            console.log(e)
        })
    }


    useEffect(()=>{
      if (!searchTerm) {
        setSearchResults(passes);
      } else {
        // Filter events based on the search term
        const filteredPasses = passes.filter((event) =>
          event.blitzId.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredPasses);
      }
    },[searchTerm,passes])


    console.log(searchResults)
    useEffect(()=>{
        const token = localStorage.getItem("BLITZID");
        // const profile = localStorage.getItem("BLITZUSER");
        axios.defaults.headers.common["Authorization"] = token;
axios.get(`${url}/passes`).then(d=>{

    setPasses(d.data)
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
          <Table.HeadCell>pass Id</Table.HeadCell>
          <Table.HeadCell>image</Table.HeadCell>
          <Table.HeadCell>status</Table.HeadCell>
          <Table.HeadCell>Verify</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
            {searchResults.map(e=>{
                return(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e.blitzId}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e.passId}
                </Table.Cell>
                <Table.Cell>
                    <a href={e.imageUrl} target='_blank' className='text-blue-400'>View
                        </a></Table.Cell>
                <Table.Cell>{e.status}</Table.Cell>
                <Table.Cell><Button onClick={()=>handleVerify(e.id)}>Verify</Button></Table.Cell>

              
              </Table.Row>

                )
            })}
          

        </Table.Body>
      </Table>
    </div>
  


    </div>
  )
}


export default AdminPasses