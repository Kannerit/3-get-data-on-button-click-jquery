console.log('Script is running!');

$(document).ready(function(){
    $('#button').click(function(){
        console.log(`click #button`);
            // $.get('https://akademia108.pl/api/ajax/get-post.php')
            // .done(function(data){
  
            //     let pId = $('<p></p>').text(`Post ID: ${data.id}`)
            //     let pUserId = $('<p></p>').text(`User ID: ${data.userId}`)
            //     console.log(data);
            //     let pTitle = $('<p></p>').text(`Title: ${data.title}`)
            //     let pBody  = $('<p></p>').text(`Body: ${data.body}`) 
            //     let hr = $('<hr></hr>');

            //     $('body').append(pId);
            //     $('body').append(pUserId);
            //     $('body').append(pTitle);
            //     $('body').append(pBody);
            //     $('body').append(hr);

            // })
            // .fail(function(error){
            //     console.error(error);
            // })



        //VERSION 2

                  $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){
  
                let pId = $('<p></p>').text(`Post ID: ${data.id}`)
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`)
                console.log(data);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`)
                let pBody  = $('<p></p>').text(`Body: ${data.body}`) 
                let hr = $('<hr></hr>');

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);

            })
            .fail(function(error){
                console.error(error);
            })


    })
})