import React from 'react';
import './services.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const servicesData = [
  {
    title: 'Common Rail Pumps & Injectors',
    description: 'Testing, coding & repair for CR systems',
    images: [
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890929/crsystem_rb39q8.jpg',
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890929/crsystem_rb39q8.jpg'
    ],
  },
  {
    title: 'VE / VP44 / VP37 Pumps',
    description: 'Precision service for VE and VP series',
    images: [
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890931/Untitled_Project_holwrj.jpg',
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890930/Ve_-EDC_ulvfc7.jpg'
    ],
  },
  {
    title: 'Conventional Diesel Pumps',
    description: 'Repair & overhaul of traditional pumps',
    images: [
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890929/3_cyl_fip_ea3szp.jpg',
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890932/inline_rsv_f3bkok.jpg',
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890929/inline_P-Type_r4jqeq.jpg',
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890932/inline_4cyl_kyxmig.jpg'
    ],
  },
  {
    title: 'Alternators (NBL, K1, B0 etc.)',
    description: 'Sales & service of all alternator types',
    images: [
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890928/alternators_bosch_vza4qo.jpg'
    ],
  },
  {
    title: 'Starter Motors (HX, C60, DE, R series)',
    description: 'Starter motor maintenance & repairs',
    images: [
        'https://res.cloudinary.com/dxwbzcqc0/image/upload/v1751890930/starter_bosch_bbmdod.jpg'
    ],
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((s, i) => (
          <div key={i} className="service-card">
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay
              infiniteLoop
              interval={4000}
              stopOnHover
              className="service-carousel"
            >
              {s.images.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`${s.title} ${idx + 1}`} />
                </div>
              ))}
            </Carousel>
            <div className="service-info">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="service-note">Sales & Services available across all categories</p>
    </section>
  );
};

export default Services;
