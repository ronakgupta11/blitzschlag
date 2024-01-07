'use client';

import { Table } from 'flowbite-react';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectEventsData } from '@/redux/reducers/dataReducer'
import AddEventModal from './AddEventModal';

function AdminEvents() {

    const events = useSelector(selectEventsData)
  return (
    <div>
        
<div className='h-48 mx-8 text-black '>
    {/* <p>Add Events</p> */}
    <AddEventModal/>
</div>


    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Event Name</Table.HeadCell>
          {/* <Table.HeadCell>desc</Table.HeadCell> */}
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prize</Table.HeadCell>
          <Table.HeadCell>Venue</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Time</Table.HeadCell>
          <Table.HeadCell>banner</Table.HeadCell>
          <Table.HeadCell>poster</Table.HeadCell>
          <Table.HeadCell>rulebook</Table.HeadCell>
          <Table.HeadCell>teams registered</Table.HeadCell>
          <Table.HeadCell>
          Edit
          </Table.HeadCell>
          <Table.HeadCell>
         Delete
          </Table.HeadCell>
          <Table.HeadCell>desc</Table.HeadCell>
          <Table.HeadCell>one liner</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
            {events.map(e=>{
                const len = e.registeredTeams
                return(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e.name}
                </Table.Cell>
                <Table.Cell>{e.category}</Table.Cell>
                <Table.Cell>{e.prize}</Table.Cell>
                <Table.Cell>{e.venue || ""}</Table.Cell>
                <Table.Cell>{e.date || ""}</Table.Cell>
                <Table.Cell>{e.time || ""}</Table.Cell>
                <Table.Cell>
                <a href={e.banner} target='_blank' className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    View
                  </a>
                    </Table.Cell>
                    <Table.Cell>
                <a href={e.image} target='_blank' className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    View
                  </a>
                    </Table.Cell>
                    <Table.Cell>
                <a href={e.rulebook} target='_blank' className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    View
                  </a>
                    </Table.Cell>
{/* {console.log(len?.length)} */}
                <Table.Cell>{len?.length || 0}</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Delete
                  </a>
                </Table.Cell>
                <Table.Cell className='h-24 w-24 overflow-auto'>{e.desc}</Table.Cell>
                <Table.Cell className='h-24 w-24 overflow-auto'>{e.oneliner || ""}</Table.Cell>

              </Table.Row>

                )
            })}
          

        </Table.Body>
      </Table>
    </div>
  


    </div>
  )
}

export default AdminEvents