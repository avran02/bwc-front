import React from "react";
import { Link } from 'react-router-dom';

class LogForm extends React.Component {
    render() {
        const csrf_token = '123'
        return (
            <div className="container">
                <h1>Авторизация</h1>
                <form method="post">
                    {csrf_token}
                    <input type="text" name="username" placeholder="Логин" required /><br />
                    <input type="password" name="password" placeholder="Пароль" required /><br />
                    <button type="button">Войти</button>
                </form>
                <p>Еще нет аккаунта?  <Link to="/register/">Зарегистрироваться</Link></p>
            </div>
        )
    }
}

export default LogForm