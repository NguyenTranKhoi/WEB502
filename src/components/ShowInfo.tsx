import { ProductType } from "../types/products";

type ShowInfoProps = {
    person: ProductType
}
const ShowInfo = (props: ShowInfoProps) => {
    console.log(props);
    return (
        <div>ShowInfo</div>
    )
}

export default ShowInfo;