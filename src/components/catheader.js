import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Paper, makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import '../styles/categories.css'


const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: theme.spacing(15),
    },
    paper: {
        textAlign: 'center',
        height: theme.spacing(60),
        border: "1px solid #000",
        borderRadius: "0px",
        // [theme.breakpoints.down('xs')]: {
            
        // },
    },
    item1: {
        borderRadius: '10px 0px 0px 10px', 
        [theme.breakpoints.down('xs')]: {
            borderRadius: '10px 10px 0px 0px'
        },
    },
    item4: {
        borderRadius: '0px 10px 10px 0px',
        [theme.breakpoints.down('xs')]: {
            borderRadius: '0px 0px 10px 10px'
        },
    },
    grid: {
        paddingInline: theme.spacing(7),
    },
    list: {
        width: '100%',
    },
}));
const Categories = () => {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <Grid container justifyContent="center" className={classes.grid} >
                <Grid item xs={12} sm={3} >
                    <Paper className={`${classes.paper} ${classes.item1}`} elevation={0}>
                        <div className='categories-header-links'>
                            <List component="nav" aria-label="main mailbox folders" className={classes.list}>
                                <ListItem button>
                                    <ListItemText primary="Inbox" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Drafts" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Inbox" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Drafts" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Inbox" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Drafts" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Inbox" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Drafts" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Inbox" />
                                    <ListItemIcon>
                                        <KeyboardArrowRightIcon />
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper} elevation={0}>Image Carousel</Paper>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Paper className={`${classes.paper} ${classes.item4}`} elevation={0}>Other Ads and Promotions</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories