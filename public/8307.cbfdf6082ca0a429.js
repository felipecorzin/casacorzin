"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8307],{8307:(Z,m,i)=>{i.r(m),i.d(m,{ShoppingPageModule:()=>F});var l=i(6895),u=i(433),n=i(8008),h=i(5017),t=i(4650),f=i(9846),c=i(3071),g=i(910),v=i(4004),_=i(2340),b=i(529);let C=(()=>{class r{constructor(e){this.http=e,this.baseUrl=_.N.baseUrl}getProducts(){return this.http.get(`${this.baseUrl}/product/findAll`).pipe((0,v.U)(e=>e))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(b.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),P=(()=>{class r{transform(e,o,a){const p=[];return e&&""!==o&&""!==a?(e.forEach(d=>{d[a].trim().toLowerCase().includes(o.toLowerCase())&&p.push(d)}),p):e}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275pipe=t.Yjl({name:"filter",type:r,pure:!0}),r})();const y=["scrollElement"],S=["myfab"];function T(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"ion-item",21)(1,"ion-thumbnail",2),t._UZ(2,"ion-img",22),t.qZA(),t.TgZ(3,"ion-label",23)(4,"b"),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"b"),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"b"),t._uU(11),t.ALo(12,"currency"),t.qZA()(),t.TgZ(13,"ion-buttons",6)(14,"ion-button",24),t.NdJ("tap",function(){const p=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.addCart(p))}),t._UZ(15,"ion-icon",25),t.qZA()()()}if(2&r){const e=s.$implicit;t.xp6(2),t.s9C("src",e.img),t.xp6(3),t.Oqu(e.categoria),t.xp6(3),t.Oqu(e.name),t.xp6(3),t.Oqu(t.xi3(12,4,e.price,"EUR"))}}const U=function(){return["/tabs/delivery/cart"]},M=[{path:"",component:(()=>{class r{constructor(e,o,a,p,d,Y,B,E,L){this.datepipe=e,this.route=o,this.alertCtrl=a,this.navCtrl=p,this.uiService=d,this.userService=Y,this.cartService=B,this.productService=E,this.animationCtrl=L,this.usuario={name:"",address:"",city:"",email:"",phone:""},this.connected=this.datepipe.transform(new Date,"dd/MMMM/YYYY h:mm a"),this.searchKey="",this.totalItem=0}ngOnInit(){this.updateScroll(),this.loadUser(this.route.snapshot.params.id),this.cartService.getProducts().subscribe(e=>{this.totalItem=e.length}),this.productService.getProducts().subscribe(e=>{this.productList=e,this.filterCategory=e,this.productList.forEach(o=>{Object.assign(o,{amount:1,total:o.price})}),console.log(this.productList)}),this.cartService.search.subscribe(e=>{this.searchKey=e})}regresar(){this.navCtrl.navigateBack("/delivery")}updateScroll(){setTimeout(()=>{this.content.scrollToBottom()},1500)}filter(e){this.filterCategory=this.productList.filter(o=>{if(o.categoria==e||""==e)return o})}search(e){this.searchTerm=e.target.value,console.log(this.searchTerm),this.cartService.search.next(this.searchTerm)}loadUser(e){this.userService.getUser(e).subscribe(o=>{this.usuario=o,console.log(o)},o=>{console.log(o)})}addCart(e){this.cartAnimation=this.animationCtrl.create("cart-animation"),this.cartAnimation.addElement(this.carBtn.nativeElement).keyframes([{offset:0,transform:"scale(1)"},{offset:.5,transform:"scale(1.2)"},{offset:.8,transform:"scale(0.9)"},{offset:1,transform:"scale(1)"}]).duration(300).easing("ease-out"),this.cartAnimation.play(),this.cartService.addtoCart(e)}openCart(){this.navCtrl.navigateForward("/cart")}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(l.uU),t.Y36(h.gz),t.Y36(n.Br),t.Y36(n.SH),t.Y36(f.F),t.Y36(c.K),t.Y36(g.N),t.Y36(C),t.Y36(n.vB))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-shopping"]],viewQuery:function(e,o){if(1&e&&(t.Gf(y,5),t.Gf(S,5,t.SBq)),2&e){let a;t.iGM(a=t.CRH())&&(o.content=a.first),t.iGM(a=t.CRH())&&(o.carBtn=a.first)}},decls:56,vars:15,consts:[[1,"ion-no-border"],["color","secondary"],["slot","start"],[3,"tap"],["slot","icon-only","md","arrow-back-sharp","color","light"],["src","../../../assets/img/avatar.png"],["slot","end"],["color","light",3,"routerLink","tap"],[1,"cart-length"],["md","cart-sharp","color","secondary",1,"cart-icon"],["myfab",""],[3,"scrollEvents"],["scrollElement",""],["placeholder","Search Products",3,"ngModel","ngModelChange","keyup"],["size","3"],["button","","lines","none",3,"tap"],["src","../../../assets/delivery/logo_small.png"],["src","../../../assets/delivery/tapas.jpg"],["src","../../../assets/delivery/bocatas_cal.jpg"],["src","../../../assets/delivery/menu.png"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],[3,"src"],[1,"ion-text-wrap"],["fill","clear",3,"tap"],["name","add-sharp","slot","icon-only","color","dark"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),t.NdJ("tap",function(){return o.regresar()}),t._UZ(4,"ion-icon",4),t.qZA()(),t.TgZ(5,"ion-chip")(6,"ion-avatar"),t._UZ(7,"ion-img",5),t.qZA(),t.TgZ(8,"ion-label")(9,"strong"),t._uU(10),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"strong"),t._uU(13),t.ALo(14,"date"),t.qZA()()(),t.TgZ(15,"ion-buttons",6)(16,"ion-fab-button",7),t.NdJ("tap",function(){return o.openCart()}),t.TgZ(17,"div",8),t._uU(18),t.qZA(),t._UZ(19,"ion-icon",9,10),t.qZA()()()(),t.TgZ(21,"ion-content",11,12)(23,"ion-searchbar",13),t.NdJ("ngModelChange",function(p){return o.searchTerm=p})("keyup",function(p){return o.search(p)}),t.qZA(),t.TgZ(24,"ion-grid")(25,"ion-row")(26,"ion-col",14)(27,"ion-item",15),t.NdJ("tap",function(){return o.filter("")}),t._UZ(28,"img",16),t.qZA(),t.TgZ(29,"h6")(30,"b"),t._uU(31,"Products"),t.qZA()()(),t.TgZ(32,"ion-col",14)(33,"ion-item",15),t.NdJ("tap",function(){return o.filter("tapas")}),t._UZ(34,"img",17),t.qZA(),t.TgZ(35,"h6")(36,"b"),t._uU(37,"Tapas"),t.qZA()()(),t.TgZ(38,"ion-col",14)(39,"ion-item",15),t.NdJ("tap",function(){return o.filter("bocatascalientes")}),t._UZ(40,"img",18),t.qZA(),t.TgZ(41,"h6")(42,"b"),t._uU(43,"Bocatas"),t._UZ(44,"br"),t._uU(45,"Calientes"),t.qZA()()(),t.TgZ(46,"ion-col",14)(47,"ion-item",15),t.NdJ("tap",function(){return o.filter("menuscompartir")}),t._UZ(48,"img",19),t.qZA(),t.TgZ(49,"h6")(50,"b"),t._uU(51,"Menus Compartir"),t.qZA()()()()(),t._UZ(52,"hr"),t.TgZ(53,"ion-list"),t.YNc(54,T,16,7,"ion-item",20),t.ALo(55,"filter"),t.qZA()()),2&e&&(t.xp6(10),t.Oqu(o.usuario.name),t.xp6(3),t.Oqu(t.xi3(14,7,o.connected,"short")),t.xp6(3),t.Q6J("routerLink",t.DdM(14,U)),t.xp6(2),t.Oqu(o.totalItem),t.xp6(3),t.Q6J("scrollEvents",!0),t.xp6(2),t.Q6J("ngModel",o.searchTerm),t.xp6(31),t.Q6J("ngForOf",t.Dn7(55,10,o.filterCategory,o.searchKey,"name")))},dependencies:[l.sg,u.JJ,u.On,n.BJ,n.YG,n.Sm,n.hM,n.wI,n.W2,n.W4,n.jY,n.Gu,n.gu,n.Xz,n.Ie,n.Q$,n.q_,n.Nd,n.VI,n.Bs,n.sr,n.j9,n.YI,h.rH,l.H9,l.uU,P],styles:["ion-thumbnail[_ngcontent-%COMP%]{border-radius:5px;border:2px solid #000}img[_ngcontent-%COMP%]{border-radius:5px;border:2px solid #000}ion-chip[_ngcontent-%COMP%]{--background: #000;--color: #fff}ion-fab-button[_ngcontent-%COMP%]{height:70px;width:70px}.cart-icon[_ngcontent-%COMP%]{font-size:50px}.cart-length[_ngcontent-%COMP%]{color:var(--ion-color-light);position:absolute;top:22px;left:25px;font-weight:700;font-size:1.2em;min-width:25px;z-index:10}hr[_ngcontent-%COMP%]{border-width:1px}ion-searchbar[_ngcontent-%COMP%]{border-radius:10px;border:2px solid #000;--color: var(--ion-color-dark);--background: var(--ion-color-light);--placeholder-opacity: 1;--placeholder-font-weight: bold;text-align:start;margin-top:10px}"]}),r})()}];let A=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[h.Bz.forChild(M),h.Bz]}),r})();var O=i(5503),x=i(5642);let F=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[l.uU],imports:[l.ez,u.u5,n.Pc,A,x.K,O.D]}),r})()},9846:(Z,m,i)=>{i.d(m,{F:()=>h});var l=i(655),u=i(4650),n=i(8008);let h=(()=>{class t{constructor(c,g){this.alertController=c,this.toastController=g}alertaInformativaLogin(c,g,v){return(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:c,subHeader:g,message:v,buttons:["OK"]})).present()})}alertaInformativa(c){return(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:c,buttons:["OK"]})).present()})}presentToast(c){return(0,l.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:c,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return t.\u0275fac=function(c){return new(c||t)(u.LFG(n.Br),u.LFG(n.yF))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);