import React, { Component } from 'react';

class Count extends Component {
    state = {
        number: 0,
        foo:{
            bar: 0,
            foobar: 1
        }
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1,
            foo:{
                ...this.state.foo,
                foobar: 2,
            }
        });
    }

    handleDecrease = () => {
        // this.setState({
        //     number: this.state.number - 1
        // });

        this.setState(
            ({number}) => ({
                number: number -1
            })
        )
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <div>foo값 : {this.state.foo.foobar}</div>
            </div>
            // <div>
            //     안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            // </div>
        )
    }
}

// 함수형 component 
// Class형 component와 다르게 state와 LifeCycle이 빠져있음.
const Alias = ({ name }) => {
    return (
        <div>
            안녕하세요! 제 별명은 <b>{name}</b> 입니다.
        </div>
    );
};

Count.defaultProps = {
    name: "바보",
};

export default Count;
export {Alias};