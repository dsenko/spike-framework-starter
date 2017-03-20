; window["_spike_templates"] = {} 
; window["_spike_templates"]["src/app/component/commentsList/commentsList.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="comments-list">' 
; html += '    <partial id="commentsList"></partial>' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["src/app/component/footer/footer.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="footer" spike-translation="footer_all_right">' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["src/app/component/postsList/postsList.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="posts-list">' 
; html += '    <partial id="postsList"></partial>' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["src/app/component/spinner/spinner.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="spinner" id="spinner" style="display: none;">' 
; html += '    <p>' 
; html += '        Loading...' 
; html += '    </p>' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["src/app/component/topMenu/topMenu.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="top-menu">' 
; html += '' 
; html += '    <ul class="top">' 
; html += '' 
; html += '        <li class="left">' 
; html += '            <span spike-translation="menu">menu</span>' 
; html += '            <span id="currentLang" spike-translation="language_en">language_en</span>' 
; html += '        </li>' 
; html += '' 
; html += '        <li class="dropdown-toggle">' 
; html += '            <button type="button" class="btn btn-default" id="toggleDropdown">' 
; html += '                <span class="glyphicon glyphicon-menu-hamburger"></span>' 
; html += '            </button>' 
; html += '        </li>' 
; html += '' 
; html += '' 
; html += '    </ul>' 
; html += '' 
; html += '    <ul class="dropdown clearfix" id="dropdown" style="display: none;">' 
; html += '' 
; html += '        <li id="home"><a href="#/" spike-translation="menu_home">menu_home</a></li>' 
; html += '        <li id="posts"><a href="#/posts" spike-translation="menu_posts">menu_posts</a></li>' 
; html += '        <li id="about"><a href="#/about" spike-translation="menu_about">menu_about</a></li>' 
; html += '        <li class="language">' 
; html += '            <button type="button" class="btn btn-default" id="changeLangToEn" spike-translation="language_en">language_en</button>' 
; html += '            <button type="button" class="btn btn-default" id="changeLangToPl" spike-translation="language_pl">language_pl</button>' 
; html += '        </li>' 
; html += '' 
; html += '    </ul>' 
; html += '' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["src/app/controller/about/about.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="about">' 
; html += '' 
; html += '    <h2 spike-translation="about">about</h2>' 
; html += '    <p spike-translation="about_text">about_text</p>' 
; html += '' 
; html += '</div>' 
; html += '' 
; return html 
; } 
; window["_spike_templates"]["src/app/controller/comments/comments.view.html"] = function($local) { 
; var html = "" 
; html += '' 
; html += '<div class="comments">' 
; html += '' 
; html += '    <button class="btn btn-primary back-to-btn" spike-event="click" spike-event-click="app.router.back();" spike-translation="back_to_post">back_to_post</button>' 
; html += '' 
; html += '    <h2 spike-translation="comments_list">comments_list</h2>' 
; html += '    <component name="commentsList"></component>' 
; html += '' 
; html += '</div>' 
; html += '' 
; return html 
; } 
; window["_spike_templates"]["src/app/controller/editPost/editPost.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="edit-post">' 
; html += '' 
; html += '    <button class="btn btn-primary back-to-btn" id="backToPost" spike-translation="back_to_post">back_to_post</button>' 
; html += '' 
; html += '    <h2 spike-translation="edit_post">edit_post</h2>' 
; html += '' 
; html += '    <form class="form-horizontal" id="postForm">' 
; html += '        <fieldset>' 
; html += '' 
; html += '            <div class="form-group">' 
; html += '                <label class="control-label" for="title" spike-translation="post_title">post_title</label>' 
; html += '                <div class="col-md-12">' 
; html += '                    <input name="title" type="text" placeholder="placeholder" class="form-control input-md">' 
; html += '                </div>' 
; html += '            </div>' 
; html += '' 
; html += '            <div class="form-group">' 
; html += '                <label class="control-label" for="body" spike-translation="post_content">post_content</label>' 
; html += '                <div class="col-md-12">' 
; html += '                    <textarea class="form-control" name="body"></textarea>' 
; html += '                </div>' 
; html += '            </div>' 
; html += '' 
; html += '            <div class="form-group">' 
; html += '                <div class="col-md-8">' 
; html += '                    <button id="save" name="button1id" class="btn btn-success" spike-translation="save">save</button>' 
; html += '                    <button id="delete" name="button2id" class="btn btn-danger" spike-translation="delete">delete</button>' 
; html += '                </div>' 
; html += '            </div>' 
; html += '' 
; html += '        </fieldset>' 
; html += '    </form>' 
; html += '' 
; html += '</div>' 
; html += '' 
; return html 
; } 
; window["_spike_templates"]["src/app/controller/home/home.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="home">' 
; html += '' 
; html += '    <h2 spike-translation="home" id="home">home</h2>' 
; html += '    <p spike-translation="recent_posts">recent_posts</p>' 
; html += '' 
; html += '    <component name="postsList"></component>' 
; html += '</div>' 
; html += '' 
; return html 
; } 
; window["_spike_templates"]["src/app/controller/notFound/notFound.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="notFound">' 
; html += '    <p spike-translation="page_not_found">page_not_found</p>' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["@template/post"] =  "<div id=\"postContent\">" + 
 "    <p class=\"title\" spike-val=\"post.title\"></p>" + 
 "    <p class=\"author\"  spike-val=\"post.author\"></p>" + 
 "    <p class=\"body\"  spike-val=\"post.body\"></p>" + 
 "    <a href=\"\" id=\"comments\" spike-translation=\"post_comments\">post_comments</a>" + 
 "    <a href=\"\" id=\"edit\" spike-translation=\"post_edit\">post_edit</a>" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/controller/post/post.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="post">' 
; html += '' 
; html += '    <button class="btn btn-primary back-to-btn" id="backToList" spike-translation="back_to_list">back_to_list</button>' 
; html += '' 
; html += '    @template(post)' 
; html += '' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["src/app/controller/posts/posts.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="posts">' 
; html += '' 
; html += '    <h2 spike-translation="posts_list">posts_list</h2>' 
; html += '    <component name="postsList"></component>' 
; html += '' 
; html += '</div>' 
; html += '' 
; return html 
; } 
; window["_spike_templates"]["src/app/modal/confirmDelete/confirmDelete.view.html"] = function($local) { 
; var html = "" 
; html += '<div class="confirm-delete modal fade" tabindex="-1" role="dialog" >' 
; html += '    <div class="modal-dialog">' 
; html += '        <div class="modal-content">' 
; html += '' 
; html += '            <div class="modal-body">' 
; html += '                <p class="title" spike-translation="delete_title">delete_title</p>' 
; html += '                <p class="question" spike-translation="confirm_delete_post_question">confirm_delete_post_question</p>' 
; html += '' 
; html += '                <button class="btn btn-danger" id="close" spike-translation="close">close</button>' 
; html += '                <button class="btn btn-primary" id="ok" spike-translation="ok">ok</button>' 
; html += '            </div>' 
; html += '' 
; html += '        </div>' 
; html += '    </div>' 
; html += '</div>' 
; return html 
; } 
; window["_spike_templates"]["src/app/partial/commentsList/commentsList.partial.html"] = function($local) { 
; var html = "" 
; html += '<ul>' 
; html += '' 
;  $.each($local.comments, function(i, comment) { 
; html += '' 
; html += '    <li>' 
; html += '' 
; html += '        <div>' 
; html += '            <div class="email">'+comment.email+'</div>' 
; html += '            <div class="name">'+comment.name+'</div>' 
; html += '        </div>' 
; html += '        <p class="body">'+comment.body+'</p>' 
; html += '' 
; html += '        <div class="separator">&nbsp;</div>' 
; html += '' 
; html += '    </li>' 
; html += '' 
;  }); 
; html += '' 
; html += '</ul>' 
; return html 
; } 
; window["_spike_templates"]["src/app/partial/postsList/postsList.partial.html"] = function($local) { 
; var html = "" 
; html += '' 
; html += '<ul>' 
; html += '' 
;      $.each($local.posts.slice(0, $local.limit), function(i, post){ 
; html += '' 
; html += '        <li >' 
; html += '' 
; html += '            <div class="title">'+post.title+'</div>' 
; html += '            <div class="body">'+post.body+'</div>' 
; html += '            <div class="read-more">' 
; html += '                <button type="button" class="btn btn-default" spike-event="click" spike-event-click="app.partial.PostsList.selectPost('+post.id+')" spike-translation="read_more">' 
; html += '                </button>' 
; html += '            </div>' 
; html += '' 
; html += '            <div class="separator">&nbsp;</div>' 
; html += '' 
; html += '        </li>' 
; html += '' 
;     }); 
; html += '' 
; html += '</ul>' 
; return html 
; } 
