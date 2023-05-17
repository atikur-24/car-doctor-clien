import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import TopBanner from "../Shared/TopBanner/TopBanner";
import OrdersRow from "./OrdersRow";

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `http://localhost:5000/orders?email=${user?.email}`
    useEffect( () => {
        fetch(url)
         .then(res => res.json())
         .then(data => setOrders(data))
    }, [])

    return (
        <section>
            <TopBanner>
                Cart Details
            </TopBanner>
            <div className="overflow-x-auto w-full mt-32">
                <table className="table w-full">
                    <tbody>
                        {
                            orders.map( order => <OrdersRow key={order._id} order={order} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Orders;