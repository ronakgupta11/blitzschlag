import axios from 'axios'
import React,{useEffect} from 'react'
// import { url } from '@/constants'
import Logout from '@/components/logoutBtn'
function profile() {

  // useEffect(()=>{
  //   axios.get(`${url}/user`,{
  //     headers:{
  //       "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmxpdHpzdGFydGVyLWQzNjdlIiwiYXVkIjoiYmxpdHpzdGFydGVyLWQzNjdlIiwiYXV0aF90aW1lIjoxNzAyODA1MTg4LCJ1c2VyX2lkIjoiSjVnU3JlUG1HNE9JRWZtcFA3NTNIU1YxSlhoMiIsInN1YiI6Iko1Z1NyZVBtRzRPSUVmbXBQNzUzSFNWMUpYaDIiLCJpYXQiOjE3MDI4MDUxODgsImV4cCI6MTcwMjgwODc4OCwiZW1haWwiOiJtYWlsdG9yb25ha2d1cHRhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtYWlsdG9yb25ha2d1cHRhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i29I89guUZUF9lw4b7EL3-UG3sYvQBjBWPFc6vP_KDoVGSqjD9rKFq8PlD-cOdNOOUBGuQUT47e4sO5GMG8Ecc_U7jde9E2Klh_h7tdzaN47RnU5EYd-XPNrl7bHZOzK9xw4plhoOqJ559GQv7XBHx1Nt84QfGNVrQaNmCD3p4qFrkkAUExWQXJ6l1WP8PPSdQSIWfLt1qHDzVivjPsVuGgmtDC5lzmnAbw_s4r782g_aQpYK3hi1rgOy_RBDoC-ziP0tom6VnDqVx9SfT1siPCulyV2r5HJLSq7UuptA6GM2MbDWq7XihJCCcpPJVZd-cWBZOmuKnQ4UfKKOsu7ag"
  //     }
  //   }).then(d=>console.log(d.data)).catch(e=>console.error(e))
  //     },[])

  return (
    <div>profile
      <Logout/>
    </div>
  )
}

export default profile