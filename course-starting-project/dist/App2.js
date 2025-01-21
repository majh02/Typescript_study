"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App2;
const react_query_1 = require("@tanstack/react-query");
const DelayedData_1 = require("./DelayedData");
const react_1 = require("react");
const queryClient = new react_query_1.QueryClient();
function App2() {
    return (react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        react_1.default.createElement(DelayedData_1.default, null)));
}
//# sourceMappingURL=App2.js.map