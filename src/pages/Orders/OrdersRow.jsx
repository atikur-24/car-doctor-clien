
const OrdersRow = ({ order }) => {
    const { service, date, price, img } = order;

    return (
        <tr>
            <td>
                <button className="btn btn-circle">
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
                <button className="my-btn">Pending</button>
            </td>
        </tr>
    );
};

export default OrdersRow;