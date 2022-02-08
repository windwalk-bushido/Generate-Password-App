const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const BodyParser = require("body-parser");
let JsonParser = BodyParser.json();
let UrlencodedParser = BodyParser.urlencoded({ extended: false });

app.use(express.json(), cors(), JsonParser, UrlencodedParser);

let letters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let special_characters = [
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"#",
	":",
	";",
	"^",
	",",
	".",
	"?",
	"!",
	"|",
	"&",
	"_",
	"`",
	"~",
	"@",
	"$",
	"%",
	"/",
	"=",
	"+",
	"-",
	"*",
	"'",
	'"',
	"\\",
];

app.get("/", (request, response) => {
	response.send("<h1>It works!</h1>");
});

//0 to max
function RandomNumber(max) {
	return Math.floor(Math.random() * max);
}

app.put("/password", UrlencodedParser, (request, response) => {
	let generate_uppercase_letters = true;
	let generate_lowercase_letters = true;
	let generate_numbers = true;
	let generate_special_characters = true;
	let wanted_password_length = 16;
	let password = "";

	let arg1 = request.body.arg1;
	let arg2 = request.body.arg2;
	let arg3 = request.body.arg3;
	let arg4 = request.body.arg4;
	let arg5 = request.body.arg5;

	if (arg1["gen_uppercase"] == true) {
		generate_uppercase_letters = true;
	} else {
		generate_uppercase_letters = false;
	}

	if (arg2["gen_lowercase"] == true) {
		generate_lowercase_letters = true;
	} else {
		generate_lowercase_letters = false;
	}

	if (arg3["gen_numbers"] == true) {
		generate_numbers = true;
	} else {
		generate_numbers = false;
	}

	if (arg4["gen_specials"] == true) {
		generate_special_characters = true;
	} else {
		generate_special_characters = false;
	}

	wanted_password_length = arg5["pass_len"];

	let generate_password = true;

	while (generate_password) {
		if (password.length <= wanted_password_length) {
			let array_picker = RandomNumber(4);

			if (array_picker == 0 && generate_uppercase_letters == true) {
				let lucky_number = RandomNumber(letters.length);
				password += letters[lucky_number].toUpperCase();
			}

			if (array_picker == 1 && generate_lowercase_letters == true) {
				let lucky_number = RandomNumber(letters.length);
				password += letters[lucky_number];
			}

			if (array_picker == 2 && generate_numbers == true) {
				let lucky_number = RandomNumber(numbers.length);
				password += numbers[lucky_number];
			}

			if (array_picker == 3 && generate_special_characters == true) {
				let lucky_number = RandomNumber(special_characters.length);
				password += special_characters[lucky_number];
			}
		} else {
			generate_password = false;
		}
	}

	response.json(password);
	password = "";
	console.log("Password served."); //Log IP and Date of each request into a txt file!
});

const { createHash } = require("crypto");
const hash = createHash("sha256");

function CreateHash(input) {
	return hash.update(input).digest("hex");
}

app.put("/hash", UrlencodedParser, (request, response) => {
	let plaintext = request.body.arg1;
	let generated_hash = CreateHash(plaintext);
	response.json(generated_hash);
});

app.listen(port, () => console.log("Listening at http:localhost:" + port));
