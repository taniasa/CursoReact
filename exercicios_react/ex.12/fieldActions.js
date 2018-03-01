export function changeValue(e) {
    console.log('ssdf')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value //payload poderia ser qq nome dados, ou qq outro
    }
}