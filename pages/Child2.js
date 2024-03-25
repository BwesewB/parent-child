
export default function Child2({childParent}){
    const data = "This is the data from the child page to the parent page"

    return(
        <>
            <button onClick={() => childParent(data)}>Click Child to parent</button>
            {/*When we click its gonna take the data and pass it back to the parent */}
        </>
    )
}