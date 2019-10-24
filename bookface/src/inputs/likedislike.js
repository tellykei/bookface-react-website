import React from 'react';
import { IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
class Likedislike extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            like: 0,
            dislike:0,
            updatedlike:false,
            updateddislike:false,
  


        };
        this.handelAddlike=this.handelAddlike.bind(this);
        this.handleAdddislike=this.handleAdddislike.bind(this);

    }
    handelAddlike(event){
        const{like}=this.state;
        this.setState({like:like +1})
        this.setState({updatedlike:!this.state.updatedlike})
    }
    handleAdddislike(event){
        const{dislike}=this.state;
        this.setState({dislike:dislike+1})
        this.setState({updatedlike:!this.state.updateddislike})
    }
    render(){
        return <div>
              <IconButton 
                    variant={"contained"}
                    aria-label="like" 
                    onClick={this.handelAddlike}>
                    <ThumbUpIcon />
                    {this.state.like}
                </IconButton>
            
                <IconButton
                    variant = {"contained"}
                    aria-label="dislike"
                    onClick={this.handleAdddislike}>
                    <ThumbDownAltIcon/>
                    {this.state.dislike}
                </IconButton>
        </div>
    }
}
export default Likedislike;