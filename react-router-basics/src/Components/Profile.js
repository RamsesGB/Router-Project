import { Link } from 'react-router-dom';

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <h2>User Profile</h2>
      <Link to="/profile/10">Edit Profile</Link>
    </div>
  );
};

export default Profile;
