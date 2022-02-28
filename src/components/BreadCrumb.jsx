import {Box,TextField,makeStyles} from '@material-ui/core'



const useStyles = makeStyles(theme =>({
    commponent:{
        background:'#F6F6F6',
        '&>*':{
            margin: theme.spacing(1)
        }
    }
}))

const BreadCrumb = ({onTextChange,onCountChange}) =>{
    const classes = useStyles();
    return (
        <Box m={1}className={classes.commponent}>
            <TextField
                label="Search Images"
                onChange={(e)=>onTextChange(e.target.value)}
            />

            <TextField
                label="Number Of Images"
                onChange={(e)=>onCountChange(e.target.value)}
            />
        </Box>
    )
}

export default BreadCrumb;