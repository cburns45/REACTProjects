import React from 'react';


class Pokemon extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.id}</p>
                <img src = {this.props.sprites} />
            </div>
        );
    }
}

export default Pokemon;