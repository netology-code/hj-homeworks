const throttle = ( handler, ms ) => {
  let timeout;
  return () => {
    clearTimeout( timeout );
    timeout = setTimeout( handler, ms );
  }
};
class TextEditor {
  constructor( container, storageKey = '_text-editor__content' ) {
    this.container = container;
    this.contentContainer = container.querySelector( '.text-editor__content' );
    this.hintContainer = container.querySelector( '.text-editor__hint' );
    this.filenameContainer = container.querySelector( '.text-editor__filename' );
    this.storageKey = storageKey;
    this.registerEvents();
    this.load( this.getStorageData());
  }
  registerEvents() {
    const save = throttle( this.save.bind( this ), 1000 );
    this.contentContainer.addEventListener( 'input', save );
    this.container.addEventListener( 'dragover', this.showHint.bind( this ));
    this.container.addEventListener( 'drop', this.loadFile.bind( this ));
  }
  loadFile( e ) {
    e.preventDefault();
    const [ file ] = e.dataTransfer.files,
      { type, name } = file;
    if ( type !== 'text/plain' ) {
      return;
    }
    this.readFile( file )
      .then( e => this.load( e.target.result ));
    this.setFilename( name );
    this.hideHint();
  }
  readFile( file ) {
    const reader = new FileReader,
      promise = new Promise( resolve =>
        reader.addEventListener( 'load', resolve ));
    reader.readAsText(file);
    return promise;
  }
  setFilename( filename ) {
    this.filenameContainer.textContent = filename;
  }
  showHint( e ) {
    e.preventDefault();
    this.hintContainer.classList.add( 'text-editor__hint_visible' );
  }
  hideHint() {
    this.hintContainer.classList.remove( 'text-editor__hint_visible' );
  }
  load( value ) {
    this.contentContainer.value = value || '';
  }
  getStorageData() {
    return localStorage[ this.storageKey ];
  }
  save() {
    localStorage[ this.storageKey ] = this.contentContainer.value;
  }
}

new TextEditor( document.getElementById( 'editor' ));
