import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import Likedislike from '../inputs/likedislike';
class Postcontents extends React.Component{
    render(){
       
        const{text}=this.props;
        return <div>
             <Card style={{ margin: '2rem' }}>

                <CardContent>

                    <Typography variant={"h5"}>
                        {"You"}
                    </Typography>

                    <Typography color={"textSecondary"}>
                        info about user
                    </Typography>

                    <Typography variant={"body2"}>
                        <br />
                        Status:
                        <br />
                        {text}
                    </Typography>
                </CardContent>
                <Likedislike />
            </Card>
        </div>
    }
}
export default Postcontents;