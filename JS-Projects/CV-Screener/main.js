// User data collection
const data = [
  {
    fullName: "Mark",
    age: 21,
    city: "Bangkong",
    language: "Python",
    framework: "Djengo",
    img: "https://randomuser.me/api/portraits/men/57.jpg",
  },
  {
    fullName: "Miller",
    age: 23,
    city: "Paris",
    language: "JavaScript",
    framework: "React",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    fullName: "Marry",
    age: 18,
    city: "London",
    language: "Machine Learning",
    framework: "Deep Learning",
    img: "https://randomuser.me/api/portraits/women/57.jpg",
  },
  {
    fullName: "John",
    age: 34,
    city: "Switzerland",
    language: "Rest",
    framework: "Rest Framework",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    fullName: "Jarry",
    age: 26,
    city: "Karachi",
    language: "Python",
    framework: "Djengo",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

// getting access the DOM element
const img = document.getElementById("img");
const profile = document.getElementById("profile");
const btn = document.getElementById("next_btn");

// Iterator function for CV Iteration
function cvIterator(profiles) {
  let nextIndex = 0;

  return {
    // Method for next CV
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);

const nextCV = () => {
  let currCandidate = candidates.next().value;
  if (currCandidate != undefined) {
    img.innerHTML = `<img src=${currCandidate.img} alt='candidate'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currCandidate.fullName}</li>
    <li class="list-group-item">${currCandidate.age} years old.</li>
    <li class="list-group-item"> lives in ${currCandidate.city}</li>
    <li class="list-group-item"> works on ${currCandidate.language}</li>
    <li class="list-group-item"> with this ${currCandidate.framework} framework</li>
  </ul>`;
  } else {
    alert("End of the Applications!");
    // return  to the first-one Application
    window.location.reload();
  }
};

// Calling for first CV
nextCV();

// event-listener for btn
btn.addEventListener("click", nextCV);
