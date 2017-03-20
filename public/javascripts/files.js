function getFiles () {
    $.ajax({
        url: '/files',
        type: 'POST',
        dataType:'json',
        data: {
            'numberOfWords' : 10
        },
        success: function(data){
            alert('Data: '+data);
        }
    });
}