import Buttons from "../Components/Buttons";
import { Link } from "react-router-dom"
const AllStudents = () => {
    return (
        <div className="container text-center mt-5">
            <h2 className="mb-5">List of all Enrolled in Bachelor of Science in Information System</h2>
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
                            <button type="button" class="btn btn-outline-info mx-2">VIEW</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Rielle</td>
                        <td>Evangelista</td>
                        <td>Bagamanoc</td>
                        <td>1st Year</td>
                        <td>
                            <button type="button" class="btn btn-outline-info mx-2">VIEW</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/adminHome">Go Back</Link>
        </div>
    );
}

export default AllStudents;