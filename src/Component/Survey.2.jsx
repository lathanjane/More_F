import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import '../Style/comm.scss'

var Survey2 = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  componentDidMount() {
  },

  render: function() {
    var navbtn = {
      "margin": "0px"
    }

    var headertext = {
      "margin":" 0px ",
      "color":" #fff",
      "font-size":" 1.2em ",
      "font-weight":" 500",
      "overflow":" visible "
    }

    var part1 = {
      "background-color": " #9BBB59 "
    }

    var part2 = {
      "background-color": " #FFC000 "
    }

    var part3 = {
      "background-color": " #548DD4 "
    }

    var part4 = {
      "background-color": " #B2A1C7 "
    }

    var spansublabel= {
      "margin-left":" 5px",
      "font-size":" .8em",
      "color":" #aaa"
    }

    var guardbottom= {
      "height":" 1px",
      "margin-top":" 1.5em"
    }
    return (

      <div>

        <div data-role="page" id="step1">

          <div data-role="header" style={part1}>
            <h3 style={headertext}>基本信息填写(必填2)</h3>
          </div>

          <div role="main" class="ui-content">

            <legend>性别</legend>
            <input type="radio" name="gender" id="gender-n" value="0" />
            <label for="gender-n">男</label>
            <input type="radio" name="gender" id="gender-y" value="1" />
            <label for="gender-y">女</label>

            <label for="date">出生年月日</label>
            <input type="date" name="date" id="date" value="" />

            <label for="height">身高m<span style={spansublabel}>(可计算BMI)</span></label>
            <input type="text" name="height" id="height" value="" />

            <label for="weight">体重kg<span style={spansublabel}>((可计算BMI)</span></label>
            <input type="text" name="weight" id="weight" value="" />

            <label for="waistline">腰围cm</label>
            <input type="text" name="waistline" id="waistline" value="" />

            <label for="BMI">BMI<span  style={spansublabel}>体重/身高的平方</span></label>
            <input type="text" name="BMI" id="BMI" value="" />

            <legend>有无严重既往病史</legend>
            <input type="radio" name="disease" id="disease-n" value="0" />
            <label for="disease-n">否</label>
            <input type="radio" name="disease" id="disease-y" value="1" />
            <label for="disease-y">是</label>

            <legend>有无严重家族遗传病史</legend>
            <input type="radio" name="familial-hereditary-disease" id="familial-hereditary-disease-n" value="0" />
            <label for="familial-hereditary-disease-n">否</label>
            <input type="radio" name="familial-hereditary-disease" id="familial-hereditary-disease-y" value="1" />
            <label for="familial-hereditary-disease-y">是</label>

            <legend>吸烟否</legend>
            <input type="radio" name="smoke" id="smoke-n" value="0" />
            <label for="smoke-n">否</label>
            <input type="radio" name="smoke" id="smoke-y" value="1" />
            <label for="smoke-y">是</label>
            <input type="radio" name="smoke" id="smoke-j" value="2" />
            <label for="smoke-j">刚戒烟</label>

            <legend>育否<span  style={spansublabel}>(仅女性)</span></legend>
            <input type="radio" name="birth" id="birth-n" value="0" />
            <label for="birth-n">否</label>
            <input type="radio" name="birth" id="birth-y" value="1" />
            <label for="birth-y">是</label>

            <legend>是否久坐少动<span  style={spansublabel}>(每周运动少于3次，每次少于30分钟，此情况已有3个月)</span></legend>
            <input type="radio" name="longsit" id="longsit-n" value="0" />
            <label for="longsit-n">否</label>
            <input type="radio" name="longsit" id="longsit-y" value="1" />
            <label for="longsit-y">是</label>

            <legend>有无运动损伤<span  style={spansublabel}>(已就医或需就医的)</span></legend>
            <input type="radio" name="injure" id="injure-n" value="0" />
            <label for="injure-n">否</label>
            <input type="radio" name="injure" id="injure-y" value="1" />
            <label for="injure-y">是(若有请说明)</label>


            <div>
              <label for="injureposition">损伤部位</label>
              <select name="injureposition" id="injureposition">
                <option value="1">肩</option>
                <option value="2">肘</option>
                <option value="3">腕</option>
                <option value="4">髋</option>
                <option value="5">膝</option>
                <option value="6">踝</option>
                <option value="7">颈椎</option>
                <option value="8">胸椎</option>
                <option value="9">腰椎</option>
                <option value="0">其他</option>
              </select>
            </div>
            <div>
              <label for="otherposition">其他情况</label>
              <textarea cols="40" name="otherposition" id="otherposition"></textarea>
            </div>

          </div>

          <div class="guard-bottom"></div>
          <div class="btn-footer ui-footer-fixed">
            <a href="#step2" style={navbtn}>下一步</a>
          </div>
        </div>

        <div data-role="page" id="step2">

          <div data-role="header" style={part2}>
            <h3 style={headertext}>基本信息(选填尽量填)</h3>
          </div>

          <div role="main" class="ui-content">
            <legend>是否高血压</legend>
            <input type="radio" name="hypertension" id="hypertension-n" value="0" />
            <label for="hypertension-n">否</label>
            <input type="radio" name="hypertension" id="hypertension-y" value="1" />
            <label for="hypertension-y">是</label>
            <legend>是否高血脂</legend>
            <input type="radio" name="hyperlipaemia" id="hyperlipaemia-n" value="0" />
            <label for="hyperlipaemia-n">否</label>
            <input type="radio" name="hyperlipaemia" id="hyperlipaemia-y" value="1" />
            <label for="hyperlipaemia-y">是</label>
            <legend>是否高血糖</legend>
            <input type="radio" name="hyperglycaemia" id="hyperglycaemia-n" value="0" />
            <label for="hyperglycaemia-n">否</label>
            <input type="radio" name="hyperglycaemia" id="hyperglycaemia-y" value="1" />
            <label for="hyperglycaemia-y">是</label>
            <legend>睡眠质量</legend>
            <select name="sleep" id="sleep">
              <option value="1">很好</option>
              <option value="2">好</option>
              <option value="3">一般</option>
              <option value="4">差</option>
              <option value="5">很差</option>
            </select>
          </div>
          <div class="guard-bottom"></div>
          <div class="ui-footer-fixed">
            <a href="#step3" class="ui-btn nav-btn">下一步</a>
          </div>
        </div>
        <div data-role="page" id="step3">

          <div data-role="header" style={part3}>
            <h3 style={headertext}>个人运动信息(选填尽量填)</h3>
          </div>

          <div role="main" class="ui-content">
            <legend>健身目标</legend>
            <select name="fitness" id="fitness">
              <option value="1">提升阶段</option>
              <option value="2">减脂</option>
              <option value="3">塑形</option>
              <option value="4">体能提升</option>
              <option value="5">产后恢复</option>
              <option value="6">其他</option>
            </select>
            <div>
              <label for="otherfitness">其他情况</label>
              <textarea cols="40" name="otherfitness" id="otherfitness"></textarea>
            </div>
            <legend>有无健身习惯</legend>
            <input type="radio" name="fitnesshabit" id="fitnesshabit-y" value="1" />
            <label for="fitnesshabit-y">有<span  style={spansublabel}>(若有，请填写下列选项)</span></label>
            <input type="radio" name="fitnesshabit" id="fitnesshabit-n" value="0" />
            <label for="fitnesshabit-n">无</label>
            <div>
              <label for="fitnessway">每周健身方式</label>
              <input type="text" name="fitnessway" id="fitnessway" value="" />
              <label for="fitnesstimes">健身次数</label>
              <input type="text" name="fitnesstimes" id="fitnesstimes" value="" />
            </div>
          </div>
          <div class="guard-bottom"></div>
          <div class="ui-footer-fixed">
            <a href="#step4" class="ui-btn nav-btn">下一步</a>
          </div>
        </div>
        <div data-role="page" id="step4">

          <div data-role="header" style={part4}>
            <h3 style={headertext}>个人资料信息</h3>
          </div>

          <div role="main" class="ui-content">
            <label for="name">姓名</label>
            <input type="text" name="name" id="name" value="" />
            <label for="job">职业</label>
            <input type="text" name="job" id="job" value="" />
            <label for="phone">手机</label>
            <input type="text" name="phone" id="phone" value="" />
            <label for="wechat">微信</label>
            <input type="text" name="wechat" id="wechat" value="" />
          </div>
          <div class="guard-bottom"></div>
          <div class="ui-footer-fixed">
            <a href="#result" class="ui-btn nav-btn">确定</a>
          </div>
        </div>
        <div data-role="page" id="result">

          <div data-role="header">
            <h3 style={headertext}>Bar</h3>
          </div>

          <div role="main" class="ui-content">
            result result result
        </div>
          <div class="guard-bottom"></div>
          <div class="ui-footer-fixed">
            <a href="#step1" class="ui-btn nav-btn">返回首页</a>
          </div>
        </div>
      </div>
    )
  }
});
ReactDOM.render(
  <Survey2 promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
  document.getElementById('example')
);

export default Survey2;
