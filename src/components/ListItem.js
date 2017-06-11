import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        const { item } = this.props
        return <li>
            <div className="itemCheck"><input type="checkbox" onChange={this.onChange} checked={item.completed ? "true" : ""} /></div>
            <div className={item.completed ? "strike itemText" : "itemText"} onClick={this.handlerClick}>{item.text}</div>
            <button onClick={this.deleteHandler} className="remove"></button>
        </li>
    }
    onChange = () => {
        const { completeTodo } = this.props.actions;
        completeTodo(this.props.id);
    }

    handlerClick = e => {
        const { completeTodo } = this.props.actions;
        e.preventDefault();
        completeTodo(this.props.id);
    }

    deleteHandler = e => {
        e.preventDefault();
        const { removeTodo } = this.props.actions;
        removeTodo(this.props.id);
    }

}

export default ListItem