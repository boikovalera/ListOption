import PropTypes from 'prop-types';

const itemOption = PropTypes.shape({    
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    textColor: PropTypes.string,
    typeBackgraundColor: PropTypes.string,
    isDone: PropTypes.bool.isRequired,
});

const listOption = PropTypes.arrayOf(itemOption);

const itemDialogOption = PropTypes.shape({    
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    textColor: PropTypes.string,
    typeBackgraundColor: PropTypes.string,
    isDone: PropTypes.bool.isRequired,
});

const listDialogOption = PropTypes.arrayOf(itemDialogOption);

const itemColor = PropTypes.shape({        
    value: PropTypes.string,
    label: PropTypes.string    
});

const listColor = PropTypes.arrayOf(itemColor);

export default {
    ...PropTypes, itemOption, listOption, listOption, listDialogOption, itemColor, listColor
}