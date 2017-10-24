

   $(document).ready(function(){
   var xml;
  $('#b1').click(function(){
       $.get('user.xml', null, function (data, textStatus) {
           xml=data;
            $(xml).find('details').each( function(){
                var item = $(this);

                if(item.find('username').text()==$('#name').val() && item.find('password').text()==$('#pass').val())
                {
                    window.open('success.html');
                }
           });
        });
    });
});
    