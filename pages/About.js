import { useRouter } from "next/router" //go thru the url and grab the spesific key

export default function About(){
    const router = useRouter();
    const{ name } = router.query;

    return(
        <>
            {name}
        </>
    )
}