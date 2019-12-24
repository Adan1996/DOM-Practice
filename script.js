/* DOM
	- Antarmuka pemrograman berbasis objek yang merepresentasikan dokumen web
	- DOM membuat seluruh komponen dari halaman web dapat diakses & dimanipulasi
	- Komponen
		* Elemen HTML
		* Atribut
		* Text
		* dll
	- DOM dapat dimanipulasi (dibuat, diubah, dihapus) menggunakan JavaScript.

	Materi di seri ini :
	- DOM Selection
	- DOM Manipulation
	- DOM Traversal
	- Event Handling
	- Studi Kasus
		* membuat program2 sederhana

	Pre-requisite :
	- HTML
	- CSS
	- JavaScript

	Aplikasi Pendukung :
	- Code Editor
	- Web Browser
*/

/* DOM Tree (Pohon DOM)
	 @ Representasi elemen-elemen HTML di dalam browser dalam bentuk pohon yang berisikan simpul/node

	 Tipe-tipe Node
	 * Elemen
	 * Attribute
	 * Text
	 * CData Section
	 * Entity Reference
	 * Entity
	 * Processing Instruction
	 * Comment
	 * Document
	 * Document Type
	 * Document Fragment
	 * Notation

	 - Node List 
	 @ simpul yang dipilih lebih dari satu dari berbagai macam tipe node

	 - HTML Collection
	 @ kumpulan Node yang khusus untuk elemen HTML saja

	 - NodeList & HTML Collection
	 	* keduanya merupakan kumpulan node
	 	* struktur datanya mirip array
	 	* nodeList dapat berisi node apapun, sedangkan HTMLCollection harus berisi elemen HTML
	 	* HTMLCollection bersifat live sedangkan nodeList tidak.
*/

/* Struktur Hierarki DOM
	- Root Node
		* node yang menjadi sumber dari semua node lain di dalam DOM
		* document
	- Parent Node
		* node yang berada 1 tingkat diatas node yang lain
		* body adalah parent dari h1, p, p, div, a, dll
	- Child Node
		* node yang berada 1 tingkat dibawah node yang lain
		* h1 adalah child dari body
*/

/* DOM Selection

	DOM Selection Method
			Method				|		Hasil
	====================================================
	* getElementById()			|	element
	* getElementsByTagName()	|	HTMLCollection
	* getElementsByClassName()	|	HTMLCollection
	* querySelector()			|	element
	* querySelectorAll()		|	nodeList
*/

// document.getElementById() = mengembalikan elemen
// const judul = document.getElementById('judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Syahdan Masyhuri";

// // document.getElementByTagName() = mengembalikan HTMLColletion
// const p = document.getElementsByTagName('p');
// for( let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementsByClassName() = HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini dirubah dari javascript';

// document.querySelector() = mengembalikan elemen
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll = mengembalikan nodeList
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }

// mengubah dari node root / document
// const sectionB = document.getElementById('b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

// DOM MANIPULATION
// Manipulasi Element
	// element.innerHTML
	// const judul = document.getElementById('judul');
	// judul.innerHTML = 'Syahdan Masyhuri';

	// const sectionA = document.querySelector('section#a');
	// sectionA.innerHTML = 'Hello World';

	// elemet.style.<property>
	// const judul = document.querySelector('#judul');
	// judul.style.color = 'lightblue';
	// judul.style.backgroundColor = 'salmon';

	// element.setAttribute(name, value)
	// const a = document.getElementById('a');
	// a.setAttribute('nama', 'Syahdan');

	// element.classList
		// element.classList.add()
		// const p2 = document.querySelector('.p2');
		// p2.classList.add('label');

		// element.classList.remove()
		// const p2 = document.querySelector('.p2');
		// p2.classList.remove('label');

		// element.classList.togle()
		// const p2 = document.querySelector('.p2');
		// p2.classList.toggle('label');

		// element.classList.item()
		
		
		// element.classList.contains()
		// element.classList.replace()
	
// Manipulasi Node

// Manipulasi Node terdiri dari :
	// - document.createElement()
	// - document.createTextNode()
	// - node.appendChild()
	// - node.insertBefore()
	





















































































