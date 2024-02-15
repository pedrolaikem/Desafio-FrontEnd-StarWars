export function adjustIndex(folder, indexImg) {
    let adjustedIndex = (parseInt(folder) - 1) * 10 + parseInt(indexImg) + 1;
    // Script para ajustar o index
    if (adjustedIndex >= 1) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 4) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 6) {
        adjustedIndex += 3;
    }
    if (adjustedIndex >= 14) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 16) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 18) {
        adjustedIndex += 3;
    }
    if (adjustedIndex >= 24) {
        adjustedIndex += 3;
    }
    if (adjustedIndex >= 30) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 33) {
        adjustedIndex += 6;
    }
    if (adjustedIndex >= 42) {
        adjustedIndex++;
    }
    if (adjustedIndex >=  44) {
        adjustedIndex += 3;
    }
    if (adjustedIndex >= 50) {
        adjustedIndex += 2;
    }
    if (adjustedIndex >= 53) {
        adjustedIndex += 5;
    }
    if (adjustedIndex >= 60) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 62) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 67) {
        adjustedIndex++;
    }
    if (adjustedIndex >= 68) {
        adjustedIndex += 5;
    }

    return adjustedIndex;
}