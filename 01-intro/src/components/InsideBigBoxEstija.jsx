import { Component } from 'react';
import InsideBigBox from "./InsideBigBox";

class InsideBigBoxEstija extends Component {
    constructor() {
      super();
      this.state = {
      };
    }
    
    render() {
      return (
        <InsideBigBox
        title={"Labas Estija!"}
        text={"Mu isamaa, mu õnn ja rõõm, kui kaunis oled sa! Ei leia mina iial teal see suure, laia ilma peal, mis mul nii armas oleks ka, kui sa, mu isamaa!"}
        />
      )
    }
}

export default InsideBigBoxEstija;