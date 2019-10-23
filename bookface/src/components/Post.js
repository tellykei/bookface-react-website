import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post:[]
        }
        this.handleAddPost = this.handleAddPost.bind(this);
        this.handlePost=this.handlePost.bind(this);
    }
    handlePost(event){
        this.setState({text: event.target.value});
    }
    handleAddPost(){
        const{post}=this.state;
        const newPost = {names:"me",text:this.state.text}
        post.push(newPost);
        this.setState({post:post});
        alert({this.state.text});
    }
    render(){
        const{post}=this.state;
        const postComponents = post.map((name)=>{
            return(
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
                            {""+this.state.text}
                        </Typography>
                    </CardContent>
                </Card>
                
            )
        });
        return( 
        <div style={{ margin:"2rem",marginRight:"20rem"}}>
        <TextField
            id="outlined-multiline-flexible"
            label="Type what you feel"
            multiline
            rowsMax="4"
            fullWidth
            margin="normal"
            variant="outlined"
            value={this.state.text}
            onChange={this.handlePost}
         />
        <Button
        style={{marginLeft:"63rem"}}
        variant={"contained"}
        color="yellow"
        type = "submit"
        onClick={this.handleAddPost}
        >
        Create Post
    </Button> 
    {postComponents}
    </div>)
        }
    

}
export default Post