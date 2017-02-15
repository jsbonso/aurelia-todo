define('todo',["require", "exports"], function (require, exports) {
    "use strict";
    var Todo = (function () {
        function Todo(description) {
            this.description = description;
            this.done = false;
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

define('app',["require", "exports", "./todo"], function (require, exports, todo_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.heading = 'My Tasks';
            this.todos = [];
            this.newTodo = '';
        }
        App.prototype.addTodo = function () {
            if (this.newTodo) {
                this.todos.push(new todo_1.Todo(this.newTodo));
                this.newTodo = '';
            }
        };
        App.prototype.removeTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            if (index !== -1) {
                this.todos.splice(index, 1);
            }
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${heading}</h1><form submit.trigger=\"addTodo()\"><input type=\"text\" value.bind=\"newTodo\"> <button type=\"submit\">Add Todo</button></form><hr><table><tr><th>Completed &emsp;</th><th>Edit &emsp;</th><th>Task Description &emsp;</th><th>Operations</th></tr><tr repeat.for=\"todo of todos\"><td><input type=\"checkbox\" checked.bind=\"todo.done\"></td><td><input type=\"checkbox\" checked.bind=\"todo.edit\"></td><td><input disabled.bind=\"!todo.edit\" type=\"text\" name=\"task\" value.bind=\"todo.description\" css=\"text-align: center;  text-decoration: ${todo.done ? 'line-through' : 'none'}\"></td><td><button click.trigger=\"removeTodo(todo)\">X</button> <button show.bind=\"todo.edit\" click.trigger=\"todo.edit=false\">Done</button></td></tr></table><hr></template>"; });
//# sourceMappingURL=app-bundle.js.map