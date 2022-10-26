import { Link } from "react-router-dom"
import Buttons from "../Components/Buttons";

const Bsis1 = () => {
    return (
        <div className="container text-center mt-5">
            <h2 className="mb-5">Bachelor of Science in Information System - I</h2>
            <p>Enrolled.</p>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mariel</td>
                        <td>Ogerio</td>
                        <td>Bagamanoc</td>
                        <td>
                          <Buttons />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mariel</td>
                        <td>Ogerio</td>
                        <td>Bagamanoc</td>
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

export default Bsis1;