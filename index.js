document.getElementById('m1').addEventListener('click', function(){
  console.log('button clicked');
});
function getData() {
  console.log('btn clicked');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    })
}
