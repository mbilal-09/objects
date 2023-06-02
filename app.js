var userResult = [
    {
        name: "John Doe",
        results: [
            { subject: "Math", marks: 85 },
            { subject: "English", marks: 92 },
            { subject: "Science", marks: 78 },
            // Add more subjects and marks for John Doe
        ]
    },
    {
        name: "Jane Smith",
        results: [
            { subject: "Math", marks: 90 },
            { subject: "English", marks: 88 },
            { subject: "Science", marks: 76 },
            // Add more subjects and marks for Jane Smith
        ]
    },
    {
        name: "Alice Johnson",
        results: [
            { subject: "Math", marks: 82 },
            { subject: "English", marks: 95 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Alice Johnson
        ]
    },
    {
        name: "Robert Davis",
        results: [
            { subject: "Math", marks: 78 },
            { subject: "English", marks: 82 },
            { subject: "Science", marks: 79 },
            // Add more subjects and marks for Robert Davis
        ]
    },
    {
        name: "Emily Wilson",
        results: [
            { subject: "Math", marks: 92 },
            { subject: "English", marks: 86 },
            { subject: "Science", marks: 94 },
            // Add more subjects and marks for Emily Wilson
        ]
    },
    {
        name: "Michael Brown",
        results: [
            { subject: "Math", marks: 87 },
            { subject: "English", marks: 90 },
            { subject: "Science", marks: 83 },
            // Add more subjects and marks for Michael Brown
        ]
    },
    {
        name: "Olivia Taylor",
        results: [
            { subject: "Math", marks: 79 },
            { subject: "English", marks: 91 },
            { subject: "Science", marks: 84 },
            // Add more subjects and marks for Olivia Taylor
        ]
    },
    {
        name: "James Anderson",
        results: [
            { subject: "Math", marks: 86 },
            { subject: "English", marks: 84 },
            { subject: "Science", marks: 90 },
            // Add more subjects and marks for James Anderson
        ]
    },
    {
        name: "Sophia Martinez",
        results: [
            { subject: "Math", marks: 93 },
            { subject: "English", marks: 79 },
            { subject: "Science", marks: 88 },
            // Add more subjects and marks for Sophia Martinez
        ]
    },
    {
        name: "Benjamin Thomas",
        results: [
            { subject: "Math", marks: 88 },
            { subject: "English", marks: 83 },
            { subject: "Science", marks: 91 },
            // Add more subjects and marks for Benjamin Thomas
        ]
    }
];


var result = document.getElementById('resultTable')
var marks =[];

for (let i = 0; i < userResult.length; i++) {
    
    var obj = Object.assign({}, userResult[i].results)
    var mathMarks = obj[0].marks;
    var engMarks = obj[1].marks;
    var scienceMarks = obj[2].marks;
    var totalMarks = mathMarks + engMarks + scienceMarks;
    marks.push(totalMarks);

    var table = `<tr>
    <td>${i + 1}</td>
    <td>${userResult[i].name}</td>
    <td>${mathMarks}</td>
    <td>${engMarks}</td>
    <td>${scienceMarks}</td>
    <td>${totalMarks}</td>
    <td>${Math.floor((totalMarks * 100) / 300)} %</td>
    </tr>`

    result.innerHTML += table;
}

var num1 = 0;
var num2 = 0;
var num3 = 0;

for (i = 0; i < marks.length; i++) {
    if (marks[i] > num1) {
        num1 = marks[i];
    }

    if (marks[i] > num2 && marks[i] < num1) {
        num2 = marks[i];
    }

    if (marks[i] > num3 && marks[i] < num2) {
        num3 = marks[i];
    }
}

var first = userResult[marks.indexOf(num1)].name;
var second = userResult[marks.indexOf(num2)].name;
var third = userResult[marks.indexOf(num3)].name;


document.getElementById('first').innerText = `First: ${first}`
document.getElementById('second').innerText = `Second: ${second}`
document.getElementById('third').innerText = `Third: ${third}`