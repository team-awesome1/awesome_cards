import Card from "./Card";

export default function Player({ handData }) {
    const hand = handData.map((card) => {
        return (
            <Card cardCode={card} />
        )
    })
    return (<>
        {hand}
    </>
    )
}