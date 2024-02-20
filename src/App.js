import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import CheckMark from "./images/CheckMark";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "HUMAN RESOURCES",
      subHeadingColor: "#4E5BA6",
      heading: "1:1 Meeting Agenda",
      headingColor: "#000",
    },
    users: [
      { name: "BZ", color: "#fff", bg: "#FF692E" },
      { name: "CW", color: "#fff", bg: "#7F56D9" },
    ],
    title1: {
      label: "TASK NAME",
      color: "#98A2B3",
    },
    title2: {
      label: "PRIORITY",
      color: "#98A2B3",
    },
    title3: {
      label: "MINUTES",
      color: "#98A2B3",
    },
    title4: {
      label: "DUE DATE",
      color: "#98A2B3",
    },
    priorityBoxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
    highPriorityBg: "rgb(249, 112, 102,.3)",
    highPriorityColor: "#F04438",
    mediumPriorityBg: "rgb(253, 176, 34,.3)",
    mediumPriorityColor: "#F79009",
    lowPriorityBg: "rgb(253, 226, 114,.3)",
    lowPriorityColor: "#EAAA08",
    icon: <CheckMark color="#fff" bg="#B3B8DB" />,
    data: [
      {
        title: "Discussion topics",
        titleColor: "#000",

        borderColor: "#D0D5DD",
        bg: "#fff",
        taskBorderColor: "#EAECF0",
        tasks: [
          {
            name: "What should my main focus be while you’re OOO?",
            nameColor: "#000",
            priority: "High",
            priorityColor: "#F04438",
            minutes: "5",
            minutesColor: "#000",
            dueDate: "",
            dueDateColor: "#000",
          },
          {
            name: "Feedback on last Friday’s team presentation",
            priority: "Medium",
            priorityColor: "#F79009",
            minutes: "10",
            minutesColor: "#000",
            dueDate: "",
            dueDateColor: "#000",
          },
          {
            name: "Coaching: How to better prioritize my time?",
            priority: "High",
            priorityColor: "#F04438",
            minutes: "15",
            minutesColor: "#000",
            dueDate: "",
            dueDateColor: "#000",
          },
        ],
      },
      {
        title: "Action items",
        titleColor: "#000",

        borderColor: "#D0D5DD",
        bg: "#fff",
        taskBorderColor: "#EAECF0",
        tasks: [
          {
            name: "Log OOO time in our calendar",
            nameColor: "#000",
            priority: "Low",
            priorityColor: "#EAAA08",
            minutes: "",
            minutesColor: "#000",
            dueDate: "Mar 25",
            dueDateColor: "#000",
          },
          {
            name: "Finalize monthly staffing plan and share with team",
            priority: "Medium",
            priorityColor: "#F79009",
            minutes: "",
            minutesColor: "#000",
            dueDate: "Mar 10",
            dueDateColor: "#000",
          },
          {
            name: "Review Q2 launch video outlines",
            priority: "Medium",
            priorityColor: "#F79009",
            minutes: "",
            minutesColor: "#000",
            dueDate: "Mar 15",
            dueDateColor: "#000",
          },
        ],
      },
      {
        title: "Project updates",
        titleColor: "#000",

        borderColor: "#D0D5DD",
        bg: "#fff",
        taskBorderColor: "#EAECF0",
        tasks: [
          {
            name: "Live brainstorming; setting goals for Q2",
            nameColor: "#000",
            priority: "",
            priorityColor: "#000",
            minutes: "",
            minutesColor: "#000",
            dueDate: "",
            dueDateColor: "#000",
          },
          {
            name: "Upcoming PTO",
            priority: "",
            priorityColor: "#000",
            minutes: "Lorem",
            minutesColor: "#000",
            dueDate: "",
            dueDateColor: "#000",
          },
        ],
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
