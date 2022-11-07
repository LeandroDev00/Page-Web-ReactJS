import PropTypes from 'prop-types'

function Item({nome, telefone,email, profissao, idade}){
    return(
        <>
            <ul>
                {nome}
                <br></br>
                {telefone}
                <br></br>
                {email}
                <br></br>
                {profissao}
                <br></br>
                {idade}
            </ul>
        </>
    )
}

Item.propTypes = {
    nome: PropTypes.string.isRequired,
    telefone: PropTypes.number,
    email: PropTypes.string,
    profissao: PropTypes.string,
    idade: PropTypes.number
}

Item.defaultProps={
    nome: 'Insira um nome',
    telefone: 'Insira um telefone',
}

export default Item