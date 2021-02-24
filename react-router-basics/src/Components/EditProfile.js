const EditProfile = (props) => {
  console.log(props);
  return <p> Edit profile page for user with ID:{props.match.params.id}</p>;
};

export default EditProfile;
