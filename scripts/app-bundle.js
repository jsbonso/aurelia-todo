define('todo',["require", "exports"], function (require, exports) {
    "use strict";
    var Todo = (function () {
        function Todo(description) {
            this.description = description;
            this.done = false;
            this.edit = false;
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
            this.completedTodos = 0;
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
        App.prototype.countNumberOfCompletedTasks = function () {
            var count = 0;
            for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                var todo = _a[_i];
                count = todo.done ? count++ : count;
            }
            this.completedTodos = count;
            return true;
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

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><div class=\"alert alert-success\" role=\"alert\">This simple ToDo app is created with Aurelia Framework, Aurelia CLI and Bootstrap 3. Learn more about Aurelia at: <a href=\"http://www.tutorialsdojo.com\"><b>Tutorials Dojo</b></a>!</div><div class=\"container\"><div class=\"panel panel-primary\"><div class=\"panel-heading\">${heading}</div><div class=\"panel-body\"><form class=\"form-inline\" submit.trigger=\"addTodo()\"><div class=\"form-group\"><label class=\"sr-only\" for=\"Input Task\">Input your to-do</label><div class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Input your To-Do task\" value.bind=\"newTodo\"></div></div><button type=\"submit\" class=\"btn btn-success\">Add Todo</button><div show.bind=\"false\">${ completedTodos }</div></form></div><table class=\"table table-striped table-hover\"><tr><th class=\"text-center\">Completed</th><th class=\"text-center\">Task Description</th><th class=\"text-center\">Operations</th></tr><tr repeat.for=\"todo of todos\"><td class=\"text-center\"><input type=\"checkbox\" checked.bind=\"todo.done\" click.delegate=\"countNumberOfCompletedTasks()\"></td><td class=\"text-center\"><span show.bind=\"!todo.edit\" css=\"text-align: center;  text-decoration: ${todo.done ? 'line-through' : 'none'}\">${todo.description}</span> <input show.bind=\"todo.edit\" ; class=\"form-control\" disabled.bind=\"!todo.edit\" type=\"text\" name=\"task\" value.bind=\"todo.description\"></td><td class=\"text-center\"><button class=\"btn btn-primary\" click.trigger=\"todo.edit=!todo.edit\">${ !todo.edit ? 'Update' : 'Done' }</button> <button class=\"btn btn-danger\" click.trigger=\"removeTodo(todo)\">Delete</button></td></tr></table></div></div><hr></template>"; });
//# sourceMappingURL=app-bundle.js.map