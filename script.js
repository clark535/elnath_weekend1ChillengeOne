$( document ).ready( readyNow );

function readyNow(){
    // on click event handler for the add employee button
    $( '#addEmployeeButton' ).on( 'click', addEmployeeButtonClick );
} // end doc ready

function addEmployeeButtonClick(){
    console.log( 'in addEmployeeButtonClick' );
} // end addEmployeeButtonClick