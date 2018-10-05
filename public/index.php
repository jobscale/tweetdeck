<!doctype html>
<html>
<head>
    <title>Download TweetDeck Desktop</title>
    <style>
        * { overflow: hidden; }
        html, body {
            color: #222;
            background-color: #666;
            height: 100vh;
            margin: 0;
        }
        .full-height {
            height: 100vh;
        }
        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }
        .position-ref {
            position: relative;
        }
        .top-right {
            position: absolute;
            right: 4vw;
            top: 3vh;
        }
        .content {
            text-align: center;
        }
        .title {
            font-size: 3.6vw;
            letter-spacing: .3vw;
        }
        .m-b-md {
            margin: 6vh;
            font-size: 3vw;
            letter-spacing: .3vw;
        }
        .subtitle {
            font-size: 1.5vw;
        }
        .links {
            text-align: left;
            margin: 0 8vw;
        }
        .links > a {
            color: #222;
            padding: 0 1vw;
            font-size: 2vw;
            letter-spacing: .3vw;
            text-decoration: none;
        }
        .anim-bound {
            -webkit-animation: bounce-text 2s 1 cubic-bezier(0.245, 0.325, 0.67, 1.51);
            animation: bounce-text 2s 1 cubic-bezier(0.245, 0.325, 0.67, 1.51);
        }
        @-webkit-keyframes bounce-text {
            60% {
                font-size: 7vw;
            }
            100% {
                font-size: 7vw;
            }
        }
        @keyframes bounce-text {
            60% {
                font-size: 7vw;
            }
            100% {
                font-size: 7vw;
            }
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="top-right links">
        <a href="http://gate.jsx.jp/login">Login</a>
        <a href="http://gate.jsx.jp/register">Register</a>
    </div>
    <div class="content">
        <div class="title">
            <div>TweetDeck Desktop Application</div>
        </div>
        <div class="m-b-md anim-bound">
            <div id="date">Download</div>
        </div>
        <div class="links">
            <div class="subtitle">Ubuntu 18.04, Ubuntu Other, Lubuntu, Xubuntu, Debian</div>
            <a href="tweetdeck_1.0.0_amd64.deb" download="tweetdeck_1.0.0_amd64.deb">tweetdeck_1.0.0_amd64.deb</a><br>
            <div class="subtitle">Other Linux</div>
            <a href="tweetdeck-1.0.0.tar.xf" download="tweetdeck-1.0.0.tar.xf">tweetdeck-1.0.0.tar.xf</a><br>
            <div class="subtitle">Other</div>
            <a href="tweetdeck-1.0.0-x86_64.AppImage" download="tweetdeck-1.0.0-x86_64.AppImage">tweetdeck-1.0.0-x86_64.AppImage</a><br>
        </div>
    </div>
</div>
</body>
</html>
