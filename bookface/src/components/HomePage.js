import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';

import Post from './Post';
import Likedislike from '../inputs/likedislike';

class HomePage extends React.Component {
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
                
                    <Likedislike/>
                </Card>
                
            )
        });
        return (
            <div>

                <Typography variant={"h5"} align={'center'} style={{ margin: '2rem' }}>
                    BookFace Home
                </Typography>
                <Post />
                {cards}
                <Typography variant={"h6"} align={'center'} style={{ margin: '2rem' }}>
                    Feedback?
                </Typography>

            </div>
        )
    }
}

export default HomePage;