'use client';

import { useState } from 'react';

// Card data
const cards = [
    {
        title: 'Personalized Learning Path',
        description: (
            <>
                Our AI-driven tools create a <span className="text-white font-medium">customized learning journey</span>, <span className="text-purple-400">recommending relevant courses, projects, and resources</span> based on your goals and progress.
            </>
        ),
        image: '/chat-ai.png',
        highlight: 'Chat AI',
    },
    {
        title: 'Real-Time Content Recommendations',
        description: (
            <>
                Get <span className="text-white font-medium">smart suggestions</span> <span className="text-purple-400">tailored to your interests</span>, keeping you on track and ensuring you always have the best resources at your fingertips.
            </>
        ),
        image: '/recommendation.png',
    },
    {
        title: 'Track Progress with Insights',
        description: (
            <>
                Stay motivated with <span className="text-white font-medium">data-driven insights</span> that show your growth and guide your next steps, <span className="text-purple-400">making your learning experience more efficient</span>.
            </>
        ),
        image: '/insights.png',
    },
    {
        title: 'Industry-Ready Tools',
        description: (
            <>
                Access the latest <span className="text-white font-medium">AI-powered tools</span>, <span className="text-purple-400">equipping you with the skills</span> that are shaping the future of work.
            </>
        ),
        image: '/tools.png',
    },
];

export default function AIToolsManagement() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextCard = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="bg-[#0f0f1a] min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <h1 className="text-4xl font-bold text-white mb-2 mt-6">
                        AI Tools Management <span className="absolute text-purple-300 text-sm top-0 right-1/3">++</span>
                    </h1>
                    <p className="text-4xl text-purple-400 font-semibold relative">
                        <span className="absolute text-purple-300 text-sm -left-4 top-1">++</span>
                        A Smarter Way to Learn <span className="text-pink-500">!</span>
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="relative group">
                            {/* Card Container */}
                            <div className="relative">
                                {/* Card Content */}
                                <div className="bg-[#1a1a2e] relative z-10 h-[400px] overflow-hidden border-2 border-purple-500
                  [clip-path:polygon(0_0,100%_0,100%_100%,0_92%)] transition-all duration-300">

                                    {/* Image Section */}
                                    <div className="h-[45%] overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 h-[55%] flex flex-col border-2 border-purple-500">
                                        {index === 0 && (
                                            <div className="text-purple-400 text-sm font-semibold mb-2">
                                                
                                            </div>
                                        )}
                                        <h3 className="text-white text-xl font-bold mb-3 text-center">{card.title}</h3>
                                        <div className="text-sm text-gray-300 leading-relaxed text-center">
                                            {card.description}
                                        </div>
                                    </div>
                                </div>

                                {/* Improved Purple Slanted Bottom Border */}
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-transparent">
                                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                                        <polygon
                                            points="0,0 100,0 100,50 0,3.5"  // Modified points for asymmetric slant
                                            className="fill-purple-500"
                                        />
                                    </svg>
                                </div>

                                {/* Improved Card Shadow with Adjusted Slant */}
                                <div className="absolute w-full h-full bottom-0 left-0 -z-10 transform translate-y-2">
                                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                                        <polygon
                                            points="0,0 100,0 100,50 0,3"  // Matches border shape
                                            className="fill-purple-600/20"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <div className="relative">
                        {/* Purple Border Effect */}
                        <div className="absolute inset-0 bg-purple-600 rounded-lg transform rotate-0 z-0"></div>

                        {/* Card Content */}
                        <div className="bg-[#1a1a2e] relative z-10 h-[400px] overflow-hidden border-2 border-purple-500 rounded-lg
              [clip-path:polygon(0_0,100%_0,100%_100%,0_92%)]">

                            {/* Image Section */}
                            <div className="h-[45%] overflow-hidden">
                                <img
                                    src={cards[activeIndex].image}
                                    alt={cards[activeIndex].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-5 h-[55%] flex flex-col">
                                {activeIndex === 0 && (
                                    <div className="text-purple-400 text-sm font-semibold mb-2">
                                        Chat AI
                                    </div>
                                )}
                                <h3 className="text-white text-xl font-bold mb-3 text-center">{cards[activeIndex].title}</h3>
                                <div className="text-sm text-gray-300 leading-relaxed text-center">
                                    {cards[activeIndex].description}
                                </div>
                            </div>
                        </div>

                        {/* Purple Slanted Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-[60px] overflow-hidden z-20
                          [clip-path:polygon(0_10%,100%_60%,100%_100%,0_100%)]">
                            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-purple-500"></div>
                        </div>

                        {/* Card Shadow with Slant */}
                        <div className="absolute w-full h-full bottom-0 left-0 
                          [clip-path:polygon(0_0,100%_0,100%_100%,0_92%)] 
                          bg-purple-600/20 -z-10 transform translate-y-1"></div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={prevCard}
                                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                            >
                                ◀
                            </button>
                            <button
                                onClick={nextCard}
                                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}