import React, { useState } from 'react';
import Navbar from './components/Navbar/NavbarTemp.jsx';
import Footer from './components/Footer/FooterTemp.jsx';

import EnquiryForm from './components/Contact/EnquiryForm.jsx';
import FeedbackForm from './components/Contact/FeedbackForm.jsx';
import Carousel from './components/Carousel/CarouselTemp.jsx';
import Services from './components/Services/Services.jsx';

const App = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div>
      <Navbar
        onEnquiryClick={() => setShowEnquiry(true)}
        onFeedbackClick={() => setShowFeedback(true)}
      />

      {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
      {showFeedback && <FeedbackForm onClose={() => setShowFeedback(false)} />}

      <Carousel/>
      <Services/>
      <Footer />
    </div>
  );
};

export default App;
