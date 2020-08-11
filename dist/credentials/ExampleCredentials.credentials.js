"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCredentials = void 0;
class ExampleCredentials {
    constructor() {
        this.name = 'exampleCredentials';
        this.displayName = 'Example Credentials';
        this.properties = [
            {
                displayName: 'User',
                name: 'user',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                default: '',
            },
        ];
    }
}
exports.ExampleCredentials = ExampleCredentials;
//# sourceMappingURL=ExampleCredentials.credentials.js.map