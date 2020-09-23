import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { editarProductoAction} from '../actions/productoActions'

const EditarProducto = () => {

  // Nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio
  })

  // Producto a editar
  const productoeditar = useSelector(state => state.productos.productoeditar);

  // Llenar el state automaticamente
  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);

  const { nombre, precio, id} = producto;

  const submitEditarProducto = e => {
    e.preventDefault();
    editarProductoAction();
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="precio">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  id="precio"
                  value={precio}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
