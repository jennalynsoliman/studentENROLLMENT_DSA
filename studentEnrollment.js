//Problem 7-8

// (3) arrays, namely DSA, PL, Networks
let OSA = [];
let PL = [];
let Networks = [];

function manageEnrollment() {
    let subjects = { A: OSA, B: PL, C: Networks };
    
    while (true) {
        // (SUBJECT)Ask the user to select a subject of choice to enroll a student (A) Enroll,(B) uNENROLL,(C)Select Another subjec, (D) Exit)
        let subjectChoice = prompt("Select a subject to enroll a student:\n(A) OSA\n(B) PL\n(C) Networks\n(Exit) to quit").toUpperCase();
        
        // Exit the program
        if (subjectChoice === "EXIT") {
            console.log("Enrolled Students:");
            console.log("OSA:", OSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            break;
        }

        // Validate subject choice
        if (!subjects[subjectChoice]) {
            alert("Invalid choice. Please select a valid subject.");
            continue;
        }

        let currentSubject = subjects[subjectChoice];

        // (Operations): Enroll, Unenroll, Select Another Subject
        while (true) {
            let operation = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(Exit) to quit").toUpperCase();

            if (operation === "EXIT") {
                console.log("Enrolled Students:");
                console.log("OSA:", OSA);
                console.log("PL:", PL);
                console.log("Networks:", Networks);
                return;
            }

            if (operation === "A") { // (Enroll)
                let studentName = prompt("Enter the name of the student to enroll:");
                currentSubject.push(studentName);
                console.log(`${studentName} has been enrolled in ${subjectChoice === "A" ? "OSA" : subjectChoice === "B" ? "PL" : "Networks"}.`);
            } 
            else if (operation === "B") { // (Unenroll)
                if (currentSubject.length === 0) {
                    alert("No students are currently enrolled in this subject.");
                } else {
                    alert("Currently enrolled students: " + currentSubject.join(", "));
                    let studentName = prompt("Enter the name of the student to unenroll:");
                    let index = currentSubject.indexOf(studentName);
                    if (index !== -1) {
                        currentSubject.splice(index, 1);
                        console.log(`${studentName} has been unenrolled from ${subjectChoice === "A" ? "OSA" : subjectChoice === "B" ? "PL" : "Networks"}.`);
                    } else {
                        alert("Student not found in this subject.");
                    }
                }
            } 
            else if (operation === "C") { // (Select Another Subject)
                break;
            } 
            else {
                alert("Invalid choice. Please select a valid operation.");
            }
        }
    }
}

// Start the enrollment management process
manageEnrollment();
