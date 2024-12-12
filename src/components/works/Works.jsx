import { useEffect, useState } from "react"
import WorksTable from "../worksTable/WorksTable"
import { Link } from "react-router-dom";
import * as service from "../../services/WorksCRUDservices";
const Works = ()=>{
    const [works, setWorks] = useState([]);

    useEffect(()=>{
        service.getAllWorks(works=>{
            setWorks(works)
        })
    },[])
    console.log(works)
    return(
        <div className="container">
            <ul className="nav nav-pills">
                <li className="nav-item m-3">
                    <Link to="/add-work" className="nav-item btn btn-primary">Prideti atlikta darba</Link>
                </li>
            </ul>
            <h2>Works</h2>
            <WorksTable data={works}/>
        </div>
    )
}

export default Works