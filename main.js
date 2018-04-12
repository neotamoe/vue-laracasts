

let source = {
    user: {
        name: 'Jane Doe'
    }
}

new Vue({
    el: '#one',
    data: {
        shared: source,
        foo: 'bar'
    }
})

new Vue({
    el: '#two',
    data: {
        shared: source,
        foo: 'baz'
    }
})