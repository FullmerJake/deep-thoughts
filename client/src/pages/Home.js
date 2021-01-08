import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

// When we load the HOME component in the application, we'll execute the query for the thought data. 
const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // Get the thought data out of the query's response
  // the weird syntax is known as optional chaining
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
          <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
