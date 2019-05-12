import React from 'react'
import LeftToolbar from './Toolbar/LeftToolbar';
import RightToolbar from './Toolbar/RightToolbar';


export class Toolbar extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <LeftToolbar/>
                </div>

                <div className="col-md-9">
                    <RightToolbar/>
                </div>
            </div>
        );
    }

}