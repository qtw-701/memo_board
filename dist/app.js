import { MemoComponent } from './components/memos/memo/memo.js';
import { MemosComponent } from './components/memos/memos.js';
class App {
    constructor(appRoot) {
        this.memos = new MemosComponent();
        this.memos.attachTo(appRoot);
        const form = document.querySelector('.form');
        const input = document.querySelector('.input');
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (input.value === '') {
                input.focus();
                return;
            }
            const memo = new MemoComponent(input.value);
            const radio = document.querySelector('input[name="color"]:checked');
            memo.addClassName(radio.value);
            memo.attachTo(document.querySelector('.memos'), 'beforeend');
            input.value = '';
            input.focus();
            memo.setOnCloseListener(() => {
                memo.removeFrom(document.querySelector('.memos'));
            });
        });
    }
}
new App(document.querySelector('.document'));
