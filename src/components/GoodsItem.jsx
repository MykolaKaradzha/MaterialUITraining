import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card>
                <CardMedia
                    component={"img"}
                    image={poster}
                    className='card-img-top'
                    alt={name}
                    sx={{height: 140}}
                />
                <CardContent>
                    <Typography variant={'h6'} component={'h3'}>{name}</Typography>
                    <Typography variant={"body1"}>Цена: {price} UAH </Typography>
                    <CardActions>
                        <Button variant= {"contained"}
                            onClick={() =>
                                setOrder({
                                    id: props.id,
                                    name: props.name,
                                    price: props.price,
                                })
                            }
                        >
                            Купить
                        </Button>
                    </CardActions>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default GoodsItem;