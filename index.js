

console.log(data[0]);

// 1.0 Build Bridges
// 1.1 - A bridge for the dog list
//   - ".dogs-list"
// 1.2 - A bridge for the main card
//   - ".main__dog-section"


const dogsListEl = document.querySelector(".dogs-list")
const mainDogSection = document.querySelector(".main__dog-section")

// 2.0 renderDogsList(data)
// - for loop over data
//  - each object in data is a dog
//  - use dog.name to build the <li>
//      => <li class="dogs-list__button">Mr. Bonkers</li>
//  - append to bridge in step 1.1

// input: an array of dogs(objects)
// output: - 

function renderDogsList (dogs){
    console.log("Inside renderDogsList: ", dogs);

    for (let i = 0; i < data.length; i++){
        const dogs = data[i];                   //* shouldn't use data[i]
        console.log("Inside Dogs: ", dogs);

        const name = dogs.name; 

        const listItemEl = document.createElement("li");
        listItemEl.className = "dogs-list__button";

        listItemEl.innerText = name;
       
        // 3.0 Add event listener to each <li> (HARD)
        // - event is going to be "click"
        // - call renderMainCard()
        // -- which needs an object that represents a dog,
        //    where are we going to get that object from?


        listItemEl.addEventListener("click", () => {
            console.log("OnClick inside renderDogsList: ", dog);

            renderMainCard(dog);
        });
        console.log(listItemEl);

        dogsListEl.append(listItemEl);
    }
}
renderDogsList(data);




// 4.0 renderMainCard(dog) (takes an object and creates html)

function renderMaincard(dog) {
    console.log("Inside renderMainCard: ", dog);

    mainSectionEl.innerHTML = "";

    const headingEl = document.createElement("h2");
    headingEl.innerText = dog.name;

    mainSectionEl.append(headingEl);

    const imageEl = document.createElement("img");
    imageEl.setAttribute("height", 300);
    imageEl.setAttribute("width", 400);
    imageEl.src = dog.image;
  
    mainSectionEl.append(imageEl);
  }



// 4.1 Main section
// - an <h2> exist already, what do i do with that?
// - create an <h2> and append
//  - works with dog.name
// - create an <img> and append
//   - works with dog.image
//    =>   <img height="300" width="400" src="dog.image">
// 4.2 Dog Description Section
// - create a <div>
//    => <div class="main__dog-section__desc">
//   - create an <h3> with text "Bio"
//   - create a <p>
//     - works with dog.bio

// input: an object that represents a dog
// output: -



// This is just for building the renderMainCard function
// with a testable piece of data in isolation
// renderMainCard(data[0]);

// 4.3 Build Good/Bad Dog button

/*
   <div class="main__dog-section__btn">
    <p>Is naughty? No!</p>
    <button>Good Dog</button>
    </div>
*/
