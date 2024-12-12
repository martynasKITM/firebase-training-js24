import { useState } from "react"
import * as service from "../../services/WorksCRUDservices";
import { useNavigate } from "react-router-dom";
const AddWork = ()=>{
    const navigate  = useNavigate();
    const [formData, setFormData] = useState({
        date:'',
        company:'',
        service: '',
        description: '',
        from: '',
        to: ''
    });

    const handelChange = (e)=>{
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value 
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        service.addWork(formData);
        navigate('/');
    }

    console.log(formData)
    return(
        <div className="card">
            <div className="card-header">
                <h2>Prideti atlikta darba</h2>
            </div>
            <div className="card-body">
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite data:</label>
                        <input type="date" name="date" className="form-control" onChange={handelChange} value={formData.date} />
                    </div>
                    <div className="mb-3">
                        <select name="service" className="form-control" onChange={handelChange} value={formData.service}>
                            <option selected disabled>--Pasirinkite paslauga--</option>
                            <option value="dev">Development</option>
                            <option value="ux">UX research</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select name="company" className="form-control" onChange={handelChange} value={formData.company}>
                            <option selected disabled>--Pasirinkite imone--</option>
                            <option value="dev">Kilobaitas</option>
                            <option value="ux">Megabaitas</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="description" className="form-control" onChange={handelChange} value={formData.description}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">From:</label>
                        <input type="time" name="from" className="form-control" onChange={handelChange} value={formData.from} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">To:</label>
                        <input type="time" name="to" className="form-control" onChange={handelChange} value={formData.to} />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Saugoti</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWork