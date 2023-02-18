import PropTypes from 'prop-types';

function Color(props) {
    return (
        <span style={{ color: `#BCDBFF` }}>{props.children}</span>
    );
}

Color.propTypes = {
    code: PropTypes.string
};

export default Color;