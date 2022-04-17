let game = new Game (
    new Space (
        new Ship (
            [
                new Missile(),
                new Missile()
            ]
        ),
        [
            new Rock(),
            new Rock(),
            new Rock()
        ]
    )
)

game.start()