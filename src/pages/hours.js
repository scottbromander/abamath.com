import React, { Component } from "react";

import styles from "./hours.module.css";

class Hours extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        totalHours: 0,
        totalMiles: 0,
        totalMilageReimbursement: 0,
        otherReimbursement: 0,
        totalReimbursement: 0,
        days: [
            {
                name: 'Saturday',
                tasks: [],
                newTask: {
                    name: '',
                    hours: '',
                    trello: '',
                },
                travel: {
                    milesDriven: '',
                    map: '',
                }
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
                travel: {
                    milesDriven: '',
                    map: '',
                }
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
                travel: {
                    milesDriven: '',
                    map: '',
                }
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
                travel: {
                    milesDriven: '',
                    map: '',
                }
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
                travel: {
                    milesDriven: '',
                    map: '',
                }
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
                travel: {
                    milesDriven: '',
                    map: '',
                }
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
                travel: {
                    milesDriven: '',
                    map: '',
                }
            },
        ]
    }

    componentDidMount() {
        const totalHours = this.state.days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0);
        this.setState({
            totalHours,
        });
    }

    addTask = (newTask, dayIndex) => {
        const days = this.state.days.map((day, index) => {
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
        });
        const totalHours = days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0);
        this.setState({
            totalHours,
            days,
        });
    }

    updateNewTask = (property, dayIndexToUpdate) => (event) => {
        const days = this.state.days.map((day, dayIndex) => {
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
        });
        const totalHours = days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0);
        this.setState({
            totalHours,
            days,
        });
    }

    updateTask = (property, taskIndexToUpdate, dayIndexToUpdate) => (event) => {
        const days = this.state.days.map((day, dayIndex) => {
            if (dayIndexToUpdate == dayIndex) {
                return {
                    ...day,
                    tasks: day.tasks.map((task, taskIndex) => {
                        if (taskIndexToUpdate == taskIndex) {
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
        });
        const totalHours = days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0);
        this.setState({
            totalHours,
            days,
        });
    }

    updateTravel = (property, dayIndexToUpdate) => (event) => {
        const days = this.state.days.map((day, dayIndex) => {
            if (dayIndexToUpdate == dayIndex) {
                return {
                    ...day,
                    travel: {
                        ...day.travel,
                        [property]: event.target.value
                    },
                }
            } else {
                return day;
            }
        });
        const totalMiles = days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.travel.milesDriven)), 0);
        const totalMilageReimbursement = Number(Number(totalMiles * 0.545).toFixed(2));
        const totalReimbursement = Number(Number(this.state.otherReimbursement || 0) + totalMilageReimbursement).toFixed(2);
        this.setState({
            totalMiles,
            totalMilageReimbursement,
            totalReimbursement,
            days,
        })
    }

    removeTask = (taskIndexToRemove, dayIndexToRemove) => {
        const days = this.state.days.map((day, dayIndex) => {
            if (dayIndexToRemove == dayIndex) {
                return {
                    ...day,
                    tasks: day.tasks.filter((task, taskIndex) => taskIndexToRemove != taskIndex),
                }
            } else {
                return day;
            }
        });
        const totalHours = days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0);
        this.setState({
            totalHours,
            days,
        });
    }

    updateReimbursement = (event) => {
        const otherReimbursement = Number(event.target.value || 0);
        this.setState({
            otherReimbursement,
            totalReimbursement: Number(this.state.days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.travel.milesDriven)), 0) * 0.545 + otherReimbursement).toFixed(2),
        });
    }

    render() {
        return (
            <div>
                <h1>Hours and Miles</h1>
                <p>
                    Track Weekly Miles and Hours
              </p>
                <div>
                    <h3>Total Hours | {this.state.totalHours}</h3>
                    <h3>Total Miles | {this.state.totalMiles}</h3>
                    <h3>Milage Reimbursement | ${this.state.totalMilageReimbursement}</h3>
                    <h3>Other Reimbursement | $<input onChange={this.updateReimbursement} value={this.state.otherReimbursement} type="number" placeholder="Other Reimbursement"></input></h3>
                    {this.state.otherReimbursement > 0 ? 'Be sure to send receipt to Luke' : ''}
                    <h3>Total Reimbursement | ${this.state.totalReimbursement}</h3>
                    {this.state.days.map((day, dayIndex) => (
                        <span key={dayIndex}>
                            <div className={styles.dayHeader}>
                                <b>{day.name} | {day.tasks.reduce((sum, task) => (Number(sum) + Number(task.hours)), 0)}</b>
                                <span></span>
                                <input onChange={this.updateTravel('milesDriven', dayIndex)} value={day.travel.milesDriven} type="number" placeholder="Miles Driven"></input>
                                <input onChange={this.updateTravel('map', dayIndex)} value={day.travel.map} type="text" placeholder="Map Link"></input>
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
                <hr/>
                <pre>{JSON.stringify(this.state,null,2)}</pre>
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