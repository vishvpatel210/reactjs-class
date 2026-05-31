import React from 'react';
import { useGetUsersQuery } from '../features/api/userApi';
import UserCard from '../components/UserCard';

const Api2Page = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading all users...</p>;
  if (error) return <p className="error-message">Error fetching users.</p>;

  return (
    <div className="api2-page">
      <h1>All Users</h1>
      <div className="user-grid">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Api2Page;
