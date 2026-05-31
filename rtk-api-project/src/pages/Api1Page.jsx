import React, { useState } from 'react';
import { useLazyGetUserByIdQuery } from '../features/api/userApi';
import UserCard from '../components/UserCard';

const Api1Page = () => {
  const [userId, setUserId] = useState('');
  const [trigger, { data: user, error, isLoading, isFetching }] = useLazyGetUserByIdQuery();

  const handleFetchUser = () => {
    if (userId) {
      trigger(userId);
    }
  };

  return (
    <div className="api1-page">
      <h1>Fetch User by ID</h1>
      <div className="search-container">
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID (1-10)"
          min="1"
        />
        <button onClick={handleFetchUser} disabled={isLoading || isFetching}>
          {isLoading || isFetching ? 'Loading...' : 'Get User'}
        </button>
      </div>

      <div className="result-container">
        {isLoading || isFetching ? (
          <p>Loading user data...</p>
        ) : error ? (
          <p className="error-message">Error: User not found or API error.</p>
        ) : user ? (
          <UserCard user={user} />
        ) : (
          <p className="no-data">No user data to display. Please enter an ID and click "Get User".</p>
        )}
      </div>
    </div>
  );
};

export default Api1Page;
