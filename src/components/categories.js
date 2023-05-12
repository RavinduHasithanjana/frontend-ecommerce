import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Paper, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    title: {
        paddingLeft: theme.spacing(5),
    },
    categories: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        marginInline: theme.spacing(2),
        marginTop: theme.spacing(3),
        textAlign: 'center',
        height: theme.spacing(23),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(3),
        },
    },
    paperinside: {
        marginTop: theme.spacing(3),
        marginInline: theme.spacing(0.5),
        height: theme.spacing(15),
        backgroundColor: '#f4f4f4',
    },
    grid: {
        paddingInline: theme.spacing(5),
        width: '100%',
    },
    gridpaper: {
        direction: "row",
    },
    paperprice: {
        // padding: theme.spacing(2),
        marginTop: '0px',
    }
}));
const Categories = () => {
    const classes = useStyles()
    return (
        <div className={classes.categories}>
            <h1 className={classes.title}>Categories</h1>
            <Grid container justifyContent="center" className={classes.grid} >
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} elevation={3}>New Arrivals
                        <Grid container justifyContent="center" className={classes.gridpaper}>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} elevation={3}>Top Ranking
                        <Grid container justifyContent="center" className={classes.gridpaper}>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} elevation={3}>Savings Spotlight
                        <Grid container justifyContent="center" className={classes.gridpaper}>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} elevation={3}>Hardware
                        <Grid container justifyContent="center" className={classes.gridpaper}>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} elevation={3}>Software
                        <Grid container justifyContent="center" className={classes.gridpaper}>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                                <p className={classes.paperprice}>$99.9</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper className={classes.paper} elevation={3}>Services
                        <Grid container justifyContent="center" className={classes.gridpaper}>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paperinside} elevation={0}></Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Categories