$( document ).ready( readyNow );
var employees = [];

function readyNow(){
    // on click event handler for the add employee button
    $( '#addEmployeeButton' ).on( 'click', addEmployeeButtonClick );
    $( document ).on( 'click', '.removeButton', function(){
        // get the value of "data-index" on this button
        var myIndex = $( this ).data( 'index' );
        console.log( 'in document on click .removeButton:', myIndex );
        // remove this employee from array
        employees.splice( myIndex, 1 );
        calculateSalaries();
    }); //end document on click .removeButton
} // end doc ready

function addEmployeeButtonClick(){
    console.log( 'in addEmployeeButtonClick' );
    // get user input
    // put input into an object
    var newEmployee = {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $( '#lastNameIn' ).val(),
        employeeId: $( '#employeeIdIn' ).val(),
        jobDescription: $( '#jobDescriptionIn' ).val(),
        salary: $( '#salaryIn' ).val()
    } // end newEmployee object
    console.log( 'adding:', newEmployee );
    // push the new object into an array
    employees.push( newEmployee );
    console.log( employees );
    // clear inputs
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#employeeIdIn' ).val( '' );
    $( '#jobDescriptionIn' ).val( '' );
    $( '#salaryIn' ).val( '' );
    calculateSalaries();
} // end addEmployeeButtonClick

function calculateSalaries(){
    console.log( 'in calculateSalaries' );
    // loop through employees array
    var totalSalaries = 0;
    for( var i = 0; i< employees.length; i++ ){
        // convert each salary to a number
        // add salary to total salaries
        totalSalaries += Number( employees[ i ].salary );
    } // end for each employee
    console.log( 'total salaries:', totalSalaries );
    var monthlySalaryCost = totalSalaries / 12;
    console.log( 'monthly salary cost:', monthlySalaryCost );
    displayOutput( totalSalaries, monthlySalaryCost );
} // end calculateSalaries

function displayOutput( salaries, monthly ){
    console.log( 'in displayOutput', salaries );
    // total salaries
    $( '#totalSalaryOut' ).empty();
    $( '#totalSalaryOut' ).append( 'Total Salaries: $' + salaries.toFixed( 2 ) )
    // monthly salary cost
    $( '#monthlySalaryCostOut' ).empty();
    $( '#monthlySalaryCostOut' ).append( 'Monthly Salary Cost: $' + monthly.toFixed( 2 ) )
    // all employees
    // loop through employees array
    // append each to the ul with id 
    $( '#employeesOut' ).empty();
    for( var i = 0; i< employees.length; i ++ ){
        // <li><strong>lastName, firstName</strong>: id, job description, $salary</li>
        var appendString = '';
        appendString += '<li>';
        appendString += '<strong>' + employees[ i ].lastName + ', ' + employees[ i ].firstName + '</strong>';
        appendString += ': ' + employees[ i ].employeeId + ', ';
        appendString += employees[ i ].jobDescription + ', ';
        appendString += '$' + Number( employees[ i ].salary ).toFixed( 2 );
        appendString += '<button data-index="' + i + '" class="removeButton">Remove</button>';
        appendString += '</li>';
        $( '#employeesOut' ).append( appendString );
    } // end all eployees
} // end displayOutput