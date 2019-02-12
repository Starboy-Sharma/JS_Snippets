import "./styles.css";

document.getElementById("app").innerHTML = `
<h1> JavaScript Object Sort </h1>
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

var newObj = [];

for (var i = 0; i < dairectchat.length; i++) {
  newObj = dairectchat;
}

dairectchat.sort(function(a, b) {
  var myA = a.login_status,
    myB = b.login_status;

  if (myA < myB) {
    return -1;
  } else {
    return 1;
  }
  return 0;
});

// newObj = dairectchat;

var done = false;

setInterval(function() {
  done = true;
}, 5000);

if (done) {
  console.log("heheh" + done);
  done = false;
}

dairectchat.map(function(entry) {
  entry.log_status = 1;
  return entry;
});

dairectchat.map(function(entry) {
  entry.log_status = 1;
  return entry;
});

console.table(newObj);
