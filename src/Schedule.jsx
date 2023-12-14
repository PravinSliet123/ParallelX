import React, { Component } from 'react';
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT, CellUnits,DemoData } from 'react-big-scheduler';
import moment from 'moment';


class YourComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schedulerData: this.createSchedulerData(),
        };
    }

    createSchedulerData() {
        const { dayStartFrom, dayStopTo } = this.props;

        return new SchedulerData(
            moment().format(DATE_FORMAT),
            ViewTypes.Custom,
            false,
            false,
            {
                // Your initial configuration...
                dayStartFrom: Number(dayStartFrom),
                dayStopTo: Number(dayStopTo),
                // ... other configuration options
            },
            {
                getCustomDateFunc: this.getCustomDate,
                isNonWorkingTimeFunc: this.isNonWorkingTime,

            }
        );
    }

    // Method to update dayStartFrom
    updateDayStartFrom = (newDayStartFrom) => {
        this.setState({
            schedulerData: {
                ...this.state.schedulerData,
                config: {
                    ...this.state.schedulerData.config,
                    dayStartFrom: Number(newDayStartFrom),
                },
            },
        });
    };



    render() {
        const { schedulerData } = this.state;

        return (
            <div>
                <Scheduler schedulerData={schedulerData} viewType={ViewTypes.Custom} />
                {/* Add a button or other UI element to trigger the update */}
                <button onClick={() => this.updateDayStartFrom(/* new value */)}>Update dayStartFrom</button>
            </div>
        );
    }

    getCustomDate = (schedulerData, num, date = undefined) => {
        const { viewType } = schedulerData;
        let selectDate = schedulerData.startDate;
        if (date != undefined)
            selectDate = date;

        let startDate = num === 0 ? selectDate :
            schedulerData.localeMoment(selectDate).add(2 * num, 'days').format(DATE_FORMAT),
            endDate = schedulerData.localeMoment(startDate).add(1, 'days').format(DATE_FORMAT),
            cellUnit = CellUnits.Hour;
        if (viewType === ViewTypes.Custom1) {
            let monday = schedulerData.localeMoment(selectDate).startOf('week').format(DATE_FORMAT);
            startDate = num === 0 ? monday : schedulerData.localeMoment(monday).add(2 * num, 'weeks').format(DATE_FORMAT);
            endDate = schedulerData.localeMoment(startDate).add(1, 'weeks').endOf('week').format(DATE_FORMAT);
            cellUnit = CellUnits.Day;
        } else if (viewType === ViewTypes.Custom2) {
            let firstDayOfMonth = schedulerData.localeMoment(selectDate).startOf('month').format(DATE_FORMAT);
            startDate = num === 0 ? firstDayOfMonth : schedulerData.localeMoment(firstDayOfMonth).add(2 * num, 'months').format(DATE_FORMAT);
            endDate = schedulerData.localeMoment(startDate).add(1, 'months').endOf('month').format(DATE_FORMAT);
            cellUnit = CellUnits.Day;
        }

        return {
            startDate,
            endDate,
            cellUnit
        };
    }

    isNonWorkingTime = (schedulerData, time) => {
        const { localeMoment } = schedulerData;
        if (schedulerData.cellUnit === CellUnits.Hour) {
            let hour = localeMoment(time).hour();
            if (hour < 1)
                return true;
        }
        else {
            let dayOfWeek = localeMoment(time).weekday();
            if (dayOfWeek === 0 || dayOfWeek === 6)
                return true;
        }

        return false;
    }
}

export default YourComponent;
