export default{
    jump: new KeyboardEvent('keydown', {key: 'Space', Keycode: 32}),
    dispatch (event) {
        document.dispatchEvent(this[event]);
    }
}