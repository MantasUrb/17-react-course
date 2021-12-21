const Box = (props) => {
    return (
        <div class='box'>
            <span style={props.numberStyle}>
                {props.number}
            </span>
        </div>
    )
}

export default Box;