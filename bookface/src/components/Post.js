import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Postcontents from "./postcontents";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  handlePost(event) {
    this.setState({ text: event.target.value });
  }
  handleAddPost() {
    const { post } = this.state;
    const newPost = { text: this.state.text };
    post.push(newPost);
    this.setState({ post: post });
  }

  render() {
    const { post } = this.state;
    const postComponents = post.map(post => <Postcontents text={post.text} />);
    return (
      <div style={{ margin: "2rem", marginRight: "20rem" }}>
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
          style={{ marginLeft: "63rem" }}
          variant={"contained"}
          color="yellow"
          type="submit"
          onClick={this.handleAddPost}
        >
          Create Post
        </Button>

        {postComponents}
      </div>
    );
  }
}
export default Post;
