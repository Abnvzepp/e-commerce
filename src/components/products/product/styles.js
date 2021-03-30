import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth:345,
    },
    media: {
        height: 40,
        paddingTop: '45.50%',
    },
    cardActions: {
        display:'flex',
        justifyContent:'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));