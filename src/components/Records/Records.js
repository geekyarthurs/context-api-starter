import React, { Component } from 'react'
import { Consumer } from '../../context';
export class Records extends Component {


    render() {


        return (
            <Consumer>
                {value => {
                    const { record } = value;
                    return (
                        <div className="margin-10">
                            <h1 className="text-center">Past Records</h1>

                            <table className="full-width">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Partner's Name</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {record.map(el => {

                                        const {id, name , partner, result} = el;

                                        return (
                                            <tr key = {id}>
                                                <td>{name}</td>
                                                <td>{partner}</td>
                                                <td>{result}</td>
                                            </tr>
                                        )

                                    })}


                                </tbody>
                            </table>
                        </div>
                    )
                }}

            </Consumer>
        )
    }
}

export default Records
