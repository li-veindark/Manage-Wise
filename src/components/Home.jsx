import {React, useState,useEffect} from "react";
import { Link, Element } from 'react-scroll';


import people from "../Images/people.png";
import formattedPricingData from "../objects-data/PricingData";
import Header from "../common/Header";
import Footer from "../common/Footer";

import FeaturesFlashcards from "../assets/FeaturesFlashcards";
import DarkFeaturesCards from "../assets/DarkFeaturesCards";
import Initials from "../assets/Initials";
import PricingCard from "../assets/PricingCard";
import FaqBox from "../assets/FaqBox";
import TestimonialsCard from "../assets/TestimonialsCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faStar, faMobile, faBell, faFire, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.css";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const divStyle = {
    transition: 'opacity 0.01s ease-in', // Apply transition to opacity property
    opacity: isHovered ? 1 : 0, // Show or hide based on hover state
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageSize = 80 + scrollPosition * 0.005;


  return (
    <div className="home">
      <Header />
      <section id="welcome">
        <center>
          <Initials
            content="👋 WELCOME TO MANAGE WISE!"
            value="16" />

          <h1>Empower your business with <span>Strategic</span> insights</h1>
          <h3>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</h3>

          {isHovered ? (
            
              <button style={divStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseOut}
                className="start-button"
              >
                Get Started <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "#ffffff" }} />
              </button>

            
          ) : (
            <button 
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseOut}
              className="start-button"
            >
              Get Started
            </button>
            
          )}
          <a href="https://www.youtube.com/" target="_blank"><button className="demo-button">Watch Demo           <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#000000" }} /></button></a>
          <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048" alt="charts" 
           style={{
          width: `${imageSize}%`,
          height: 'auto', // To maintain aspect ratio
          transition: 'width 0.01s ease-in-out', // Optional: Add a transition effect
        }}
         ></img>
        </center>
      </section>
      {/*------------------------- FEATURES SECTION------------------------- */}

      <section id="features" className="features">
        <center>
          <Initials
            content="🔥 PREMIER FEATURES"
            value="16" />

          <h1>Discover our product's <span>Capabilities</span></h1>
          <h3>Don't settle for mediocrity - embrace the future of management with Manage Wise.</h3>
        </center>

        <div className="features-box">
          <div className="left-box">
            <FontAwesomeIcon className="star" icon={faStar} style={{ color: "#fcd53f" }} />
            <p>Boost productivity and streamline workflow with us. Enjoy our intuitive interface
              and robust features.</p>
          </div>
          <div className="right-box">
            <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"></img>
            <h1>Smart Task Management</h1>
            <h3>Say goodbye to chaos with our smart task management system</h3>
          </div>
        </div>

        <div className="features-flashcards">
          <FeaturesFlashcards
            title="Flexible Scheduling"
            content="Stay productive with our flexible scheduling system"
            imageUrl="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
          />
          <FeaturesFlashcards
            title="Easy Communication"
            content="Collaborate seamlessly with your team in real-time"
            imageUrl="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
          />
          <FeaturesFlashcards
            title="Analytics"
            content="Gain valuable insights with our advanced analytics feature"
            imageUrl="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
          />

        </div>
      </section>

      {/*------------------------- DARK FEATURES SECTION--------------------- */}
      <section className="dark-features">
        <Initials
          content="🤩  AND MORE..."
          value="10" />

        <h1>Explore an array of features that elevate your <span>Productivity</span> to new heights</h1>
        <h3>Discover the tools that will revolutionize the way you manage and optimize your operations</h3>
        <div className="dark-flashcards">
          <DarkFeaturesCards
            faicon={faMobile}
            content="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
            title="Cross-Platform Compatibility"
          />
          <DarkFeaturesCards
            faicon={faBell}
            content="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket"
            title="Stay Informed with Essential Notifications"
          />
          <DarkFeaturesCards
            faicon={faFire}
            content="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
            title="Secure Data Encryption at all times"
          />
        </div>
      </section>

      {/* ---------------INTEGRATION SECTION------------ */}

      <section className="integrations">
      <div>
        
      </div>
        <center>
          <Initials
            content="⚒ INTEGRATIONS"
            value="10" />

          <h1>Enable <span>integration</span> with other popular tools and platforms</h1>
          <h3>Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</h3>
          <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"></img>
        </center>
      </section>

      {/* ------------------FAQ SECTION------------------------------------ */}

      <section className="faq" id="faq">
        <div className="faq-content">
          <Initials
            content="🙋‍♀️ FAQ"
            value="12" />
          <h1>Need <span>Answers?</span></h1>
          <h3>Check out our most commonly asked questions below to find the information you need.</h3>
        </div>
        <div className="faq-questions">
          <FaqBox
            title="What is Manage Wise and what does it offer?"
            content="Manage Wise is a comprehensive management platform designed to 
           streamline your business operations, enhance productivity, and drive success.
           It offers a range of features including task management, scheduling, communication tools, 
           analytics, and more." />
          <FaqBox
            title="Is Manage Wise suitable for small businesses and larger enterprises alike?"
            content="Yes, Manage Wise is designed to cater to the needs of both small businesses and
           larger enterprises. Its scalable features and customizable options make it versatile for various business sizes."
          />
          <FaqBox
            title="Can I access Manage Wise from different devices and platforms?"
            content="We provide responsive customer support via chat and email to assist you with any inquiries, issues, or 
           guidance you may need while using Manage Wise."
          />
          <FaqBox
            title="What kind of support options do you offer to users?"
            content="Yes, Manage Wise offers cross-platform compatibility,
           allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices."
          />
          <FaqBox
            title="How secure is the data stored within Manage Wise?"
            content="Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry 
           best practices to ensure your sensitive information is safe and protected." />
        </div>
      </section>

      {/*---------------------- PRICING SECTION-------------------------- */}

      <section className="pricing" id="pricing">
        <center>
          <Initials
            content="💲PRICING"
            value="10" />
          <h1>Select your ideal <span>Pricing</span> plan</h1>
          <h3>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</h3>
        </center>
        <div className="pricing-cards">
          <PricingCard
            amount="$0"
            value="10"
            content="FREE"
            features={formattedPricingData}
            limit="4"
          />
          <PricingCard
            amount="$25"
            value="20"
            content="STANDARD"
            features={formattedPricingData}
            limit="6"
            bgColor="#000000"
            color="#ffffff"
            monthColor="#ffffff"
            buttonBgColor="#8247FF"
            buttonColor="#FFFFFF"
            outline="7px solid #ededfa"
          />
          <PricingCard
            amount="$42"
            value="20"
            content="BUSINESS"
            features={formattedPricingData}
            limit="5"
          />
        </div>
      </section>

      {/*----------------- TESTIMONIALS SECTION------------------- */}

      <section className="testimonials" id="testimonials">
        <div className="testimonials-content">
          <Initials
            content="🧡 TESTIMONIALS"
            value="12"
          />
          <h1>Hear from our <span>Satisfied</span> clients</h1>
          <h3>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</h3>
        </div>

        <div className="testimonials-cards">
          <TestimonialsCard
            message={"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"}
            name="Emily"
            profile="Art Director"
            imageURL="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
          />
          <TestimonialsCard
            message={"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"}
            name="emily"
            profile="Art Director"
            imageURL="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
          />
          <TestimonialsCard
            message={"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"}
            name="emily"
            profile="Art Director"
            imageURL="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
          />
          <TestimonialsCard
            message={"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"}
            name="Emily"
            profile="Art Director"
            imageURL="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
          />

        </div>
      </section>

      {/*------------------ JOIN SECTION--------------------------- */}

      <section className="join">
        <div className="join-box">
          <div className="join-content">
            <Initials
              content="👋 DON'T MISS OUT"
              value="30" />
            <h1>Unleash your <span>Potential</span> with us</h1>
            <h3>Join our community of ambitious individuals and organizations eager to make a difference.</h3>
            {isHovered ? (
            
            <button style={divStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseOut}
              className="start-button"
            >
              Try Out Now <FontAwesomeIcon icon={faCircleArrowRight} style={{ color: "#ffffff" }} />
            </button>

          
        ) : (
          <button 
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
            className="start-button"
          >
            Get Started
          </button>
          
        )}
          </div>
          <div className="join-img">
            <img src={people}></img>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Home;
