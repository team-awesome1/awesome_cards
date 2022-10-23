import Card from "./Card";

export default function Player({ handData }) {
    console.log("hand", handData)
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