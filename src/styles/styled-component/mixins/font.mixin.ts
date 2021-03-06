/**
 * Font Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';
import { ThemeInterface } from '@/interfaces/theme.interface';
import { DefaultDynamicObject } from '@/interfaces/object.interface';

/**
 * To set font family
 * @param  {string} name
 */
export const fontFamily = (name: string) => css`
    font-family: ${name};
`;

/**
 * To set font weight
 * @param  {string|int} fontsize
 */
export const fontSize = (fontsize: string | number) => css`
    font-size: ${fontsize};
`;

/**
 * To set font weight
 * @param  {string|int} weight
 */
export const fontWeight = (weight: string | number = 400) => css`
    font-weight: ${weight};
`;

/**
 * To set font style
 * @param  {string|number} style
 */
export const fontStyle = (style: string | number = 'normal') => css`
    font-style: ${style};
`;

/**
 * To set font strecth
 * @param  {string} style
 */
export const fontStretch = (style: string = 'normal') => css`
    font-stretch: ${style};
`;

/**
 * To set line height
 * @param  {string|int} lineheight
 */
export const lineHeight = (lineheight: string | number) => css`
    line-height: ${lineheight};
`;

/**
 * To set letter-spacing
 * @param  {string|int} spacing
 */
export const letterSpacing = (spacing: string | number = 'initial') => css`
    letter-spacing: ${spacing};
`;

/**
 * To set text-align
 * @param  {string} align
 */
export const textAlign = (align: string = 'initial') => css`
    text-align: ${align};
`;

/**
 * To set font color
 * @param  {string} color
 */
export const fontColor = (color: string | null) => css`
    color: ${color};
`;

/**
 * To set all attribute related to typography
 * @param  {string}     paramFontFamily
 * @param  {string|int} paramFontSize
 * @param  {string|int} paramFontWeight
 * @param  {string|int} paramFontStyle
 * @param  {string}     paramFontStretch
 * @param  {string|int} paramLineHeight
 * @param  {string|int} paramLetterSpacing
 * @param  {string}     paramTextAlign
 * @param  {string}     paramFontColor
 */
export const fontFace = (
    paramFontFamily: string,
    paramFontSize: string | number,
    paramFontWeight: string | number,
    paramFontStyle: string | number | null,
    paramFontStretch: string | null,
    paramLineHeight: string | number | null,
    paramLetterSpacing: string | number | null,
    paramTextAlign: string | null,
    paramFontColor: string | null
) => css`
    ${fontFamily(paramFontFamily)}
    ${fontSize(paramFontSize)}
    ${fontWeight(paramFontWeight)}
    ${fontStyle(paramFontStyle === null ? 'normal' : paramFontStyle)}
    ${fontStretch(paramFontStretch === null ? 'normal' : paramFontStretch)}
    ${lineHeight(paramLineHeight === null ? 'initial' : paramLineHeight)}
    ${letterSpacing(paramLetterSpacing === null ? 'initial' : paramLetterSpacing)}
    ${textAlign(paramTextAlign === null ? 'initial' : paramTextAlign)}
    ${fontColor(paramFontColor)}
`;


/**
 * To set style for heading
 * @param  {string} selector
 */
export const generateHeadingStyle = (
    selector: string,
    theme: ThemeInterface,
    align: string = 'initial'
) => {
    const fontsize = theme.size.fontSizeHeading[
        `heading${selector.charAt(0).toUpperCase()}${selector.slice(1)}`
    ];
    const lineheight = theme.size.lineHeightHeading[
        `lineHeading${selector.charAt(0).toUpperCase()}${selector.slice(1)}`
    ];
    const text: DefaultDynamicObject = {
        h1: {
            fontWeight: 'bold'
        },
        h2: {
            fontWeight: 'bold'
        },
        h3: {
            fontWeight: 'bold'
        },
        h4: {
            fontWeight: 'bold'
        },
        h5: {
            fontWeight: 'bold'
        },
        h6: {
            fontWeight: 'bold'
        },
        normal: {
            fontWeight: 'normal'
        },
        featured: {
            fontWeight: 'normal'
        },
        meta: {
            fontWeight: 'normal'
        },
        caption: {
            fontWeight: 'bold'
        }
    };

    return css`
        ${fontFace(
        theme.typography.primary,
        fontsize,
        text[selector].fontWeight,
        'normal',
        'normal',
        lineheight,
        'normal',
        align,
        theme.palette.grayscale[0]
    )}
    `;
};
