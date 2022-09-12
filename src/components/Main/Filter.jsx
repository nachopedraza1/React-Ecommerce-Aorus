import { Link } from 'react-router-dom';
import { UseFilter } from '../../Hooks/UseFilter';
import './Filter.scss';

export const Filter = () => {

    const { onFilter } = UseFilter();

    return (
        <div className='acordion-container px-3'>
            <div className=' filter-container mb-2'>
                <div className='d-flex align-items-center'>
                    <i className="bi bi-filter text-white fs-1 px-2"></i>
                    <h1 className='m-0 f-rad'>FILTER</h1>
                    <span></span>
                </div>

                <div className='d-flex align-items-center'>
                    <button className='btn-sort'>ORDENAR POR <i className="bi bi-chevron-down px-1"></i></button>
                </div>
            </div>

            <div className="accordion f-til" id="accordionExample">
                <div className="accordion-item rounded-0 border-0 mb-2">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed p-2 text-white " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            MOTHERBOARDS
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><Link to="">TODOS</Link></p>
                            <p onClick={() => onFilter("amd")}>AMD</p>
                            <p><Link to="">INTEL</Link></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item rounded-0 border-0 mb-2">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            MICROPROCESADORES
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><Link to="">TODOS</Link></p>
                            <p><Link to="">AMD</Link></p>
                            <p><Link to="">INTEL</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
