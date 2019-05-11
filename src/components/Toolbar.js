import React from 'react'
import Search from './Search';

export class Toolbar extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-10">
                            <Search/>
                        </div>
                        
                        <button className="btn btn-primary">
                            <i className="fa fa-plus" aria-hidden="true"></i> 
                        </button>
                    </div>
                </div>

                <div className="col-md-9">
                    [Toolbar]
                </div>
            </div>
        );
    }

}