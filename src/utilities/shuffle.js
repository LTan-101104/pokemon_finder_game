
const shuffle = () => {
    const cards = [
        { image: "/assets/pngegg-2.png" },
        { image: "/assets/dpngegg-3.png" },
        { image: "/assets/firebpngegg-4.png" },
        { image: "/assets/flutpngegg-5.png" },
        { image: "/assetspngegg-6.png" },
        { image: "/assets/rpngegg-7.png" },
        { image: "/assets/pngegg-8.png" },
        { image: "/assetspngegg.png" }
    ]

    return [...cards, ...cards].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
}

export default shuffle