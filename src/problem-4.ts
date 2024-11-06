// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape: "circle",
    radius: number
}
type Rectangle = {
    shape: "rectangle",
    height: number,
    width: number
}

type Shape = Circle | Rectangle

function calculateShapeArea(shape: Shape): number {
    if ("width" in shape && "height" in shape) {
        return shape.width * shape.height
    } else {
        return Math.PI * shape.radius * shape.radius
    }
}


