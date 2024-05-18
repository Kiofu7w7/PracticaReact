import PropTypes from 'prop-types';

const App = ({ title = "No hay nada", subTitle, number }) => {

    return (
        <>
            <h1>PRUEBA</h1>
            <p>{title}</p>
            <p>{subTitle}</p>
            <p>Numero: {number}</p>
        </>
    )
}

export default App

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    number: PropTypes.number
};