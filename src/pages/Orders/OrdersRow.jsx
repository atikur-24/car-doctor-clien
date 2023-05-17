import Swal from "sweetalert2";

const OrdersRow = ({ order, controls, setControl }) => {
    const { _id, service, date, price, img, status } = order;
    console.log(order);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              setControl(!controls);
                        }
                    })
              
            }
          })
        
    }
    
    const handleOrderConfirm = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status : 'Confirm'})
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Confirmed!',
                        text: 'Service confirm successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                      setControl(!controls)
                }
            })
    }

    return (
        <tr>
            <td>
                <button onClick={ () => handleDelete(_id) } className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src={img} />
                </div>
                </div>
                <div>
                <div className="text-xl font-semibold">{service}</div>
                </div>
            </div>
            </td>
            <td className="text-xl font-semibold"> ${price} </td>
            <td className="text-xl font-medium">{date}</td>
            <td>
                { status === "Confirm" ? <button className="my-btn-confirm">Confirmed</button> :
                    <button onClick={ () => handleOrderConfirm(_id) } className="my-btn-pending">Pending</button>
                }
            </td>
        </tr>
    );
};

export default OrdersRow;