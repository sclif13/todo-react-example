import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import { bindActionCreators } from 'redux'
import TextInput from './TextInput'
import List from './List'

class App extends Component {
  render() {
    const { addTodo } = this.props.actions
    return <div className="todo">
      <TextInput onSubmit={text => addTodo(text)} />
      <List data={this.props.data} actions={this.props.actions}/>
    </div>
  }
}

const mapStateToProps = (state, props) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
