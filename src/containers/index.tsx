import React from 'react'
// import { Router, Route } from 'react-router'
// import { browserHistory } from 'react-router-dom'
import { BrowserRouter, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import Login from './Login'
// import Notfound from './Notfound'
// import Test from './Test'

export default function () {
  return (

    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

function Topics () {
  const match = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic () {
  const topicId = useParams()
  console.log('topicId', topicId)
  return <h3>Requested topic ID: </h3>
}

function About () {
  return (
    <>
      About Page
    </>
  )
}

function Users () {
  return (
    <>
      Users Page
    </>
  )
}

function Home () {
  return (
    <>
      Home Page
    </>
  )
}
