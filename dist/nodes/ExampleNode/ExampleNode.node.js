"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleNode = void 0;
class ExampleNode {
    constructor() {
        this.description = {
            displayName: 'Example Node',
            name: 'exampleNode',
            group: ['transform'],
            version: 1,
            description: 'Basic Example Node',
            defaults: {
                name: 'Example Node',
                color: '#772244',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'My String',
                    name: 'myString',
                    type: 'string',
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                }
            ]
        };
    }
    async execute() {
        const items = this.getInputData();
        let item;
        let myString;
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            myString = this.getNodeParameter('myString', itemIndex, '');
            item = items[itemIndex];
            item.json['myString'] = myString;
        }
        return this.prepareOutputData(items);
    }
}
exports.ExampleNode = ExampleNode;
//# sourceMappingURL=ExampleNode.node.js.map