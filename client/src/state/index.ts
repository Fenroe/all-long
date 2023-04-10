import { proxy } from 'valtio'

const state = proxy({
    rows: 18,
    tilesPerRow: 10,
    text: 'Hello'
});

export default state;
