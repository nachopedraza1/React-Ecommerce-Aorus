import { Link } from 'react-router-dom';
import './Filter.scss';

export const Filter = ({ onFilter, totalItems }) => {

    return (
        <>
            <div className=' filter-container mb-2'>
                <div className='d-flex align-items-center'>
                    <i className="bi bi-filter text-white fs-1 px-2"></i>
                    <h1 className='m-0 f-rad'>FILTER</h1>
                    <span></span>
                </div>

                <div className='d-flex align-items-center'>
                    <p className='m-0 f-rad text-white text-nowrap'>ITEMS: {totalItems} </p>
                    <button className='btn-sort'>ORDENAR POR <i className="bi bi-chevron-down px-1"></i></button>
                </div>
            </div>
            <div className='acordion-container px-0 col-lg-4'>
                <div className="accordion f-til" id="accordionExample">
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="headingOne">
                            <Link to="/categoria/motherboards">
                                <button className="accordion-button collapsed p-2 text-white " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    MOTHERBOARDS
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("amd")} >AMD</p>
                                <p onClick={() => onFilter("intel")}>INTEL</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="headingTwo">
                            <Link to="/categoria/microprocesadores">
                                <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    MICROPROCESADORES
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("amd")} >AMD</p>
                                <p onClick={() => onFilter("intel")}>INTEL</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="headingThree">
                            <Link to="/categoria/memoriasRam">
                                <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    MEMORIAS RAM
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("xpg")} >XPG</p>
                                <p onClick={() => onFilter("viper")}>VIPER</p>
                                <p onClick={() => onFilter("corsair")}>CORSAIR</p>
                                <p onClick={() => onFilter("kingston")}>KINGSTON</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="headingFour">
                            <Link to="/categoria/placasVideo">
                                <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    PLACAS DE VIDEO
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("geforce")} >GEFORCE</p>
                                <p onClick={() => onFilter("amd")}>AMD</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="headingFive">
                            <Link to="/categoria/monitores">
                                <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    MONITORES
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("geforce")} >TODOS</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="headingSix">
                            <Link to="/categoria/fuentes">
                                <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    FUENTES
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("geforce")} >TODOS</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="headingSeven">
                            <Link to="/categoria/refrigeracion">
                                <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    REFRIGERACION
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("geforce")} >TODOS</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item rounded-0 border-0 mb-2">
                        <h2 className="accordion-header" id="heading">
                            <Link to="/categoria/gabinetes">
                                <button className="accordion-button collapsed p-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    GABINETES
                                </button>
                            </Link>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p onClick={() => onFilter("geforce")} >TODOS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
