

import Image from './image';
import {Grid} from '@material-ui/core';
const Images = ({data}) =>{
    return(
        <Grid container>
            {
                data.map(image =>(
                    <Grid key={image.id} xs={3} item> <Image image ={image}/></Grid>
                ))
            }
        </Grid>
    )
}

export default Images;