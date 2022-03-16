import { Products } from "../types/products";

type ShowInfoProps = {
    person: Products
}
const ShowInfo = (props: ShowInfoProps) => {
    console.log(props);
    return (
        <div>ShowInfo</div>
    )
}

export default ShowInfo;