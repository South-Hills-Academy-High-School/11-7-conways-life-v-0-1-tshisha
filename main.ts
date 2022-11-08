controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += -1
    currentX += -10
    drawGrid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorGridRow][cursorGridCol] = grid[cursorGridRow][cursorGridCol] * -1 + 1
    drawGrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += -1
    currentX += -10
    drawGrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += 1
    currentX += 10
    drawGrid()
})
function drawGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridspace of row) {
            if (gridspace == 1) {
                gridSprite = sprites.create(img`
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    `, SpriteKind.Player)
                gridSprite.left = currentX
                gridSprite.top = currentY
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
    cursor.left = currentX
    cursor.top = currentY
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += 1
    currentX += 10
    drawGrid()
})
let gridSprite: Sprite = null
let currentY = 0
let gridSprites: Sprite[] = []
let currentX = 0
let cursorGridRow = 0
let cursorGridCol = 0
let cursor: Sprite = null
let grid: number[][] = []
let row: number[] = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 15; column++) {
        grid[row].push(1)
    }
}
cursor = sprites.create(img`
    3 3 3 . . . 3 3 3 3 
    3 . 3 3 . 3 3 . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    . . . . . . . . . . 
    . . . . . . . . . . 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 3 3 3 . . 3 3 3 3 
    `, SpriteKind.Enemy)
cursorGridCol = 0
cursorGridRow = 0
let cursorX = 0
cursor.top = 10
drawGrid()
