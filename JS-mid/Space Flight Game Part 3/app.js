let game = new Game (
    new Space (
        new Ship (
            [
                new Missile()
            ]
        ),
        [
            new Rock()
        ]
    )
)

game.start()