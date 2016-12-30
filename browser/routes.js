import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './react/app';
import About from './react/app/about';
import Projects from './react/app/projects';
import Cover from './react/app/cover';
import Team from './react/app/team';
import Sponsors from './react/app/sponsors';
import Contact from './react/app/contact';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Cover} />
        <Route path="about" component={About} />
        <Route path="projects" component={Projects} />
        <Route path="contact" component={Contact} />
        <Route path="sponsors" component={Sponsors} />
        <Route path="team" component={Team} />
        <Route path="*" component={Cover} />
      </Route>
    </Router>
  )
}

export default Routes;
