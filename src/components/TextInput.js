import React, { Component } from 'react';

class TextInput extends Component {
    state = {
        text: ""
    }

    render() {
        return <span className="textInput">
            <input
                type="text"
                placeholder="TODO"
                value={this.state.text}
                onKeyDown={this.onKeyDown}
                onChange={this.onChange} />
            <button onClick={this.handlerClick}>ADD</button>
        </span>
    }
    onChange = e => {
        const { value: text } = e.target;

        this.setState({
            text,
        });
    };

    onKeyDown = (e) => {
        const { value } = e.target;

        if (e.which === 13 & value.length > 0) {
            this.props.onSubmit(value);
            this.setState({
                text: '',
            });
        }
    }

    handlerClick = (e) => {
        e.preventDefault();
        if (this.state.text.length > 0) {
            this.props.onSubmit(this.state.text);
            this.setState({
                text: '',
            });
        }
    }
}

export default TextInput;