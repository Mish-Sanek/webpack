import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import AppImage from '@/assets/app-image.svg';
function ToDo() {
    console.log('====================================');
    console.log('todo function');
    console.log('====================================');
}
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    ToDo('sldskf');
    var increment = function () { return setCount(function (prev) { return prev + 1; }); };
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "Is Desktop Platform" });
    }
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "Is Mobile Platform" });
    }
    if (__ENV__ === 'development') {
        console.log('====================================');
        console.log('dev');
        console.log('====================================');
    }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["Platform=", __PLATFORM__] }), _jsxs("aside", { children: [_jsx("img", { src: avatarPng, width: 100, alt: "" }), _jsx("img", { src: avatarJpg, width: 100, alt: "" }), _jsx(AppImage, { width: 100, height: 'auto', className: classes.icon })] }), _jsxs("nav", { children: [_jsx(Link, { to: '/', children: "Home" }), "||", _jsx(Link, { to: '/about', children: "About" }), "||", _jsx(Link, { to: '/shop', children: "Shop" })] }), _jsx("h1", { className: classes.value, children: count }), _jsx("button", { className: classes.button, onClick: increment, children: _jsx("span", { children: "inc" }) }), _jsx(Outlet, {})] }));
};
