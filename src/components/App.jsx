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
          <main className="header" >Customers who watched this item also watched</main>
            <div className="wrapper" >
              <div className="movieWheel">Movie Wheel</div>
              <div className="moreDetails" >More details</div>
              <Details className="details"/>
              <div className="description">Description and Information</div>
            </div>
        </div>
      )
    }  
};





export default App;