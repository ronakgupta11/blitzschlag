import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { url } from '@/constants'
function eventPage() {
    const router = useRouter()

    const id = router.query.id
    console.log(id)

    useEffect(()=>{
        axios.get(`${url}/events/${id}`).then(
            d => console.log(d.data)
          ).catch(e=>console.error(e))
        },[id])
  return (
    <div>eventPage</div>
  )
}

export default eventPage