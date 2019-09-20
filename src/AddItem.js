import React, {Component} from 'react'
import './AddItem.css'

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

        if(e.target.firstChild.firstChild.value !== "") {
            this.props.addItem(this.state);
            //console.log(e.target.firstChild.firstChild);
            e.target.firstChild.firstChild.value = "";
        }

        
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Add a new todo..." className="form-control bg-dark text-light"
                        onChange={this.handleChange} />
                </div>

                
                <button type="submit" className="btn btn-outline-warning">Add</button>
            </form>
        );
    }
}

export default AddItem;