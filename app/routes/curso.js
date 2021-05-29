module.exports = function(app) {
    var controller = app.controllers.curso;
    app.get('/cursos', controller.listaCursos);
    app.route('/cursos/:id')
        .get(controller.obtemCurso)
        .delete(controller.removeCurso);
};