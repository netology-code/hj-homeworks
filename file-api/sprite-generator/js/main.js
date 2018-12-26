const prop = ( data, name ) => data.map( item => item[ name ] ),
  summ = data => data.reduce(( total, value ) => total + value, 0 );
class SpriteGenerator {
  constructor( container ) {
    this.uploadButton = container.querySelector( '.sprite-generator__upload' );

    this.submitButton = container.querySelector( '.sprite-generator__generate' );
    this.imagesCountContainer = container.querySelector( '.images__added-count-value' );
    this.codeContainer = container.querySelector( '.sprite-generator__code' );
    this.imageElement = container.querySelector( '.sprite-generator__result-image' );
    this.images = [];

    this.imagesCount = 0;

    this.registerEvents();
  }
  registerEvents() {
  }
}

new SpriteGenerator( document.getElementById( 'generator' ));
