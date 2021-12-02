(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(34),a=n.n(c),o=(n(42),n(22)),i=n.n(o),l=n(35),d=n(10),j=n(11),u=n(13),h=n(12),b=(n(44),n(2)),x=n(0),p=function(e){var t=e.user;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.id}),Object(x.jsx)("td",{children:t.username}),Object(x.jsx)("td",{children:t.firstName}),Object(x.jsx)("td",{children:t.lastName}),Object(x.jsx)("td",{children:t.email}),Object(x.jsx)("td",{children:t.birthday})]})},m=function(e){var t=e.users;return Object(x.jsxs)("table",{className:"table table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"ID"}),Object(x.jsx)("th",{children:"Username"}),Object(x.jsx)("th",{children:"First Name"}),Object(x.jsx)("th",{children:"Last Name"}),Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:"Birthday Year"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e){return Object(x.jsx)(p,{user:e},e.id.toString())}))})]})},O=function(e){var t=e.users,n=Object(b.g)().id,s=t.filter((function(e){return e.id.toString()===n}));return Object(x.jsx)(m,{users:s})},f=n(37),v=n(4),g=n(15),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={title:"",link:"https://",usersWorked:[]},s}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleUsersWorkedChange",value:function(e){if(e.target.selectedOptions){for(var t=[],n=0;n<e.target.selectedOptions.length;n++)t.push(e.target.selectedOptions.item(n).value);this.setState({usersWorked:t})}else this.setState({usersWorked:[]})}},{key:"handleSubmit",value:function(e){switch(this.props.titleForm){case"Create":this.props.createProject(this.state.title,this.state.link,this.state.usersWorked);break;case"Edit":this.props.editProject(this.props.idProject,this.state.title,this.state.link,this.state.usersWorked);break;default:console.log(this.props.titleForm)}e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)("h1",{children:[this.props.titleForm," project"]}),Object(x.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(x.jsxs)("div",{className:"form-group py-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"title",className:"mx-2",children:"title:"}),Object(x.jsx)("input",{type:"text",name:"title",className:"form-control",value:this.state.title,onChange:function(t){return e.handleChange(t)}})]}),Object(x.jsxs)("div",{className:"form-group py-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"link",className:"mx-2",children:"link:"}),Object(x.jsx)("input",{type:"text",name:"link",className:"form-control",value:this.state.link,onChange:function(t){return e.handleChange(t)}})]}),Object(x.jsxs)("div",{className:"form-group pa-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"usersWorked",className:"mx-2",children:"users worked:"}),Object(x.jsx)("select",{multiple:!0,className:"form-control",name:"usersWorked",onChange:function(t){return e.handleUsersWorkedChange(t)},children:this.props.users.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.username},e.id.toString())}))})]}),Object(x.jsx)("div",{className:"py-2",children:Object(x.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Save"})})]})]})}}]),n}(r.a.Component),y=function(e){var t,n=e.project,s=e.deleteProject,r=Object(b.g)().id,c=Object(b.f)();return t=r?n.id:Object(x.jsx)(v.b,{to:"".concat(c.location.pathname,"/").concat(n.id),children:n.id}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t}),Object(x.jsx)("td",{children:n.title}),Object(x.jsx)("td",{children:n.link}),Object(x.jsx)("td",{children:n.usersWorked.join(", ")}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{type:"button",onClick:function(){return s(n.id)},children:"Delete"})})]})},N=function(e){var t=e.users,n=e.projects,r=e.editProject,c=e.deleteProject,a=Object(s.useState)(""),o=Object(f.a)(a,2),i=o[0],l=o[1],d=Object(b.g)().id,j=n;return d||(j=n.filter((function(e){return""===e.title|e.title.toLowerCase().includes(i)}))),Object(x.jsxs)("div",{children:[!d&&Object(x.jsxs)("div",{className:"row pt-3 px-3 justify-content-end",children:[Object(x.jsx)("label",{htmlFor:"search_title",className:"col-2 justify-content-end  align-self-end",children:"Search title project:"}),Object(x.jsx)("input",{type:"text",name:"search_title",className:"col-3 justify-content-end  align-self-end",placeholder:"Search",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsx)(v.b,{to:"/create/project",children:"Create Project"}),Object(x.jsxs)("table",{className:"table table-bordered my-3",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"ID"}),Object(x.jsx)("th",{children:"Title"}),Object(x.jsx)("th",{children:"Link"}),Object(x.jsx)("th",{children:"UsersWorked"}),Object(x.jsx)("th",{})]})}),Object(x.jsx)("tbody",{children:j.map((function(e){return Object(x.jsx)(y,{project:e,deleteProject:c},e.id.toString())}))})]}),d&&Object(x.jsx)(k,{users:t,titleForm:"Edit",editProject:r,idProject:d})]})},C=function(e){var t=e.users,n=e.projects,s=e.editProject,r=e.deleteProject,c=Object(b.g)().id,a=n.filter((function(e){return e.id.toString()===c}));return Object(x.jsx)(N,{projects:a,deleteProject:r,editProject:s,users:t})},_=function(e){var t=e.todo,n=e.deleteTodo;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.id}),Object(x.jsx)("td",{children:t.title}),Object(x.jsx)("td",{children:t.text}),Object(x.jsx)("td",{children:Object(x.jsx)(v.b,{style:{textDecoration:"none"},to:"project/".concat(t.project.id),children:t.project.title})}),Object(x.jsx)("td",{children:Object(x.jsx)(v.b,{style:{textDecoration:"none"},to:"user/".concat(t.author.id),children:t.author.username})}),Object(x.jsx)("td",{children:t.author.email}),Object(x.jsx)("td",{children:t.isActive.toString()}),Object(x.jsx)("td",{children:new Date(t.dateCreated).toLocaleString()}),Object(x.jsx)("td",{children:new Date(t.dateModified).toLocaleString()}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})})]})},S=function(e){var t=e.todos,n=e.deleteTodo;return Object(x.jsxs)("div",{children:[Object(x.jsx)(v.b,{to:"/create/todo",children:"Create Todo"}),Object(x.jsxs)("table",{className:"table table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"ID"}),Object(x.jsx)("th",{children:"Title"}),Object(x.jsx)("th",{children:"Text"}),Object(x.jsx)("th",{children:"Project"}),Object(x.jsx)("th",{children:"Author"}),Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:"Is Active?"}),Object(x.jsx)("th",{children:"Date Created"}),Object(x.jsx)("th",{children:"Date Modified"}),Object(x.jsx)("th",{})]})}),Object(x.jsx)("tbody",{children:t.map((function(e){return Object(x.jsx)(_,{todo:e,deleteTodo:n},e.id.toString())}))})]})]})},P=function(e){var t=e.todos,n=e.deleteTodo,s=Object(b.g)().id,r=t.filter((function(e){return e.id.toString()===s}));return Object(x.jsx)(S,{todos:r,deleteTodo:n})},T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).toggleChange=function(){s.setState({isActive:!s.state.isActive})},s.state={title:"",text:"",isActive:!0,author:0,project:0,selectedIdAuthor:0,selectedIdProject:0},s}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleAuthorChange",value:function(e){this.setState({selectedIdAuthor:e.target.value,author:e.target.value})}},{key:"handleProjectChange",value:function(e){this.setState({selectedIdProject:e.target.value,project:e.target.value})}},{key:"handleSubmit",value:function(e){this.props.createTodo(this.state.title,this.state.text,this.state.isActive,this.state.author,this.state.project),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("h1",{children:"Create Todo"}),Object(x.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(x.jsxs)("div",{className:"form-group py-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"title",className:"mx-2",children:"title:"}),Object(x.jsx)("input",{type:"text",name:"title",className:"form-control",value:this.state.title,onChange:function(t){return e.handleChange(t)}})]}),Object(x.jsxs)("div",{className:"form-group py-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"text",className:"mx-2",children:"text:"}),Object(x.jsx)("textarea",{type:"text",name:"text",className:"form-control",value:this.state.text,onChange:function(t){return e.handleChange(t)}})]}),Object(x.jsxs)("div",{className:"form-group py-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"isActive",className:"mx-2",children:"isActive Todo?:"}),Object(x.jsx)("input",{type:"checkbox",defaultChecked:this.state.isActive,onChange:function(t){return e.toggleChange(t)}})]}),Object(x.jsxs)("div",{className:"form-group pa-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"author",className:"mx-2",children:"author:"}),Object(x.jsxs)("select",{className:"form-control",name:"author",onChange:function(t){return e.handleAuthorChange(t)},value:this.state.selectedIdAuthor,children:[Object(x.jsx)("option",{value:"0",children:"---"}),this.props.users.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.username},e.id.toString())}))]})]}),Object(x.jsxs)("div",{className:"form-group pa-2 col-6 offset-3",children:[Object(x.jsx)("label",{htmlFor:"project",className:"mx-2",children:"project:"}),Object(x.jsxs)("select",{className:"form-control",name:"project",value:this.state.selectedIdProject,onChange:function(t){return e.handleProjectChange(t)},children:[Object(x.jsx)("option",{value:"0",children:"---"}),this.props.projects.map((function(e){return Object(x.jsx)("option",{value:e.id,children:e.title},e.id)}))]})]}),Object(x.jsx)("div",{className:"py-2",children:Object(x.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Save"})})]})]})}}]),n}(r.a.Component),w=function(e){var t=e.model;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.name}),Object(x.jsx)("td",{children:t.model.length})]})},F=function(e){var t=[{name:"users",model:e.users},{name:"todos",model:e.todos},{name:"projects",model:e.projects}];return Object(x.jsxs)("table",{className:"table table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Model Name"}),Object(x.jsx)("th",{children:"Count"})]})}),Object(x.jsx)("tbody",{children:t.map((function(e){return Object(x.jsx)(w,{model:e},e.name)}))})]})},A=function(e){var t=e.title,n=e.link;return Object(x.jsx)("li",{className:"flex-fill bg-warning px-5 list-group-item text-white",children:Object(x.jsx)(v.b,{style:{textDecoration:"none"},to:n,children:t})})},D=function(e){var t=e.menu;return Object(x.jsx)("div",{className:"navbar",children:Object(x.jsx)("ul",{className:"py-4 flex-fill  list-group list-group-horizontal",children:t.map((function(e){return Object(x.jsx)(A,{title:e.title,link:e.link},e.id)}))})})};var W=function(e){var t=e.textFooter;return Object(x.jsx)("div",{className:"card-footer fixed-bottom flex-fill bg-info text-white",children:t})},I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={login:"",password:""},s}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.get_token(this.state.login,this.state.password),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("form",{className:"form-inline",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(x.jsx)("input",{type:"text",name:"login",placeholder:"email",className:"mx-2",value:this.state.login,onChange:function(t){return e.handleChange(t)}}),Object(x.jsx)("input",{type:"password",name:"password",placeholder:"password",className:"mx-2  ",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),Object(x.jsx)("input",{className:"btn btn-primary mx-2",type:"submit",value:"Login"})]})}}]),n}(r.a.Component),L=n(9),E=n.n(L),M=n(25),U=function(e){var t=e.location;return Object(x.jsx)("div",{children:Object(x.jsxs)("h1",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 '",t.pathname,"' \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"]})})},z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={username:"Guest",token:"",users:[],todos:[],projects:[],menu:[{id:1,link:"/",title:"Home"},{id:2,link:"/user",title:"Users"},{id:3,link:"/todo",title:"Todos"},{id:4,link:"/project",title:"Projects"}],textFooter:"Footer text about something."},s}return Object(j.a)(n,[{key:"set_token_and_username",value:function(e,t){var n=this,s=new M.a;s.set("token",e),s.set("username",t),this.setState({token:e,username:t},(function(){return n.load_data()}))}},{key:"is_authenticated",value:function(){return!!this.state.token}},{key:"logout",value:function(){this.set_token_and_username("","Guest")}},{key:"get_token_and_username_from_storage",value:function(){var e=this,t=new M.a,n=t.get("token"),s=t.get("username");this.setState({token:n,username:s},(function(){return e.load_data()}))}},{key:"get_token",value:function(e,t){var n=this;E.a.post("http://127.0.0.1:8000/api-token-auth/",{username:e,password:t}).then((function(e){n.set_token_and_username(e.data.token,e.data.username)})).catch((function(e){return alert("Code status is ".concat(e.response.status," - Invalid username or password"))}))}},{key:"get_headers",value:function(){var e={"Content-Type":"application/json"};return this.is_authenticated()&&(e.Authorization="Token "+this.state.token),e}},{key:"load_data",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.get_headers(),n=[],s=[],r=[],e.next=6,E.a.get("http://127.0.0.1:8000/api/users/",{headers:t}).then((function(e){n=e.data.results})).catch((function(){n=[]}));case 6:return e.next=8,E.a.get("http://127.0.0.1:8000/api/projects/todo/",{headers:t}).then((function(e){s=e.data.results})).catch((function(e){return console.log(console.log(e))}));case 8:return e.next=10,E.a.get("http://127.0.0.1:8000/api/projects/project/",{headers:t}).then((function(e){r=e.data.results})).catch((function(e){return console.log(e)}));case 10:this.setState({users:n,todos:s,projects:r});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createProject",value:function(e,t,n){var s=this,r=this.get_headers(),c={title:e,link:t,usersWorked:n};E.a.post("http://127.0.0.1:8000/api/projects/project/",c,{headers:r}).then((function(e){alert('The project "'.concat(e.data.title,'" created.')),s.load_data()})).catch((function(e){alert("Code status is ".concat(e.response.status," - Error create."))}))}},{key:"createTodo",value:function(e,t,n,s,r){var c=this,a=this.get_headers(),o={title:e,text:t,isActive:n,author:s,project:r};E.a.post("http://127.0.0.1:8000/api/projects/todo/",o,{headers:a}).then((function(e){alert('The todo "'.concat(e.data.title,'" created.')),c.load_data()})).catch((function(e){alert("Code status is ".concat(e.response.status," - Error create."))}))}},{key:"editProject",value:function(e,t,n,s){var r=this,c=this.get_headers(),a={id:e,title:t,link:n,usersWorked:s};E.a.patch("http://127.0.0.1:8000/api/projects/project/".concat(e,"/"),a,{headers:c}).then((function(e){alert('The project "'.concat(e.data.title,'" edited.')),r.load_data()})).catch((function(e){alert("Code status is ".concat(e.response.status," - Error edit."))}))}},{key:"deleteProject",value:function(e){var t=this,n=this.get_headers();E.a.delete("http://127.0.0.1:8000/api/projects/project/".concat(e,"/"),{headers:n}).then((function(e){t.load_data()})).catch((function(e){console.log(e),alert("Code status is ".concat(e.response.status," - Error delete, project isn't empty.")),t.load_data()}))}},{key:"deleteTodo",value:function(e){var t=this,n=this.get_headers();E.a.delete("http://127.0.0.1:8000/api/projects/todo/".concat(e,"/"),{headers:n}).then((function(e){t.load_data()})).catch((function(e){console.log(e),t.setState({todos:[]})}))}},{key:"componentDidMount",value:function(){this.get_token_and_username_from_storage()}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"container text-center",children:[Object(x.jsxs)(v.a,{children:[Object(x.jsx)("div",{className:"row pt-3 justify-content-end",children:Object(x.jsx)("div",{className:"col-3  align-self-end",children:Object(x.jsxs)("ul",{className:"list-group list-group-horizontal",children:[Object(x.jsxs)("li",{className:"list-group-item",children:["Welcome ",Object(x.jsx)("strong",{children:this.state.username}),"!"]}),Object(x.jsx)("li",{className:"list-group-item",children:this.is_authenticated()?Object(x.jsx)("button",{onClick:function(){return e.logout()},children:"Logout"}):Object(x.jsx)(v.b,{to:"/login",children:Object(x.jsx)("button",{children:"Login"})})})]})})}),Object(x.jsx)(D,{menu:this.state.menu}),Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/",component:function(){return Object(x.jsx)(F,{users:e.state.users,projects:e.state.projects,todos:e.state.todos})}}),Object(x.jsx)(b.a,{exact:!0,path:"/login",component:function(){return Object(x.jsx)(I,{get_token:function(t,n){return e.get_token(t,n)}})}}),Object(x.jsx)(b.a,{exact:!0,path:"/user",component:function(){return Object(x.jsx)(m,{users:e.state.users})}}),Object(x.jsx)(b.a,{exact:!0,path:"/project",component:function(){return Object(x.jsx)(N,{projects:e.state.projects,users:e.state.users,deleteProject:function(t){return e.deleteProject(t)}})}}),Object(x.jsx)(b.a,{exact:!0,path:"/todo",component:function(){return Object(x.jsx)(S,{todos:e.state.todos,deleteTodo:function(t){return e.deleteTodo(t)}})}}),Object(x.jsx)(b.a,{path:"/project/:id",children:Object(x.jsx)(C,{projects:this.state.projects,users:this.state.users,deleteProject:function(t){return e.deleteProject(t)},editProject:function(t,n,s,r){return e.editProject(t,n,s,r)}})}),Object(x.jsx)(b.a,{exact:!0,path:"/create/project",component:function(){return Object(x.jsx)(k,{titleForm:"Create",users:e.state.users,createProject:function(t,n,s){return e.createProject(t,n,s)}})}}),Object(x.jsx)(b.a,{exact:!0,path:"/create/todo",component:function(){return Object(x.jsx)(T,{users:e.state.users,projects:e.state.projects,createTodo:function(t,n,s,r,c){return e.createTodo(t,n,s,r,c)}})}}),Object(x.jsx)(b.a,{path:"/todo/:id",children:Object(x.jsx)(P,{todos:this.state.todos,deleteTodo:function(t){return e.deleteTodo(t)}})}),Object(x.jsx)(b.a,{path:"/user/:id",children:Object(x.jsx)(O,{users:this.state.users})}),Object(x.jsx)(b.a,{component:U})]})]}),Object(x.jsx)("div",{className:"navbar",children:Object(x.jsx)(W,{textFooter:this.state.textFooter})})]})}}]),n}(r.a.Component),B=z,G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};n(72);a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),G()}},[[73,1,2]]]);
//# sourceMappingURL=main.0548ce44.chunk.js.map