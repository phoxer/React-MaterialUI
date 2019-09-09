import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme,props) => ({
    menu_paper: props=>({
        ...props,
        width: '300px',
        minWidth: '300px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    }),
    list:{
        padding: props=> props.subList? '0rem .5rem':'1rem'
    },
    list_title:{
        color: theme.lists.title,
        fontSize: '15px',
        marginTop: '.5rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        fontWeight: '500',
        paddingLeft: '.3rem',
        height: '21px',
        borderBottom: theme.lists.border
    },
    list_item:{
        padding: '.2rem .5rem',
        opacity: 0.8,
        borderRadius: '.5rem'
    },
    list_item_title:{
        color: theme.lists.title,
        fontSize: '15px',
        fontWeight: '500',
        marginTop: '1px',
        flexGrow: 1
    },
    list_icon:{
        minWidth: '26px',
        maxWith: '26px'
    },
    
    
}));
export default useStyles;