import { Link } from "react-router-dom"

const Bsis1 = () => {
    return (
        <div className="container text-center mt-5">
            <h2 className="mb-5">Bachelor of Science in Information System - I</h2>
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
                        <td>Rielle</td>
                        <td>Evangelista</td>
                        <td>Bagamanoc</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary mx-2">UPDATE</button>
                            <button type="button" class="btn btn-outline-danger mx-2">DELETE</button>
                            <button type="button" class="btn btn-outline-info mx-2">VIEW</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/adminHome">Go Back</Link>
        </div>
    );
}

export default Bsis1;