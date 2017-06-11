import React from 'react'
import ListItem from './ListItem'


const List = ({ data, actions }) => {
    return <ul className="todoList">
        {data.map((item, index) => {
            return <ListItem key={index} item={item} id={index} actions={actions}/>
        })}
    </ul>
}

export default List