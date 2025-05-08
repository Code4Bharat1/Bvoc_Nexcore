'use client';
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Welcome from '@/components/Hub/Welcome';
import AdmissionCard from '@/components/Hub/AdmissionCard';
import AboutUs from '@/components/Hub/AboutUs';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
        <Welcome/>
        <AdmissionCard/>
        <AboutUs/>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
