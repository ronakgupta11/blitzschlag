import React, { useEffect } from 'react'
import { url } from '@/constants'
import axios from 'axios'
function events() {
  useEffect(()=>{
    axios.get(`${url}/events`)
    .then(
      d => console.log(d.data)
    ).catch(e=>console.error(e))

  },[])
  return (
    <div>events</div>
  )
}

export default events