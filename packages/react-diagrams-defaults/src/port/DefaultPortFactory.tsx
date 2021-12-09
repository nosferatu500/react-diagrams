import { DefaultPortModel } from './DefaultPortModel';
import { AbstractModelFactory } from '@nosferatu500/react-canvas-core';
import { DiagramEngine } from '@nosferatu500/react-diagrams-core';

export class DefaultPortFactory extends AbstractModelFactory<DefaultPortModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateModel(): DefaultPortModel {
		return new DefaultPortModel({
			name: 'unknown'
		});
	}
}
