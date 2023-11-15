import { useRef } from "react";
import "./App.css";
import { clubData } from "./data/clubs";
import { eventList } from "./data/events";
import { newsData } from "./data/news";

import Header from "./components/Header";
import IntroComponent from "./components/IntroComponent";

function ClubCard({ name, logo, description, website }) {
  return (
    <div className="ccard">
      <img src={logo} alt={name} />
      <div className="cdesc">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <a href={website} target="_blank" rel="noreferrer">
        <button className="card-button">Visit Website</button>
      </a>
    </div>
  );
}

function Clubs() {
  return (
    <div className="clubs">
      <h1 className="heading">Different Clubs Of NITJ</h1>
      <div className="ccards">
        {clubData.map((club, index) => (
          <ClubCard
            key={index}
            name={club.name}
            logo={club.logo}
            description={club.description}
            website={club.website}
          />
        ))}
      </div>
    </div>
  );
}

function EventCard({ image, title, description, readMoreLink }) {
  return (
    <a href={readMoreLink} target="_blank" rel="noopener noreferrer">
      <div className="ecard1">
        <div>
          <img className="ecardimg1" src={image} alt="Event" />
        </div>
        <div className="disc4">
          <p className="top4">
            <strong>{title}</strong>
          </p>
          <p className="discr4">{description}</p>
        </div>
        <div className="foot4">
          <div>
            <a className="read" href={readMoreLink}>
              READ
            </a>
          </div>
          <div>
            <a className="bookmark" href={readMoreLink}>
              <img
                className="footinsta"
                src="./assets/insta.jpeg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}

function Events() {
  const ecards = useRef(null);
  let currentPosition = 0;

  function handlePrevBtn() {
    currentPosition += 250;
    if (currentPosition > 0) currentPosition = 0;
    ecards.current.style.transform = `translateX(${currentPosition}px)`;
  }

  function handleNextBtn() {
    const containerWidth = ecards.current.offsetWidth;
    const cardsWidth = ecards.current.scrollWidth;
    currentPosition -= 250;
    if (currentPosition < -(cardsWidth - containerWidth))
      currentPosition = -(cardsWidth - containerWidth);
    ecards.current.style.transform = `translateX(${currentPosition}px)`;
  }

  return (
    <div className="eventlist">
      <h1 className="heading">Lists Of Events</h1>
      <div className="slider-btns">
        <button id="prevBtn" className="slider-btn" onClick={handlePrevBtn}>
          &#9664;
        </button>
        <button id="nextBtn" className="slider-btn" onClick={handleNextBtn}>
          &#9654;
        </button>
      </div>
      <div className="ecards-container">
        <div className="ecards" ref={ecards}>
          {eventList.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              title={event.title}
              description={event.description}
              readMoreLink={event.readMoreLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="news">
      <h1 className="heading">Latest Updates and News</h1>
      <div className="news-container">
        {newsData.map((article, index) => (
          <article className="news-item" key={index}>
            <h2 className="news-title">{article.title}</h2>
            <p className="news-date">{article.date}</p>
            <p className="news-content">{article.content}</p>
            <a className="read-more" href={article.link}>
              Read More
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <p>Made with ❤️ by Us !!!!</p>
      <p>Connect with Us online</p>
    </footer>
  );
}
function App() {
  return (
    <>
      <Header />
      <IntroComponent />
      <Clubs />
      <Events />
      <News />
      <Footer />
    </>
  );
}

export default App;
