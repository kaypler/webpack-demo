import _ from 'lodash';
import './style.css';
import Icon from './github.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this scrpt
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的div
    var icon = new Image();
    icon.src = Icon;
    
    element.appendChild(icon);
    console.log(Data);

    return element;
}

document.body.appendChild(component());