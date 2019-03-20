import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamShow from './Streams/StreamShow';
import StreamList from './Streams/StreamList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/stream/new' component={StreamCreate} />
          <Route path='/stream/edit' component={StreamEdit} />
          <Route path='/stream/delete' component={StreamDelete} />
          <Route path='/stream/show' component={StreamShow} />
        </div>
      </BrowserRouter>

    )
  }
}

export default App
