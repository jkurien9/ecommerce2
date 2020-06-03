import React, {Component} from 'react';
import "./css/Product.css";

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="productSection">
                        <div className="product1">
                            <div className="productImage">
                                <figure><img className="productImg" src={this.props.item.img} alt={this.props.item.alt} /></figure>
                            </div>
                            <div className="productInfo-div">
                                <div className="info">
                                    <h2 className="tittle">{this.props.item.title}</h2>
                                    <div className="stars">
                                        <i class="fa fa-star checked"></i>
                                        <i class="fa fa-star checked"></i>
                                        <i class="fa fa-star checked"></i>
                                        <i class="fa fa-star checked"></i>
                                        <i class="fa fa-star checked"></i>
                                    </div>
                                    <h3 className="price">{this.props.item.price}</h3>
                                    <h3 className="shipping">{this.props.item.shipping}</h3>
                                    <p className="productDescription">{this.props.item.description}</p>
                                </div>
                            </div>
                        </div> 

               </section>

            </React.Fragment>
        )
    }
}

export default Products;