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
                    hours: '',
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
                    hours: '',
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
                    hours: '',
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
                    hours: '',
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
                    hours: '',
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
                    hours: '',
                    trello: '',
                },
            },
            {
                name: 'Friday',
                tasks: [
                    {
                        name: 'Time Sheet',
                        hours: 0.5,
                        trello: '',
                    },
                ],
                newTask: {
                    name: '',
                    hours: '',
                    trello: '',
                },
            },
        ]
    }

    addTask = (newTask, dayIndex) => {
        this.setState({
            days: this.state.days.map((day, index) => {
                if (index == dayIndex) {
                    return {
                        ...day,
                        tasks: [...day.tasks, newTask],
                        newTask: {
                            name: '',
                            hours: '',
                            trello: '',
                        },
                    }
                } else {
                    return day;
                }
            })
        });
    }

    updateNewTask = (property, dayIndexToUpdate) => (event) => {
        this.setState({
            days: this.state.days.map((day, dayIndex) => {
                if (dayIndexToUpdate == dayIndex) {
                    return {
                        ...day,
                        newTask: {
                            ...day.newTask,
                            [property]: event.target.value,
                        },
                    }
                } else {
                    return day;
                }
            })
        })
    }

    updateTask = (property, taskIndexToUpdate, dayIndexToUpdate) => (event) => {
        this.setState({
            days: this.state.days.map((day, dayIndex) => {
                if (dayIndexToUpdate == dayIndex) {
                    return {
                        ...day,
                        tasks: day.tasks.map((task, taskIndex) => {
                            if(taskIndexToUpdate == taskIndex) {
                                return {
                                    ...task,
                                    [property]: event.target.value
                                }
                            } else {
                                return task;
                            }
                        }),
                    }
                } else {
                    return day;
                }
            })
        })
    }

    removeTask = (taskIndexToRemove, dayIndexToRemove) => {
        this.setState({
            days: this.state.days.map((day, dayIndex) => {
                if (dayIndexToRemove == dayIndex) {
                    return {
                        ...day,
                        tasks: day.tasks.filter((task, taskIndex) => taskIndexToRemove != taskIndex),
                    }
                } else {
                    return day;
                }
            })
        })
    }

    render() {
        return (
            <div>
              <h1>Hours and Miles</h1>
              <p>
                Track Weekly Miles and Hours
              </p>
              <div>
              <h3>Total Hours | {this.state.days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0)}</h3>
              {this.state.days.map((day, dayIndex) => (
                  <span key={dayIndex} className={styles.container}>
                    <div>
                    <b className={styles.dayHeader}>{day.name} | {day.tasks.reduce((sum, task) => (Number(sum) + Number(task.hours)), 0)}</b>
                    </div>
                    <div>
                    {day.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className={styles.taskRow}>
                        <input onChange={this.updateTask('name', taskIndex, dayIndex)} value={task.name} type="text" placeholder="Task Name" />
                        <input onChange={this.updateTask('hours', taskIndex, dayIndex)} value={task.hours} type="number" placeholder="Hours" />
                        <input onChange={this.updateTask('trello', taskIndex, dayIndex)} value={task.trello} type="text" placeholder="Trello URL" />
                        <button onClick={() => this.removeTask(taskIndex, dayIndex)}>Delete Task</button>
                        </div>
                    ))}
                    <p className={styles.taskRow}>
                        <input onChange={this.updateNewTask('name', dayIndex)} value={day.newTask.name} type="text" placeholder="Task Name" />
                        <input onChange={this.updateNewTask('hours', dayIndex)} value={day.newTask.hours} type="number" placeholder="Hours" />
                        <input onChange={this.updateNewTask('trello', dayIndex)} value={day.newTask.trello} type="text" placeholder="Trello URL" />
                        <button onClick={() => this.addTask(day.newTask, dayIndex)}>Add New Task</button>
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