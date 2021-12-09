import * as React from 'react';
import { DiagramEngine } from '@nosferatu500/react-diagrams';
import { CanvasWidget } from '@nosferatu500/react-canvas-core';

export interface BodyWidgetProps {
	engine: DiagramEngine;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	render() {
		return <CanvasWidget className="diagram-container" engine={this.props.engine} />;
	}
}
