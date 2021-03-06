/**
 * Button FAB Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonProps } from '@/component/atoms/button/button.component';
import Icon from '@/component/atoms/icon/icon.component';

import Style from './style/style';

class ButtonFAB extends React.Component<ButtonProps> {
    static propTypes = {
        disable: PropTypes.bool,
        display: PropTypes.string,
        outline: PropTypes.bool,
        position: PropTypes.string,
        shadow: PropTypes.bool,
        size: PropTypes.oneOf(['default', 'small', 'large']),
        buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        disable: false,
        display: 'flex',
        outline: false,
        position: 'relative',
        shadow: false,
        size: 'default',
        onClick: (): void => {}
    };

    render(): React.ReactNode {
        const { children, onClick } = this.props;

        return (
            <Style
                as="button"
                onClick={onClick}
                {...this.props}
            >
                <Icon>
                    { children }
                </Icon>
            </Style>
        );
    }
}

export default ButtonFAB;
