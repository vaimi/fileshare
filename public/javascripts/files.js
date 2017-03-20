function getFiles () {
    $.ajax({
        url: '/files',
        type: 'POST',
        dataType:'json',
        data: {
            'test' : 0
        },
        success: function(data){
            var j = 0;
            var row = null;
            jQuery.each(data, function(i, val) {
                if (j % 3 === 0) {
                    row = document.createElement("div")
                    $(row).addClass("row");
                    $("#files").append(row);
                }
                row.appendChild(buildFileBlock(val));
                j += 1;
            });
        }
    });
}

buildFileBlock = function (filename) {
    var block = document.createElement("div");
    $(block).addClass("col-md-4");
    var img = document.createElement("img");
    $(img).addClass("img-responsive");
    img.setAttribute('src', filename);
    block.appendChild(img);
    return block;
}