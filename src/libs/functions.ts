type MoveType = "up" | "down" | "left" | "right";

export interface PositionType {
    x: number;
    y: number;
}
function updatePosition(position: PositionType, move: MoveType) {
    const offset = 5; // keydown 이벤트마다 움직일 px 크기
    switch (move) {
        case "up":
            position.y -= offset;
            break;
        case "down":
            position.y += offset;
            break;
        case "left":
            position.x -= offset;
            break;
        case "right":
            position.x += offset;
            break;
    }
    return `translate(${position.x}px, ${position.y}px)`;
}


const actionMap: Record<string, (position: PositionType) => string> = {
    KeyW: (position) => updatePosition(position, "up"),
    ArrowUp: (position) => updatePosition(position, "up"),
    KeyS: (position) => updatePosition(position, "down"),
    ArrowDown: (position) => updatePosition(position, "down"),
    KeyA: (position) => updatePosition(position, "left"),
    ArrowLeft: (position) => updatePosition(position, "left"),
    KeyD: (position) => updatePosition(position, "right"),
    ArrowRight: (position) => updatePosition(position, "right"),
};

export const moveCharacter = (event: any, position: PositionType) => {
    if (event.defaultPrevented) {
        return;
    }

    if (actionMap[event.code]) {
        return actionMap[event.code](position); // 키에 매핑된 동작 실행
    } else {
        event.preventDefault();
    }
};