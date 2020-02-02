import React from 'react';
import { withStore } from '@spyna/react-store'
import { withStyles } from '@material-ui/styles';
import theme from '../../theme/theme'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import BigNumber from "bignumber.js";
import RenJS from "@renproject/ren";

import {
    fromConnection,
    ephemeral
} from "@openzeppelin/network/lib";

import {
    initDeposit,
    initMonitoring,
    initInstantMonitoring,
    removeTx,
    initInstantSwap,
    recoverStreams
} from '../../utils/txUtils'

import ViewStream from './ViewStreamContainer'

const REACT_APP_TX_FEE = 100;
const signKey = ephemeral();
// const gasPrice = 10000000000;
const relay_client_config = {
  txfee: REACT_APP_TX_FEE,
  // force_gasPrice: gasPrice, //override requested gas price
  // gasPrice: gasPrice, //override requested gas price
  force_gasLimit: 200000, //override requested gas limit.
  gasLimit: 200000, //override requested gas limit.
  verbose: true
};



const styles = () => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  },
  navContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    minHeight: 52
  },
  contentContainer: {
      // boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.05)',
      // borderRadius: theme.shape.borderRadius,
      border: '1px solid #333',
      padding: theme.spacing(3),

      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(3),
      '& input': {
      }
  },
  input: {
      marginBottom: theme.spacing(2),
      width: '100%',
      '& input': {
          fontSize: 12
      },
      '& p': {
          fontSize: 12
      },
      '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.5) !important'
      }
  },
  amountContainer: {
    // paddingRight: theme.spacing(1)
  },
  amount: {
  },
  title: {
      fontSize: 16,
      fontWeight: 500,
      marginTop: theme.spacing(4)
  },
  unfinished: {
      // marginTop: theme.spacing(3)
  },
  depositItem: {
      fontSize: 12,
      marginBottom: theme.spacing(1)
  },
  depositStatus: {
      display: 'flex',
      justifyContent: 'space-between'
  },
  info: {
      fontSize: 12,
      marginBottom: theme.spacing(1),
      '& p': {
          marginBottom: 0
      }
  },
  divider: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      backgroundColor: '#999999'
  },
  desc: {
      marginBottom: theme.spacing(4),
      fontSize: 14,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
  },
  btcLink: {
      fontSize: 12
  },
  viewLink: {
      fontSize: 12,
      marginRight: theme.spacing(1),
  },
  actionTabs: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
  },
  swapButtonContainer: {
      textAlign: 'center',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
  },
  switchContainer: {
      textAlign: 'center',
      paddingBottom: theme.spacing(1),
      '& .MuiFormControlLabel-label': {
          fontSize: 12
      }
  },
  swapButton: {
  },
  radio: {
      marginBottom: theme.spacing(2),
      flexDirection: 'row',
      '& span': {
        fontSize: 12
      }
  },
  searchLink: {
      fontSize: 12,
      minWidth: 80
  }
})

class Ellipsis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            string: ''
        }
        this.interval = null
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const string = this.state.string
            if (string.length < 3) {
                this.setState({ string: (string + '.') })
            } else {
                this.setState({ string: '' })
            }
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <span>{this.state.string}</span>
    }
}

class StreamContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const { store } = this.props

        const txs = localStorage.getItem('stream.transactions')

        if (txs) {
            store.set('stream.transactions', JSON.parse(txs))
        }

        // // monitor normal swaps
        // initMonitoring.bind(this)()
        //
        // // monitor instant swaps
        // initInstantMonitoring.bind(this)()
    }

    componentWillUnmount() {
        clearInterval(this.swapMonitor)
    }

    async start() {
        const { store } = this.props
        const amount = store.get('stream.amount')
        const address = store.get('stream.address')
        const startTime = Math.round(Date.now() / 1000)
        const duration = store.get('stream.duration')

        const tx = {
            id: 'tx-' + Math.random().toFixed(6),
            type: 'stream',
            instant: false,
            awaiting: 'btc-init',
            source: 'btc',
            dest: 'eth',
            destAddress: address,
            amount: amount,
            startTime,
            duration,
            error: false,
            txHash: ''
        }

        store.set('stream.selectedTx', tx)
        store.set('stream.activeView', 'view-stream')

        initDeposit.bind(this)(tx)
    }

    viewTx(tx) {
        const { store } =  this.props 

        store.set('stream.selectedTx', tx)
        store.set('stream.activeView', 'view-stream')
    }

    render() {
        const {
            classes,
            store
        } = this.props

        const {
            adapterAddress,
        } = store.getState()

        console.log(store.getState())

        const amount = store.get('stream.amount')
        const address = store.get('stream.address')
        const transactions = store.get('stream.transactions')
        const activeView = store.get('stream.activeView')
        const selectedTx = store.get('stream.selectedTx')
        const searchAddress = store.get('stream.searchAddress')

        // const disabled = amount < 0.0001 || !address
        const disabled = false

        return <Grid container>
            <Grid item xs={12} className={classes.contentContainer}>
                <Grid container direction='column'>
                    {activeView === 'start' && <React.Fragment>
                        <Grid className={classes.desc} item xs={12}>
                            <span >Continously Stream Testnet BTC</span>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12} className={classes.amountContainer}>
                                    <TextField className={classNames(classes.input, classes.amount)}
                                        variant='outlined'
                                        size='small'
                                        placeholder='0.000000'
                                        onChange={e => {
                                            store.set('stream.amount', e.target.value)
                                        }}
                                        InputProps={{
                                            endAdornment: <InputAdornment className={classes.endAdornment} position="end">BTC</InputAdornment>
                                        }}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classNames(classes.input, classes.address)} variant='outlined' size='small' placeholder='Stream to BTC Address' onChange={e => {
                                        store.set('stream.address', e.target.value)
                                    }}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classNames(classes.input, classes.address)} variant='outlined' size='small' placeholder='Duration in Minutes' onChange={e => {
                                        store.set('stream.duration', e.target.value)
                                    }}/>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} className={classes.swapButtonContainer}>
                            <Button disabled={disabled} className={classes.swapButton} variant='outlined' color='primary' onClick={this.start.bind(this)}>Start Stream</Button>
                        </Grid>

                        <Divider className={classes.divider} />

                        <Grid item xs={12} className={classes.swapButtonContainer}>
                            <TextField
                                className={classNames(classes.input, classes.address)}
                                variant='outlined'
                                size='small'
                                placeholder='Search by Destination Address'
                                onChange={e => {
                                    store.set('stream.searchAddress', e.target.value)
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment
                                        className={classes.searchLink}
                                        position="end">
                                            <a href='javascript:;' onClick={() => {
                                                recoverStreams.bind(this)(searchAddress)
                                            }}>Get Streams</a>
                                        </InputAdornment>
                                }}/>
                        </Grid>

                        <Grid item xs={12} className={classes.unfinished}>
                            {transactions && transactions.length ? transactions.map((tx, index) => {
                                return <Grid key={index}
                                          container
                                          direction='row'
                                          className={classes.depositItem}>
                                    <Grid item xs={3}>
                                        {tx.amount} BTC
                                    </Grid>
                                    <Grid className={classes.depositStatus} item xs={9}>
                                        {tx.awaiting === 'btc-init' ? <span>
                                            {`Waiting for ${tx.instant ? '0' : '2'} confirmations to`}<Ellipsis/>{` ${tx.renBtcAddress}`}
                                        </span> : null}
                                        {tx.awaiting === 'ren-settle' ? <span>
                                            {`Submitting to RenVM`}
                                        </span> : null}
                                        {tx.awaiting === 'eth-settle' ? <span>
                                            {`Submitting to Ethereum`}
                                        </span> : null}
                                        {!tx.awaiting ? <span>{`Streaming in progress`}<Ellipsis /></span> : null}
                                        {tx.awaiting === 'btc-init' || tx.error || !tx.awaiting ? <div>
                                            <a href='javascript:;' className={classes.viewLink} onClick={() => (this.viewTx.bind(this)(tx))}>
                                                View
                                            </a>

                                            {tx.txHash ? <a className={classes.viewLink} target='_blank' href={'https://kovan.etherscan.io/tx/'+tx.txHash}>View transaction</a> : null}

                                            {tx.awaiting ? <a href='javascript:;' onClick={() => {
                                                removeTx(store, tx)
                                            }}>Cancel</a> : null}
                                        </div> : null}
                                    </Grid>
                                </Grid>
                            }) : null}
                        </Grid>
                    </React.Fragment>}
                    {activeView === 'view-stream' && <React.Fragment>
                        <ViewStream selectedTx={selectedTx} />
                    </React.Fragment>}
                </Grid>
            </Grid>

            {<Grid item xs={12} className={classes.info}>
                <p>
                    <b className={classes.caption}>How it Works</b>
                    <br/>
                    <br/>
                    This exchange uses <a target='_blank' href='https://renproject.io/'>RenVM</a>, <a target='_blank' href='https://uniswap.io/'>Uniswap</a>, and Open Zeppelin's <a target='_blank' href='https://gsn.openzeppelin.com/'>GSN</a> to facilitate trustless interoperabilty between Bitcoin and Ethereum. All swaps abstract ETH away from the user with the <b>GaaS pattern</b>, and faster swaps are faciliated using the <b>CaaS pattern</b>. To learn more, check out our interoperability tutorials below:
                </p>
                <ul>
                    <li><a target='_blank' href={'https://docs.renproject.io/developers/tutorials'}>GaaS Tutorial</a> | Gas-less transactions</li>
                    <li><a target='_blank' href={'https://docs.renproject.io/developers/tutorials'}>CaaS tutorial</a> | Faster swaps via expedited confirmations</li>
                </ul>
                <p>
                    Swaps are submitted to the following adapter address: <a target='_blank' href={'https://kovan.etherscan.io/address/'+adapterAddress}>{adapterAddress}</a>
                </p>
                <p>
                    To learn more about building interoperable applications like this with RenVM, check out our <a target='_blank' href='https://renproject.io/developers'>developer center</a> or the following links:
                </p>
                <ul>
                    <li><a target='_blank' href={'https://docs.renproject.io/developers/ren-sdk'}>Getting started with RenJS</a></li>
                    <li><a target='_blank' href={'https://docs.renproject.io/developers/gateway-js'}>Getting started with GatewayJS</a></li>
                    <li><a target='_blank' href={'https://github.com/renproject/ren/wiki'}>Github Spec</a></li>
                </ul>
            </Grid>}

        </Grid>
    }
}

export default withStyles(styles)(withStore(StreamContainer))
