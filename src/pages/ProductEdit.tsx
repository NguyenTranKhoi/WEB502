import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/products'

type Props = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate("/admin/product");
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', { required: true })} />
            {errors.name && <span>Phai nhap truong nay</span>}
            <input type="number" {...register('price')} />
            <button>Update</button>
        </form>
    )
}

export default ProductEdit