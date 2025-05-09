"use client";
import { useState } from "react";

// Constants
const CARD_SIZE = "w-72 h-80 lg:w-96 lg:h-96"; // Card size images aur videos k liye


//Yaha data add kr skte h jaise conference room ya Workspace ek araray object hoga
// Yaha pe humne data ko ek array me rakha h jisme heading aur items hote h
const infraData = [
  {
    heading: "Work Space 1",
    items: [
        { type: "image", src:"/infrastructure/Basim.jpg", alt: "Workspace 1" },
        { type: "image", src: "/infrastructure/Basim.jpg", alt: "Workspace 1" },
        { type: "image", src: "/infrastructure/Basim.jpg", alt: "Workspace 1" },
        { type: "image", src: "/infrastructure/Basim.jpg", alt: "Workspace 1" },
        { type: "image", src: "/infrastructure/Basim.jpg", alt: "Workspace 1" },
        { type: "image", src: "/infrastructure/Basim.jpg", alt: "Workspace 1" },
        { type: "image", src: "/infrastructure/Basim.jpg", alt: "Workspace 1" },
    ],
  },
  {
    heading: "Conference 1",
    items: [
      { type: "video", src: "/videos/conference.mp4", alt: "Conference Room" },
    ],
  },
];

// Card Component yaha pe humne ek card banaya h jo image ya video ko dikhata h
// Yaha pe humne onClick function pass kiya h jo item ko select karega jab user click karega
function InfraCard({ item, onClick }) {
    return (
      <div
        className={`bg-white cursor-pointer ${CARD_SIZE} flex justify-center items-center flex-shrink-0`}
        onClick={() => onClick(item)}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.alt}
            className="object-top w-full h-full "
          />
        ) : (
          <video className="w-full h-full" muted>
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    );
  }

// Modal Component isme humne ek modal banaya h jo image ya video ko full screen me dikhata h
// Yaha pe humne onClose function pass kiya h jo modal ko band karega jab user click karega
function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-auto "
          />
        ) : (
          <video src={item.src} controls autoPlay className="w-full rounded" />
        )}
      </div>
    </div>
  );
}

// Main Component yaha ki functional component hai jo sab kuch render karegi
// yaha pe humne useState hook ka use kiya h jo selectedItem ko track karega
function InfraImgVid() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="space-y-8">
      {infraData.map((section, index) => (
        <div className="p-5" key={index}>
          <h2 className="text-4xl lg:text-5xl text-white font-bold my-12">
            {section.heading}
          </h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {section.items.map((item, idx) => (
              <InfraCard key={idx} item={item} onClick={setSelectedItem} />
            ))}
          </div>
        </div>
      ))}
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default InfraImgVid;
