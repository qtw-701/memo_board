import { BaseComponent } from './../component.js';

export class MemosComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<ul class="memos"></ul>`);
  }
}
