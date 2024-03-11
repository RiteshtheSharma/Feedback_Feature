import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import FlagIcon from "@mui/icons-material/Flag";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Typography } from "@mui/material";

import "./App.css";
import SpeedDialComp from "./components/SpeedDialComp";
import Form from "./components/Form";
import NavBar from "./components/NavBar";


import SelectorElem from "./components/SelectorElem";
import TextAreaElem from "./components/TextAreaElem";
import AttachmentElem from "./components/AttachmentElem";
import ImportantFormLabel from "./components/ImportantFormLabel";
import FormHead from "./components/FormHead";

import { top100Films } from "./MovieList";

import { useSelector } from "react-redux";
function App() {
  const speedDialSelectedItem = useSelector(
    (state) => state.speedDial.selectedItemName
  );
  const actions = [
    {
      icon: <EditNoteIcon />,
      name: "Suggestions",
      endMsg: "Thanks for your valuable suggestion!",
      formHead: (
        <FormHead
          startingText={"Share your"}
          boldingText={"Suggestions"}
          midText={"width us"}
          endingText={"for a chance to earn rewards!"}
        />
      ),
      formElem: (
        <>
          {" "}
          <SelectorElem label={"Choose a section"} options={top100Films} />
          <TextAreaElem
            label={
              <ImportantFormLabel Label={"Describe the suggestion in detail"} />
            }
            placeholder="Write here..."
            AttachmentComp={<AttachmentElem />}
          />
        </>
      ),
    },
    {
      icon: <QuestionAnswerIcon />,
      name: "Contact us",
      endMsg: "We will get back to you as soon as possible!",
      formHead: (
        <FormHead
          startingText={"Let us know what"}
          boldingText={"your queries"}
          endingText={"are!"}
        />
      ),
      formElem: (
        <>
          {" "}
          <SelectorElem label={"Your name"} options={top100Films} />
          <TextAreaElem
            label={<ImportantFormLabel Label={"What would you like to ask"} />}
            placeholder="Write here..."
          />
        </>
      ),
    },
    {
      icon: <ThumbsUpDownIcon />,
      name: "Share Feedback",
      endMsg: "Thanks for your valuable feedback!",
      formHead: (
        <FormHead
          startingText={"Let us know your"}
          boldingText={"Feedback"}
          endingText={"about us!"}
        />
      ),
      formElem: (
        <TextAreaElem
          label={
            <ImportantFormLabel Label={"Describe the suggestion in detail"} />
          }
          placeholder="Write here..."
          AttachmentComp={<AttachmentElem />}
        />
      ),
    },
    {
      icon: <FlagIcon />,
      name: "Report an Issue",
      endMsg:
        "Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!",
      formHead: (
        <FormHead
          startingText={" Let us know about the"}
          boldingText={"Issue"}
          endingText={"you are facing right now!"}
        />
      ),
      formElem: (
        <>
          {" "}
          <SelectorElem label={"Choose a section"} options={top100Films} />
          <TextAreaElem
            label={
              <ImportantFormLabel Label={"Describe the issue in detail"} />
            }
            placeholder="Write here..."
            AttachmentComp={<AttachmentElem />}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <NavBar
        heading={
          <span>
            THE <span className="white_badge">PRODUCT</span> PLATFORM
          </span>
        }
      />

      {speedDialSelectedItem !== undefined && (
        <Form
          MainHead={
            actions.find((obj) => obj.name === speedDialSelectedItem).formHead
          }
          MainElem={
            actions.find((obj) => obj.name === speedDialSelectedItem).formElem
          }
        />
      )}

      <SpeedDialComp actions={actions} />
    </>
  );
}

export default App;
