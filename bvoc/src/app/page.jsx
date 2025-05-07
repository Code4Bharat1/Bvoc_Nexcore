'use client';
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Welcome from '@/components/Hub/Welcome';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
        <Welcome/>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
