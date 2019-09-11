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
        padding: '.5rem 1rem'
    },
    list_title:{
        color: theme.lists.title,
        fontSize: '.8rem',
        marginTop: '.2rem',
        marginLeft: '1rem',
        marginRight: '1rem',
        fontWeight: '500',
        paddingLeft: '.3rem',
        height: '21px',
        borderBottom: theme.lists.border
    },
    list_item:{
        padding: '.2rem .5rem',
        borderRadius: '.5rem'
    },
    list_item_title:{
        color: theme.lists.items,
        fontSize: '.9rem',
        fontWeight: '500',
        marginTop: '1px',
        flexGrow: 1
    },
    list_icon:{
        color: theme.lists.items,
        minWidth: '30px',
    },
    
    
}));
export default useStyles;