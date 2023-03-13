import { MemoComponent } from './components/memos/memo/memo.js';
import { MemosComponent } from './components/memos/memos.js';

class App {
  private readonly memos: MemosComponent;
  constructor(appRoot: HTMLElement) {
    this.memos = new MemosComponent();
    this.memos.attachTo(appRoot);

    const form = document.querySelector('.form')! as HTMLFormElement;
    const input = document.querySelector('.input')! as HTMLInputElement;

    form.addEventListener('submit', event => {
      event.preventDefault();
      if (input.value === '') {
        input.focus();
        return;
      }

      const memo = new MemoComponent(input.value);
      const radio = document.querySelector(
        'input[name="color"]:checked'
      )! as HTMLInputElement;
      memo.addClassName(radio.value);
      memo.attachTo(
        document.querySelector('.memos')! as HTMLUListElement,
        'beforeend'
      );

      input.value = '';
      input.focus();
      memo.setOnCloseListener(() => {
        memo.removeFrom(document.querySelector('.memos')! as HTMLUListElement);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);
