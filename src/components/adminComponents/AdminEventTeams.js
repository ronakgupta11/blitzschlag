
"use client";

import { Table, TextInput, Label, Button } from "flowbite-react";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { url } from "@/constants";
function AdminEventTeams() {


  const search = async()=>{
    axios.get(`${url}/teams/${name}`).then(d=>setData(d.data))

  }
  const handleDelete = (id) => {
    axios
      .post(`${url}/deleteEvent/${id}`)
      .then((d) => {
        toast("deleted", { type: "success" });
      })
      .catch((err) => console.log(err));
  };
const [name,setName] = useState("")
const [data,setData] = useState(null)
  return (
    <div>
            <div className="w-60 m-8">
        <div className="mb-2 block">
          <Label htmlFor="base" value="Search" />
        </div>
        <TextInput
          id="base"
          type="text"
          sizing="md"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button onClick={search}>Search</Button>

      
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Sr No.</Table.HeadCell>
            <Table.HeadCell>Team Name</Table.HeadCell>
            {/* <Table.HeadCell>desc</Table.HeadCell> */}
            <Table.HeadCell>Team Id</Table.HeadCell>
            <Table.HeadCell>total Members</Table.HeadCell>
            <Table.HeadCell>MembersID</Table.HeadCell>
            <Table.HeadCell>status</Table.HeadCell>
            <Table.HeadCell>Payments</Table.HeadCell>
            <Table.HeadCell>verify</Table.HeadCell>
            <Table.HeadCell>delete</Table.HeadCell>
            <Table.HeadCell>edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.map((e,k) => {
              // console.log(e);
              
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {k+1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {e?.teamName}
                  </Table.Cell>
                  <Table.Cell>{e?.teamId}</Table.Cell>
                  <Table.Cell>{e?.members?.length}</Table.Cell>
                  <Table.Cell>{ ""}</Table.Cell>
                  <Table.Cell>{e?.status || ""}</Table.Cell>
                  <Table.Cell>{e?.payments || ""}</Table.Cell>

                  <Table.Cell>
                    <Button onClick={() => handleDelete(e?.teamId)}>Verify</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => handleDelete(e?.teamId)}>Delete</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => handleDelete(e?.teamId)}>Edit</Button>
                  </Table.Cell>
                  {/* <Table.Cell className='h-24 w-24 overflow-auto'>{e?.desc.split(0,5)}</Table.Cell> */}
                  {/* <Table.Cell className='h-24 w-24 overflow-auto'>{e.oneliner || ""}</Table.Cell> */}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default AdminEventTeams