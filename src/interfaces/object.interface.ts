import { ReactNode } from 'react';

export interface DefaultPropsInterface {
    children?: ReactNode;
    as?: any;
}

export interface DefaultPropsTextviewInterface extends DefaultPropsInterface {
    onChange?: (e: any, value: string) => void;
    onBlur?: (e: any, value: string) => void;
    onFocus?: (e: any, value: string) => void;
}

export interface DefaultPropsLinkInterface extends DefaultPropsInterface {
    onClick?: () => void;
}

export interface DefaultPropsAlertInterface extends DefaultPropsInterface {
    show?: boolean;
    onCloseDialog: () => void;
}

export interface DefaultPropsDialogInterface extends DefaultPropsAlertInterface {
    type?: 'popup' | 'snackbar';
}

export interface DefaultDynamicObject {
    [key: string]: any;
}
