import React from 'react';
import Web3 from "web3";
import { withStore } from '@spyna/react-store'
import { withStyles } from '@material-ui/styles';
import theme from '../theme/theme'
import classNames from 'classnames'

import AccountIcon from '@material-ui/icons/AccountCircle';
import WifiIcon from '@material-ui/icons/Wifi';


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const styles = () => ({
    navContainer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        minHeight: 52
    },
    logo: {
        height: 22,
        width: 25,
        marginRight: theme.spacing(1)
    },
    accountButton: {
      '& svg': {
        marginRight: theme.spacing(1)
      }
    }
})

class NavContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
    }

    render() {
        const {
            classes,
            store
        } = this.props

        const walletAddress = store.get('walletAddress')
        const isSignedIn = walletAddress && walletAddress.length

        console.log(this.props, this.state, this.props.store.getState())

        return <Grid item xs={12}>
            {<Grid className={classes.navContainer} container alignItems='center'>
              <Grid item xs={6}>
                  <Grid container alignItems='center'>
                      <Typography variant='h6'>RenVM Interoperability</Typography>
                  </Grid>
              </Grid>
            </Grid>}
        </Grid>
    }
}

export default withStyles(styles)(withStore(NavContainer))
