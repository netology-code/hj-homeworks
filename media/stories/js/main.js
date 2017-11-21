'use strict';

function node(name, props = {}, ...childs) {
  const node = document.createElement(name);
  Object.keys(props).forEach(prop => {
    const value = props[prop];
    if (typeof value === 'function') {
      node.addEventListener(prop, value);
    } else {
      node.setAttribute(prop, value);
    }
  });
  childs
    .map(node => {
      if (typeof node === 'string') {
        return document.createTextNode(node);
      }
      return node;
    })
    .forEach(node.appendChild.bind(node));
  return node;
}

class Stories {
  constructor(root) {
    if (typeof root === 'string') {
      root = document.querySelector(root);
    }
    this.root = root;

    this.config = {
      video: true,
      audio: false
    };

    this.limit = 3000;

    this.preview = this.root.querySelector('.stories__action__recording .stories__action__video');
    const previewProgress = this.root.querySelector('.progress-bar--recording');

    this.create = this.root.querySelector('.stories__slider__web-cam');
    this.create.addEventListener('click', () => {
      record(this)
        .then(({ frame, video }) => {
          this.mode = 'sending';
          const fd = new FormData()
          fd.append('image', frame);
          fd.append('video', video);

          return fetch('https://neto-api.herokuapp.com/stories', {
            method: 'post',
            body: fd
          });
        })
        .then(res => {
          app.mode = 'sended';
          app.setModeTimeout('view', 2000);
        })
        .catch(err => {
          console.warn(err);
          app.mode = 'error';
        })
    });

    const list = this.root.querySelector('.stories__slider__photos-wrapper');

    const view = this.root.querySelector('.stories__action__view .stories__action__video');
    const viewProgress = this.root.querySelector('.progress-bar--watching');

    list.addEventListener('animationend', event => {
      event.target.remove();
    });

    view.addEventListener('timeupdate', event => {
      if (view.duration > 0) {
        viewProgress.value = view.currentTime / view.duration * 100;
      } else {
        viewProgress.value = 0;
      }
    });

    view.addEventListener('click', event => {
      view.pause();
      const id = view.dataset.currentId;
      view.dataset.currentId = undefined;
      view.src = '';
      if (!id) {
        return;
      }
      const item = document.querySelector(`li[data-id="${id}"]`);
      if (!item) {
        return;
      }
      item.classList.remove('current-photo');
    });

    view.addEventListener('ended', event => {
      const id = view.dataset.currentId;
      const item = document.querySelector(`li[data-id="${id}"]`);
      if (!item) {
        return;
      }
      item.classList.remove('current-photo');
      item.classList.add('seen');
      localStorage.setItem(`story/${id}`, 'seen');

      const next = item.nextSibling;
      if (!next) {
        view.dataset.currentId = undefined;
        view.src = '';
        return;
      }
      view.src = next.dataset.video;
      view.dataset.currentId = next.dataset.id;
      next.classList.add('current-photo');
    });

    const ws = new WebSocket('wss://neto-api.herokuapp.com/stories');
    ws.addEventListener('message', ({ data }) => {
      const story = JSON.parse(data);
      if (localStorage.getItem(`story/${story.id}`) === 'seen') {
        return;
      }
      const item = node(
        'li',
        {
          'data-id': story.id,
          'data-video': story.video,
          class: 'stories__slider__photo',
          click: (event) => {
            const id = view.dataset.currentId;
            const item = document.querySelector(`li[data-id="${id}"]`);
            if (item) {
              item.classList.remove('current-photo');
            }

            if (story.id === id) {
              view.src = '';
              view.dataset.currentId = undefined;
            } else {
              view.src = story.video;
              view.dataset.currentId = story.id;
              event.currentTarget.classList.add('current-photo');
            }
          }
        },
        node(
          'div',
          { class: 'stories--item_image' },
          node(
            'img',
            { src: story.snapshot }
          )
        )
      );
      list.appendChild(item);
      app.mode = 'view';
    });
  }

  checkMode(mode) {
    return [
      'empty',
      'view',
      'preparing',
      'recording',
      'error',
      'sending',
      'sended'].includes(mode);
  }

  setModeTimeout(mode, timeout) {
    setTimeout(() => this.mode = mode, timeout);
  }

  setMode(mode) {
    if (!this.checkMode(mode)) {
      return;
    }
    this.root.dataset.mode = mode;
    this.create.disabled = !['empty', 'view', 'error'].includes(mode);
  }

  set mode(mode) {
    this.setMode(mode);
  }

  get mode() {
    return this.root.dataset.mode;
  }
}

const app = new Stories('.stories');
