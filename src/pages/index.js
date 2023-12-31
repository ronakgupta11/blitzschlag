import Image from 'next/image'
import { Inter } from 'next/font/google'
import DoorAnimation from '@/components/Door'
import Sidebar from '@/components/Sidebar'
// import Menu from '@/components/Menu'
import Model from './model'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
    <>
  <div>
    <Model/>

  </div>
    </>

  )
}
