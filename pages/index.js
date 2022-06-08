import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className='h-screen  bg-gray-100 '>
      <Navbar />
      <Hero />
    </div>
);
}

 
