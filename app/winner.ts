interface Board {
    [index: number]: boolean | undefined;
}

export function winner(arr: Board): boolean | undefined {
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== undefined && arr[1] !== undefined && arr[2] !== undefined) {
        return arr[0];
    } else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== undefined && arr[4] !== undefined && arr[5] !== undefined) {
        return arr[3];
    } else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== undefined && arr[7] !== undefined && arr[8] !== undefined) {
        return arr[6];
    } else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== undefined && arr[4] !== undefined && arr[8] !== undefined) {
        return arr[0];
    } else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== undefined && arr[4] !== undefined && arr[6] !== undefined) {
        return arr[2];
    }else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== undefined && arr[3] !== undefined && arr[6] !== undefined) {
        return arr[0];
    }else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== undefined && arr[4] !== undefined && arr[7] !== undefined) {
        return arr[1];
    }
    else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== undefined && arr[5] !== undefined && arr[8] !== undefined) {
        return arr[2];
    }

    return undefined;
}


