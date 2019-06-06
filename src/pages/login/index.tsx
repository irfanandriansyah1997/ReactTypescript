/**
 * Login Page
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style/style.scss';

import Text from '@/component/atoms/text/text.component';
import Icon from '@/component/atoms/icon/icon.component';
import Button from '@/component/atoms/button/button.component';

import Textview from '@/component/atoms/textview/textview.component';
import Snackbars from '@/component/atoms/snackbars/snackbars.component';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import FormValidation from '@/helper/validation.helper';
import AuthService from '@/services/auth.service';
import { FieldRulesObject, ValidationRulesResult } from '@/helper/validation.helper';
import { AuthInterface } from '@/interfaces/auth.interface';
import { setLogin } from '@/action/auth.action';

interface LoginPageProps extends DefaultPropsInterface {
    validate: (key: string, value: string) => ValidationRulesResult;
    onResetValidate: () => void;
    error: string;
    login: (option: AuthInterface) => void;
    history: any;
}

const Rules: FieldRulesObject = {
    email: {
        min: 0,
        name: 'Email',
        required: true
    },
    password: {
        min: 8,
        name: 'Password',
        required: true
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    login: (option: AuthInterface) => dispatch(setLogin(option))
});

export interface StateTypes {
    email: string;
    password: string;
    error: string;
    showedError: boolean;
}

export class LoginPage extends React.PureComponent<LoginPageProps, StateTypes> {
    service: AuthService;

    static propTypes = {
        validate: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired,
        onResetValidate: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired
    }

    static getDerivedStateFromProps(props: LoginPageProps, state: StateTypes) {
        if (props.error !== state.error) {
            return {
                error: props.error,
                showedError: props.error !== ''
            };
        }

        return null;
    }

    constructor(props: LoginPageProps) {
        super(props);

        this.state = {
            email: '',
            password: '',
            showedError: false,
            error: ''
        };
        this.validate = this.validate.bind(this);
        this.service = new AuthService();
    }

    validate(): any {
        const { email, password } = this.state;
        const { validate, login, history } = this.props;

        if (validate('email', email).code === 500) {
            return validate('email', email);
        }

        if (validate('password', password).code === 500) {
            return validate('password', password);
        }

        return this.service.login(
            { email, password },
            (token) => {
                login({
                    email,
                    password,
                    token,
                    isLogin: true
                });

                history.push('/listing');
            },
            (error) => validate('rest', error)
        );
    }

    render(): React.ReactNode {
        const { email, password, showedError } = this.state;
        const { error, onResetValidate } = this.props;

        return (
            <div className="ui-pages-login">
                <Snackbars
                    show={showedError}
                    type="error"
                    onCloseDialog={() => this.setState({ showedError: false }, () => {
                        onResetValidate();
                    })}
                >
                    { error }
                </Snackbars>
                <div className="ui-pages-login__background">
                    <img
                        src="https://i.ibb.co/f8JWhby/login.png"
                        alt="login"
                    />
                </div>
                <Link
                    className="ui-pages-login__back"
                    to="/"
                >
                    <Icon>keyboard_backspace</Icon>
                </Link>
                <Text
                    TextType="h2"
                    align="center"
                    as="h1"
                >
                    Login
                    <span>Page</span>
                </Text>
                <div className="ui-pages-login__form">
                    <Text color="#606f7b">Login To Your Account</Text>
                    <Textview
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(_, val) => this.setState({
                            email: val,
                            error: ''
                        })}
                        onBlur={(_, val) => this.setState({
                            email: val,
                            error: ''
                        })}
                        onFocus={(_, val) => this.setState({
                            email: val,
                            error: ''
                        })}
                    />
                    <Textview
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(_, val) => this.setState({
                            password: val,
                            error: ''
                        })}
                        onBlur={(_, val) => this.setState({
                            password: val,
                            error: ''
                        })}
                        onFocus={(_, val) => this.setState({
                            password: val,
                            error: ''
                        })}
                    />
                </div>
                <div className="ui-pages-login__action">
                    <Button
                        buttonType="primary"
                        onClick={this.validate}
                    >
                        Login
                    </Button>
                    <Link
                        className="ui-pages-login__options-link"
                        to="/signup"
                    >
                        You don't have a account,
                        <Text color="#606f7b">Signup</Text>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(FormValidation(LoginPage, Rules));
