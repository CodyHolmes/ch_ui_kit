import React from 'react';
import { Route } from 'react-router-dom';
import './ItemContainerWithHeader.css';
import ItemCard from '../ItemCard/ItemCard';

class ItemContainerWithHeader extends React.Component {
    render(){
        return (
            <Route exact={this.props.exact} path={this.props.path} render={props => (
                <div>
                    <div className="content">
                        <h1 className="site-title">Cody Holmes UI Kit</h1>
                        <ItemCard {...this.props}/>
                        <footer>
                            <div className="made-with-love">
                                Made with <i className="fas fa-heart footer__heart"></i> by Cody Holmes
                            </div>
                        </footer>
                    </div>
                </div>
            )}/>
        );
    }
}

export default ItemContainerWithHeader;