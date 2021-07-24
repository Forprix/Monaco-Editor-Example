
var editor
require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor_holder'), {
        value: '{"name":"John", "age":30, "car":null}',
        theme: 'vs-dark',
        language: 'json'
    })
})