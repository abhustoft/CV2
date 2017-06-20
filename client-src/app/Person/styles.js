const styles = {

    person: {
        // border: '1px solid lightseagreen',
        display: 'grid',
        gridTemplateColumns: 'max-content auto',
        gridTemplateRows: 'max-content auto',
        gridColumnGap: '5px',
        gridRowGap: '5px',
    },

    photo: {
        border: '1px solid blue',
        borderRadius: '5px',
        backgroundColor: 'grey',
        gridColumn: '1',
        gridRow: '1',
    },

    about: {
        border: '1px dashed indianred',
        borderRadius: '5px',
        backgroundColor: 'yellow',
        gridColumn: '2',
        gridRow: '1',
    },

    profile: {
        margin: '0',
        padding: '0',
        border: '1px solid brown',
        borderRadius: '5px',
        backgroundColor: 'green',
        gridColumn: '1 / span 2',
        gridRow: '2',
    }
};

export default styles;


