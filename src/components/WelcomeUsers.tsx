import { Fragment, useState, useEffect } from "react";
import AccountMenu from "./core/AccountMenu";
import Footer from "./core/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/TypingEffect.css";
import "./css/Snowfall.css";
import "./css/Buttons.css";

import hartfordImage from "../assets/City_in_White.png"; // Import the hartford.webp image

interface ListGroupProps {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items }: ListGroupProps) {
  const { user } = useAuth0();
  const TypingEffect = () => {
    const phrases = ["Builders", "Architects", "Developers", "Passionate"];

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setText(phrases[index]);
        setIndex((index + 1) % phrases.length);
      }, 3000); // Change text every 3 seconds

      return () => clearTimeout(timeoutId);
    }, [index, phrases]);

    return <Fragment></Fragment>;
  };

  return (
    <div>
      <AccountMenu />
      <div style={{ position: "relative" }}>
        <img src={hartfordImage} alt="Hartford" style={{ width: "100%" }} />{" "}
        {/* Display the hartford.webp image full width */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="https://discord.gg/47Gh8FaKt6"
            className="button discord-button"
          >
            <i className="fab fa-discord"></i> Join the Discord
          </a>
          <a
            href="https://www.meetup.com/aws-community-meetup-connecticut/"
            className="button meetup-button"
          >
            <i className="fab fa-meetup"></i> Join the Meetup
          </a>
        </div>
      </div>
      {items.length === 0 && <p>no items to show</p>}
      <TypingEffect />
      <div className="snowflakes">
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className="snowflake" />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ListGroup;
