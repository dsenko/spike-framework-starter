app.lister.register("CommentsList", function(i, element, output){

    output += '<li>';

    output += ' <div>';
    output += '     <div class="email">'+element.email+'</div>';
    output += '     <div class="name">'+element.name+'</div>';
    output += ' </div>';
    output += ' <p class="body">'+element.body+'</p>';

    output += ' <div class="separator">&nbsp;</div>';

    output += '</li>';

    return output;

}, {
    renderPerContext: true
});