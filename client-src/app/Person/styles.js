const styles = {
    person: {
        border: '1px solid lightseagreen',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 10vw)',
        gridTemplateRows: 'repeat(5, 20%)',
        gridTemplateAreas: 'photo photo photo . . . . . . .',
        gridColumnGap: '5px',
        gridRowGap: '5px',

        justifyItems: 'stretch',
        alignItems: 'stretch',

    },


    myPhoto: {
        border: '1px dashed #99D3FF',
        gridArea: 'photo'
    },

    about: {
        border: '1px dashed indianred',
        gridArea: '4 / 6 / 4 / 6',
    }
};

export default styles;


