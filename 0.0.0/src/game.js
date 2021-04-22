var game = {
    flag: { x: 0, y: 0 },
    playing: true,
    gravity: .1,
    play: () => {game.index?.();if (game.playing) requestAnimationFrame(game.play)}
}
game.play()