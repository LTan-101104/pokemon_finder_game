
const shuffle = () => {
    const cards = [
        { image: "/assets/pngegg-2.png" },
        { image: "/assets/pngegg-3.png" },
        { image: "/assets/pngegg-4.png" },
        { image: "/assets/pngegg-5.png" },
        { image: "/assets/pngegg-6.png" },
        { image: "/assets/pngegg-7.png" },
        { image: "/assets/pngegg-8.png" },
        { image: "/assets/pngegg.png" }
    ]

    return [...cards, ...cards].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
}

export default shuffle