import { Fragment, useState, useEffect } from "react";
import AccountMenu from "./core/Menu";
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
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
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
            className="button discord-button large-button" // Add the "large-button" class
            style={{
              fontSize: "2rem", // Increase the font size
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)", // Increase the strength of the drop shadow
            }}
          >
            <i className="fab fa-discord"></i> Join the Discord
          </a>
          <a
            href="https://www.meetup.com/aws-community-meetup-connecticut/"
            className="button meetup-button large-button" // Add the "large-button" class
            style={{
              fontSize: "2rem", // Increase the font size
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)", // Increase the strength of the drop shadow
            }}
          >
            <i className="fab fa-meetup"></i> Join the Meetup
          </a>
        </div>
      </div>
      <h1
        style={{
          color: "#9B6AF7",
          marginTop: "10px",
          marginBottom: "10px",
          marginLeft: "10px",
          textAlign: "center",
          fontSize: "5rem",
        }}
      >
        {isAuthenticated ? `Welcome, ${user?.name}` : "Welcome"}
      </h1>
      <p
        style={{
          color: "#9B6AF7",
          marginTop: "5px",
          marginBottom: "5px",
          marginLeft: "10px",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Please see the upcoming events below.
      </p>
      {items.length === 0 && <p>no items to show</p>}
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
