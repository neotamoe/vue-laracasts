Vue.component('coupon', {
    props: ['value'],

    template: `
        <input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
    `,

    methods: {
        updateCode(code) {
            if(code==='ALLFREE'){
                alert('This coupon is no longer valid.  Sorry!');
                this.$refs.input.value = code = '';
            }
            this.$emit('input', code);
        }
    }
})

new Vue({
    el: '#root',
    data: {
        coupon: 'FREEBIE'
    }
})
