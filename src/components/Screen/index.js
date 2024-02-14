import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-scroll";
import sike from "../../assets/sike.jpg";
import monkey_angry from "../../assets/monkey_angry.gif";
import { Howl } from "howler";

const Screen = (props) => {
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [imageChanged, setImageChanged] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);
  const [noButtonClickCount, setNoButtonClickCount] = useState(0);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (props.sequence === "1" && !audio) {
      const sound = new Howl({
        src: ["/music.mp3"], // Path to your local audio file
        loop: true,
        autoplay: true,
        volume: 0.5, // Adjust the volume as needed
      });
      setAudio(sound);
    }
  }, [props.sequence, audio]);

  useEffect(() => {
    if (props.sequence === "20") {
      // Reset states when transitioning to sequence 20
      setImageUrl(props.imageUrl);
      setTitle(props.title);
      setText(props.text);
      setNoButtonClickCount(0);
      setImageChanged(false);
    }
  }, [props.sequence]);

  const handleButtonClick = (response) => {
    if (response === "yes") {
      window.location.href = `#${Number(props.sequence) + 1}`;
    } else if (response === "no") {
      if (!imageChanged) {
        setImageUrl(sike);
        setTitle("SIKE");
        setText("Stop playin, I'll ask you again");
        setImageChanged(true);
      } else {
        setImageUrl(monkey_angry);
        setTitle("You're pulling my leg aren't you");
        setText("You've given me no option");
        setNoButtonClickCount(noButtonClickCount + 1);
        if (noButtonClickCount >= 1) {
          const nextSequenceElement = document.getElementById(
            Number(props.sequence) + 1
          );
          if (nextSequenceElement) {
            nextSequenceElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    } else if (response === "previous") {
      const previousSection = Number(props.sequence) - 1;
      const previousSectionElement = document.getElementById(previousSection);
      if (previousSectionElement) {
        previousSectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (response === "startOver") {
      const sequence1Element = document.getElementById("1");
      if (sequence1Element) {
        sequence1Element.scrollIntoView({ behavior: "smooth" });
      }
      setNoButtonClickCount(0);
      setImageChanged(false);
    }
    if (props.sequence === "19" && response === "yes") {
      setImageChanged(false);
    }
  };

  const renderImage = () => {
    if (props.sequence !== "21") {
      return (
        <img src={imageUrl} alt="simple gif" style={{ textAlign: "center" }} />
      );
    }
    return null;
  };

  const renderButtons = () => {
    if (props.sequence === "19") {
      return (
        <div className="button-container">
          <button
            className="yes-no-button"
            onClick={() => handleButtonClick("yes")}
          >
            Yes
          </button>
          <button
            className="yes-no-button"
            onClick={() => handleButtonClick("no")}
          >
            {noButtonClickCount >= 1 ? "Yes" : "No"}
          </button>
        </div>
      );
    } else if (props.sequence === "20") {
      return (
        <div className="button-container">
          <Link
            activeClass="active"
            to={Number(props.sequence) + 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
            className="default-button"
          >
            {props.btnText}
          </Link>
        </div>
      );
    } else if (props.sequence === "21") {
      return (
        <div className="button-container">
          <button
            className="default-button"
            onClick={() => handleButtonClick("startOver")}
          >
            Start Over
          </button>
        </div>
      );
    } else {
      return (
        <div className="button-container">
          <button
            className="default-button"
            onClick={() => handleButtonClick("previous")}
          >
            Previous
          </button>
          <Link
            activeClass="active"
            to={Number(props.sequence) + 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
            className="default-button"
          >
            {props.btnText}
          </Link>
        </div>
      );
    }
  };

  const { sequence } = props;
  const isSequence21 = sequence === "21";
  const screenClass = `screen-full ${isSequence21 ? "screen-21" : ""}`;

  return (
    <div
      id={Number(props.sequence)}
      className={screenClass}
      style={
        !isSequence21
          ? { background: props.bgColor, color: props.textColor }
          : {}
      }
    >
      <div className="container">
        <header style={{ textAlign: "center" }}>{renderImage()}</header>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <footer>{renderButtons()}</footer>
      </div>
    </div>
  );
};

export default Screen;
