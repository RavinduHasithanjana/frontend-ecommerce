import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import sampleitem1 from '../images/sampleitem1.jpg'
import sampleitem2 from '../images/sampleitem2.jpg'
import { Grid, Paper } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
    mainCont: {
        marginTop: theme.spacing(13),
        marginBottom: theme.spacing(7),
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    main: {
        width: '77%',
        display: 'flex',
        marginLeft: '1%',
    },
    imageCont: {
        position: 'relative',
        width: '58%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // border: '1px solid #878787',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }
    },
    itemImgPreviewGrid: {
        position: 'relative',
        width: '10%',
        height: '0px',
        // border: '1px solid #878787',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: 10,
            // padding: theme.spacing(2),
            // height: '100%',
        }
    },
    itemImagePreviewCont: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        border: '1px solid #878787',
        margin: theme.spacing(0.5),
    },
    itemImagePreviewImg: {
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    itemImageCont: {
        width: '88%',
        paddingLeft: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            paddingLeft: 0,
            // padding: theme.spacing(2),
        }
    },
    itemImage: {
        position: 'relative',
        width: '100%',
        borderRadius: '10px',
        // border: '1px solid #878787',
    },
    itemDesc: {
        position: 'relative',
        width: '42%',
        paddingInline: theme.spacing(2),
        margin: '0',
        // border: '1px solid #ccc',
    },
    itemTitle: {
        marginTop: 0,
        fontSize: '1.5rem',
        fontWeight: '400',
        // textAlign: 'justify',
    },
    discount: {
        fontSize: '2rem',
        margin: theme.spacing(1),
        color: 'red',
    },
    price: {
        color: '#000',
    },
    listPrice: {
        fontSize: '0.75rem',
        margin: 0,
        color: '#4d4c4c',
        marginBottom: theme.spacing(2),
    },
    variations: {
        // marginTop: theme.spacing(3),
        marginInline: '5px',
        height: theme.spacing(7),
        width: theme.spacing(7),
        backgroundColor: '#f4f4f4',
    },
    aside: {
        marginInline: '1%',
        padding: theme.spacing(2),
        width: '20%',
        border: '1px solid #ccc',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: 10,
            marginInline: 0,
            // margin: 10,
        }
    }
}))
const Itemdisplay = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainCont}>
            <main className={classes.main}>
                {/* <h1>Header</h1> */}
                <div className={classes.imageCont}>
                    <Grid container className={classes.itemImgPreviewGrid} spacing={1} >
                        <Grid item xs={2} md={12} className={classes.itemImagePreviewCont}>
                            <img src={sampleitem1} alt="sampleimg" className={classes.itemImagePreviewImg} />
                        </Grid>
                        <Grid item xs={2} md={12} className={classes.itemImagePreviewCont}>
                            <img src={sampleitem1} alt="sampleimg" className={classes.itemImagePreviewImg} />
                        </Grid>
                        <Grid item xs={2} md={12} className={classes.itemImagePreviewCont}>
                            <img src={sampleitem1} alt="sampleimg" className={classes.itemImagePreviewImg} />
                        </Grid>
                        <Grid item xs={2} md={12} className={classes.itemImagePreviewCont}>
                            <img src={sampleitem1} alt="sampleimg" className={classes.itemImagePreviewImg} />
                        </Grid>
                        <Grid item xs={2} md={12} className={classes.itemImagePreviewCont}>
                            <img src={sampleitem1} alt="sampleimg" className={classes.itemImagePreviewImg} />
                        </Grid>
                        <Grid item xs={2} md={12} className={classes.itemImagePreviewCont}>
                            <img src={sampleitem1} alt="sampleimg" className={classes.itemImagePreviewImg} />
                        </Grid>
                    </Grid>
                    <div className={classes.itemImageCont}>
                        <img src={sampleitem2} alt="sampleimg" className={classes.itemImage} />
                    </div>

                </div>
                <div className={classes.itemDesc}>
                    <p className={classes.itemTitle}>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima aperiam culpa esse facere quod, veritatis quis vero vitae</p>
                    <Divider />
                    <p className={classes.discount}>-30%<span className={classes.price}>&emsp;$99.9</span></p>
                    <p className={classes.listPrice}>List Price: <del>$133.2</del></p>
                    <Divider />
                    <p className={classes.description}>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima aperiam.</p>
                    <p className={classes.description}>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima aperiam.</p>
                    <Divider />
                    <p className={classes.descriptionTitle}>Variations</p>
                    <Grid container direction="row" >
                        <Grid item xs={2}>
                            <Paper className={classes.variations} elevation={0}></Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper className={classes.variations} elevation={0}></Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper className={classes.variations} elevation={0}></Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper className={classes.variations} elevation={0}></Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper className={classes.variations} elevation={0}></Paper>
                        </Grid>
                    </Grid>
                </div>

            </main>
            <aside className={classes.aside}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias natus doloribus quia accusamus minima atque autem ipsum non. Ducimus iste nihil commodi enim consequuntur dolores atque quo voluptatem voluptatibus recusandae praesentium, officia aspernatur earum. Rerum corporis aliquam accusantium consectetur in molestias omnis! Nobis ipsa qui, aspernatur incidunt cum ipsam possimus in hic officia adipisci maiores ratione harum quas illum quibusdam optio ad reprehenderit, animi omnis voluptatibus similique obcaecati laboriosam molestias porro? Vitae voluptas temporibus laboriosam dolore adipisci asperiores beatae, debitis placeat quos doloribus eos nemo amet mollitia distinctio iure magnam assumenda culpa fugiat repellat ullam nobis ipsa inventore officia.</aside>
        </div>
    )
}

export default Itemdisplay