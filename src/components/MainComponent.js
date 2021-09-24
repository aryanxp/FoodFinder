import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/Dishes";
import { COMMENTS } from "../shared/comments";
import { PROMO } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Component } from "react";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promo,
    leaders:state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMO,
      leaders: LEADERS
    };
  }
  render() {
    const HomePage = () => {
      return (<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
      promo={this.state.promotions.filter((promo) => promo.featured)[0]}
      leader={this.state.leaders.filter((leader) => leader.featured)[0]}
              />
      );
    }

    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={() => <AboutUs leaders={this.state.leaders}/>} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
