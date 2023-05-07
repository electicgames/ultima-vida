controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pepito_de_compostela.vy = -50
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.showLongText("you're burning in the fire", DialogLayout.Bottom)
    game.showLongText("I'm sorry you will never be able to return to the world of the living. Goodbye.                                                     Well, may you burn well.", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.showLongText("Congratulations on the end.                                             Well, just as I promised you can come back.                                     Thanks for playing, play more games dand electrichargegames and have a great time goodbye. See you next time", DialogLayout.Bottom)
    game.gameOver(true)
})
let pepito_de_compostela: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.setBackgroundColor(9)
effects.clouds.startScreenEffect()
pepito_de_compostela = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(pepito_de_compostela, 100, 0)
info.setLife(1)
tiles.placeOnRandomTile(pepito_de_compostela, sprites.builtin.brick)
scene.cameraFollowSprite(pepito_de_compostela)
pepito_de_compostela.ay = 50
game.showLongText("Hello, I did not remember you with so many people. ", DialogLayout.Bottom)
game.showLongText("well you know it's your last chance to return to the world of the living but if you burn...", DialogLayout.Bottom)
game.showLongText("Well! Do you want to spend your last attempt now?", DialogLayout.Bottom)
game.showLongText(game.ask("Yes, I do."), DialogLayout.Bottom)
game.showLongText("Well... Good luck.", DialogLayout.Bottom)
