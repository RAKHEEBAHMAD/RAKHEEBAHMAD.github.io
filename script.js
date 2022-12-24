var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
for (var i = 0; i < 20; i++) {
	// Return a value from 1 to 100 (both inclusive)
	var value = Math.ceil(Math.random() * 100);

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
}

// Asynchronous LinearSearch function
async function LinearSearch(delay = 300) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

//Extracting the value entered by the user
var num = document.getElementById("fname").value;

//Changing the color of all the blocks to violet
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#6b5b95";
}

output.innerText = "";

var flag = 0;
// LinearSearch Algorithm
for (var i = 0; i < blocks.length; i += 1) {
	//Changing the color of current block to red
	blocks[i].style.backgroundColor = "#FF4949";

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Extracting the value of current block
	var value = Number(blocks[i].childNodes[0].innerHTML);

	// To compare block value with entered value
	if (value == num) {
	flag = 1;
	output.innerText = "Element Found";
	blocks[i].style.backgroundColor = "#13CE66";
	break;
	} else {
	// Changing the color to the previous one
	blocks[i].style.backgroundColor = "#6b5b95";
	}
}
//When element is not found in the array
if (flag == 0) {
	output.innerText = "Element Not Found";
}
}

async function BinarySearch(delay = 300) {
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
   
	//Extracting the value of the element to be searched
	var num = document.getElementById("fname").value;
   
	//Colouring all the blocks violet
	for (var i = 0; i < blocks.length; i += 1) {
	  blocks[i].style.backgroundColor = "#6b5b95";
	}
   
	output.innerText = "";
   
	// BinarySearch Algorithm
   
	var start = 0;
	var end = 19;
	var flag = 0;
	while (start <= end) {
	  //Middle index
	  var mid = Math.floor((start + end) / 2);
	  blocks[mid].style.backgroundColor = "#FF4949";
   
	  //Value at mid index
	  var value = Number(blocks[mid].childNodes[0].innerHTML);
   
	  // To wait for .1 sec
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, delay)
	  );
   
	  //Current element is equal to the element
	  //entered by the user
	  if (value == num) {
		output.innerText = "Element Found";
		blocks[mid].style.backgroundColor = "#13CE66";
		flag = 1;
		break;
	  }
	  //Current element is greater than the element
	  //entered by the user
	  if (value > num) {
		end = mid - 1;
		blocks[mid].style.backgroundColor = "#6b5b95";
	  } else {
		start = mid + 1;
		blocks[mid].style.backgroundColor = "#6b5b95";
	  }
	}
	if (flag === 0) {
	  output.innerText = "Element Not Found";
	}
  }

  async function TernarySearch(delay = 700) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");
  
    // Extracting the value entered by the user
    var num = document.getElementById("fname").value;
  
    // Colouring all the blocks violet
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#6b5b95";
    }
  
    output.innerText = "";
  
    // TernarySearch Algorithm
    var start = 0;
    var end = 19;
    var flag = 0;
    while (start <= end) {
        var mid1 = Math.floor(start + (end - start) / 3);
        var mid2 = Math.floor(end - (end - start) / 3);
  
        // Extracting values of mid1 and mid2 blocks
        var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
        var value2 = Number(blocks[mid2].childNodes[0].innerHTML);
  
        // Changing color to red
        blocks[mid1].style.backgroundColor = "#FF4949";
        blocks[mid2].style.backgroundColor = "#FF4949";
  
        // To wait for .1 sec
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
  
        // Number entered by the user equals to
        // element at mid1
        if (value1 == num) {
            output.innerText = "Element Found";
            blocks[mid1].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }
  
        // Number entered by the user equals to
        // element at mid2
        if (value2 == num) {
            output.innerText = "Element Found";
            blocks[mid2].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }
  
        if (num < value1) {
            end = mid1 - 1;
        } else if (num > value2) {
            start = mid2 + 1;
        } else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }
  
    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
}
  





function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}
  
// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");
  
    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                        .childNodes[0].innerHTML);
  
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }
  
            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
    }
}
  
// Calling generatearray function
generatearray();
