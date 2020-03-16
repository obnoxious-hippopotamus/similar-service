import React from 'react';
import Details from './Details.jsx';


class App extends React.Component {
    constructor() {
      super();


    }


    componentDidMount() {

    }

    render() {
      return (
        <div>
          <h1>Customers Who Watched This Item Also Watched</h1>
            <div className="wrapper" >
              <div className="movieWheel">Movie Wheel</div>
              <div className="description">Description Keys</div>
              <div className="details">Details and Information</div>
              {/* <Details /> */}
            </div>
        </div>
      )
    }  
};





export default App;