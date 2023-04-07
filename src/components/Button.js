import './Button.css';

function MyButton(props) {
    return(
        <div className='button' onclick={props.action}>
                <img src={props.source} alt={props.alt}/>
                <h3>{props.nome}</h3>
        </div>
    )
};

export default MyButton;