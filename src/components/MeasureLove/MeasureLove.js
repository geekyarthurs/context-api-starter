import React, { Component } from 'react'
import uuid from 'react-uuid';


import { Consumer } from '../../context';
export class MeasureLove extends Component {

    state = {
        name: '',
        partner: '',
        result: null
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    onSubmit = (dispatch , e ) => {

        e.preventDefault();

        const {name, partner} = this.state;

        const result = Math.floor(Math.random() * 101);

        this.setState({ result });

        dispatch({type : 'ADD_LOVE', payload: {id: uuid(), name, partner, result}});

        




    }


    

    reset = () => this.setState({ name: '', partner: '', result: null })

    render() {
        return (
            <Consumer>
                {value => {

                    const { dispatch } = value;

                    return (
                    <div className="measure-love-container">
                        <h1>Measure Love </h1>

                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="partner">Partner's Name</label>
                                <input type="text" name="partner" value={this.state.partner} onChange={this.onChange} />



                            </div>


                            <button type="submit" className="red">Check Love</button>

                        </form>
                        <button className="gray" onClick={this.reset}>Clear</button>


                        <h3 className="result">Result: {} {this.state.result ? this.state.result : "Not Evaluated"}</h3>
                    </div>
                    
                    )
                }}

            </Consumer>
        )
    }
}

export default MeasureLove
