import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Ciudad:</strong> {user.address.city}</p>
    </div>
  );
}

export default UserCard;
