import { SizeThemeInterface } from '@/interfaces/theme.interface.ts';
import { DefaultDynamicObject } from '@/interfaces/object.interface.ts';

/*
 * variable font size
 */
export const fontSize: DefaultDynamicObject = {
    textSize3Xl: '32px',
    textSize2Xl: '24px',
    textSizeXl: '20px',
    textSizeLg: '18px',
    textSizeBase: '16px',
    textSizeSm: '14px',
    textSizeXs: '12px'
};

/*
 * variable heading font size
 */
export const fontSizeHeading: DefaultDynamicObject = {
    headingH1: fontSize.textSize3Xl,
    headingH2: fontSize.textSize2Xl,
    headingH3: fontSize.textSizeXl,
    headingH4: fontSize.textSizeLg,
    headingH5: fontSize.textSizeBase,
    headingH6: fontSize.textSizeSm,
    headingNormal: fontSize.textSizeBase,
    headingFeatured: '28px',
    headingMeta: fontSize.textSizeSm,
    headingCaption: fontSize.textSizeSm
};

/*
 * variable heading line height
 */
export const lineHeightHeading: DefaultDynamicObject = {
    lineHeadingH1: '44px',
    lineHeadingH2: '33px',
    lineHeadingH3: '27px',
    lineHeadingH4: '25px',
    lineHeadingH5: '22px',
    lineHeadingH6: '19px',
    lineHeadingNormal: '22px',
    lineHeadingFeatured: '39px',
    lineHeadingMeta: '19px',
    lineHeadingCaption: '24px'
};

/*
 * button font size
 */
export const buttonFontSize: DefaultDynamicObject = {
    buttonFontDefault: fontSize.textSizeBase,
    buttonFontSmall: fontSize.textSizeSm
};

/*
 * variable spacing padding & margin
 */
export const spacingSize: DefaultDynamicObject = {
    spacing3Xl: '48px',
    spacing2Xl: '40px',
    spacingXl: '32px',
    spacingLg: '24px',
    spacingMd: '16px',
    spacingSm: '12px',
    spacingXs: '8px',
    spacing2Xs: '4px',
    spacing3Xs: '2px'
};

export const Size: SizeThemeInterface = {
    fontSize,
    fontSizeHeading,
    lineHeightHeading,
    buttonFontSize,
    spacingSize
};

export default Size;
