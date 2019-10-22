import React from 'react';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            like: 0,
            dislike:0,
            updatedlike:false,
            updateddislike:false

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
    render() {

        const cards = ['Fry', 'Leela', 'Zoidberg'].map((name) => {

            return (
                <Card style={{ margin: '2rem' }}>

                    <CardContent>

                        <Typography variant={"h5"}>
                            {name}
                        </Typography>

                        <Typography color={"textSecondary"}>
                            info about user
                        </Typography>

                        <Typography variant={"body2"}>
                            <br />
                            Status:
                            <br />
                            {'"This is where user\'s feed will appear."'}
                        </Typography>
                    </CardContent>

                    <CardActions>
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
                    </CardActions>
                </Card>
            )
        });

        return (
            <div>

                <Typography variant={"h5"} align={'center'} style={{ margin: '2rem' }}>
                    BookFace Home
                </Typography>

                {cards}

                <Typography variant={"h6"} align={'center'} style={{ margin: '2rem' }}>
                    Feedback?
                </Typography>

            </div>
        )
    }
}

export default HomePage;