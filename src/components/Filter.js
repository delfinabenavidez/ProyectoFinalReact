import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-4">
                    <label>Ordenar por
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">De mas Bajo a mas Alto</option>
                            <option value="highestprice">De mas Alto a mas Bajo</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Filtro de Talles
               <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                            <option value="">TODOS LOS TALLES</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
