import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authprovider";
import TopBanner from "../Shared/TopBanner/TopBanner";
import OrdersRow from "./OrdersRow";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [controls, setControls] = useState(false);
    const navigate = useNavigate()

    const url = `http://localhost:5000/orders?email=${user?.email}`
    useEffect( () => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
         .then(res => res.json())
         .then(data => {
            if(!data.error) {
                setOrders(data)
            }
            else {
                navigate('/')
            }
         })
    }, [ controls ]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section>
            <TopBanner>
                Cart Details
            </TopBanner>
            <div className="overflow-x-auto w-full mt-32">
                <table className="table w-full">
                    <tbody>
                        {
                            orders.map( order => <OrdersRow key={order._id} order={order} controls={controls} setControl={setControls} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Orders;