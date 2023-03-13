import { BaseComponent } from './../../component.js';

type OnCloseListener = () => void;

export class MemoComponent extends BaseComponent<HTMLElement> {
  private closeListener?: OnCloseListener;
  constructor(text: string) {
    super(`
            <li class="memo">
                <span class="memo_text"></span>
                <button class="delete-btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </li>
        `);

    const memoElement = this.element.querySelector(
      '.memo_text'
    )! as HTMLSpanElement;
    memoElement.innerText = text;

    const deleteBtn = this.element.querySelector('.delete-btn')! as HTMLElement;
    deleteBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  addClassName(name: string) {
    this.element.classList.add(name);
  }
}
