import React, { useContext } from 'react';
import { CRMContext } from '../../context/CRMContext';
import { withRouter } from 'react-router-dom';

import '../layout/notauth/addons/noauth.css';

import moment from 'moment';

function DetallesLibro({libros}, props) {

    const [auth] = useContext(CRMContext);

    if(!auth.auth && (localStorage.getItem('token') === auth.token) ) {
      props.history.push('/login');
    }

    return(
      
      <div className="row">
        {libros.map(book => (
              <div className="card" key={book._id}>
                
                <div className="card-header row">
                 
                  <h4 className="card-title">
                    {book.feria.nombre}
                  </h4>
                  <h6 className="card-subtitle text-muted mt-1 pl-2 mr-3">
                    All Business Cards in {moment(`${book.feria.fechainicial}`).format('YYYY')} edition
                  </h6>
                  <p>
                    {book.librof.map(libropdf => (
                      <ul 
                        key={book._id+libropdf.libropdf._id}
                        className="list-unstyled"
                      >
                        <li>
                          <a 
                            className="btn btn-sm btn-success text-white"
                            href={`${process.env.REACT_APP_BACKEND_URL}/${libropdf.libropdf.pdf}`}
                            target="_blanck"
                          >
                            <i class="fas fa-download"></i>
                          </a>
                        </li>
                      </ul>
                    ))}
                  </p>
                </div>
                
                <div className="card-body">

                        <div className="row">
                          <div className="col col-md-4">
                            { book.feria.imagen ? (
                                          <img src={`${process.env.REACT_APP_BACKEND_URL}/${book.feria.imagen}`} alt="imagen de la guía de usuarios" width = "200" className="img-fluid"/>
                                        ): null}
                          </div>
                          <div className="col col-md-8">
                            <h5>Details for {book.feria.nombre} {book.feria.tipo} tradeshow: </h5>
                            <p>
                              <span className="font-italic">From</span> {moment(`${book.feria.fechainicial}`).format('MMMM Do YYYY')} <span className="font-italic">to</span> {moment(`${book.feria.fechafin}`).format('MMMM Do YYYY')}
                            </p>
                            <p>
                              Category: {book.feria.categoria}
                            </p>

                          </div>
                        </div>

                          <div className="react-bootstrap-table">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>
                                    Nombre
                                  </th>
                                  <th>
                                    Empresa
                                  </th>
                                  <th>
                                    Email
                                  </th>
                                  <th>
                                    Tel
                                  </th>
                                  <th>
                                    Url
                                  </th>
                                </tr>
                              </thead>

                                {book.libro.map(articulos => (
                                  <tbody key={book._id+articulos.tarjeta._id}>
                                    <tr>
                                      
                                                <td>
                                                  {articulos.tarjeta.nombre}
                                                </td>
                                                <td>
                                                  {articulos.tarjeta.empresa}
                                                </td>
                                                <td>
                                                  {articulos.tarjeta.email}
                                                </td>
                                                <td>
                                                  {articulos.tarjeta.telefono}
                                                </td>
                                                <td>
                                                  {articulos.tarjeta.url}
                                                </td>
                                      </tr> 

                                  </tbody>
                               ))}
                              
                            </table>
                          </div>
                        </div>

              </div>

        ))}
      </div>
      
    )
}

export default withRouter(DetallesLibro);