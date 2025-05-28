controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 2) {
        accelerate()
    }
})
function asking () {
    story.spriteSayText(Me, "Can you give me food?", 15, 1)
    story.showPlayerChoices("yes", "no", "idk", "of coz")
    if (story.checkLastAnswer("yes") || story.checkLastAnswer("of coz")) {
        story.spriteSayText(Me, "yeah~!", 7, 1)
        start = 1
    } else if (story.checkLastAnswer("no") || story.checkLastAnswer("idk")) {
        asking()
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 2) {
        if (info.score() < 5) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f 2 e e e f f . . . . 
                . . . . f 2 2 f e e e f f . . . 
                . . . . f e e e f f e e f . . . 
                . . . f e 2 2 2 e e f f f . . . 
                . . . f 2 e f f f 2 2 e f . . . 
                . . . f f f e e f f f f f . . . 
                . . . f e e 6 f b e 4 e f . . . 
                . . . . f e 9 f 1 4 4 e e f . . 
                . . . . . f d d e e e e f . . . 
                . . . . . f e e d d f . . . . . 
                . . . . . f 2 e d d f . . . . . 
                . . . . f f 5 f e e f f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . f f . . . f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . . f 2 e e e f f . . . . 
                . . . . f 2 2 f e e e f f . . . 
                . . . . f e e e f f e e f . . . 
                . . . f e 2 2 2 e e f f f . . . 
                . . . f 2 e f f f 2 2 e f . . . 
                . . . f f f e e f f f f f . . . 
                . . . f e e 6 f b e 4 e f . . . 
                . . . . f e 9 f 1 4 4 e e f . . 
                . . . . . f d d d 4 e e f . . . 
                . . . . . f e 4 4 e f f . . . . 
                . . . . . f 2 2 e d 4 . . . . . 
                . . . . . f 2 2 e d e . . . . . 
                . . . . . f 5 4 f e f . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f 2 e e e f f . . . . 
                . . . . f 2 2 f e e e f f . . . 
                . . . . f e e e f f e e f . . . 
                . . . f e 2 2 2 e e f f f . . . 
                . . . f 2 e f f f 2 2 e f . . . 
                . . . f f f e e f f f f f . . . 
                . . . f e e 6 f b e 4 e f . . . 
                . . . . f e 9 f 1 4 4 e e f . . 
                . . . . . f d d d 4 e e f . . . 
                . . . . . f e 4 4 e d 4 . . . . 
                . . . . . f 2 2 2 e d e . . . . 
                . . . . f f 5 4 4 f e f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . f f . . . f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . . f 2 e e e f f . . . . 
                . . . . f 2 2 f e e e f f . . . 
                . . . . f e e e f f e e f . . . 
                . . . f e 2 2 2 e e f f f . . . 
                . . . f 2 e f f f 2 2 e f . . . 
                . . . f f f e e f f f f f . . . 
                . . . f e e 6 f b e 4 e f . . . 
                . . . . f e 9 f 1 4 4 e e f . . 
                . . . . . f d d d 4 e e f . . . 
                . . . . . f e 4 4 e f f . . . . 
                . . . . . f 2 2 e d 4 . . . . . 
                . . . . . f 2 2 e d e . . . . . 
                . . . . . f 5 4 f e f . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . f f f . . . . . . 
                `],
            200,
            true
            )
        } else if (info.score() >= 5 && info.score() <= 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            100,
            true
            )
        } else if (info.score() > 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . f f f f f f f f . . . . 
                . . . f 2 f f e e e e e f f . . 
                . . f 2 2 2 2 f e e e e e f f . 
                . . f e e e e e f f e e e e f . 
                . f e 2 2 2 2 2 e e f f f f f . 
                . f 2 e f f f f f 2 2 2 2 e f . 
                . f f f e e e e f f f f f f f f 
                . f e e 4 4 4 f b e 4 4 4 e f f 
                . . f e d d d f 1 4 d d 4 e e f 
                . . . f d d d d d 4 e e e e f . 
                . . . f e 4 4 4 4 e e e f f . . 
                . . . f 2 2 2 2 e d d d 4 . . . 
                . . . f 2 2 2 2 e d d d e . . . 
                . . . f 5 5 5 4 f e e e f . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f 2 f f e e e e e f f . . 
                . . f 2 2 2 2 f e e e e e f f . 
                . . f e e e e e f f e e e e f . 
                . f e 2 2 2 2 2 e e f f f f f . 
                . f 2 e f f f f f 2 2 2 2 e f . 
                . f f f e e e e f f f f f f f f 
                . f e e 4 4 4 f b e 4 4 4 e f f 
                . . f e d d d f 1 4 d d 4 e e f 
                . . . f d d d d e e e e e e f . 
                . . . f e 4 4 e d d 4 4 f . . . 
                . . . f 2 2 2 e d d e e f . . . 
                . . f f 5 5 5 f e e f f f f . . 
                . . f f f f f f f f f f f f . . 
                . . . f f f f . . . f f f . . . 
                `,img`
                . . . . f f f f f f f f . . . . 
                . . . f 2 f f e e e e e f f . . 
                . . f 2 2 2 2 f e e e e e f f . 
                . . f e e e e e f f e e e e f . 
                . f e 2 2 2 2 2 e e f f f f f . 
                . f 2 e f f f f f 2 2 2 2 e f . 
                . f f f e e e e f f f f f f f f 
                . f e e 4 4 4 f b e 4 4 4 e f f 
                . . f e d d d f 1 4 d d 4 e e f 
                . . . f d d d d d 4 e e e e f . 
                . . . f e 4 4 4 4 e e e f f . . 
                . . . f 2 2 2 2 e d d d 4 . . . 
                . . . f 2 2 2 2 e d d d e . . . 
                . . . f 5 5 5 4 f e e e f . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f 2 f f e e e e e f f . . 
                . . f 2 2 2 2 f e e e e e f f . 
                . . f e e e e e f f e e e e f . 
                . f e 2 2 2 2 2 e e f f f f f . 
                . f 2 e f f f f f 2 2 2 2 e f . 
                . f f f e e e e f f f f f f f f 
                . f e e 4 4 4 f b e 4 4 4 e f f 
                . . f e d d d f 1 4 d d 4 e e f 
                . . . f d d d d e e e e e e f . 
                . . . f e 4 4 e d d 4 4 f . . . 
                . . . f 2 2 2 e d d e e f . . . 
                . . f f 5 5 5 f e e f f f f . . 
                . . f f f f f f f f f f f f . . 
                . . . f f f f . . . f f f . . . 
                `],
            200,
            true
            )
        }
    }
})
info.onCountdownEnd(function () {
    if (start == 2) {
        if (info.score() >= 5) {
            game.showLongText("OuOb", DialogLayout.Bottom)
            music.stopAllSounds()
            game.gameOver(true)
        } else {
            game.showLongText("QAQ...", DialogLayout.Bottom)
            music.stopAllSounds()
            game.gameOver(false)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (start == 2) {
        if (info.score() < 5) {
            controller.moveSprite(Me, 50, 50)
        } else if (info.score() >= 5 && info.score() <= 10) {
            controller.moveSprite(Me, 100, 100)
        } else if (info.score() > 10) {
            controller.moveSprite(Me, 50, 50)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 2) {
        if (info.score() < 5) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . f e e f f e e f . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f e e 2 2 e e f f . . . 
                . . . f e 2 2 f f f f e f . . . 
                . . . f f f f e e 2 f f f . . . 
                . . . f e 2 f e e 2 e e f . . . 
                . . f f e f e e e f e e f f . . 
                . . f f e e e e e e e e f f . . 
                . . . . f e e e e e e f . . . . 
                . . . . e f f f f f f 4 e . . . 
                . . . . 4 f 2 2 2 2 d d 4 . . . 
                . . . . e f f f f f e 4 . . . . 
                . . . . . f f . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f e e e e f . . . . . 
                . . . . f e e f f e e f . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f e e 2 2 e e f f . . . 
                . . . f e f f f f 2 2 e f . . . 
                . . . f f f 2 e e f f f f . . . 
                . . . f e e 2 e e f 2 e f . . . 
                . . f f e e f e e e f e f f . . 
                . . f f e e e e e e e e f f . . 
                . . . . f e e e e e e f . . . . 
                . . . e 4 f f f f f f e . . . . 
                . . . 4 d d 2 2 2 2 f 4 . . . . 
                . . . . 4 e f f f f f e . . . . 
                . . . . . . . . . f f . . . . . 
                `],
            200,
            true
            )
        } else if (info.score() >= 5 && info.score() <= 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            100,
            true
            )
        } else if (info.score() > 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e e e f f . . . 
                . . f e e e f f f f e e e f . . 
                . . f f f f 2 2 2 2 f f f f . . 
                . f f e 2 e 2 2 2 2 e 2 e f f . 
                . f e 2 f 2 f f f f f 2 f e f . 
                . f f f 2 f e e e e 2 2 f f f . 
                . f e 2 f f e e e e 2 f e e f . 
                f f e f f e e e e e f e e e f f 
                f f e e e e e e e e e e e e f f 
                . . f e e e e e e e e e e f . . 
                . . e f f f f f f f f f f 4 e . 
                . . 4 f 2 2 2 2 2 2 2 e d d 4 . 
                . . e f f f f f f f f e e 4 . . 
                . . . f f f . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . f f f e e e e f f f . . . 
                . . f e e e e f f e e e e f . . 
                . . f f f f f 2 2 f f f f f . . 
                . f f e 2 2 e 2 2 e 2 2 e f f . 
                . f e f 2 2 f f f 2 f f 2 e f . 
                . f f f 2 2 2 e e f 2 2 f f f . 
                . f e e f f 2 e e f f f 2 e f . 
                f f e e e e f e e e f f f e f f 
                f f e e e e e e e e e e e e f f 
                . . f e e e e e e e e e e f . . 
                . e 4 f f f f f f f f f f e . . 
                . 4 d d e 2 2 2 2 2 2 2 f 4 . . 
                . . 4 e e f f f f f f f f e . . 
                . . . . . . . . . f f f f . . . 
                `],
            200,
            true
            )
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 2) {
        controller.moveSprite(Me, 20, 20)
        if (start == 2) {
            if (controller.up.isPressed()) {
                laser = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 . . . . . . . 
                    . . . . . 2 3 1 3 2 . . . . . . 
                    . . . . . 3 1 1 1 3 . . . . . . 
                    . . . . . 3 1 1 1 3 . . . . . . 
                    . . . . . 3 1 1 1 3 . . . . . . 
                    . . . . . 3 1 1 1 2 . . . . . . 
                    . . . . . 2 1 1 1 2 . . . . . . 
                    . . . . . 2 3 1 3 2 . . . . . . 
                    . . . . . . 3 1 3 . . . . . . . 
                    . . . . . . 2 1 2 . . . . . . . 
                    . . . . . . 2 1 2 . . . . . . . 
                    . . . . . . 2 1 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                laser.setPosition(Me.x, Me.y)
                laser.setVelocity(0, -150)
            } else if (controller.down.isPressed()) {
                laser = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 3 1 3 . . . . . . 
                    . . . . . . 2 3 1 3 2 . . . . . 
                    . . . . . . 2 1 1 1 2 . . . . . 
                    . . . . . . 2 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 2 3 1 3 2 . . . . . 
                    . . . . . . . 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                laser.setPosition(Me.x, Me.y)
                laser.setVelocity(0, 150)
            } else if (controller.right.isPressed()) {
                laser = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 2 2 3 3 3 3 2 . . . . 
                    . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
                    . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
                    . . . . . 2 2 2 3 3 3 2 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                laser.setPosition(Me.x, Me.y)
                laser.setVelocity(150, 0)
            } else if (controller.left.isPressed()) {
                laser = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 2 3 3 3 2 2 2 . . . . . 
                    . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
                    . . . 2 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
                    . . . . 2 3 3 3 3 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                laser.setPosition(Me.x, Me.y)
                laser.setVelocity(-150, 0)
            }
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 2) {
        if (info.score() < 5) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e 2 f . . . . . 
                . . . f f e e e f 2 2 f . . . . 
                . . . f e e f f e e e f . . . . 
                . . . f f f e e 2 2 2 e f . . . 
                . . . f e 2 2 f f f e 2 f . . . 
                . . f f f f f f e e f f . . . . 
                . . f f e 4 e b f 6 e e f . . . 
                . . f e e 4 4 1 f 9 e f . . . . 
                . . . f e e e e d d f . . . . . 
                . . . . . f d d e e f . . . . . 
                . . . . . f d d e 2 f . . . . . 
                . . . . f f e e f 5 f f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . f . . . f f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e 2 f . . . . . 
                . . . f f e e e f 2 2 f . . . . 
                . . . f e e f f e e e f . . . . 
                . . . f f f e e 2 2 2 e f . . . 
                . . . f e 2 2 f f f e 2 f . . . 
                . . f f f f f f e e f f . . . . 
                . . f f e 4 e b f 6 e e f . . . 
                . . f e e 4 4 1 f 9 e f . . . . 
                . . . f e e 4 d d d f . . . . . 
                . . . . f f e 4 4 e f . . . . . 
                . . . . . 4 d e 2 2 f . . . . . 
                . . . . . e d e 2 2 f . . . . . 
                . . . . . f e f 4 5 f . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e 2 f . . . . . 
                . . . f f e e e f 2 2 f . . . . 
                . . . f e e f f e e e f . . . . 
                . . . f f f e e 2 2 2 e f . . . 
                . . . f e 2 2 f f f e 2 f . . . 
                . . f f f f f f e e f f . . . . 
                . . f f e 4 e b f 6 e e f . . . 
                . . f e e 4 4 1 f 9 e f . . . . 
                . . . f e e e e d d f . . . . . 
                . . . . . f d d e e f . . . . . 
                . . . . . f d d e 2 f . . . . . 
                . . . . f f e e f 5 f f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . f . . . f f . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e 2 f . . . . . 
                . . . f f e e e f 2 2 f . . . . 
                . . . f e e f f e e e f . . . . 
                . . . f f f e e 2 2 2 e f . . . 
                . . . f e 2 2 f f f e 2 f . . . 
                . . f f f f f f e e f f . . . . 
                . . f f e 4 e b f 6 e e f . . . 
                . . f e e 4 4 1 f 9 e f . . . . 
                . . . f e e 4 d d d f . . . . . 
                . . . . f f e 4 4 e f . . . . . 
                . . . . . 4 d e 2 2 f . . . . . 
                . . . . . e d e 2 2 f . . . . . 
                . . . . . f e f 4 5 f . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `],
            200,
            true
            )
        } else if (info.score() >= 5 && info.score() <= 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            100,
            true
            )
        } else if (info.score() > 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . f f f f f f f f . . . 
                . . . f f e e e e e f f 2 f . . 
                . . f f e e e e e f 2 2 2 2 f . 
                . . f e e e e f f e e e e e f . 
                . . f f f f f e e 2 2 2 2 2 e f 
                . . f e 2 2 2 2 f f f f f e 2 f 
                . f f f f f f f f e e e e f f f 
                . f f e 4 4 4 e b f 4 4 4 e e f 
                . f e e 4 d d 4 1 f d d d e f . 
                . . f e e e e 4 d d d d d f . . 
                . . . f f e e e 4 4 4 4 e f . . 
                . . . . 4 d d d e 2 2 2 2 f . . 
                . . . . e d d d e 2 2 2 2 f . . 
                . . . . f e e e f 4 5 5 5 f . . 
                . . . . . f f f f f f f f . . . 
                . . . . . . f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f f f . . . 
                . . . f f e e e e e f f 2 f . . 
                . . f f e e e e e f 2 2 2 2 f . 
                . . f e e e e f f e e e e e f . 
                . . f f f f f e e 2 2 2 2 2 e f 
                . . f e 2 2 2 2 f f f f f e 2 f 
                . f f f f f f f f e e e e f f f 
                . f f e 4 4 4 e b f 4 4 4 e e f 
                . f e e 4 d d 4 1 f d d d e f . 
                . . f e e e e e e d d d d f . . 
                . . . . f 4 4 d d e 4 4 e f . . 
                . . . . f e e d d e 2 2 2 f . . 
                . . . f f f f e e f 5 5 5 f f . 
                . . . f f f f f f f f f f f f . 
                . . . . f f f . . . f f f f . . 
                `,img`
                . . . . . f f f f f f f f . . . 
                . . . f f e e e e e f f 2 f . . 
                . . f f e e e e e f 2 2 2 2 f . 
                . . f e e e e f f e e e e e f . 
                . . f f f f f e e 2 2 2 2 2 e f 
                . . f e 2 2 2 2 f f f f f e 2 f 
                . f f f f f f f f e e e e f f f 
                . f f e 4 4 4 e b f 4 4 4 e e f 
                . f e e 4 d d 4 1 f d d d e f . 
                . . f e e e e 4 d d d d d f . . 
                . . . f f e e e 4 4 4 4 e f . . 
                . . . . 4 d d d e 2 2 2 2 f . . 
                . . . . e d d d e 2 2 2 2 f . . 
                . . . . f e e e f 4 5 5 5 f . . 
                . . . . . f f f f f f f f . . . 
                . . . . . . f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f f f . . . 
                . . . f f e e e e e f f 2 f . . 
                . . f f e e e e e f 2 2 2 2 f . 
                . . f e e e e f f e e e e e f . 
                . . f f f f f e e 2 2 2 2 2 e f 
                . . f e 2 2 2 2 f f f f f e 2 f 
                . f f f f f f f f e e e e f f f 
                . f f e 4 4 4 e b f 4 4 4 e e f 
                . f e e 4 d d 4 1 f d d d e f . 
                . . f e e e e e e d d d d f . . 
                . . . . f 4 4 d d e 4 4 e f . . 
                . . . . f e e d d e 2 2 2 f . . 
                . . . f f f f e e f 5 5 5 f f . 
                . . . f f f f f f f f f f f f . 
                . . . . f f f . . . f f f f . . 
                `],
            200,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (start == 2) {
        if (Me.overlapsWith(Pizza)) {
            info.changeScoreBy(1)
            Pizza.setPosition(randint(1, 159), randint(10, 119))
            music.setVolume(70)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 2) {
        if (info.score() < 5) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f f 2 2 f f . . . . . 
                . . . . f f 2 2 2 2 f f . . . . 
                . . . f f f e e e e f f f . . . 
                . . . f f e 2 2 2 2 e e f . . . 
                . . f f e 2 f f f f 2 e f f . . 
                . . f f f f e e e e f f f f . . 
                . . . f e f f 6 6 f f e f . . . 
                . . . f e 4 f 9 9 f 4 e f . . . 
                . . . . f e d d d d e f e . . . 
                . . . f e f 2 2 2 e d 4 e . . . 
                . . . e 4 f 2 2 2 e d e . . . . 
                . . . . . f 4 5 5 f e . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f f . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . f f 2 2 f f . . . . . 
                . . . . f f 2 2 2 2 f f . . . . 
                . . . f f f e e e e f f f . . . 
                . . . f e e 2 2 2 2 e f f . . . 
                . . f f e 2 f f f f 2 e f f . . 
                . . f f f f e e e e f f f f . . 
                . . . f e f f 6 6 f f e f . . . 
                . . . f e 4 f 9 9 f 4 e f . . . 
                . . . e f e d d d d e f . . . . 
                . . . e 4 d e 2 2 2 f e f . . . 
                . . . . e d e 2 2 2 f 4 e . . . 
                . . . . . e f 5 5 4 f . . . . . 
                . . . . . . f f f f f . . . . . 
                . . . . . . . . . f f . . . . . 
                `],
            200,
            true
            )
        } else if (info.score() >= 5 && info.score() <= 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            100,
            true
            )
        } else if (info.score() > 10) {
            animation.runImageAnimation(
            Me,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f f f 2 2 2 2 f f f f . . 
                . f f f e e e e e e e e f f f . 
                . f f e 2 2 2 2 2 2 2 2 e e f . 
                f f e 2 f f f f f f f f 2 e f f 
                f f f f f f e e e e f f f f f f 
                . f e f 4 b f 4 4 f b 4 f e f . 
                . f e 4 d 1 f d d f 1 d 4 e f . 
                . . f e 4 4 d d d d 4 4 e f e . 
                . f e f 2 2 2 2 2 e d d d 4 e . 
                . e 4 f 2 2 2 2 2 e d d d e . . 
                . . . f 4 4 4 5 5 f e e e . . . 
                . . . f f f f f f f f f . . . . 
                . . . f f f f . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f 2 2 2 2 2 2 f f f . . 
                . f f f e e e e e e e e f f f . 
                . f e e 2 2 2 2 2 2 2 2 e f f . 
                f f e 2 f f f f f f f f 2 e f f 
                f f f f f e e e e e e f f f f f 
                . f e f 4 b f 4 4 f b 4 f e f . 
                . f e 4 d 1 f d d f 1 d 4 e f . 
                . e f e 4 d d d d d d 4 e f . . 
                . e 4 d d e 2 2 2 2 2 2 f e f . 
                . . e d d e 2 2 2 2 2 2 f 4 e . 
                . . . e e f 5 5 5 5 4 4 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . . . f f f . . . 
                `],
            200,
            true
            )
        }
    }
})
function accelerate () {
    if (info.score() > 3) {
        Run = 1
        controller.moveSprite(Me, 150, 150)
        Me.startEffect(effects.bubbles, 5000)
        info.changeScoreBy(-3)
        pause(5000)
        Run = 0
        if (info.score() < 5) {
            controller.moveSprite(Me, 50, 50)
        } else if (info.score() >= 5 && info.score() <= 10) {
            controller.moveSprite(Me, 100, 100)
        } else if (info.score() > 10) {
            controller.moveSprite(Me, 50, 50)
        }
        CD = 5
        for (let index = 0; index < 6; index++) {
            Me.sayText(CD, 1000, true)
            CD += -1
            pause(1000)
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (start == 2) {
        if (sprite.overlapsWith(otherSprite)) {
            animation.runImageAnimation(
            sprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 3 3 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
                . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
                . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
                . . . 3 1 1 1 1 1 1 1 1 3 . . . 
                . . . . 3 1 1 1 1 1 1 3 . . . . 
                . . . . 2 1 1 1 1 1 1 2 . . . . 
                . . . . 2 1 1 3 3 1 1 2 . . . . 
                . . . . 3 3 3 2 2 2 3 3 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 3 3 . . . . . . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . 3 3 . . 3 1 3 . . 3 3 . . . 
                . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
                . . . 3 1 3 3 1 3 2 1 3 . . . . 
                3 3 3 3 2 1 3 1 1 1 3 . . . . . 
                3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
                . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
                . . . . . 2 1 1 1 3 3 2 3 3 3 . 
                . . . . 3 1 3 1 3 1 2 . . . . . 
                . . . 3 1 3 2 1 3 3 1 3 . . . . 
                . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
                . . 3 3 . . 3 1 3 . . 3 3 . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . . . . . 3 3 . . . . . . . . 
                `,img`
                . . 3 3 . . . 3 3 . . . . . . . 
                . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
                . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
                . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
                . 3 3 . . . . . 2 2 . 2 2 2 . . 
                3 1 1 2 2 . . . . . . . 3 3 . . 
                3 1 1 1 2 . . . . . . 2 1 1 3 3 
                3 1 1 2 . . . . . . 3 1 1 1 1 3 
                . 3 2 2 . . . . . . . 2 1 1 3 . 
                . . . . . . . 2 . . . . 3 3 . . 
                . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
                . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
                3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
                3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
                3 3 3 . . . . 3 3 . . . . 3 3 . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 3 . . . . . 
                . . . . . 3 . . . . 3 3 . . . . 
                . . . . 3 3 . . . . . 3 . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                . . . . . . . . 3 . . . . . . . 
                . 3 . . . . . . . . . . 3 . . . 
                3 3 . . . . . . . . . . 3 3 . . 
                3 . . . . . . . . . . . . 3 . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 . . . 3 . . . . . 3 . . 
                . . 3 3 . . . 3 . . . . . 3 3 . 
                . . 3 . . . . 3 . . . . . . 3 . 
                `],
            200,
            true
            )
            otherSprite.setVelocity(0, 0)
            sprite.setVelocity(0, 0)
            otherSprite.startEffect(effects.fire, 100)
            pause(600)
            sprites.destroy(sprite)
            otherSprite.setPosition(randint(1, 159), randint(10, 119))
            otherSprite.setVelocity(randint(-50, 50), randint(-50, 50))
            music.setVolume(70)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (start == 2) {
        if (Me.overlapsWith(otherSprite)) {
            info.changeScoreBy(-1)
            otherSprite.setPosition(randint(1, 159), randint(10, 119))
            otherSprite.setVelocity(randint(-50, 50), randint(-50, 50))
            Me.startEffect(effects.fire, 200)
            music.setVolume(70)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
        }
    }
})
let bomb: Sprite = null
let Mes_action = false
let CD = 0
let Run = 0
let laser: Sprite = null
let Pizza: Sprite = null
let Me: Sprite = null
let start = 0
start = 0
scene.setBackgroundColor(15)
Me = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . f f 2 2 f f . . . . . 
    . . . . f f 2 2 2 2 f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . . f f e 2 2 2 2 e e f . . . 
    . . . f e 2 f f f f 2 e f . . . 
    . . . f f f e e e e f f f . . . 
    . . f f e f f 6 6 f f e f f . . 
    . . f e e 4 f 9 9 f 4 e e f . . 
    . . . f e e d d d d e e f . . . 
    . . . . f e 4 4 4 4 e f . . . . 
    . . . e 4 f 2 2 2 2 f 4 e . . . 
    . . . 4 d f 2 2 2 2 f d 4 . . . 
    . . . 4 4 f 4 5 5 4 f 4 4 . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
story.startCutscene(function () {
    story.spriteSayText(Me, "Hello", 15, 1)
    story.spriteSayText(Me, "I am hungry", 15, 1)
    asking()
})
pauseUntil(() => start == 1)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
    99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
    99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
    9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
    999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
    99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
    9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
    1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
    d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
    dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
    ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
    d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
    ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
    111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
    d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
    ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
    bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
    bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
story.startCutscene(function () {
    story.printCharacterText("Use W, A, S, D to move.", "Me")
    story.printCharacterText("Press 'Spacebar' to accelerate when you have eaten more than 3 slice of pizza.", "Me")
    story.printCharacterText("Press 'Enter' + W, A, S, or D to shoot.", "Me")
    story.printCharacterText("Please avoid the ghosts!", "Me")
    start = 2
})
pauseUntil(() => start == 2)
music.setVolume(50)
music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a00000400000000000000000000000000000000023c0000000800012008001000012410001800012718001c0001201c002000012420002800012728002c0001252c0030000127300038000129380040000127`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
Pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
let bombgen = 1
Me.setStayInScreen(true)
info.startCountdown(30)
game.onUpdate(function () {
    if (start == 2) {
        Mes_action = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
        if (!(Mes_action)) {
            if (info.score() < 5) {
                animation.runImageAnimation(
                Me,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f f 2 2 f f . . . . . 
                    . . . . f f 2 2 2 2 f f . . . . 
                    . . . f f f e e e e f f f . . . 
                    . . . f f e 2 2 2 2 e e f . . . 
                    . . . f e 2 f f f f 2 e f . . . 
                    . . . f f f e e e e f f f . . . 
                    . . f f e f f 6 6 f f e f f . . 
                    . . f e e 4 f 9 9 f 4 e e f . . 
                    . . . f e e d d d d e e f . . . 
                    . . . . f e 4 4 4 4 e f . . . . 
                    . . . e 4 f 2 2 2 2 f 4 e . . . 
                    . . . 4 d f 2 2 2 2 f d 4 . . . 
                    . . . 4 4 f 4 5 5 4 f 4 4 . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `],
                200,
                true
                )
            } else if (info.score() >= 5 && info.score() <= 10) {
                animation.runImageAnimation(
                Me,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `],
                200,
                true
                )
            } else if (info.score() > 10) {
                animation.runImageAnimation(
                Me,
                [img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f 2 2 2 2 2 2 f f f . . 
                    . f f f e e e e e e e e f f f . 
                    . f f e 2 2 2 2 2 2 2 2 e e f . 
                    . f e 2 f f f f f f f f 2 e f . 
                    . f f f f e e e e e e f f f f . 
                    f f e f b f 4 4 4 4 f b f e f f 
                    f e e 4 1 f d d d d f 1 4 e e f 
                    . f e e d d d d d d d d e e f . 
                    . . f e e 4 4 4 4 4 4 e e f . . 
                    . e 4 f 2 2 2 2 2 2 2 2 f 4 e . 
                    . 4 d f 2 2 2 2 2 2 2 2 f d 4 . 
                    . 4 4 f 4 4 5 5 5 5 4 4 f 4 4 . 
                    . . . . f f f f f f f f . . . . 
                    . . . . f f f . . f f f . . . . 
                    `],
                200,
                true
                )
            }
        }
    }
})
forever(function () {
    if (start == 2 && Run != 1) {
        if (info.score() < 5) {
            controller.moveSprite(Me, 50, 50)
        } else if (info.score() >= 5 && info.score() <= 10) {
            controller.moveSprite(Me, 100, 100)
        } else if (info.score() > 10) {
            controller.moveSprite(Me, 50, 50)
        }
    }
})
game.onUpdateInterval(6000, function () {
    if (start == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        Pizza.setPosition(randint(1, 159), randint(10, 119))
        for (let index = 0; index < bombgen; index++) {
            bomb = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            animation.runImageAnimation(
            bomb,
            [img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .....ffff111111ffff.....
                ....fc111cdb1bc111cf....
                ....f1b1b1bfbf1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ..........ffff..........
                ..........fff...........
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `],
            500,
            true
            )
            bomb.setPosition(randint(1, 159), randint(10, 119))
            bomb.setVelocity(randint(-50, 50), randint(-50, 50))
            bomb.setFlag(SpriteFlag.BounceOnWall, true)
        }
        bombgen += 1
        pause(100)
    }
})
