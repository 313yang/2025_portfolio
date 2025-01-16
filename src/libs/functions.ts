
let position = {
    x: 200,
    y: 200,
};
let movelate = 9;
function updatePosition(offset: number) {
    if (position.x < 0) {
        position.x = 399;
    } else if (position.x > 399) {
        position.x = 0;
    }

    if (position.y < 0) {
        position.y = 399;
    } else if (position.y > 399) {
        position.y = 0;
    }
}

function refresh() {
    let x = position.x - 50;
    let y = position.y - 50;
    let transform = `translate(${x} ${y}) `;
    return transform;
}

export const MoveToUp = () => {
    updatePosition(-movelate);
};

export const MoveToDown = () => {
    updatePosition(movelate);
};

export const MoveToLeft = () => {

};

export const MoveToRight = () => {

};
const actionMap: Record<string, () => void> = {
    KeyW: MoveToUp,
    ArrowUp: MoveToUp,
    KeyS: MoveToDown,
    ArrowDown: MoveToDown,
    KeyA: MoveToLeft,
    ArrowLeft: MoveToLeft,
    KeyD: MoveToRight,
    ArrowRight: MoveToRight,
};

export const MoveCharacter = (event: any): string => {
    console.log(event)
    if (event.defaultPrevented) {
        event.preventDefault();
    }

    if (actionMap[event.code]) {
        actionMap[event.code](); // 키에 매핑된 동작 실행
    } else {
        event.preventDefault();
    }
    return refresh();
    // if (event.code !== "Tab") {
    //     // 이벤트를 소비하여 사용자가 포커스를 이동하려고 하지 않는 한
    //     // 이벤트가 두 번 처리되지 않도록 합니다.
    //     event.preventDefault();
    // }
};