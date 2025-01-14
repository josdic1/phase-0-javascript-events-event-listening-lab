document.addEventListener('DOMContentLoaded', function () {
   addingEventListener()
})


function addingEventListener() {
   const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}



