import React, { Component } from 'react';
import Layout from '../components/layout';

import styles from './hours.module.css';

class Hours extends Component {
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
          travel: {
            milesDriven: '',
            map: '',
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
          travel: {
            milesDriven: '',
            map: '',
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
          travel: {
            milesDriven: '',
            map: '',
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
          travel: {
            milesDriven: '',
            map: '',
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
          travel: {
            milesDriven: '',
            map: '',
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
          travel: {
            milesDriven: '',
            map: '',
          },
        },
      ],
    }

    componentDidMount() {
      this.setState(previousState => ({
        // eslint-disable-next-line max-len
        totalHours: previousState.days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0),
      }));
    }

    updateHours = () => {
      this.setState(previousState => ({
        // eslint-disable-next-line max-len
        totalHours: previousState.days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.tasks.reduce((dailySum, task) => (Number(dailySum) + Number(task.hours)), 0))), 0),
      }));
    }

    addTask = (newTask, dayIndex) => {
      this.setState(previousState => ({
        days: previousState.days.map((day, index) => {
          if (index === dayIndex) {
            return {
              ...day,
              tasks: [...day.tasks, newTask],
              newTask: {
                name: '',
                hours: '',
                trello: '',
              },
            };
          }
          return day;
        }),
      }));
      this.updateHours();
    }

    updateNewTask = (property, dayIndexToUpdate) => (event) => {
      this.setState(previousState => ({
        days: previousState.days.map((day, dayIndex) => {
          if (dayIndexToUpdate === dayIndex) {
            return {
              ...day,
              newTask: {
                ...day.newTask,
                [property]: event.target.value,
              },
            };
          }
          return day;
        }),
      }));
    }

    updateTask = (property, taskIndexToUpdate, dayIndexToUpdate) => (event) => {
      this.setState(previousState => ({
        days: previousState.days.map((day, dayIndex) => {
          if (dayIndexToUpdate === dayIndex) {
            return {
              ...day,
              tasks: day.tasks.map((task, taskIndex) => {
                if (taskIndexToUpdate === taskIndex) {
                  return {
                    ...task,
                    [property]: event.target.value,
                  };
                }
                return task;
              }),
            };
          }
          return day;
        }),
      }));
      this.updateHours();
    }

    updateTravel = (property, dayIndexToUpdate) => (event) => {
      this.setState(previousState => ({
        days: previousState.days.map((day, dayIndex) => {
          if (dayIndexToUpdate === dayIndex) {
            return {
              ...day,
              travel: {
                ...day.travel,
                [property]: event.target.value,
              },
            };
          }
          return day;
        }),
      }));
      this.setState(previousState => ({
        // eslint-disable-next-line max-len
        totalMiles: previousState.days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.travel.milesDriven)), 0),
      }));
      this.setState(previousState => ({
        totalMilageReimbursement: Number(Number(previousState.totalMiles * 0.545).toFixed(2)),
      }));
      this.setState(previousState => ({
        // eslint-disable-next-line max-len
        totalReimbursement: Number(Number(previousState.otherReimbursement || 0) + previousState.totalMilageReimbursement).toFixed(2),
      }));
    }

    removeTask = (taskIndexToRemove, dayIndexToRemove) => {
      this.setState(previousState => ({
        days: previousState.days.map((day, dayIndex) => {
          if (dayIndexToRemove === dayIndex) {
            return {
              ...day,
              // eslint-disable-next-line max-len
              tasks: day.tasks.filter((task, taskIndex) => Number(taskIndexToRemove) !== Number(taskIndex)),
            };
          }
          return day;
        }),
      }));
      this.updateHours();
    }

    updateReimbursement = (event) => {
      this.setState({
        otherReimbursement: Number(event.target.value || 0),
      });
      this.setState(previousState => ({
        // eslint-disable-next-line max-len
        totalReimbursement: Number(previousState.days.reduce((weeklySum, day) => (Number(weeklySum) + Number(day.travel.milesDriven)), 0) * 0.545 + previousState.otherReimbursement).toFixed(2),
      }));
    }

    render() {
      return (
        <Layout>
          <>
            <h1>Hours and Miles</h1>
            <p>
              Track Weekly Miles and Hours
            </p>
            <div>
              <h3>
                Total Hours |
                {' '}
                {this.state.totalHours}
              </h3>
              <h3>
                Total Miles |
                {' '}
                {this.state.totalMiles}
              </h3>
              <h3>
                Milage Reimbursement | $
                {this.state.totalMilageReimbursement}
              </h3>
              <h3>
                Other Reimbursement | $
                <input onChange={this.updateReimbursement} value={this.state.otherReimbursement} type="number" placeholder="Other Reimbursement" />
              </h3>
              {this.state.otherReimbursement > 0 ? 'Be sure to send receipt to Luke' : ''}
              <h3>
                Total Reimbursement | $
                {this.state.totalReimbursement}
              </h3>
              {this.state.days.map((day, dayIndex) => (
                <span key={day.name}>
                  <div className={styles.dayHeader}>
                    <b>
                      {day.name}
                      {' '}
                      |
                      {' '}
                      {day.tasks.reduce((sum, task) => (Number(sum) + Number(task.hours)), 0)}
                    </b>
                    <span />
                    <input onChange={this.updateTravel('milesDriven', dayIndex)} value={day.travel.milesDriven} type="number" placeholder="Miles Driven" />
                    <input onChange={this.updateTravel('map', dayIndex)} value={day.travel.map} type="text" placeholder="Map Link" />
                  </div>
                  <div>
                    {day.tasks.map((task, taskIndex) => (
                      <div key={task} className={styles.taskRow}>
                        <input onChange={this.updateTask('name', taskIndex, dayIndex)} value={task.name} type="text" placeholder="Task Name" />
                        <input onChange={this.updateTask('hours', taskIndex, dayIndex)} value={task.hours} type="number" placeholder="Hours" />
                        <input onChange={this.updateTask('trello', taskIndex, dayIndex)} value={task.trello} type="text" placeholder="Trello URL" />
                        <button type="button" onClick={() => this.removeTask(taskIndex, dayIndex)}>Delete Task</button>
                      </div>
                    ))}
                    <p className={styles.taskRow}>
                      <input onChange={this.updateNewTask('name', dayIndex)} value={day.newTask.name} type="text" placeholder="Task Name" />
                      <input onChange={this.updateNewTask('hours', dayIndex)} value={day.newTask.hours} type="number" placeholder="Hours" />
                      <input onChange={this.updateNewTask('trello', dayIndex)} value={day.newTask.trello} type="text" placeholder="Trello URL" />
                      <button type="button" onClick={() => this.addTask(day.newTask, dayIndex)}>Add New Task</button>
                    </p>
                  </div>
                </span>
              ))}
            </div>
            <hr />
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </>
        </Layout>
      );
    }
}

export default Hours;
