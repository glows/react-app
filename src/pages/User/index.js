import React, { Component } from 'react';
import './user.css';
import { List, Icon, Badge } from 'antd-mobile';

import avatorUrl from 'assets/avator.png'
import backgroundUrl from 'assets/Oval11.png'
import ordersUrl from 'assets/orders.png'
import customerUrl from 'assets/customer.png'
import claimRecordUrl from 'assets/claim-record.png'
import myTeamUrl from 'assets/myteam.png'
import processingUrl from 'assets/processing.png'
import recordUrl from 'assets/record.png'
import standtoUrl from 'assets/standto.png'
import arrowUrl from 'assets/arrow.png'


const Item = List.Item;
const Brief = Item.Brief;
var sectionStyle = {
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${backgroundUrl})` 
};


export default class User extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="User">
        <div className="head">
          <p>我的</p>
        </div>
        
        <div className="profile-info" style={sectionStyle}>
          <div className="avatar">
              <img src={avatorUrl} alt="" className="img" />
          </div>
          <div className="desc">
            <p className="info">
               登陆/注册
            </p>
          </div>
          <div className="arrow"><span className="r-arrow"></span></div>
        </div>

        <div className="balance">
          <div className="balance-title">
            <div className="balance-name">我的收入</div>
            <div className="balance-arrow">去提现<Icon type="right" /></div>
          </div>
          <div className="clf"></div>
          <div className="balance-list">
            <div className="balance-item">
              <p>结算中</p>
              <a>211.22</a>
            </div>
            <div className="balance-item">
              <p>可提现</p>
              <a>211.22</a>
            </div>
            <div className="balance-item">
              <p>累计收入</p>
              <a>211.22</a>
            </div>
          </div>
        </div>

        <div className="todo">
          <div className="todo-title">
            <div className="todo-name">待办事项</div>
          </div>
          <div className="todo-list">
            <div className="todo-item">
            
              <div className="todo-icon"><Badge text={77} overflowCount={9} ><img src={recordUrl} /></Badge></div>
            
              <div className="todo-item-name">报价记录</div>              
            </div>
            <div className="todo-item">
              <div className="todo-icon"><Badge text={2} overflowCount={9} ><img src={processingUrl} /></Badge></div>
              <div className="todo-item-name">处理中</div>
            </div>
            <div className="todo-item">
              <div className="todo-icon">
              <img src={standtoUrl} />
              </div>
              <div className="todo-item-name">待续保</div>
            </div>

          </div>
          
        </div>

        <List renderHeader={() => ''}>
          <Item
            thumb={ordersUrl}
            // arrow="horizontal"
            onClick={() => { }}
            className="list"
          >全部订单</Item>
        </List>
        <List>
          <Item
            thumb={claimRecordUrl}
            // arrow="horizontal"
            onClick={() => { }}
            className="list"
          >理赔记录</Item>
        </List>
        <List>
          <Item
            thumb={customerUrl}
            // arrow="horizontal"
            onClick={() => { }}
            className="list"
          >客户管理</Item>
        </List>
        <List renderHeader={() => ''}>
          <Item
            thumb={myTeamUrl}
            // arrow="horizontal"
            onClick={() => { }}
            className="list"
          >我的团队</Item>
        </List>
      </div>
    )
  }
}