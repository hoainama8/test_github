export default function a() {
    const a = document.getElementById('root');
    if (!a) throw Error;
    newElement(a, `h1`, `How are you`)

    function newElement(a, b, c) {
        const x = document.createElement(b)
        x.contentHTML = c
        a.appendChild(x)
        return b
    }
}