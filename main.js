const scroll = new SmoothScroll('.navbar a[href*="#"]', {
speed: 100
});

$('#contact-form').submit(function (e) {
 var name = document.getElementById('inputname')
     mail = document.getElementById('inputemail')
     message = document.getElementById('inputmessage');

 if (!name.value || !email.value || !message.value){
   alertify.error('Please check your entries')
 } else {
   $.ajax({
     url: "https://formspree.io/ralphkarkafi@hotmail.com",
     method: "POST",
     data: $(this).serialize(),
     dataType:"json"
   })
   e.preventDefault()
   $(this).get(0).reset()
   alertify.success('Message sent')
 }
})
