app.lister.register("PostsList", function(i, element, output){

    output +=  '<li >';
    output += '<div class="title">'+element.title+'</div>';
    output += '<div class="body">'+element.body+'</div>';
    output += '<div class="read-more"><button type="button" class="btn btn-default" event(select) spike-translation="read_more"></button></div>';
    output += '<div class="separator">&nbsp;</div>';
    output += '</li>';

    return output;

}, {
    renderPerContext: true,
    transformArray: function(list, options){

        console.log(list);
        console.log(options);

        return list.slice(0, options.limit);

    }
});