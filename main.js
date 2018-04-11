

Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                        <slot name="header"></slot>
                    </p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <slot>This slot content is hard coded here.  It will show up if there is no content in the modal
                    component to overwrite it.</slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer">
                        <button class="button is-success">OKAY!</button>
                    </slot>
                </footer>
            </div>
        </div>
    `,
});


new Vue({
    el: '#root',
})