import {card,makeStyles} from '@material-ui/core';



const useStyles = makeStyles({
    image:{
        height:300,
        width:'100%',
        objectFit:'cover'
    }
})

const Images = ({image}) =>{
    const classes = useStyles();
    return (
        <card>
        <img src={image.largeImageURL} className={classes.image}/>
        </card>
    )
}


export default Images;