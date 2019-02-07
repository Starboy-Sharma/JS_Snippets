import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var str = "pp11pankaj_702";

var intRegex = /[0-9 -()+]+$/;

var myInt = str.match(intRegex);

var dairectchat = [
  {
    name: "Janson",
    user_id: 706,
    login_status: 1
  },
  {
    name: "Janson1",
    user_id: 693,
    login_status: -1
  },
  {
    name: "Janson2",
    user_id: 702,
    login_status: -2
  },
  {
    name: "Pankaj",
    user_id: 692,
    login_status: -2
  }
];

console.table(dairectchat);

dairectchat.find(function(element) {
  element.user_id == myInt ? (element.login_status = 0) : "";
});

for (var i = 0; i < dairectchat.length; i++) {}
