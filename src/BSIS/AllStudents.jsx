import Buttons from "../Components/Buttons";
import { Link } from "react-router-dom"
const AllStudents = () => {
    return (
        <div className="container text-center mt-5">
            <h2 classname="mb-5">List of all Enrolled in Bachelor of Science in Information System</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Grade Year</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rielle</td>
                        <td>Evangelista</td>
                        <td>Bagamanoc</td>
                        <td>2nd Year</td>
                        <td>
                            <Buttons />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rielle</td>
                        <td>Evangelista</td>
                        <td>Bagamanoc</td>
                        <td>2nd Year</td>
                        <td>
                            <Buttons />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/adminHome">Go Back</Link>
        </div>
    );
}

export default AllStudents;