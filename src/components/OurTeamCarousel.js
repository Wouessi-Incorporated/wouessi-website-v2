import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const OurTeamCarousel = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample data if no cards provided
  const sampleCards = [
    {
      title: "Rodrigue Fouafou",
      subtitle: "CEO",
      image: "/api/placeholder/300/400",
      bio: "Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.",
      linkedin: "#"
    },
    {
      title: "Jane Smith",
      subtitle: "CTO",
      image: "/api/placeholder/300/400",
      bio: "Leading our technical vision and driving innovation in software development and digital transformation.",
      linkedin: "#"
    },
    {
      title: "Mike Johnson",
      subtitle: "COO",
      image: "/api/placeholder/300/400",
      bio: "Overseeing operations and ensuring seamless delivery of exceptional digital solutions to our clients.",
      linkedin: "#"
    }
  ];

  const teamCards = cards.length > 0 ? cards : sampleCards;
  const cardsPerPage = 3;
  const totalPages = Math.ceil(teamCards.length / cardsPerPage);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalPages - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalPages - 1 ? 0 : currentIndex + 1);
  };

  const getCurrentCards = () => {
    const startIndex = currentIndex * cardsPerPage;
    return teamCards.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <div className="w-full px-4 py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Meet the talented professionals driving innovation at Wouessi Inc.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-200 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 group"
            disabled={teamCards.length <= cardsPerPage}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-orange-500" />
          </button>

          {/* Cards Container */}
          <div className="mx-16 overflow-hidden">
            <div className="flex gap-8 transition-transform duration-500 ease-out">
              {getCurrentCards().map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card */}
                  <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl group">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <div
                        className="w-full transition-transform duration-500 bg-gray-200 bg-center bg-cover h-80 group-hover:scale-105"
                        style={{ 
                          backgroundImage: card.image ? `url(${card.image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        }}
                      >
                        {/* Bio Overlay */}
                        {hoveredCard === index && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center duration-300 bg-white/95 animate-in fade-in">
                            <div className="p-6">
                              <h3 className="mb-2 text-xl font-bold text-black">{card.title}</h3>
                              <p className="mb-4 text-sm font-medium text-gray-600">{card.subtitle}</p>
                              <p className="mb-6 text-sm leading-relaxed text-gray-700">
                                {card.bio || "Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences."}
                              </p>
                              {card.linkedin && (
                                <a 
                                  href={card.linkedin} 
                                  className="inline-flex items-center justify-center w-10 h-10 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Linkedin className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-center bg-white">
                      <h2 className="mb-2 text-xl font-bold text-gray-900">
                        {card.title}
                      </h2>
                      <p className="text-base font-medium text-gray-600">
                        {card.subtitle}
                      </p>
                      
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

  
          <button
            onClick={goToNext}
            className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-200 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 group"
            disabled={teamCards.length <= cardsPerPage}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-orange-500" />
          </button>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeamCarousel;