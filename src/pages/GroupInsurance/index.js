import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile'

const Item = List.Item;

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

export default class GroupInsurance extends Component {
    state = {
        type: 'money',
    }
    render() {
        const { type } = this.state;
        return (
            <div className="body">
                <div>
                    <List renderHeader={()=> '投保信息'}>
                        <InputItem
                            type={type}
                            placeholder="请输入投保人数，无则不填"
                            clear
                            onChange={(v) => { console.log('onChange', v); }}
                            onBlur={(v) => { console.log('onBlur', v); }}
                            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                        >1~2类员工人数</InputItem>
                    </List>
                </div>
            </div>
        )
    }
}