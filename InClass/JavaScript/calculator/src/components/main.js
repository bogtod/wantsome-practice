import React from 'react';
import Input from './input';
// import ClearBtn from './clear';
import Numbers from './numbers';
import Symbols from './symbols';

class Main extends React.Component{
    state = {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        buttons: {
            clearBtn: 'clear',
            symbols: ['=', '+', '-', '/']
        },
        result: 0
    };

    updateInput() {
        
    }

    render() {
        
        let printNums = this.state.numbers.map(item => <Numbers num={item} />);
        let printSymbols = this.state.buttons.symbols.map(item => <Symbols symbol={item} />)

        return(
            <div>

                <div>
                    <Input result={this.state.result}/>
                </div>

                <div id="numbersWrap">
                    {printNums}
                </div>

                <div id="symbolsWrap">
                    {printSymbols}
                </div>

            </div>
            
        )
    };

};

export default Main;