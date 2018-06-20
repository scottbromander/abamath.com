import React, { Component } from "react";

import styles from "./hours.module.css";

class Hours extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        days: [
            {
                name: 'Saturday',
                tasks: [],
                newTask: {
                    name: '',
                    hours: 0,
                    trello: '',
                },
            },
            {
                name: 'Sunday',
                tasks: [
                    {
                        name: 'Class Prep',
                        hours: 0.5,
                        trello: '',
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                    trello: '',
                },
            },
            {
                name: 'Monday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                        trello: '',
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                    trello: '',
                },
            },
            {
                name: 'Tuesday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                        trello: '',
                    },
                    {
                        name: 'Team Meeting',
                        hours: 1.5,
                        trello: '',
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                    trello: '',
                },
            },
            {
                name: 'Wednesday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                        trello: '',
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                    trello: '',
                },
            },
            {
                name: 'Thursday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                        trello: '',
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                    trello: '',
                },
            },
            {
                name: 'Friday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 8,
                        trello: '',
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                    trello: '',
                },
            },
        ]
    }

    render() {
        return (
            <div>
              <h1>Hours and Miles</h1>
              <p>
                Track Weekly Miles and Hours
              </p>
              <div>
              <h3>Total Hours | {this.state.days.reduce((weeklySum, day) => (weeklySum + day.tasks.reduce((dailySum, task) => (dailySum + task.hours), 0)), 0)}</h3>
              {this.state.days.map(day => (
                  <span key={day.name} className={styles.container}>
                    <div>
                    <b className={styles.dayHeader}>{day.name} | {day.tasks.reduce((sum, task) => (sum + task.hours), 0)}</b>
                    </div>
                    <div>
                    {day.tasks.map((task, index) => (
                        <div key={index} className={styles.container}>
                        <input value={task.name} type="text" />
                        <input value={task.hours} type="number" />
                        <input value={task.trello} type="text" />
                        <button>Delete Task</button>
                        </div>
                    ))}
                    <p>
                        <input value={day.newTask.name} type="text" />
                        <input value={day.newTask.hours} type="number" />
                        <input value={day.newTask.trello} type="text" />
                        <button>Add New Task</button>
                    </p>
                    </div>
                  </span>
              ))}
              </div>
            </div>
        );
    }
}

export default Hours;

// export const query = graphql`
//   query AboutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `