import Brown from "./Brown";
import Green from "./Green";

const ColorHolder = props => { 

    // ----------------------------------------

    if (props.showColor === 1) {
        return (
            <Green/>
        );
    }
        return (
            <Brown/>
        );

    // -----------------------------------------

    // return (
    //     <>
    //         {
    //             props.showColor && <Green/>
    //         }
    //     </>
    //     )

    // ------------------------------------------

    // let color = (props.showColor === 1) ? <Green/> : <Brown/>

    // return color;
}

export default ColorHolder;