import '../Main/Order.scss';
import { useForm } from '../../Hooks/useForm';
import { OrderForm } from './OrderForm';

export const Order = () => {

    const { orderStep } = useForm();

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <OrderForm />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
