import React from 'react';
import Input from './input';
import ClearBtn from './clear';
import Numbers from './numbers';
import Symbols from './symbols';

class Main extends React.Component{
    state = {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        buttons: {
            clearBtn: 'clear',
            symbols: ['=', '+', '-', '/']
        },
        current: 0,
        output: []
    };

    updateInput = (val, type) => {
        console.log(type)
        if(val === 'clear') {
            this.setState({ current: 0, output: [] })
        } else if(val === '=') {
            
            this.setState({ current: this.state.output })
        } else {
            
            this.setState({ current: val });
            this.setState({ output: [...this.state.output, val] });
            
        }
        
    };

    
    render() {
        console.log(`output is: ${this.state.output.join('')}`);
        console.log(`current is: ${this.state.current}`)
        
        let printNums = this.state.numbers.map(item => <Numbers num={item} onClick={this.updateInput} />);
        let printSymbols = this.state.buttons.symbols.map(item => <Symbols symbol={item} onClick={this.updateInput} />)

        return(
            <div>

                <div>
                    <Input output={this.state.output} current={this.state.current} />
                </div>

                <div>
                    <ClearBtn onClick={this.updateInput} />
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