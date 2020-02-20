import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#6598ff',
            main: '#006bec',
            dark: '#0042b9',
            contrastText: '#fff',
        },
        // primary: blueGrey,
        secondary: grey,
    },
    typography: {
        fontFamily: [
            'Suisse Intl',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        color: '#3F3F41',
    },
    overrides: {
        // Style sheet name ⚛️
        // MuiButton: {
        //   // Name of the rule
        //   text: {
        //     // Some CSS
        //     color: 'white',
        //   },
        // }
        PrivateNotchedOutline: {
            root: {
            }
        },
        // '.MuiOutlinedInput-root:hover':{
        //     borderColor: '#EBEBEB !important'
        // },
        MuiFilledInput: {
            root: {
                fontSize: 14,
                '& input': {
                    padding: 12,
                    paddingTop: 30,
                    paddingBottom: 16,
                },
                '& .MuiInputAdornment-root': {
                    paddingTop: 30,
                    paddingBottom: 16,
                },
                '& p': {
                    fontSize: 14,
                }
            },
            underline: {
                background: '#F5F2F7 !important',
                borderBottom: '0px solid transparent',
                borderRadius: 12,
                '&:hover':{
                    background: '#F5F2F7',
                },
                '&:before, &:after': {
                    display: 'none'
                }
            }
        },
        MuiOutlinedInput: {
            root:{
                '& input': {
                    // minHeight: 32
                },
            //     '&:hover': {
            //         // notchedOutline: {
            //             borderColor: '#EBEBEB'
            //         // }
            //     }
            },
            notchedOutline: {
                borderColor: '#eee !important',
                borderWidth: '1px !important'
            }
        },
        MuiTextField: {

        },
        MuiButton: {
            root: {
                borderRadius: 12,
                width: '100%',
                '&.MuiButton-sizeLarge': {
                    minHeight: 60,
                }
            },
        },
        MuiToggleButtonGroup: {
          grouped: {
            '&:not(:first-child)': {
              borderLeft: '1px solid #EBEBEB'
            }
          }
        },
        // .MuiToggleButtonGroup-grouped:not(:first-child)
        MuiToggleButton: {
            root: {
                border: '1px solid #EBEBEB',
                backgroundColor: '#fff',
                '&.Mui-selected': {
                    // back
                    backgroundColor: '#fff !important',
                    color: '#000',
                    fontWeight: '500',
                    '&:hover': {
                        backgroundColor: '#fff !important',
                    }
                },
                '&:hover': {
                    backgroundColor: '#fff !important',
                }
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: '#DCE0E3'
            }
        }
    }
});
