/**
 * Button Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import styled, { css } from 'styled-components';
import { ButtonProps } from '@/component/atoms/button/button.component.tsx';
import { rounded } from '@/styles/styled-component/mixins/border-radius.mixin';
import { backgroundColor } from '@/styles/styled-component/mixins/background.mixin';
import { PaletteThemeInterface, ThemeInterface } from '@/interfaces/theme.interface';
import { boxShadow, noBoxShadow } from '@/styles/styled-component/mixins/box-shadow.mixin';
import { fontFace, fontColor } from '@/styles/styled-component/mixins/font.mixin';
import { transition } from '@/styles/styled-component/mixins/transition.mixin';

const getBackgroundStyle = (
    palette: PaletteThemeInterface,
    type: string,
    disable?: boolean,
    outline?: boolean
): any => {
    if (outline) {
        return css`
            ${backgroundColor(palette.white[0])}

            &:hover,
            &:focus {
                ${backgroundColor(disable ? palette.white[0] : palette[type][1])}
            }
        `;
    }

    return css`
        ${backgroundColor(disable ? palette[type][2] : palette[type][0])}

        &:hover,
        &:focus {
            ${backgroundColor(disable ? palette[type][2] : palette[type][1])}
        }
    `;
};

const getBorderStyle = (
    palette: PaletteThemeInterface,
    type: string,
    disable?: boolean,
    noBorder?: boolean
): any => {
    if (type === 'tertiary' && noBorder) {
        return css`
            border: 1px solid transparent;
            background: transparent;
        `;
    }

    if (type !== 'tertiary' && !noBorder) {
        return css`
            border: 1px solid ${palette[type][disable ? 2 : 0]};

            &:hover,
            &:focus {
                border: 1px solid ${palette[type][disable ? 2 : 1]};
            }
        `;
    }

    return css`
        border: 1px solid ${palette.border[0]};
    `;
};

const getBoxShadowStyle = (shadow?: boolean): any => {
    if (shadow) {
        return css`
            ${boxShadow(css`
                0 1px 2px rgba(0, 0, 0, 0.05),
                0 2px 4px rgba(0, 0, 0, 0.075)
            `)}

            &:hover,
            &:focus {
                ${boxShadow(css`
                    0 2px 4px rgba(0, 0, 0, 0.05),
                    0 3px 6px rgba(0, 0, 0, 0.075),
                    0 4px 8px rgba(0, 0, 0, 0.1)
                `)}
            }
        `;
    }

    return css`
        ${noBoxShadow()}
    `;
};

const getFontStyle = (theme: ThemeInterface, size?: string): any => css`
    ${fontFace(
        theme.typography.primary,
        size === 'default'
            ? theme.size.buttonFontSize.buttonFontDefault
            : theme.size.buttonFontSize.buttonFontSmall,
        '500',
        'normal',
        'normal',
        '1.36',
        'normal',
        'center',
        null
    )}
`;

const getFontColor = (
    palette: PaletteThemeInterface,
    type: string,
    disable?: boolean,
    outline?: boolean
): any => {
    if (outline) {
        return css`
            ${fontColor(palette[`${type}Text`][disable ? 3 : 2])}

            &:hover,
            &:focus {
                ${fontColor(palette[`${type}Text`][disable ? 3 : 0])}
            }
        `;
    }

    return css`
        ${fontColor(palette[`${type}Text`][disable ? 1 : 0])}

        &:hover,
        &:focus {
            ${fontColor(palette[`${type}Text`][disable ? 1 : 0])}
        }
    `;
};

const ButtonComponent = styled.button<ButtonProps>`
    position: ${({ position }) => position}
    display: ${({ display }) => display};
    height: ${(props) => (props.size === 'default' ? '50px' : '40px')};
    padding: ${(props) => (props.size === 'default' ? '0 15px' : '0 7.5px')};
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
    align-items: center;
    justify-content: center;
    flex-wrap: no-wrap;
    text-decoration: none;
    margin: 5px;
    outline: 0;


    ${(props) => css`
        ${rounded('50px')}
        ${getBackgroundStyle(props.theme.palette, props.buttonType, props.disable, props.outline)}
        ${getBorderStyle(props.theme.palette, props.buttonType, props.disable, props.noBorder)}
        ${getBoxShadowStyle(props.shadow)}
        ${getFontStyle(props.theme, props.size)}
        ${getFontColor(props.theme.palette, props.buttonType, props.disable, props.outline)}
        ${transition(css`0.15s cubic-bezier(0.7, 0.3, 0, 1)`)}
    `}
`;

export default ButtonComponent;
