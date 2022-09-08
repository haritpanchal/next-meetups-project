import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
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
    id: "m2",
    title: "Second Meetup",
    image:
      "https://images.unsplash.com/photo-1661074578833-59d16206fc7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
    address: "56 Some Address, Old City",
    description: "This is the second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://images.unsplash.com/photo-1661039709699-9202ea61a2c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "15 Some Address, New City",
    description: "This is the first meetup",
  },
  {
    id: "m4",
    title: "Fourth Meetup",
    image:
      "https://images.unsplash.com/photo-1661074578833-59d16206fc7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
    address: "56 Some Address, Old City",
    description: "This is the second meetup",
  },
];
const index = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // page will be regenerated every 10 seconds
  };
}

export default index;
