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
            symbols: ['=', '+', '-', '/', '*']
        },
        current: 0,
        input: null,
        output: [],
        result: 0,
    };

    updateInput = (val, type) => {
        // console.log(type)
        if(val === 'clear') {
            this.setState({ current: 0, result: 0, input: null, output: [] })
        } else if(val === '=') {
            this.setState({ current: 0, input: null, output: [] })
        } else {
        
            // this.setState({ current: val });
            this.setState({ output: [...this.state.output, val] });
            if(type === 'num') {
                
                // this.setState({ result: val });

                if(this.state.input === '+') {
                    this.setState({ result: Number(this.state.result) + Number(val) })
                }
                if(this.state.input === '-') {
                    this.setState({ result: Number(this.state.result) - Number(val) })
                }
                if(this.state.input === '/') {
                    this.setState({ result: Number(this.state.result) / Number(val) })
                }
                if(this.state.input === '*') {
                    this.setState({ result: Number(this.state.result) * Number(val) })
                }
                if(this.state.input === 'num' || this.state.input === null) {
                    this.setState({ result: `${this.state.result}${val}` });
                    this.setState({ current: this.state.result });
                }


                this.setState({ input: type });
 
            } else if(type === 'sym') {
                
                this.setState({ input: val });
            }
        }
        
        
    };

    
    render() {
        // console.log(`output is: ${this.state.output.join('')}`);
        // console.log(`current is: ${this.state.current}`)
        console.log(`Input is: ${this.state.input}`)
        
        let printNums = this.state.numbers.map(item => <Numbers num={item} onClick={this.updateInput} />);
        let printSymbols = this.state.buttons.symbols.map(item => <Symbols symbol={item} onClick={this.updateInput} />)

        return(
            <div>

                <div>
                    <Input result={this.state.result} current={this.state.current} output={this.state.output} />
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