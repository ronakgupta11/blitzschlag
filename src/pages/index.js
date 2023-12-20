import Image from 'next/image'
import { Inter } from 'next/font/google'
import DoorAnimation from '@/components/Door'
// import Menu from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
<>
<DoorAnimation/>
Hello index
{/* <Menu/> */}
</>
  )
}
