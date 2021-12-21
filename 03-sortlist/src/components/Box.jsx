import { Component } from 'react';
import ListItem from './ListItem';
import Button from './Button';
import { letters } from '../shared/uldata';

class Box extends Component {
    constructor() {
        super();
        this.state = {
            list: letters
        }
    }
    doSort = (method) => {

        const list = this.state.list

        if ('sort' === method)
            this.setState({
              list: list.sort((a, b) => a.d > b.d ? 1 : -1)
        })

        if ('unsort' === method) {
            this.setState({
                list: list.sort(() => Math.random() > .5 ? 1 : -1)
            })
        }
    }
    render() {
        return (
        <>
            <ul className="box">
            {
              this.state.list.map((letter) => <ListItem key={letter.id} li={letter.d}></ListItem>)
            }
          </ul>
          <div className='buttons'>
          <Button sort={this.doSort} action={'sort'} name={'SORT ALPHABETICALLY'}></Button>
          <Button sort={this.doSort} action={'unsort'} name={'SHAKE IT UP...!'}></Button>
          </div>
        </>
        )
    }
}

export default Box