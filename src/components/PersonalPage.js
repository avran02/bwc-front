import React from "react";
import { Link } from 'react-router-dom';

class PersonalPage extends React.Component {
    ordersData = [
        {
            id: 1,
            items: ['capuchino',],
            amount: 100,
        },
        {
            id: 1,
            items: ['capuchino', 'americano'],
            amount: 200,
        }
    ]

    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <h2>Личный кабинет</h2>
                        <div className="logo">
                            <Link to='/'>
                                <img src={this.props.logo} />
                                <div className="user-info">
                                </div>
                            </Link>
                            <p>Логин: {this.props.username}</p>
                            <p>Доступно баллов: {this.props.points}</p>
                            <p><Link to='/logout' className="logout">Выход</Link></p>
                        </div>
                    </div>
                </div>
                <div className="container content">
                    <div className="orders">
                        <h3>История заказов:</h3>
                        {this.ordersData.map((order) => (
                            <div>
                                <h4>{order.amount}</h4>
                                {order.items.map((item) => (
                                    <p>{item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalPage
