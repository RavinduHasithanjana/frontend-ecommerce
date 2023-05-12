import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Copyrights from './copyrights';

import logoimg from "../images/ioralogo.jpg";

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "#8b002a",
        paddingTop: "2.5vw",
    },
    gridContainer: {
        marginTop: "2.5vw",
        marginLeft: "5vw",
        marginRight: "5vw",
        marginBottom: "5vw",
        [theme.breakpoints.down('xs')]: {
            marginLeft: "10vw",
            marginRight: "10vw",

        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: "10vw",
            marginRight: "10vw",

        }
    },
    logo: {
        height: "8vw",
        width: "15vw",
        marginBottom: "2vw",
        alignSelf: "center",
        [theme.breakpoints.only('sm')]: {
            height: "15vw",
            width: "30vw",

        },
        [theme.breakpoints.down('xs')]: {
            height: "18vw",
            width: "32vw",
            marginLeft: "0px"

        }
    },
    topic: {
        display: "flex",
        alignItems: "center",
        fontSize: "1.5vw",
        height: "4vw",
        marginBottom: "2vw",
        color: "#dcdddb",
        [theme.breakpoints.only('sm')]: {
            height: "10vw",
            fontSize: "2.5vw",

        },
        [theme.breakpoints.down('xs')]: {
            height: "14vw",
            fontSize: "3.5vw",

        }
    },
    content: {
        color: "#babcb9",
        paddingRight: "2vw",
        lineHeight: "28px",
        [theme.breakpoints.only('sm')]: {

            fontSize: "2.5vw",

        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "3vw",
            lineHeight: "18.5px",

        }
    },
    breakline: {
        height: "2px",
        backgroundColor: "#aca277",
        marginLeft: "5vw",
        marginRight: "5vw",

    },
    listContainer: {
        listStyleType: "none",
        color: "#babcb9",
        padding: '0 1vw 0 0',
        
    },
    list: {
        marginleft: "-4vw",
        marginBottom: "1vw",

        [theme.breakpoints.only('sm')]: {
            fontSize: "2.5vw",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "3vw",

        }
    },
    links: {
        color: '#babcb9',
        textDecoration: 'none',
        
    },
    phonenumber: {
        color: '#babcb9',
        textDecoration: 'underline',
    },
    email: {
        color: '#babcb9',
        textDecoration: 'underline',
    },

    quickLinks: {
        paddingLeft: "4vw",
    },
    contact: {
        paddingLeft: "4vw",
        [theme.breakpoints.down('sm')]: {

            paddingLeft: "0px",

        }
    },
    request: {
        paddingLeft: "4vw",
    }

}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footerContainer}>
            <div className={classes.breakline} />
            <div className={classes.gridContainer}>
                <Grid container>
                    <Grid item lg={3} md={3} sm={6} xs={6}>

                        <img src={logoimg} alt={"logo01"} className={classes.logo} />
                        <p className={classes.content}>
                            Come visit Iora Resort to experience the tranquilic nature and to explore the heritage of Sri Lanka.
                        </p>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6} className={classes.quickLinks}>
                        <h4 className={classes.topic}>QUICK LINKS</h4>
                        <ul className={classes.listContainer}>
                            <li className={classes.list}><a className={classes.links} href='#introduction'>Home</a></li>
                            <li className={classes.list}><a className={classes.links} href="#StillUnderDevelopment|:D">About US</a></li>
                            <li className={classes.list}><a className={classes.links} href='#image-grid'>Photos</a></li>

                        </ul>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6} className={classes.contact}>
                        <h4 className={classes.topic}>CONTACT US</h4>
                        <ul className={classes.listContainer}>
                            <li className={classes.list}><a className={classes.phonenumber} href='tel:0778110220'>+94778110220</a></li>
                            <li className={classes.list}><a className={classes.phonenumber} href='tel:0777926720'>+94777926720</a></li>

                        </ul>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={6} className={classes.request}>
                        <h4 className={classes.topic}>E-MAIL US</h4>
                        <ul className={classes.listContainer}>
                            <li className={classes.list}>Send us a mail to</li>
                            <li className={classes.list}><a href='mailto:ioraresort.services@gmail.com' className={classes.email}>ioraresort.services@gmail.com</a></li>

                        </ul>
                    </Grid>
                </Grid>
            </div>
            <Copyrights />
        </div>
    );
};

export default Footer;
