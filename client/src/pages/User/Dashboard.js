import React from "react";
import UserMenu from "../../component/layout/UserMenu";
import Layout from "../../component/layout/Layout";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
    const [auth] = useAuth();
    return (

        <Layout>
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar Column */}
                <div className="col-3">
                    <UserMenu />
                </div>
                
                {/* Main Content Column */}
                <div className="col-9">
                   <div className="card w-75 p-3">
                    <h3>User Name : {auth?.user?.name}</h3>
                    <h3>User Email : {auth?.user?.email}</h3>
                    <h3>User Contact : {auth?.user?.phone}</h3>
                   </div>
                    {/* Add your main dashboard content here */}
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default Dashboard;