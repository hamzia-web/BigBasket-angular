(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{WLUK:function(e,t,r){"use strict";r.r(t),r.d(t,"ProductsModule",(function(){return q}));var o=r("ofXK"),i=r("tyNb"),c=r("fXoL");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-products"]],decls:2,vars:0,template:function(e,t){1&e&&(c.Kb(0,"p"),c.gc(1,"products works!"),c.Jb())},styles:[""]}),e})();var s=r("7o/Q");function d(e=-1){return t=>t.lift(new b(e,t))}class b{constructor(e,t){this.count=e,this.source=t}call(e,t){return t.subscribe(new a(e,this.count,this.source))}}class a extends s.a{constructor(e,t,r){super(e),this.count=t,this.source=r}error(e){if(!this.isStopped){const{source:t,count:r}=this;if(0===r)return super.error(e);r>-1&&(this.count=r-1),t.subscribe(this._unsubscribeAndRecycle())}}}var u=r("JIr8"),l=r("HDdC"),p=r("tk/3");let m=(()=>{class e{constructor(e){this.httpClient=e}getAllProducts(){return this.httpClient.get("http://127.0.0.1:5000/api/products/").pipe(d(1),Object(u.a)(this.handleError))}getProduct(e){return this.httpClient.get("http://127.0.0.1:5000/api/products/"+e).pipe(d(1),Object(u.a)(this.handleError))}createProduct(e){return this.httpClient.post("http://127.0.0.1:5000/api/products/",e).pipe(d(1),Object(u.a)(this.handleError))}updateProduct(e,t){return this.httpClient.put("http://127.0.0.1:5000/api/products/"+t,e).pipe(d(1),Object(u.a)(this.handleError))}deleteProduct(e){return this.httpClient.delete("http://127.0.0.1:5000/api/products/"+e).pipe(d(1),Object(u.a)(this.handleError))}handleError(e){let t="";return t=e.error instanceof ErrorEvent?"Error : "+e.error.message:`Status : ${e.status} \n Message: ${e.message}`,function(e,t){return new l.a(t=>t.error(e))}(t)}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(p.a))},e.\u0275prov=c.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function g(e,t){if(1&e&&(c.Kb(0,"div",9),c.Kb(1,"div",10),c.Kb(2,"div",11),c.Ib(3,"img",12),c.Jb(),c.Kb(4,"div",13),c.Kb(5,"ul",14),c.Kb(6,"li",15),c.gc(7),c.Jb(),c.Kb(8,"li",15),c.gc(9),c.Ub(10,"currency"),c.Jb(),c.Kb(11,"li",15),c.gc(12),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e){const e=t.$implicit;c.xb(3),c.Wb("src",e.image,c.bc),c.xb(4),c.ic(" Name: ",e.name," "),c.xb(2),c.ic(" Price: ",c.Vb(10,4,e.price,"INR")," "),c.xb(3),c.ic(" Qty: ",e.qty," Kgs ")}}function h(e,t){if(1&e&&(c.Kb(0,"div",7),c.fc(1,g,13,7,"div",8),c.Jb()),2&e){const e=c.Tb();c.xb(1),c.Wb("ngForOf",e.products)}}function f(e,t){1&e&&(c.Kb(0,"div",7),c.Kb(1,"div",16),c.Kb(2,"p",17),c.gc(3,"--------------- No Products Found ------------- "),c.Jb(),c.Jb(),c.Jb())}let v=(()=>{class e{constructor(e){this.productService=e,this.products=[],this.errorMessage=""}ngOnInit(){this.productService.getAllProducts().subscribe(e=>{this.products=e},e=>{console.error(e),this.errorMessage=e})}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(m))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-list-products"]],decls:9,vars:2,consts:[[1,"container","mt-3"],[1,"row"],[1,"col","animated","zoomIn"],[1,"h3","text-success"],[1,"lead"],["class","row mt-3 ",4,"ngIf"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"col-md-3"],[1,"card","animated","flipInY","delay-1s"],[1,"card-header","text-center","bg-white","zoom"],["alt","","width","150","height","150",1,"",3,"src"],[1,"card-body","shadow"],[1,"list-group"],[1,"list-group-item"],[1,"col"],[1,"h6","text-danger","font-weight-bold","text-center"]],template:function(e,t){1&e&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"p",3),c.gc(4,"Products List"),c.Jb(),c.Kb(5,"p",4),c.gc(6,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem commodi dolor dolorem dolores, et, exercitationem, expedita hic illo laboriosam modi molestiae nemo officiis placeat quasi reprehenderit voluptas? Eveniet, nostrum."),c.Jb(),c.Jb(),c.Jb(),c.fc(7,h,2,1,"div",5),c.fc(8,f,4,0,"div",6),c.Jb()),2&e&&(c.xb(7),c.Wb("ngIf",t.products.length>0),c.xb(1),c.Wb("ngIf",0===t.products.length))},directives:[o.k,o.j],pipes:[o.c],styles:[""]}),e})();function K(e,t){if(1&e){const e=c.Lb();c.Kb(0,"tr"),c.Kb(1,"td"),c.gc(2),c.Jb(),c.Kb(3,"td"),c.Ib(4,"img",12),c.Jb(),c.Kb(5,"td"),c.gc(6),c.Jb(),c.Kb(7,"td"),c.gc(8),c.Ub(9,"currency"),c.Jb(),c.Kb(10,"td"),c.gc(11),c.Jb(),c.Kb(12,"td"),c.Kb(13,"a",13),c.gc(14,"Update"),c.Jb(),c.Kb(15,"button",14),c.Rb("click",(function(){c.ac(e);const r=t.$implicit;return c.Tb(2).clickDeleteProduct(r._id)})),c.gc(16,"Delete"),c.Jb(),c.Jb(),c.Jb()}if(2&e){const e=t.$implicit;c.xb(2),c.hc(e._id.substr(e._id.length-5)),c.xb(2),c.Wb("src",e.image,c.bc),c.xb(2),c.hc(e.name),c.xb(2),c.hc(c.Vb(9,6,e.price,"INR")),c.xb(3),c.ic("",e.qty," Kgs"),c.xb(2),c.Xb("routerLink","/products/",e._id,"")}}function J(e,t){if(1&e&&(c.Kb(0,"tbody"),c.fc(1,K,17,9,"tr",11),c.Jb()),2&e){const e=c.Tb();c.xb(1),c.Wb("ngForOf",e.products)}}function y(e,t){1&e&&(c.Kb(0,"tbody"),c.Kb(1,"tr"),c.Kb(2,"td",15),c.gc(3," ----------------- No Products Found ----------- "),c.Jb(),c.Jb(),c.Jb())}let P=(()=>{class e{constructor(e){this.productService=e,this.products=[],this.errorMessage=""}ngOnInit(){this.productService.getAllProducts().subscribe(e=>{this.products=e},e=>{console.log(e),this.errorMessage=e})}clickDeleteProduct(e){this.productService.deleteProduct(e).subscribe(e=>{this.productService.getAllProducts().subscribe(e=>{this.products=e},e=>{console.log(e),this.errorMessage=e})},e=>{console.log(e),this.errorMessage=e})}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(m))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-admin"]],decls:30,vars:2,consts:[[1,"container","mt-3"],[1,"row"],[1,"col","animated","zoomIn"],[1,"h3","text-success"],[1,"lead"],["routerLink","/products/create-product",1,"btn","btn-success","btn-sm"],[1,"row","mt-3"],[1,"col","animated","zoomInUp","delay-1s"],[1,"table","table-hover","table-success","table-striped","text-center"],[1,"bg-dark","text-white"],[4,"ngIf"],[4,"ngFor","ngForOf"],["alt","","width","50","height","50",3,"src"],[1,"btn","btn-secondary","btn-sm","text-white",3,"routerLink"],[1,"btn","btn-danger","btn-sm",3,"click"],["colspan","6",1,"text-danger","font-weight-bold"]],template:function(e,t){1&e&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"p",3),c.gc(4,"Products Admin Portal"),c.Jb(),c.Kb(5,"p",4),c.gc(6,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem commodi dolor dolorem dolores, et, exercitationem, expedita hic illo laboriosam modi molestiae nemo officiis placeat quasi reprehenderit voluptas? Eveniet, nostrum."),c.Jb(),c.Jb(),c.Jb(),c.Kb(7,"div",1),c.Kb(8,"div",2),c.Kb(9,"a",5),c.gc(10,"Create Product"),c.Jb(),c.Jb(),c.Jb(),c.Kb(11,"div",6),c.Kb(12,"div",7),c.Kb(13,"table",8),c.Kb(14,"thead",9),c.Kb(15,"tr"),c.Kb(16,"th"),c.gc(17,"SNO"),c.Jb(),c.Kb(18,"th"),c.gc(19,"Product"),c.Jb(),c.Kb(20,"th"),c.gc(21,"Name"),c.Jb(),c.Kb(22,"th"),c.gc(23,"Price"),c.Jb(),c.Kb(24,"th"),c.gc(25,"Qty"),c.Jb(),c.Kb(26,"th"),c.gc(27,"Actions"),c.Jb(),c.Jb(),c.Jb(),c.fc(28,J,2,1,"tbody",10),c.fc(29,y,4,0,"tbody",10),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&e&&(c.xb(28),c.Wb("ngIf",t.products.length>0),c.xb(1),c.Wb("ngIf",0===t.products.length))},directives:[i.c,o.k,o.j],pipes:[o.c],styles:[""]}),e})();var x=r("3Pt+");function I(e,t){1&e&&(c.Kb(0,"div",24),c.Kb(1,"button",25),c.Ib(2,"i",26),c.Jb(),c.Kb(3,"span",27),c.gc(4,"Please fill in the Fields"),c.Jb(),c.Jb())}function w(e,t){if(1&e&&(c.Kb(0,"div"),c.Kb(1,"small"),c.gc(2),c.Jb(),c.Jb()),2&e){const e=c.Tb();c.xb(2),c.hc(e.imageFileName.name)}}const M=[{path:"",component:n},{path:"list-products",component:v},{path:"admin",component:P},{path:"create-product",component:(()=>{class e{constructor(e,t){this.productService=e,this.router=t,this.product={_id:"",name:"",image:"",price:null,qty:null,info:""}}ngOnInit(){}selectProductImage(e){if(e.target.files&&e.target.files.length){const[t]=e.target.files;let r=new FileReader;r.readAsDataURL(t),this.imageFileName=t,r.addEventListener("load",()=>r.result?this.product.image=String(r.result):"")}}submitCreateProduct(){""!==this.product.name&&""!==this.product.image&&null!==this.product.price&&null!==this.product.qty&&""!==this.product.info?this.productService.createProduct(this.product).subscribe(e=>{this.router.navigate(["/products/admin"])},e=>{this.errorMessage=e}):this.emptyFields=!0}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(m),c.Hb(i.b))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-create-product"]],decls:33,vars:6,consts:[[1,"container","mt-3"],[1,"row","animated","zoomInLeft"],[1,"col"],[1,"h3","text-success"],[1,"lead"],[1,"row"],[1,"col-md-5","animated","zoomInUp","delay-1s"],["class","alert alert-danger alert-dismissible animated zoomIn",4,"ngIf"],[1,"card"],[1,"card-header","bg-success","text-white"],[1,"h4"],[1,"card-body","bg-light"],[3,"submit"],[1,"form-group"],["required","true","name","name","type","text","placeholder","Name",1,"form-control",3,"ngModel","ngModelChange"],[1,"custom-file"],["required","","name","image","type","file","id","customFile","accept","image/png, image/jpeg",1,"custom-file-input",3,"change"],["for","customFile",1,"custom-file-label"],[4,"ngIf"],["required","","name","price","type","number","placeholder","Price",1,"form-control",3,"ngModel","ngModelChange"],["required","","name","qty","type","number","placeholder","Available Qty",1,"form-control",3,"ngModel","ngModelChange"],["required","","name","info","rows","4","placeholder","Information",1,"form-control",3,"ngModel","ngModelChange"],["type","submit","value","Create",1,"btn","btn-success","btn-sm"],[2,"margin-bottom","200px"],[1,"alert","alert-danger","alert-dismissible","animated","zoomIn"],["data-dismiss","alert",1,"close"],[1,"fa","fa-times-circle"],[1,"font-weight-bold"]],template:function(e,t){1&e&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"p",3),c.gc(4,"Create New Product"),c.Jb(),c.Kb(5,"p",4),c.gc(6,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem commodi dolor dolorem dolores, et, exercitationem, expedita hic illo laboriosam modi molestiae nemo officiis placeat quasi reprehenderit voluptas? Eveniet, nostrum."),c.Jb(),c.Jb(),c.Jb(),c.Kb(7,"div",5),c.Kb(8,"div",6),c.fc(9,I,5,0,"div",7),c.Kb(10,"div",8),c.Kb(11,"div",9),c.Kb(12,"p",10),c.gc(13,"Create Product"),c.Jb(),c.Jb(),c.Kb(14,"div",11),c.Kb(15,"form",12),c.Rb("submit",(function(){return t.submitCreateProduct()})),c.Kb(16,"div",13),c.Kb(17,"input",14),c.Rb("ngModelChange",(function(e){return t.product.name=e})),c.Jb(),c.Jb(),c.Kb(18,"div",13),c.Kb(19,"div",15),c.Kb(20,"input",16),c.Rb("change",(function(e){return t.selectProductImage(e)})),c.Jb(),c.Kb(21,"label",17),c.gc(22,"Choose Image"),c.Jb(),c.fc(23,w,3,1,"div",18),c.Jb(),c.Jb(),c.Kb(24,"div",13),c.Kb(25,"input",19),c.Rb("ngModelChange",(function(e){return t.product.price=e})),c.Jb(),c.Jb(),c.Kb(26,"div",13),c.Kb(27,"input",20),c.Rb("ngModelChange",(function(e){return t.product.qty=e})),c.Jb(),c.Jb(),c.Kb(28,"div",13),c.Kb(29,"textarea",21),c.Rb("ngModelChange",(function(e){return t.product.info=e})),c.Jb(),c.Jb(),c.Kb(30,"div"),c.Ib(31,"input",22),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Ib(32,"div",23),c.Jb()),2&e&&(c.xb(9),c.Wb("ngIf",t.emptyFields),c.xb(8),c.Wb("ngModel",t.product.name),c.xb(6),c.Wb("ngIf",t.imageFileName),c.xb(2),c.Wb("ngModel",t.product.price),c.xb(2),c.Wb("ngModel",t.product.qty),c.xb(2),c.Wb("ngModel",t.product.info))},directives:[o.k,x.i,x.d,x.e,x.a,x.h,x.c,x.f,x.g],styles:[""]}),e})()},{path:":id",component:(()=>{class e{constructor(e,t,r){this.activatedRoute=e,this.productService=t,this.router=r}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{this.productId=e.get("id")}),this.productService.getProduct(this.productId).subscribe(e=>{this.selectedProduct=e},e=>{console.error(e),this.errorMessage=e})}selectProductImage(e){if(e.target.files&&e.target.files.length){const[t]=e.target.files;let r=new FileReader;r.readAsDataURL(t),r.addEventListener("load",()=>r.result?this.selectedProduct.image=String(r.result):"")}}submitUpdateProduct(){""!==this.selectedProduct.name&&""!==this.selectedProduct.image&&null!==this.selectedProduct.price&&null!==this.selectedProduct.qty&&""!==this.selectedProduct.info?this.productService.updateProduct(this.selectedProduct,this.productId).subscribe(e=>{this.router.navigate(["/products/admin"])},e=>{this.errorMessage=e}):this.emptyFields=!0}}return e.\u0275fac=function(t){return new(t||e)(c.Hb(i.a),c.Hb(m),c.Hb(i.b))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-update-product"]],decls:31,vars:9,consts:[[1,"container","mt-3"],[1,"row"],[1,"col","animated","zoomInUp"],[1,"h3","text-secondary"],[1,"lead"],[1,"col-md-5","animated","zoomIn","delay-1s"],[1,"card"],[1,"card-header","bg-secondary","text-white"],[1,"h4"],[1,"card-body","bg-light"],[3,"submit"],[1,"form-group"],["name","name","type","text","placeholder","Name",1,"form-control",3,"value","ngModel","ngModelChange"],[1,"custom-file"],["required","","name","image","type","file","id","customFile",1,"custom-file-input",3,"change"],["for","customFile",1,"custom-file-label"],["width","20","height","20",3,"src"],["name","price","type","number","placeholder","Price",1,"form-control",3,"value","ngModel","ngModelChange"],["name","qty","type","number","placeholder","Qty",1,"form-control",3,"value","ngModel","ngModelChange"],["name","info","rows","4",1,"form-control",3,"value","ngModel","ngModelChange"],["type","submit","value","Update",1,"btn","btn-secondary","btn-sm"],[2,"margin-bottom","200px"]],template:function(e,t){1&e&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"p",3),c.gc(4,"Update Product"),c.Jb(),c.Kb(5,"p",4),c.gc(6,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequatur dignissimos dolor quas quisquam repellendus voluptate! Animi assumenda debitis similique! Ad aliquam consequatur consequuntur ducimus laboriosam minima minus quis voluptatibus."),c.Jb(),c.Jb(),c.Jb(),c.Kb(7,"div",1),c.Kb(8,"div",5),c.Kb(9,"div",6),c.Kb(10,"div",7),c.Kb(11,"p",8),c.gc(12,"Update Product"),c.Jb(),c.Jb(),c.Kb(13,"div",9),c.Kb(14,"form",10),c.Rb("submit",(function(){return t.submitUpdateProduct()})),c.Kb(15,"div",11),c.Kb(16,"input",12),c.Rb("ngModelChange",(function(e){return t.selectedProduct.name=e})),c.Jb(),c.Jb(),c.Kb(17,"div",11),c.Kb(18,"div",13),c.Kb(19,"input",14),c.Rb("change",(function(e){return t.selectProductImage(e)})),c.Jb(),c.Kb(20,"label",15),c.Ib(21,"img",16),c.Jb(),c.Jb(),c.Jb(),c.Kb(22,"div",11),c.Kb(23,"input",17),c.Rb("ngModelChange",(function(e){return t.selectedProduct.price=e})),c.Jb(),c.Jb(),c.Kb(24,"div",11),c.Kb(25,"input",18),c.Rb("ngModelChange",(function(e){return t.selectedProduct.qty=e})),c.Jb(),c.Jb(),c.Kb(26,"div",11),c.Kb(27,"textarea",19),c.Rb("ngModelChange",(function(e){return t.selectedProduct.info=e})),c.Jb(),c.Jb(),c.Kb(28,"div"),c.Ib(29,"input",20),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Ib(30,"div",21),c.Jb()),2&e&&(c.xb(16),c.Wb("value",t.selectedProduct.name)("ngModel",t.selectedProduct.name),c.xb(5),c.Wb("src",t.selectedProduct.image,c.bc),c.xb(2),c.Wb("value",t.selectedProduct.price)("ngModel",t.selectedProduct.price),c.xb(2),c.Wb("value",t.selectedProduct.qty)("ngModel",t.selectedProduct.qty),c.xb(2),c.Wb("value",t.selectedProduct.info)("ngModel",t.selectedProduct.info))},directives:[x.i,x.d,x.e,x.a,x.c,x.f,x.g],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(M)],i.d]}),e})(),q=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[o.b,p.b,x.b,C]]}),e})()}}]);