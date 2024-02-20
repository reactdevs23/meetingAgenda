import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  header,
  users,
  headingFontFamily,
  title1,
  title2,
  title3,
  title4,
  priorityBoxShadow,
  highPriorityBg,
  highPriorityColor,
  mediumPriorityBg,
  mediumPriorityColor,
  lowPriorityBg,
  lowPriorityColor,
  data,
  icon,
}) => {
  return (
    <div
      className="min-h-screen py-5 flex flex-col items-center justify-center gap-12 w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        {" "}
        <div className={classes.header}>
          <div className={classes.headingContainer}>
            <h5
              className={classes.subHeading}
              style={{ "--color": header.subHeadingColor }}
            >
              {header.subHeading}
            </h5>
            <h2
              className={classes.heading}
              style={{
                "--color": header.headingColor,
                "--fontFamily": headingFontFamily,
              }}
            >
              {header.heading}
            </h2>
          </div>
          <div className={classes.usersContainer}>
            {users.map((user, i) => (
              <p
                className={classes.user}
                key={i}
                style={{
                  "--color": user.color,
                  "--bg": user.bg,
                }}
              >
                {user.name}
              </p>
            ))}
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.taskTopHeader}>
            <p className={classes.topTitle} style={{ "--color": title1.color }}>
              {title1.label}
            </p>
            <p className={classes.topTitle} style={{ "--color": title2.color }}>
              {title2.label}
            </p>
            <p className={classes.topTitle} style={{ "--color": title3.color }}>
              {title3.label}
            </p>
            <p className={classes.topTitle} style={{ "--color": title4.color }}>
              {title4.label}
            </p>
          </div>

          {data.map((el, i) => (
            <div
              className={classes.taskContainer}
              key={i}
              style={{ "--borderColor": el.borderColor }}
            >
              <div
                className={classes.taskHeader}
                key={i}
                style={{
                  "--color": el.titleColor,
                }}
              >
                <p className={classes.title}> {el.title}</p>
              </div>
              <div className={classes.allTask}>
                {el.tasks.map((task, id) => (
                  <div
                    className={classes.task}
                    key={id}
                    style={{ "--borderColor": el.taskBorderColor }}
                  >
                    <div className={classes.nameContainer}>
                      <div className={classes.icon}>{icon}</div>
                      <p
                        className={classes.name}
                        style={{ "--color": task.nameColor }}
                      >
                        {task.name}
                      </p>
                    </div>
                    <div className={classes.priorityWrapper}>
                      {task.priority && (
                        <p
                          className={classes.priority}
                          style={{
                            boxShadow: priorityBoxShadow,
                            "--color": task.priorityColor,

                            "--bg":
                              task.priority.toLowerCase() === "high"
                                ? highPriorityBg
                                : task.priority.toLowerCase() === "medium"
                                ? mediumPriorityBg
                                : task.priority.toLowerCase() === "low"
                                ? lowPriorityBg
                                : "",
                          }}
                        >
                          {task.priority}
                        </p>
                      )}
                    </div>
                    <p
                      className={classes.minutes}
                      style={{ "--color": task.minutesColor }}
                    >
                      {task.minutes}
                    </p>
                    <p
                      className={classes.dueDate}
                      style={{ "--color": task.dueDateColor }}
                    >
                      {task.dueDate}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
