import { Component } from 'react';
import InsideBigBox from "./InsideBigBox";

class InsideBigBoxLietuva extends Component {
    constructor() {
      super();
      this.state = {
      };
    }
    
    render() {
      return (
        <InsideBigBox
          title={"Labas, Lietuva!"}
          text={"Lietuva, Tėvyne mūsų,Tu didvyrių žeme,Iš praeities Tavo sūnūsTe stiprybę semia."}
        />
      )
    }
}

export default InsideBigBoxLietuva;