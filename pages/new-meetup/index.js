import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredData) => {
    console.log(enteredData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
