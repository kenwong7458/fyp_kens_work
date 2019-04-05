import React from 'react';
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import LocalStream from '../Classroom_Components/LocalStream'
import RemoteStream from '../Classroom_Components/RemoteStream'

const styles = theme => ({
    card: {
        width: 92,
        height: 80
    }
})

class UserCardSmall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true,
            self: null,
            drawRight: 'Read Only',
            camOpen: true
        };
    }

    disableWebcam() {
        this.setState({ camOpen: false })
    }

    render() {
        const { user } = this.props;
        const { classes, ...other } = this.props;
        return (
            <Card className={classes.card}>
                {user}
                <Webcam {...other} camOpen={this.state.camOpen} />
            </Card>
        )
    }
}

function Webcam(props) {
    const { self, user } = props
    if (user === self) {
        return (
            <LocalStream
                width={460}
                height={300}
                {...props}
            />
        )
    } else {
        return (
            <RemoteStream
                width={460 / 5}
                height={300 / 5 + 15}
                {...props}
                small={true}
                key={user}
            />
        )
    }
}

export default withStyles(styles)(UserCardSmall);