
"use client";

import { Table, TextInput, Label, Button } from "flowbite-react";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { url } from "@/constants";
import {toast} from "react-toastify"
import team from "@/pages/team";
function AdminEventTeams() {


  const search = async()=>{
    axios.get(`${url}/teams/${name}`).then(d=>setData(d.data))

  }
  const handleDelete = (id) => {
    axios
      .post(`${url}/deleteTeam/${id}`)
      .then((d) => {
        toast("deleted", { type: "success" });
      })
      .catch((err) => console.log(err));
  };

  const handleVerify = (id) => {
    axios
      .post(`${url}/verifyTeam/${id}`)
      .then((d) => {
        toast("verified", { type: "success" });
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
            <Table.HeadCell>Team Id</Table.HeadCell>
            <Table.HeadCell>College</Table.HeadCell>
            <Table.HeadCell>Team Leader Name</Table.HeadCell>
            <Table.HeadCell>Phone No</Table.HeadCell>
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
              const team  = e?.team
              const user = e?.teamLeader
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {k+1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {team?.teamName}
                  </Table.Cell>
                  <Table.Cell>{team?.teamId}</Table.Cell>
                  <Table.Cell>{user?.college}</Table.Cell>
                  <Table.Cell>{user?.name}</Table.Cell>
                  <Table.Cell>{user?.phone}</Table.Cell>
                  <Table.Cell>{team?.members?.length}</Table.Cell>
                  <Table.Cell><ul className="flex flex-col space-y-2">
{team?.members?.map((p,k)=>{
 return ( <li className="flex space-x-2" key={k}>
  <p className="w-40">
    {p} :
    </p>
    </li>)
})}
                    </ul>
                  </Table.Cell>
                  <Table.Cell>{team?.teamStatus || ""}</Table.Cell>
                  <Table.Cell>{
                    <ul className="flex flex-col space-y-2">
                   
{team?.payments?.map((p,k)=>{
 return ( <li className="flex space-x-2" key={k}>
  <p className="w-40">
    {p?.blitzId} :
    </p>
     <a href={p?.imageUrl} target="_blank" className="text-blue-400">view</a></li>)
})}
                    </ul>
                  
                  }</Table.Cell>

                  <Table.Cell>
                    <Button onClick={() => handleVerify(team?.teamId)}>Verify</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => handleDelete(team?.teamId)}>Delete</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => handleDelete(team?.teamId)}>Edit</Button>
                  </Table.Cell>
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