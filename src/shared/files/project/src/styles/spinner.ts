#!/usr/bin/env node

module.exports = () => {
    return `.status__spinner {
    background: rgba(255, 255, 255, 0.8);
    z-index: 9;
    width: 100%;
    height: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .circular {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-animation: rotate 2s linear infinite;
        animation: rotate 2s linear infinite;
        max-width: 100px;
        max-height: 100px;
        z-index: 10;
    }
    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        -webkit-animation: dash 1.5s ease-in-out infinite;
        animation: dash 1.5s ease-in-out infinite;
        stroke-linecap: round;
        @include themify($themes) {
            stroke: themed('spinnerColor');
        }
    }
}

.status__spinner--blank {
    background: white;
}

.status__spinner--fixed {
    position: fixed;
}

.status__spinner--open {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.status__spinner--small .circular {
    max-width: 64px;
    max-height: 64px;
}

@media (max-width: 767px) {
    .status__spinner .circular {
        max-width: 80px;
        max-height: 80px;
    }
    .status__spinner--small .circular {
        max-width: 40px;
        max-height: 40px;
    }
}

@-webkit-keyframes rotate {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes rotate {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}`;
};