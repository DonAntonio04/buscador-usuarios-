import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
      
      fetch("http://localhost:5005/api/users") .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los usuarios");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  
  // Filtro la lista completa 
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="status">Cargando...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="container">
      <input
        type="text"
        className="search"
        placeholder="Buscar usuario por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;