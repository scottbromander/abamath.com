import React, { Component } from "react";

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
                },
            },
            {
                name: 'Sunday',
                tasks: [
                    {
                        name: 'Class Prep',
                        hours: 0.5,
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                },
            },
            {
                name: 'Monday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                },
            },
            {
                name: 'Tuesday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                    },
                    {
                        name: 'Team Meeting',
                        hours: 1.5,
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                },
            },
            {
                name: 'Wednesday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                },
            },
            {
                name: 'Thursday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 7.5,
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
                },
            },
            {
                name: 'Friday',
                tasks: [
                    {
                        name: 'Class',
                        hours: 8,
                    },
                ],
                newTask: {
                    name: '',
                    hours: 0,
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
                  <span key={day.name}>
                  <h4>{day.name} | {day.tasks.reduce((sum, task) => (sum + task.hours), 0)}</h4>
                  {day.tasks.map((task, index) => (
                    <p key={index}>
                      <input value={task.name} type="text" />
                      <input value={task.hours} type="number" />
                    </p>
                  ))}
                  <p>
                    <input value={day.newTask.name} type="text" />
                    <input value={day.newTask.hours} type="number" />
                  </p>
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