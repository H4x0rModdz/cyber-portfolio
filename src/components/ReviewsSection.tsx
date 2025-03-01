"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { IReview } from '@/types/IReview';
import React from 'react';
import Slider from 'react-slick';

const defaultImage = 'images/profile.jpg';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 1 } },
    { breakpoint: 450, settings: { slidesToShow: 1, arrows: true } },
  ],
};

const ReviewsSection: React.FC = () => {
  const { isEnglish } = useLanguage();
  const t = translations[isEnglish ? 'en' : 'pt'];
  const reviewsSection: IReview[] = t.reviewsSection;

  return (
    <div className="text-white py-12 px-4 mb-10">
      <h2 className="text-center text-3xl font-bold mb-8">{t.reviews.title}</h2>
      <div className="max-w-6xl mx-auto">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg xl:max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {reviewsSection.map((review) => (
              <div key={review.id} className="px-2">
                <div className="bg-neutral-950 rounded-lg shadow-md pt-12 pb-6 px-6 relative overflow-hidden h-64 flex flex-col">
                  <div className="absolute top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={review.img || defaultImage}
                      alt={review.name}
                      className="w-16 h-16 object-cover rounded-full border-4 border-neutral-950"
                    />
                  </div>
                  <div className="mt-8 text-center flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="mt-2 text-neutral-300 flex-grow overflow-hidden text-ellipsis">{review.text}</p>
                    <div className="mt-4 flex justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-neutral-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.058 3.247a1 1 0 00.95.69h3.418c.969 0 1.371 1.24.588 1.81l-2.764 2.01a1 1 0 00-.364 1.118l1.059 3.246c.3.921-.755 1.688-1.54 1.118l-2.764-2.01a1 1 0 00-1.176 0l-2.764 2.01c-.784.57-1.84-.197-1.54-1.118l1.058-3.246a1 1 0 00-.364-1.118l-2.764-2.01c-.783-.57-.38-1.81.588-1.81h3.419a1 1 0 00.949-.69l1.058-3.247z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;