import React from 'react';
import ProductList from "../Products/products.json";
import Products from '../Products/products.json';
import '../../App.css';


class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: "default",
            type: "default"
        }
    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            type: event.target.value
        })
    }

    render() {
        const { type, cost } = this.state;
        return (
            <React.Fragment>
                <div className="filterSection">
                    <div className="gridfilter">
                        <label className="filters">
                            Filter Type:
                        </label>
                        <select value={type} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value={this.props.type}>Eyeshadow</option>
                            <option value={this.props.type}>Highlighter</option>
                            <option value={this.props.type}>Lipstick</option>
                            <option value={this.props.type}>Mascara</option>
                            <option value={this.props.type}>Lipgloss</option>
                            <option value={this.props.type}>Concealer</option>
                            
                        </select>
                    </div>

                    <div className="gridpricefilter">
                        <label className="filters">
                            Filter Type:
                        </label>
                        <select value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">Price</option>
                            <option value="low">$0-$20</option>
                            <option value="medium">$20-$100</option>
                            <option value="high">$100-$200</option>
            
                        </select>
                    </div>
                </div>
                <div className="productSection">
                    {ProductList.products.map(item => {
                        if (type === 'default' && cost === 'default') {
                            return <Products item={item} />
                        } else if (type === item.type && cost === item.cost) {
                            return <Products item={item} />
                        } else if (type === item.type || cost === item.cost) {
                            return <Products item={item} />
                        } 
                    })}
                </div>
            </React.Fragment>
        );
    }
}


export default Filters;