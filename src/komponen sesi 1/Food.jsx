export default function Food(){
    const food1 = 'Ayam'
    const food2 = 'Kambing'
    return(
        <>
        <ul>
            <li>Apel</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        </>
    )
}