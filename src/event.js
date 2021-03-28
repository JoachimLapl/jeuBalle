onkeydown = ({ key }) => {
    if (key === 'ArrowLeft')
        (onLeftArrow ?? (() => { }))()
    if (key === 'ArrowRight')
        (onRightArrow ?? (() => { }))()
    if (key === 'ArrowUp')
        (onUpArrow ?? (() => { }))()
    if (key === 'ArrowDown')
        (onDownArrow ?? (() => { }))()
    if (key === ' ')
        (onSpace ?? (() => { }))()
}