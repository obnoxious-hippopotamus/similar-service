import React from 'react';
import Axios from 'axios';
import Details from './Details.jsx';
import Descriptions from './Descriptions.jsx';
import Footer from './Footer.jsx';
import MovieWheel from './MovieWheel.jsx'


class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        moviePosters: []
      }

    }


    componentDidMount() {
      console.log('mounted');
      Axios.get('http://localhost:3003/api/similars')
      .then(results => {
        return results
      })
      .then(posters => {
        this.setState({
          moviePosters: posters.data.results
        },() => { console.log(posters.data.results); })
      })
      .catch( err => {
        console.log(err);
        })
    }



    render() {
      return (
        <div>
          <main className="mainHeader" >Customers who watched this item also watched</main>
            <div className="wrapper" >
              <MovieWheel moviePosters={this.state.moviePosters} className="movieWheel" />
              <div className="moreDetailsHeader">More details</div>
              <Details className="details"/>
              <Descriptions className="description"/>
              <Footer className="footer" />
            </div>
        </div>
      )
    }  
};





export default App;