import React from 'react';
import List from "./List"

const App = (props) => {
  const { client } = props
  return (
     <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center mt-5">My Task List</h1>
            <List client={client}/>
          </div>
        </div>
      </div>
  );
}

export default App;
