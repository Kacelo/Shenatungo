"use client";
import Navbar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import HorizontalRule from "@/components/HorizontalRule";

export default function Home() {
  return (
  <>
  <Hero/>
  <Intro />
  <HorizontalRule />
  <Services />
  </>
  )
}
