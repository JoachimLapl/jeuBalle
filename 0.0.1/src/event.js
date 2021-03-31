// const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//     '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
//     'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', ' ']
const keyIsDown = {};
onkeydown = onkeyup = ({ key, type }) => {
    keyIsDown[key] = type === 'keydown';
    // if (key === 'ArrowLeft')
    //     (onLeftArrow ?? (() => { }))()
    // if (key === 'ArrowRight')
    //     (onRightArrow ?? (() => { }))()
    // if (key === 'ArrowUp')
    //     (onUpArrow ?? (() => { }))()
    // if (key === 'ArrowDown')
    //     (onDownArrow ?? (() => { }))()
    // if (key === ' ')
    //     (onSpace ?? (() => { }))()
}