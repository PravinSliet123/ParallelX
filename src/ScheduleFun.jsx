import React, { Component } from 'react'
//import moment from 'moment'
//import 'moment/locale/zh-cn';
import moment from 'moment'
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT, CellUnits } from 'react-big-scheduler'
import withDragDropContext from './withDnDContext'



class Basic extends Component {
    constructor(props) {
        super(props);
        // console.log('props: ', props);
        this.state = {
            resources: [
                {
                    "id": "unasigned",
                    "branch": 34,
                    "name": "",
                    "capacity": 15,
                    "seat_type": "box",
                    "smoking": "smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-11-14T17:45:17.823980+09:00",
                    "linked": []
                },
                {
                    "id": "220",
                    "branch": 34,
                    "name": <div className='custom-resource' style={{ display: "flex", width: "100%" }}>
                        <p>Pravin</p>
                        <p>Kumar</p>
                    </div>,
                    "capacity": 15,
                    "seat_type": "box",
                    "smoking": "smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-11-14T17:45:17.823980+09:00",
                    "linked": []
                },
                {
                    "id": "219",
                    "branch": 34,
                    "name": "1",
                    "capacity": 2,
                    "seat_type": "table",
                    "smoking": "smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-11-10T20:59:13.666882+09:00",
                    "linked": []
                },
                {
                    "id": "61",
                    "branch": 34,
                    "name": "202",
                    "capacity": 8,
                    "seat_type": "table",
                    "smoking": "smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-10-11T15:25:29.102984+09:00",
                    "linked": []
                },
                {
                    "id": "60",
                    "branch": 34,
                    "name": "201",
                    "capacity": 4,
                    "seat_type": "table",
                    "smoking": "smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-10-11T15:24:58.619281+09:00",
                    "linked": []
                },
                {
                    "id": "29",
                    "branch": 34,
                    "name": "004",
                    "capacity": 4,
                    "seat_type": "table",
                    "smoking": "smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-09-29T17:34:30.142244+09:00",
                    "linked": []
                },
                {
                    "id": "28",
                    "branch": 34,
                    "name": "003",
                    "capacity": 2,
                    "seat_type": "box",
                    "smoking": "non-smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-08-25T18:14:17.267164+09:00",
                    "linked": []
                },
                {
                    "id": "282",
                    "branch": 34,
                    "name": "003",
                    "capacity": 2,
                    "seat_type": "box",
                    "smoking": "non-smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-08-25T18:14:17.267164+09:00",
                    "linked": []
                },
                {
                    "id": "284",
                    "branch": 34,
                    "name": "003",
                    "capacity": 2,
                    "seat_type": "box",
                    "smoking": "non-smoking",
                    "is_available": true,
                    "order": null,
                    "index": null,
                    "created_at": "2023-08-25T18:14:17.267164+09:00",
                    "linked": []
                }
            ],
            events: [
                {
                    id: 1,
                    start: "2023-12-01 08:15:00",
                    end: "2023-12-01 11:00:00",
                    resourceId: "220",
                    title: 'Breakfast',
                    bgColor: '#5fb47d'
                },
                {
                    id: 2,
                    start: "2023-12-01 18:15:00",
                    end: "2023-12-01 :00:00",
                    resourceId: "unasigned",
                    title: 'Breakfast',
                    bgColor: '#d67f2f'
                },
                {
                    id: 3,
                    start: "2023-11-27 10:15:00",
                    end: "2023-11-27 11:00:00",
                    resourceId: "unasigned",
                    title: 'Breakfast',
                    bgColor: '#d67f2f'
                },
                {
                    id: 4,
                    branch: 34,
                    title: "Breakfast",
                    resourceId: "219",
                    start: "2023-11-27 08:15:00",
                    end: "2023-11-28 11:00:00",
                    bgColor: '#5fb47d'
                },

            ]

        }
        moment.locale('ja')
        let schedulerData = new SchedulerData(moment().format(DATE_FORMAT), ViewTypes.Custom, false, false, {
            customCellWidth: 30,
            nonAgendaDayCellHeaderFormat: 'M月D日|HH:mm',
            addMorePopoverHeaderFormat: 'YYYY年M月D日dddd',
            views: [

            ],
            resourceName: "テーブル",
            minuteStep: 15,
            schedulerWidth: window.screen.width <= 1400 ? 1000 : 1100,
            // schedulerMaxHeight: 500,
            scrollToSpecialMomentEnabled: false,
            




        }, {
            getCustomDateFunc: this.getCustomDate,
            isNonWorkingTimeFunc: this.isNonWorkingTime,

        });

        // schedulerData.localeMoment.locale('jpy');
        this.state = {
            ...this.state,
            viewModel: schedulerData,
        }

        // console.log('this.state.resources: ', this.state.resources);

        schedulerData.setResources(this.state.resources);

        schedulerData.setEvents(this.state.events);

        this.state = {
            ...this.state,
            viewModel: schedulerData
        }
    }
    render() {
        const { viewModel } = this.state;
        return (
            <div>
                <div>
                    <Scheduler
                        scrollToTime={this.state.scrollToTime}
                        onScrollToTime={this.handleScrollToTime}
                        schedulerData={viewModel}
                        prevClick={this.prevClick}
                        nextClick={this.nextClick}
                        onSelectDate={this.onSelectDate}
                        onViewChange={this.onViewChange}
                        eventItemClick={this.eventClicked}
                        //    viewEventClick={this.ops1}
                        //    viewEventText="Ops 1"
                        //    viewEvent2Text="Ops 2"
                        //    viewEvent2Click={this.ops2}
                        updateEventStart={this.updateEventStart}
                        updateEventEnd={this.updateEventEnd}
                        moveEvent={this.moveEvent}
                        resourceContent={this.resourceRenderer}
                    //    newEvent={this.newEvent}


                    />
                </div>
            </div>
        )
    }
    handleScrollToTime = () => {

    }
    onViewChange = (schedulerData, view) => {
        console.log('view: ', view);
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        //schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
        // if(event.id)
        // {
        //  const [err, res] = await request(
        //      'PATCH',
        //      endpoints.RESERVATION_BY_ID(event.id, localStorage.getItem('restaurant')),
        //      {
        //        start_time:event.start,
        //        end_time: event.end,
        //        table: [Number(event.resourceId)],
        //      }
        //    ) 
        // }
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(moment(date).format("YYYY-MM-DD"));
        //schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        console.log('schedulerData: ', event);
        if (event.id) {
            this.props.redirect(event.id)
        }
        // alert(`You just clicked an event: {id: ${event.resourceId}, title: ${event.title}}`);

    };

    ops1 = (schedulerData, event) => {
        alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
        alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    // newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    //     if (window.confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)) {

    //         let newFreshId = 0;
    //         schedulerData.events.forEach((item) => {
    //             if (item.id >= newFreshId)
    //                 newFreshId = item.id + 1;
    //         });

    //         let newEvent = {
    //             id: newFreshId,
    //             title: 'New event you just created',
    //             start: start,
    //             end: end,
    //             resourceId: slotId,
    //             bgColor: 'purple'
    //         }
    //         schedulerData.addEvent(newEvent);
    //         this.setState({
    //             viewModel: schedulerData
    //         })
    //     }
    // }

    updateEventStart = async (schedulerData, event, newStart) => {
        if (event.id === "ui") {
            return
        }
        schedulerData.updateEventStart(event, newStart);
        this.setState({
            viewModel: schedulerData
        })

    }

    updateEventEnd = async (schedulerData, event, newEnd) => {
        if (event.id === "ui") {
            return
        }
        schedulerData.updateEventEnd(event, newEnd);
        console.log('newEnd: ', newEnd);
        this.setState({ prevEnd: event.end })
        console.log('schedulerData: ', schedulerData);


        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = async (schedulerData, event, slotId, slotName, start, end) => {
        if (event.id === "ui") {
            return
        }
        console.log('schedulerData', slotId);
        const { resourceId } = event
        console.log('resourceId: ', event);
        // const dateInYYYYMMDDFormat = event.start;
        // const specificTime = '18:00:00';
        // const timeZoneOffset = '+09:00';
        // console.log('movedata: ', event);
        // const dateTimeString = moment(`${dateInYYYYMMDDFormat} ${specificTime}`).format(
        //     `YYYY-MM-DDTHH:mm:ss${timeZoneOffset}`
        //   );
        if (slotId !== "unassigned") {
            event.bgColor = "#5FB47D"
        }
        else {
            event.bgColor = "#c27f2fd9"
        }

        schedulerData.moveEvent(event, slotId, slotName, start, end);
        this.setState({
            viewModel: schedulerData
        })



    }

    getCustomDate = (schedulerData, num, date = undefined) => {
        console.log('date: ', date);
        console.log('num: ', num);
        const { viewType } = schedulerData;
        console.log('schedulerData: ', schedulerData);
        let selectDate = schedulerData.startDate;
        if (date != undefined)
            selectDate = date;
        let startDate = num === 0 ? selectDate :
            schedulerData.localeMoment(selectDate).add(1 * num, 'days').format("YYYY-MM-DD"),
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
        let date = localeMoment(time);

        console.log("timestamp", moment(time).format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"))
        
        if (moment(time).format("YYYY-MM-DD") !== moment(time).add(1, "days").format("YYYY-MM-DD")) {

            console.log('schedulerData.config: ', schedulerData.config);
        }
        else
        {
        }
        // schedulerData.config.dayStartFrom = 8
        return false;

    }

    prevClick = (schedulerData) => {
        schedulerData.prev();
        // this.props.onPrevious(schedulerData)
        // schedulerData.setEvents(this.props.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData) => {
        console.log('schedulerData: ', schedulerData);
        schedulerData.next();
        // this.props.onNext(schedulerData)
        // schedulerData.setEvents(this.props.events);
        // schedulerData.setEvents(this.props.event);
        this.setState({
            viewModel: schedulerData
        })
    }
    resourceRenderer = (resource) => {
        console.log('resource: ', resource.name);
        return (
            <div className='Resources'>

                <span style={{ fontSize: '16px' }}>{resource.name}</span>
            </div>
        );
    };
}

export default withDragDropContext(Basic)
