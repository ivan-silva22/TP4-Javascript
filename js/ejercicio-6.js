class LibroUno{
    constructor(isbn,titulo,autor,numeroDePaginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;
    }

    get isbn(){
        return this._isbn;
    }

    set isbn(nuevaIsbn){
        this._isbn = nuevaIsbn;
    }

    get titulo(){
        return this._titulo
    }

    set titulo(nuevoTitulo){
        this._titulo = nuevoTitulo;
    }

    get autor(){
        return this._autor;
    }

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }

    get numeroDePaginas(){
        return this._numeroDePaginas;
    }

    set numeroDePaginas(nuevoNumeroDePaginas){
        this._numeroDePaginas = nuevoNumeroDePaginas;
    }

    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas</p>`);
    }
}

class LibroDos{
    constructor(isbn,titulo,autor,numeroDePaginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;
    }

    get isbn(){
        return this._isbn;
    }

    set isbn(nuevaIsbn){
        this._isbn = nuevaIsbn;
    }

    get titulo(){
        return this._titulo
    }

    set titulo(nuevoTitulo){
        this._titulo = nuevoTitulo;
    }

    get autor(){
        return this._autor;
    }

    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }

    get numeroDePaginas(){
        return this._numeroDePaginas;
    }

    set numeroDePaginas(nuevoNumeroDePaginas){
        this._numeroDePaginas = nuevoNumeroDePaginas;
    }

    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas</p>`);
    }
}

let libroUno = new LibroUno();
let libroDos = new LibroDos();



libroUno.isbn = 9780545029377;
libroUno.titulo = "Harry Potter";
libroUno.autor = "J. K. Rowling";
libroUno.numeroDePaginas = 404;

libroDos.isbn = 5601464572411;
libroDos.titulo = "Juegos De Tronos";
libroDos.autor = "George R. R. Martin";
libroDos.numeroDePaginas = 1880;

function libroConMasPaginas(libroUno,libroDos){
    if(libroUno._numeroDePaginas > libroDos._numeroDePaginas){
        document.write(`<p>El libro ${libroUno._titulo} tiene más páginas</p>`);
    }else{
        document.write(`<p>El libro ${libroDos._titulo} tiene más páginas</p>`);
    }
}

libroUno.mostrarLibro()
libroDos.mostrarLibro()
libroConMasPaginas(libroUno,libroDos)


