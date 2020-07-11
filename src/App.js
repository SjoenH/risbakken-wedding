import React from "react";
import "./App.css";
import CountDown from "./CountDown";
import ReactPlayer from "react-player";
import color from "./utils/colors";

function App() {
  const wedding_date = new Date(2020, 6, 25, 13);
  return (
    <div style={{ minHeight: "100vh", color: color.white }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 24,
        }}
      >
        <h1
          style={{
            color: color.gold,
            textAlign: "center",
          }}
        >
          Kristin & Brynjulf
        </h1>
        <CountDown
          style={{ textAlign: "center" }}
          date={new Date()}
          before={"Is getting married"}
          on_the_day={"Today's the day!"}
          after={"Have been married for "}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Watch the stream</h2>
        <ReactPlayer
          style={{ paddingBottom: 50, maxWidth: "90%" }}
          className="player"
          url={"https://www.twitch.tv/risbakken_wedding"}
        />
      </div>
    </div>
  );
}

export default App;
