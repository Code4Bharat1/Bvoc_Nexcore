'use client';
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Welcome from '@/components/Hub/Welcome';
import AdmissionCard from '@/components/Hub/AdmissionCard';
import AboutUs from '@/components/Hub/AboutUs';
import FiveCards from '@/components/Hub/FiveCards';
import CareerOpportunities from '@/components/Hub/CareerOpportunities';
import InDemandCareer from '@/components/Hub/InDemandCareer';
import CareerPath from '@/components/Hub/CareerPath';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16"> {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
        <Welcome/>
        <AdmissionCard/>
        <AboutUs/>
        <FiveCards/>
        <CareerOpportunities/>
        <InDemandCareer/>
        <CareerPath/>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
