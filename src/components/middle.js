import React, { useEffect } from 'react';  //useState
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";  //Icon
import { Context as ProductsContext } from "../context/productsContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: "4vw",
            marginRight: "4vw",
            marginTop: "5vw",
            marginBottom: "9vw"
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: "20vw",
            marginRight: "4vw",
            marginTop: "3vw",
            marginBottom: "3vw",
        },
    },
    paper: {
        justifyContent: "center",
    },
    pack: {
        borderRadius: "15px",
        border: "3px solid #FFFFF",
        background: "#FAC7B6",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        [theme.breakpoints.up('md')]: {
            width: "18vw",
            marginTop: "4vw"
        },
        [theme.breakpoints.only('sm')]: {
            width: "32vw",
            marginBottom: "5vw",
        },
        [theme.breakpoints.down('xs')]: {
            width: "42vw",
            marginBottom: "5vw",
        },
    },
    header: {
        textAlign: 'left',
        color: '#eb108b'
    },
    description: {
        textAlign: 'left',
        color: '#eb108b'
    },
    price: {
        fontSize: '50px',
        color: '#2e3191',
        textAlign: 'right',
    },
    value: {
        fontSize: "40px",
        color: '#2e3191'
    },
    logo: {
        position: 'relative',
        borderRadius: '10px' ,
        objectfit: 'contain',
        width: '100%',
        height: '200px',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
            height: '100px',
        },
    }
}))



const Midsection = () => {

    const { state: { ProductsList }, getAllProducts, } = React.useContext(ProductsContext);

    useEffect(() => {
        getAllProducts();

    }, []);


    const classes = useStyles()
    return (

        <div className={classes.root}>

            
            <Grid container direction="row" >
                {ProductsList.map(products => (
                    <Grid className={classes.paper} item lg={3} md={3} sm={3} xs={12}>
                        <div className={classes.pack}>
                            <img src={"http://173.82.235.105:3009/" + products.product_img} alt={"logo01"} className={classes.logo} />
                            <h1 className={classes.header}>{products.product_name}</h1>
                            <p className={classes.description}>{products.product_description}</p>
                            <h1 className={classes.price}>${products.product_price}</h1>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <AddIcon sx={{ fontSize: "50px" }}></AddIcon>
                                <label className={classes.value}>1</label>
                                <RemoveIcon sx={{ fontSize: "50px" }}></RemoveIcon>
                            </div>
                            <Button variant="contained" color="primary">
                                Add Cart
                            </Button>
                        </div>
                    </Grid>
                ))}

            </Grid>

        </div >

    );
};

export default Midsection;
