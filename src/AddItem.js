import React, {Component} from 'react'

class AddItem extends Component {

    state = {
        item: null,
        id: null
    };

    handleChange = (e) => {
        // console.log(e.target.value);
        
        this.setState({
            item: e.target.value
        });
        
        //console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        //console.log(e.target.firstChild.value);
        e.target.firstChild.value = "";
        
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add an item..." onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AddItem;