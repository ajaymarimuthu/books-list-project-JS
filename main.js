// Book COnstructor
function Book(title,author,refid){
    this.title=title;
    this.author=author;
    this.refid=refid;
}

// UI constructor

function UI(){

    UI.prototype.addBookToList= (book) => {
        //   console.log(book);
        const list=document.getElementById('book-list');

        // create tr elemetn 
        const row= document.createElement('tr');

        // insert column 

        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.refid}</td>
        <td>${book.title}</td> 
        <td> <a href="#" class="delete"> X </a></td>
        `

        list.append(row);

        // console.log(row);
    }

    UI.prototype.clearFields=()=>{
        console.log("clearing");
        document.getElementById('title').value="";
        document.getElementById('author').value="";
        document.getElementById('refid').value="";
    }

}



// event listeners

document.getElementById('book-form').addEventListener('submit',(e)=>{
    // console.log("logging");
    
    //getting form values from input field
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const refid=document.getElementById('refid').value;
    // console.log(title,author,isbn);

    // instiantiating a book or creating object  
    const book=new Book(title,author,refid);
    // console.log(book);


    // instiantiating UI Object 
    const ui=new UI();

    // console.log(ui);

    // Adding book to UI   using addBookToList method

    ui.addBookToList(book); 

    // clearing the input fields after submitting using clearFields method
    ui.clearFields();



    e.preventDefault();
})