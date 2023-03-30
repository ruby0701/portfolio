import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Timeline() {
    return (
        <div className='timeline'>
            <VerticalTimeline lineColor='black'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2013.09-2017.06"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<SchoolIcon></SchoolIcon>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        National Taipei University, New Taipei City
                    </h3>
                    <p>Bachelor Degree</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2017.09-2018.04"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<SchoolIcon></SchoolIcon>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        National Normal University, Taipei City
                    </h3>
                    <p>Master Degree (Unfinshed)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2019.04-2020.08"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<SchoolIcon></SchoolIcon>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Aso College, Hakata, Japan
                    </h3>
                    <p>Bachelor Degree (Unfinshed)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2020.12-2021.08"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<WorkIcon></WorkIcon>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        National Cheng Kung University,EE Department, Tainan
                    </h3>
                    <p>Research Assitant</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2021.09-present"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<WorkIcon></WorkIcon>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Taiwan Obayashi Group, Taipei
                    </h3>
                    <p>Coordinator</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div >
    );
}

export default Timeline;