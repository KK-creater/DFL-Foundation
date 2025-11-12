
// Demo interactions for DFL Foundations demo site
document.addEventListener('click', function(e){
  if(e.target.matches('.preset')){
    var amt = e.target.dataset.amount;
    var input = document.querySelector('input[name="amount"]');
    if(input) input.value = amt;
  }
  if(e.target.matches('.nav-toggle')){
    document.querySelector('.nav').classList.toggle('open');
  }
});

function handleDonate(e){
  e.preventDefault();
  var f = e.target;
  var name = f.name.value || 'Friend';
  alert('Thanks ' + name + '! This is a demo donation form. Integrate a payment gateway to accept real donations.');
  f.reset();
}

function handleVolunteer(e){
  e.preventDefault();
  var status = document.getElementById('volunteerStatus');
  status.textContent = 'Thanks for signing up! We will contact you soon (demo).';
  e.target.reset();
}

function handleContact(e){
  e.preventDefault();
  var s = document.getElementById('contactStatus');
  s.textContent = 'Message ready to be sent (demo).';
  e.target.reset();
}
