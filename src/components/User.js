const User = (props) => {
  return (
    <div className="user-card">
      <h3>Name : {props.name}</h3>
      <h4>Location: {props.location}</h4>
      <h4>Country : India</h4>
    </div>
  );
};

export default User;
