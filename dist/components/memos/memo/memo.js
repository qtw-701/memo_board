import { BaseComponent } from './../../component.js';
export class MemoComponent extends BaseComponent {
    constructor(text) {
        super(`
            <li class="memo">
                <span class="memo_text"></span>
                <button class="delete-btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </li>
        `);
        const memoElement = this.element.querySelector('.memo_text');
        memoElement.innerText = text;
        const deleteBtn = this.element.querySelector('.delete-btn');
        deleteBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
    addClassName(name) {
        this.element.classList.add(name);
    }
}
