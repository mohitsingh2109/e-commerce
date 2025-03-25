import React from "react";
import AdminMenu from "../../component/layout/AdminMenu";
import Layout from "../../component/layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar Column */}
                    <div className="col-3">
                        <AdminMenu />
                    </div>
                    
                    {/* Main Content Column */}
                    <div className="col-9">
                        <div className="card w-75 p-4 shadow-lg border-0 rounded-3">
                            <div className="card-body">
                                <h2 className="card-title text-primary fw-bold">Admin Details</h2>
                                <hr />
                                <p className="fs-5"><strong>Name:</strong> {auth?.user?.name}</p>
                                <p className="fs-5"><strong>Email:</strong> {auth?.user?.email}</p>
                                <p className="fs-5"><strong>Contact:</strong> {auth?.user?.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
