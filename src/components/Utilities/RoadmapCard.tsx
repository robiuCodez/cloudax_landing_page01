import { roadmap } from "@/src/data/roadmap";
import { IRoadmap } from "@/src/interfaces";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const RoadmapCard = () => {
  return (
    <div className="font-space">
      <VerticalTimeline>
        {roadmap.map(({ Icon, title, points, timeline }, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={timeline.month + timeline.phase}
            key={index}
            icon={<Icon />}
          >
            {/* <Icon /> */}
            <h3 className="font-bold text-xl">{title}</h3>
            <div>
              {points.map((point, index) => (
                <p key={index}>- {point}</p>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default RoadmapCard;
