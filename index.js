module.exports = {
    colorizer (color){
        color = color.toLowerCase();
        const consoleColors = {
            "warn": '\x1b[35mWARN \x1b[0m',
            "error": '\x1b[31mERROR \x1b[0m',
            "log": '\x1b[34mLOG \x1b[0m',
            "server": '\x1b[33mSERVER \x1b[0m'
        };
        switch (color){
            case 'bright':
                return "\x1b[1m";
                break;
            case 'dim':
                return "\x1b[2m";
                break;
            case 'underscore':
                return "\x1b[3m";
                break;
            case 'blink':
                return "\x1b[4m";
                break;
            case 'reverse':
                return "\x1b[5m";
                break;
            case 'hidden':
                return "\x1b[6m";
                break;
            case 'fgblack':
                return "\x1b[30m";
                break;
            case 'fgred':
                return "\x1b[31m";
                break;
            case 'fggreen':
                return "\x1b[32m";
                break;
            case 'fgyellow':
                return "\x1b[33m";
                break;
            case 'fgblue':
                return "\x1b[34m";
                break;
            case 'fgmagenta':
                return "\x1b[35m";
                break;
            case 'fgcyan':
                return "\x1b[36m";
                break;
            case 'fgwhite':
                return "\x1b[37m";
                break;
            case 'bgblack':
                return "\x1b[40m";
                break;
            case 'bgred':
                return "\x1b[41m";
                break;
            case 'bggreen':
                return "\x1b[42m";
                break;
            case 'bgyellow':
                return "\x1b[43m";
                break;
            case 'bgblue':
                return "\x1b[44m";
                break;
            case 'bgmagenta':
                return "\x1b[45m";
                break;
            case 'bgcyan':
                return "\x1b[46m";
                break;
            case 'bgwhite':
                return "\x1b[47m";
                break;
            case 'reset':
                return "\x1b[0m";
                break;
            case 'error':
                return consoleColors.error;
                break;
            case 'log':
                return consoleColors.log;
                break;
            case 'warn':
                return consoleColors.warn;
                break;
            case 'server':
                return consoleColors.server;
                break;
            default:
                return `${colorizer('fgred')}No color found${colorizer('reset')}`;
                break;
        }
    }
}