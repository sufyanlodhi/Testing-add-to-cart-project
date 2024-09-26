const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004, price: 300 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008, price: 500 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007, price: 900 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010, price: 1200 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014, price: 600 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010, price: 1500 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996, price: 800 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016, price: 3000 },
];

const customerPurchaseBooks = []; // is array main wo books add ho rahi hain jo aik user purchased kar raha hai

 
  
  // Selet all peragraphs for showing books price on each
  let paragraphs = document.querySelectorAll('p')
  for (let i = 0; i < books.length; i++) {
    paragraphs[i].textContent = `Price RS: ${books[i].price}`;
  }
 
  const all_btns_Of_addtocart = document.querySelectorAll('.btn'); // is variable main tamam buttons ko nodelist bana diya hai
  all_btns_Of_addtocart.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
     
     //button One ka event
      if(e.target.id === 'btn_1'){
      if (!customerPurchaseBooks.includes(books[0])) {
        customerPurchaseBooks.push(books[0]);
        const ul = document.querySelectorAll('.ul-checkbox');
        const li = document.createElement("li");
        li.className = "Class_li";
        li.appendChild(document.createTextNode(`${books[0].title}, Price: ${books[0].price}, Quantity: 1`));
        ul[0].appendChild(li);
      } else {
        customerPurchaseBooks.push(books[0]);
console.log(customerPurchaseBooks);

        const count = {};
        customerPurchaseBooks.forEach((item) => {
          const key = item.title;
          console.log(key);
          
          if (count[key]) {
            count[key]++;
          } else {
            count[key] = 1;
          }
        });


        const Class_li1 = document.querySelector('.Class_li:nth-child(1)');
        Class_li1.innerHTML = `${customerPurchaseBooks[0].title}, Price: ${customerPurchaseBooks[0].price}, Quantity: ${count[books[0].title]}`;
      }
     }


//button Two ka event
     if(e.target.id === 'btn_2'){
      if (!customerPurchaseBooks.includes(books[1])) {
        customerPurchaseBooks.push(books[1]);
        const ul = document.querySelectorAll('.ul-checkbox');
        const li = document.createElement("li");
        li.className = "Class_li";
        li.appendChild(document.createTextNode(`${books[1].title}, Price: ${books[1].price}, Quantity: 1`));
        ul[0].appendChild(li);
      } else {
        customerPurchaseBooks.push(books[1]);

        const count = {};
        customerPurchaseBooks.forEach((item) => {
          const key = item.title;
          if (count[key]) {
            count[key]++;
          } else {
            count[key] = 1;
          }
        });
        const Class_li1 = document.querySelector('.Class_li:nth-child(2)');
        Class_li1.innerHTML = `${books[1].title}, Price: ${books[1].price}, Quantity: ${count[books[1].title]}`;
      }
     }

//button Three ka event
if(e.target.id === 'btn_3'){
  if (!customerPurchaseBooks.includes(books[2])) {
    customerPurchaseBooks.push(books[2]);
    const ul = document.querySelectorAll('.ul-checkbox');
    const li = document.createElement("li");
    li.className = "Class_li";
    li.appendChild(document.createTextNode(`${books[2].title}, Price: ${books[2].price}, Quantity: 1`));
    ul[0].appendChild(li);
  } else {
    customerPurchaseBooks.push(books[2]);

    const count = {};
    customerPurchaseBooks.forEach((item) => {
      const key = item.title;
      if (count[key]) {
        count[key]++;
      } else {
        count[key] = 1;
      }
    });
    const Class_li1 = document.querySelector('.Class_li:nth-child(3)');
    Class_li1.innerHTML = `${books[2].title}, Price: ${books[2].price}, Quantity: ${count[books[2].title]}`;
  }
 }

 //button Four ka event
if(e.target.id === 'btn_4'){
  if (!customerPurchaseBooks.includes(books[3])) {
    customerPurchaseBooks.push(books[3]);
    const ul = document.querySelectorAll('.ul-checkbox');
    const li = document.createElement("li");
    li.className = "Class_li";
    li.appendChild(document.createTextNode(`${books[3].title}, Price: ${books[3].price}, Quantity: 1`));
    ul[0].appendChild(li);
  } else {
    customerPurchaseBooks.push(books[3]);

    countvalue(customerPurchaseBooks)
    const Class_li1 = document.querySelector('.Class_li:nth-child(3)');
    Class_li1.innerHTML = `${books[3].title}, Price: ${books[3].price}, Quantity: ${count[books[3].title]}`;
  }
 }

    });
  });




//  Total amount calculate karna
  const button9 = document.querySelector('.btn-total');
  button9.addEventListener('click', function () {
    const totalamount = customerPurchaseBooks.reduce((acc, items) => acc + items.price, 0);
    alert(`Your total amount is RS: ${totalamount}`);
  });


