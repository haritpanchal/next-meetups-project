import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      title="First Meetup"
      address="15 Some Address, New City"
      description="This is the first meetup"
      img="https://images.unsplash.com/photo-1661074578833-59d16206fc7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
    />
  );
};

export default MeetupDetails;
