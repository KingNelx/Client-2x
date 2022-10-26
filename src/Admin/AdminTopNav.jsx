
import { Link } from "react-router-dom"
import AdminDashB from "./AdminDashB";
const AdminTopNav = () => {
    return (
        <div className="mx-2 py-3">
            <ul class="nav nav-tabs justify-content-end ">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Settings</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">PROFILE</a></li>
                        <li><Link to="/" class="dropdown-item" href="#">SIGN OUT</Link></li>
                    </ul>
                </li>
            </ul>
            <AdminDashB />
        </div>
    );
}

export default AdminTopNav;