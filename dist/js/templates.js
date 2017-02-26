; window["_spike_templates"] = {} 
; window["_spike_templates"]["src/app/component/commentsList/commentsList.view.html"] =  "<div class=\"comments-list\">" + 
 "    <div id=\"commentsList\"></div>" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/component/footer/footer.view.html"] =  "<div class=\"footer\" spike-translation=\"footer_all_right\">" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/component/postsList/postsList.view.html"] =  "<div class=\"posts-list\">" + 
 "    <ul id=\"postsList\"></ul>" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/component/spinner/spinner.view.html"] =  "<div class=\"spinner\" id=\"spinner\" style=\"display: none;\">" + 
 "    <p>" + 
 "        Loading..." + 
 "    </p>" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/component/topMenu/topMenu.view.html"] =  "<div class=\"top-menu\">" + 
 "" + 
 "    <ul class=\"top\">" + 
 "" + 
 "        <li class=\"left\">" + 
 "            <span spike-translation=\"menu\">menu</span>" + 
 "            <span id=\"currentLang\" spike-translation=\"language_en\">language_en</span>" + 
 "        </li>" + 
 "" + 
 "        <li class=\"dropdown-toggle\">" + 
 "            <button type=\"button\" class=\"btn btn-default\" id=\"toggleDropdown\">" + 
 "                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>" + 
 "            </button>" + 
 "        </li>" + 
 "" + 
 "" + 
 "    </ul>" + 
 "" + 
 "    <ul class=\"dropdown clearfix\" id=\"dropdown\" style=\"display: none;\">" + 
 "" + 
 "        <li id=\"home\"><a href=\"#/\" spike-translation=\"menu_home\"></a></li>" + 
 "        <li id=\"posts\"><a href=\"#/posts\" spike-translation=\"menu_posts\">menu_posts</a></li>" + 
 "        <li id=\"about\"><a href=\"#/about\" spike-translation=\"menu_about\"></a></li>" + 
 "        <li class=\"language\">" + 
 "            <button type=\"button\" class=\"btn btn-default\" id=\"changeLangToEn\" spike-translation=\"language_en\">language_en</button>" + 
 "            <button type=\"button\" class=\"btn btn-default\" id=\"changeLangToPl\" spike-translation=\"language_pl\">language_pl</button>" + 
 "        </li>" + 
 "" + 
 "    </ul>" + 
 "" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/controller/about/about.view.html"] =  "<div class=\"about\">" + 
 "" + 
 "    <h2 spike-translation=\"about\">about</h2>" + 
 "    <p spike-translation=\"about_text\"></p>" + 
 "" + 
 "</div>" + 
 "" ; 
; window["_spike_templates"]["src/app/controller/comments/comments.view.html"] =  "<div class=\"comments\">" + 
 "" + 
 "    <button class=\"btn btn-primary back-to-btn\" id=\"backToPost\" spike-translation=\"back_to_post\">back_to_post</button>" + 
 "" + 
 "    <h2 spike-translation=\"comments_list\"></h2>" + 
 "    <component name=\"commentsList\"></component>" + 
 "" + 
 "</div>" + 
 "" ; 
; window["_spike_templates"]["src/app/controller/editPost/editPost.view.html"] =  "<div class=\"edit-post\">" + 
 "" + 
 "    <button class=\"btn btn-primary back-to-btn\" id=\"backToPost\" spike-translation=\"back_to_post\">back_to_post</button>" + 
 "" + 
 "    <h2 spike-translation=\"edit_post\"></h2>" + 
 "" + 
 "    <form class=\"form-horizontal\" id=\"postForm\">" + 
 "        <fieldset>" + 
 "" + 
 "            <div class=\"form-group\">" + 
 "                <label class=\"control-label\" for=\"title\" spike-translation=\"post_title\">post_title</label>" + 
 "                <div class=\"col-md-12\">" + 
 "                    <input name=\"title\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\">" + 
 "                </div>" + 
 "            </div>" + 
 "" + 
 "            <div class=\"form-group\">" + 
 "                <label class=\"control-label\" for=\"body\" spike-translation=\"post_content\">post_content</label>" + 
 "                <div class=\"col-md-12\">" + 
 "                    <textarea class=\"form-control\" name=\"body\"></textarea>" + 
 "                </div>" + 
 "            </div>" + 
 "" + 
 "            <div class=\"form-group\">" + 
 "                <div class=\"col-md-8\">" + 
 "                    <button id=\"save\" name=\"button1id\" class=\"btn btn-success\" spike-translation=\"save\">save</button>" + 
 "                    <button id=\"delete\" name=\"button2id\" class=\"btn btn-danger\" spike-translation=\"delete\">delete</button>" + 
 "                </div>" + 
 "            </div>" + 
 "" + 
 "        </fieldset>" + 
 "    </form>" + 
 "" + 
 "</div>" + 
 "" ; 
; window["_spike_templates"]["src/app/controller/home/home.view.html"] =  "<div class=\"home\">" + 
 "" + 
 "    <h2 spike-translation=\"home\" id=\"home\">home id=\"home\"</h2>" + 
 "    <p spike-translation=\"recent_posts\"></p>" + 
 "" + 
 "    <component name=\"postsList\"></component>" + 
 "" + 
 "</div>" + 
 "" ; 
; window["_spike_templates"]["src/app/controller/notFound/notFound.view.html"] =  "<div class=\"notFound\">" + 
 "    <p spike-translation=\"page_not_found\">page_not_found</p>" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/controller/post/post.view.html"] =  "<div class=\"post\">" + 
 "" + 
 "    <button class=\"btn btn-primary back-to-btn\" id=\"backToList\" spike-translation=\"back_to_list\">back_to_list</button>" + 
 "" + 
 "    <div>" + 
 "        <p class=\"title\" id=\"title\"></p>" + 
 "        <p class=\"author\"  id=\"author\"></p>" + 
 "        <p class=\"body\"  id=\"body\"></p>" + 
 "        <a href=\"\" id=\"comments\" spike-translation=\"post_comments\">post_comments</a>" + 
 "        <a href=\"\" id=\"edit\" spike-translation=\"post_edit\"></a>" + 
 "    </div>" + 
 "" + 
 "" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/controller/posts/posts.view.html"] =  "<div class=\"posts\">" + 
 "" + 
 "    <h2 spike-translation=\"posts_list\">posts_list</h2>" + 
 "    <component name=\"postsList\"></component>" + 
 "" + 
 "</div>" + 
 "" ; 
; window["_spike_templates"]["src/app/modal/confirmDelete/confirmDelete.view.html"] =  "<div class=\"confirm-delete modal fade\" tabindex=\"-1\" role=\"dialog\" >" + 
 "    <div class=\"modal-dialog\">" + 
 "        <div class=\"modal-content\">" + 
 "" + 
 "            <div class=\"modal-body\">" + 
 "                <p class=\"title\" spike-translation=\"delete_title\">delete_title</p>" + 
 "                <p class=\"question\" spike-translation=\"confirm_delete_post_question\">confirm_delete_post_question</p>" + 
 "" + 
 "                <button class=\"btn btn-danger\" id=\"close\" spike-translation=\"close\">close</button>" + 
 "                <button class=\"btn btn-primary\" id=\"ok\" spike-translation=\"ok\"></button>" + 
 "            </div>" + 
 "" + 
 "        </div>" + 
 "    </div>" + 
 "</div>" ; 
; window["_spike_templates"]["src/app/partial/commentsList/commentsList.partial.html"] = function($local) { 
; var html = "" 
; html += '<ul>' 
; html += '' 
;  $.each($local.comments, function(i, comment) { 
; html += '' 
; html += '<li>' 
; html += '' 
; html += '    <div>' 
; html += '        <div class="email">'+comment.email+'</div>' 
; html += '        <div class="name">'+comment.name+'</div>' 
; html += '    </div>' 
; html += '    <p class="body">'+comment.body+'</p>' 
; html += '' 
; html += '    <div class="separator">&nbsp;</div>' 
; html += '' 
; html += '</li>' 
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
; html += '    <li >' 
; html += '' 
; html += '        <div class="title">'+post.title+'</div>' 
; html += '        <div class="body">'+post.body+'</div>' 
; html += '        <div class="read-more">' 
; html += '            <button type="button" class="btn btn-default" spike-event="click" spike-event-click="app.partial.PostsList.selectPost('+post.id+')" spike-translation="read_more">' 
; html += '            </button>' 
; html += '        </div>' 
; html += '' 
; html += '        <div class="separator">&nbsp;</div>' 
; html += '' 
; html += '    </li>' 
; html += '' 
;     }); 
; html += '' 
; html += '</ul>' 
; return html 
; } 
