export const getRandColor = () => {
    const color = [
        '#fffff',
        '#00000',
        '#ff0000',
        '#00ff00',
        '#0000ff'
    ];

    return (color[Math.floor(Math.random() * 5)]);
}