import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";


class ProfilePage extends React.Component {
    render() {
        return (
        <div>
        <Card style={{ margin: '2rem' }}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Name
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Description
            </Typography>
          </Container>
          </Card>
        </div>
        );
    }
}

export default ProfilePage;