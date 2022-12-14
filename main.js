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

    // method to show alert

    UI.prototype.showAlert = (message,className) =>{
        //  creating div 
        const div= document.createElement('div');
        div.className=`alert ${className}`;

        div.appendChild(document.createTextNode(message));

        const container =document.querySelector('.container');
        const form =document.querySelector('#book-form');

        container.insertBefore(div,form);

        // timeout after 3 sec  /

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000)
        
        
        
    }


    // Deleitng book 

    UI.prototype.deleteBook=(target)=>{
        // console.log(target);

        if(target.className === 'delete' ){
            target.parentElement.parentElement.remove();
        }
    }




    // method implementation to clearfields 

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


    // validating the field 

    if(title==='' || author === '' || refid === ''){
        // Error alert  /
        ui.showAlert('Please fill in all fields','error')
    }
    else{

        
    // Adding book to UI   using addBookToList method

    ui.addBookToList(book);

    // shwing success alert  for adding bbok/ 

    ui.showAlert('Book Added','success');

    // clearing the input fields after submitting using clearFields method
    ui.clearFields();

    }

    e.preventDefault();
})


// evet listener for delete 

const delItem=document.getElementById('book-list').addEventListener('click',(e)=>{
    // console.log(111);
    const ui=new UI();
    

    // calling delete book 
    ui.deleteBook(e.target);


    // show message 
    ui.showAlert('Book Removed','success');

    e.preventDefault();
})