const styles = {

    person: {
        // border: '1px solid lightseagreen',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 20%)',
        gridTemplateRows: 'repeat(5, 20vh)',
        gridTemplateAreas: 'photo photo photo . ',
        // gridColumnGap: '5px',
        // gridRowGap: '5px',
        //
        // justifyItems: 'stretch',
        // alignItems: 'stretch',

    },

    photo: {
        // border: '1px solid blue',
        // borderRadius: '5px',
        backgroundColor: 'grey',
        gridColumn: '1 / 2 ',
        gridRow: '1 / 3',
    },

    about: {
        // border: '1px dashed indianred',
        // borderRadius: '5px',
        backgroundColor: 'yellow',
        gridColumn: '2 / span 4',
        gridRow: '1 / 3',
    },

    profile: {
        margin: '0',
        padding: '0',
        // border: '1px solid brown',
        // borderRadius: '5px',
        backgroundColor: 'green',
        gridColumn: '1 / span 5',
        gridRow: '3 / span 3',
    }
};

export default styles;


