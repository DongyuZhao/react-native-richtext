import * as React from 'react';
import { ViewProps } from 'react-native';

export interface RichTextProps extends ViewProps {
    text: string;
}

interface State {

}

export class RichText extends React.Component<RichTextProps, State> {

}
