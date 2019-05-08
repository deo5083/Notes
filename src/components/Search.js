import React from "react";
//import '../style/styles.css';

export class Search extends React.Component{
    render() {
        return (
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        );
    }
}