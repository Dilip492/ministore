import React from 'react'
import { useNavigate } from 'react-router-dom';

export const UserProfile = () => {

    const navigate = useNavigate();

    const handlelogout = () =>{

        localStorage.removeItem('token');

        navigate("/login")
    }
    return (
        <div>
            <div className="user-profile">
                <div className="profile-header">
                    <h1>User Profile</h1>
                    <div className="avatar">
                        {/* <img src={user.avatar} alt="User Avatar" /> */}
                    </div>
                    <div className="user-details">
                        <h2>Dilip</h2>
                        <p>Email: kdjfkdjlf</p>
                        <p>Phone: 39399483984</p>
                        <p>Location: Not found</p>
                    </div>
                </div>

                <div className="profile-body">
                    <section className="order-history">
                        <h2>Order History</h2>
                        {/* Placeholder for order history */}
                        <div className="order-list">
                            {/* Example order */}
                            <div className="order-item">
                                <p>Order #001</p>
                                <p>Date: 2024-07-13</p>
                                <p>Total: $100.00</p>
                            </div>
                            {/* Add more order items dynamically */}
                        </div>
                    </section>

                    <section className="shipping-addresses">
                        <h2>Shipping Addresses</h2>
                        {/* Placeholder for shipping addresses */}
                        <div className="address-list">
                            {/* Example address */}
                            <div className="address-item">
                                <p>John Doe</p>
                                <p>123 Main St, Apt 1</p>
                                <p>New York, NY 10001</p>
                                <p>USA</p>
                            </div>
                            {/* Add more addresses dynamically */}
                        </div>
                    </section>

                    <section className="account-settings">
                        <h2>Account Settings</h2>
                        <div className="settings-options">
                            <button>Edit Profile</button>
                            <button>Change Password</button>
                        </div>
                    <div className="logout">
                       <button onClick={handlelogout} className='logout-btn'>logout</button>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
