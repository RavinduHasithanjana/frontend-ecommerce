import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import itemImage from '../images/sampleitem1.jpg'

const useStyles = makeStyles((theme) => ({
    mainTitle: {
        marginInline: theme.spacing(2),
    }
}))

const Itemgrid = () => {
    const classes = useStyles()
    return (
        <div>
            <h1 className={classes.mainTitle}>Items You May Like</h1>
            <Grid container spacing={2} justifyContent='space-evenly'>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    {/* <Paper elevation={2}>
                        
                    </Paper> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140px"
                            image={itemImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gaming Keyboard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Itemgrid