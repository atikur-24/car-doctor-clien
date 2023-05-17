import { useLoaderData } from "react-router-dom";
import TopBanner from "../Shared/TopBanner/TopBanner";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";

const Checkout = () => {
    const loadService = useLoaderData();
    const { price, title, _id, img } = loadService;
    const { user } = useContext(AuthContext);

    const handleCheckOut = event => {
        event.preventDefault();

        const form = event.target;
        const name = form?.name?.value;
        const phone  =form.phone.value;
        const email = form?.email?.value;
        const date = form.date.value;
        const message = form.message.value;
        const price = form.amount.value;
        const order = {
            customerName: name,
            phone,
            email,
            date,
            message,
            img,
            service: title,
            service_id: _id,
            price
        }
        console.log(order);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service order Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }

    return (
        <section>
            <TopBanner>
                Check Out
            </TopBanner>
                <form onSubmit={handleCheckOut} className="card-body bg-base-200 mt-24 rounded-lg p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Phone</span>
                            </label>
                            <input name='phone' type="text" placeholder="Your Phone"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your email" defaultValue={ user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Date</span>
                            </label>
                            <input name='date' type="date" className="input input-bordered" required/>
                        </div>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Due Amount</span>
                            </label>
                            <input name='amount' type="text" placeholder="Amount" defaultValue={ '$'+ price} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Message</span>
                        </label>
                        <textarea name='message' className="textarea textarea-bordered h-28 resize-none" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="my-btn" type="submit" value="Order Confirm" />
                    </div>
                </form>
        </section>
    );
};

export default Checkout;