import React from "react"
import { Link } from 'react-router-dom';


class BaristaPage extends React.Component {
    productsData = [
        {
            id: 1,
            name: 'espresso',
            price: 100,
            volume: 60,
        },
        {
            id: 1,
            name: 'capuchino',
            price: 160,
            volume: 350,
        }
    ]

    render() {
        const username = 'name'
        const token = '123'
        const productName = 'productName'
        const logOutLink = 'link'
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <h2>Личный кабинет</h2>
                        <h2>Бариста</h2>
                        <div className="user-info">
                            <p>Логин: {username}</p>
                            <p><Link to='logout' className="logout">Выход</Link></p>
                        </div>
                    </div>
                </div>
                <div classNameName="add-points">
                    <h3>Начисление баллов:</h3>
                    <form method="GET" id="add-points-form" >
                        {token}
                        <label for="id">ID гостя:</label>
                        <input type="text" id="id" name="id" />
                        <br />
                        <button type="submit" name="action" value="get_guest_id">Получить баллы</button>
                    </form>
                    <br />
                    <div id="guest-info"></div>
                </div>
                <div className="container content">
                    <div className="checkout">
                        <h3>Чек:</h3>
                        <ul id="cart-items-list"></ul>
                        <br />
                        <div id="total-price">Общая стоимость: </div>
                        <br />
                        <div>
                            <button id="order-button-spend" type="button">Списать баллы</button>
                            <button id="order-button-add" type="button">Накопить баллы</button>
                        </div>
                    </div>
                    <br />
                    <table className="menu-table">
                        <tbody>
                            {/* {this.productsData} */} 
                            <tr> // TODO: Сделать табличку по 3 в ряд, сортируя по имени
                                <td>
                                    <button type="button"
                                        className="add-button"
                                        data-item-id={this.productsData.id}
                                        data-item-price={this.productsData.Price}
                                        data-item-name={this.productsData.name}
                                        data-item-volume={this.productsData.volume}></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="orders">
                        <h3>История заказов:</h3>
                    </div>
                </div>
            </div>
        )

    }
}

export default BaristaPage;