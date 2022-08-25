import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://images.unsplash.com/photo-1661039709699-9202ea61a2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "15 Some Address, New City",
    description: "This is the first meetup",
  },
  {
    id: "m1",
    title: "Second Meetup",
    image:
      "https://images.unsplash.com/photo-1661074578833-59d16206fc7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
    address: "56 Some Address, Old City",
    description: "This is the second meetup",
  },
];
const index = () => {
  return (
    <Fragment>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Fragment>
  );
};

export default index;
