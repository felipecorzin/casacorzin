"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9005],{9005:(C,h,l)=>{l.r(h),l.d(h,{OrderPageModule:()=>G});var c=l(6895),g=l(433),i=l(8008),_=l(5017),m=l(655),t=l(4650),u=l(9846),p=l(3071),Z=l(910),T=l(1863);const y=["scrollElement"];function A(o,a){if(1&o&&(t.TgZ(0,"ion-item",12)(1,"ion-thumbnail",2),t._UZ(2,"ion-img",13),t.qZA(),t.TgZ(3,"ion-label",14)(4,"strong"),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"strong"),t._uU(8),t.qZA(),t._uU(9,"\xa0\xa0"),t.TgZ(10,"b"),t._uU(11),t.ALo(12,"currency"),t.qZA(),t._UZ(13,"br"),t.TgZ(14,"strong"),t._uU(15),t.qZA(),t._uU(16," X "),t.TgZ(17,"strong"),t._uU(18),t.ALo(19,"currency"),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"strong"),t._uU(22,"Total: "),t.qZA(),t.TgZ(23,"b"),t._uU(24),t.ALo(25,"currency"),t.qZA()()()),2&o){const e=a.$implicit;t.xp6(2),t.Q6J("src",e.img),t.xp6(3),t.Oqu(e.categoria),t.xp6(3),t.Oqu(e.name),t.xp6(3),t.Oqu(t.xi3(12,7,e.price,"EUR")),t.xp6(4),t.Oqu(e.amount),t.xp6(3),t.Oqu(t.xi3(19,10,e.price,"EUR")),t.xp6(6),t.Oqu(t.xi3(25,13,e.total,"EUR"))}}function U(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item",15),t._UZ(2,"ion-icon",16),t.TgZ(3,"ion-label")(4,"b"),t._uU(5,"Name:"),t.qZA()(),t.TgZ(6,"ion-input",17),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.name=r)}),t.qZA()(),t.TgZ(7,"ion-item",15),t._UZ(8,"ion-icon",18),t.TgZ(9,"ion-label")(10,"b"),t._uU(11,"Address:"),t.qZA()(),t.TgZ(12,"ion-input",17),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.address=r)}),t.qZA()(),t.TgZ(13,"ion-item",15),t._UZ(14,"ion-icon",19),t.TgZ(15,"ion-label")(16,"b"),t._uU(17,"City:"),t.qZA()(),t.TgZ(18,"ion-input",17),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.city=r)}),t.qZA()(),t.TgZ(19,"ion-item",15),t._UZ(20,"ion-icon",20),t.TgZ(21,"ion-label")(22,"b"),t._uU(23,"Email:"),t.qZA()(),t.TgZ(24,"ion-input",21),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.email=r)}),t.qZA()(),t.TgZ(25,"ion-item",15),t._UZ(26,"ion-icon",22),t.TgZ(27,"ion-label")(28,"b"),t._uU(29,"PhoneNumber:"),t.qZA()(),t.TgZ(30,"ion-input",23),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.phone=r)}),t.qZA()()()}if(2&o){const e=a.$implicit;t.xp6(6),t.Q6J("ngModel",e.name),t.xp6(6),t.Q6J("ngModel",e.address),t.xp6(6),t.Q6J("ngModel",e.city),t.xp6(6),t.Q6J("ngModel",e.email),t.xp6(6),t.Q6J("ngModel",e.phone)}}let M=(()=>{class o{constructor(e,n,r,d,s,f){this.cd=e,this.modalCtrl=n,this.uiService=r,this.userService=d,this.cartService=s,this.paymentService=f,this.products=[],this.currency="\u20ac",this.payment={totalPrice:0},this.paymentHandler=null,this.user={name:"",address:"",city:"",email:"",phone:""}}ngOnInit(){this.updateScroll(),this.loadClient(),this.invokeStripe(),this.cartService.getProducts().subscribe(e=>{this.products=e,this.grandTotal=this.cartService.getTotalPrice()})}regresar(){this.modalCtrl.dismiss()}updateScroll(){setTimeout(()=>{this.content.scrollToBottom()},1500)}loadClient(){this.userService.getUsers().subscribe(e=>{this.users=e,console.log(e)},e=>{console.log(e)})}getTotal(){return this.products.reduce((e,n)=>e+n.price*n.amount,0)}makePayment(e){window.StripeCheckout.configure({key:"pk_test_51LziILLQLamQd6Zi8q4cLMCzOGuEXsjyUYPvg2F377K5UlQkLRLycaKRNGq94oijHhssiA0blejv3fs95W4kaYBV00adaRbRcK",locale:"auto",token:function(r){console.log(r),alert("Stripe token generated!")}}).open({name:"Casa Corz\xedn",description:"Total Payment",amount:100*e}),this.addPayment()}addPayment(){this.payment.totalPrice=this.getTotal(),this.paymentService.addPayment(this.payment).then(e=>{console.log(e),this.regresar()})}invokeStripe(){if(!window.document.getElementById("stripe-script")){const e=window.document.createElement("script");e.id="stripe-script",e.type="text/javascript",e.src="https://checkout.stripe.com/checkout.js",e.onload=()=>{this.paymentHandler=window.StripeCheckout.configure({key:"pk_test_51LziILLQLamQd6Zi8q4cLMCzOGuEXsjyUYPvg2F377K5UlQkLRLycaKRNGq94oijHhssiA0blejv3fs95W4kaYBV00adaRbRcK",locale:"auto",token:function(n){console.log(n),alert("Payment has been successfull!")}})},window.document.body.appendChild(e)}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(i.IN),t.Y36(u.F),t.Y36(p.K),t.Y36(Z.N),t.Y36(T.t))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-payment"]],viewQuery:function(e,n){if(1&e&&t.Gf(y,5),2&e){let r;t.iGM(r=t.CRH())&&(n.content=r.first)}},decls:31,vars:7,consts:[[1,"ion-no-border"],["color","secondary"],["slot","start"],[3,"tap"],["slot","icon-only","md","arrow-back-sharp","color","light"],[3,"scrollEvents"],["scrollElement",""],[1,"ion-padding"],["button","","lines","none",4,"ngFor","ngForOf"],["button","","lines","none","detail","true","detail-icon","arrow-forward-sharp",3,"tap"],["src","../../../assets/img/stripe_logo.png"],[4,"ngFor","ngForOf"],["button","","lines","none"],[3,"src"],[1,"ion-text-wrap"],["lines","none"],["md","person-sharp","slot","start","color","dark"],["type","text",3,"ngModel","ngModelChange"],["md","home-sharp","slot","start","color","dark"],["md","location-sharp","slot","start","color","dark"],["md","mail-sharp","slot","start","color","dark"],["type","email",3,"ngModel","ngModelChange"],["md","call-sharp","slot","start","color","dark"],["type","tel",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),t.NdJ("tap",function(){return n.regresar()}),t._UZ(4,"ion-icon",4),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6," AddPayment "),t.qZA()()(),t.TgZ(7,"ion-content",5,6)(9,"ion-item-group")(10,"ion-item-divider")(11,"ion-label"),t._uU(12," Cart "),t.qZA()(),t.TgZ(13,"ion-list",7),t.YNc(14,A,26,16,"ion-item",8),t.qZA(),t.TgZ(15,"ion-item-divider")(16,"ion-label"),t._uU(17," Payment "),t.qZA()(),t.TgZ(18,"ion-item",9),t.NdJ("tap",function(){return n.makePayment(n.getTotal())}),t.TgZ(19,"ion-thumbnail",2),t._UZ(20,"ion-img",10),t.qZA(),t.TgZ(21,"ion-label")(22,"strong"),t._uU(23,"GrandTotal: "),t.qZA(),t.TgZ(24,"b"),t._uU(25),t.ALo(26,"currency"),t.qZA()()(),t.TgZ(27,"ion-item-divider")(28,"ion-label"),t._uU(29," Cliente "),t.qZA()(),t.YNc(30,U,31,5,"ion-list",11),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("scrollEvents",!0),t.xp6(7),t.Q6J("ngForOf",n.products),t.xp6(11),t.Oqu(t.xi3(26,4,n.getTotal(),"EUR")),t.xp6(5),t.Q6J("ngForOf",n.users))},dependencies:[c.sg,g.JJ,g.On,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.Xz,i.pK,i.Ie,i.rH,i.Ub,i.Q$,i.q_,i.Bs,i.wd,i.sr,i.j9,c.H9],styles:["ion-item-divider[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;--background: var(--ion-color-primary);--color: var(--ion-color-light)}.miNoteGetTotal[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;--color: #000;margin-right:20px}.miNote[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;--color: #fff;margin-right:20px}ion-thumbnail[_ngcontent-%COMP%]{border-radius:2px;border:1px solid #000}ion-item[_ngcontent-%COMP%]{--detail-icon-font-size: 1.5em;--detail-icon-opacity: 1;--detail-icon-color: var(--ion-color-dark)}ion-input[_ngcontent-%COMP%]{font-size:1em;font-weight:700}"]}),o})();var b=l(8132);const O=["scrollElement"];function P(o,a){if(1&o&&(t.TgZ(0,"ion-chip")(1,"ion-avatar"),t._UZ(2,"ion-img",18),t.qZA(),t.TgZ(3,"ion-label")(4,"strong"),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"strong"),t._uU(8),t.ALo(9,"date"),t.qZA()()()),2&o){const e=a.$implicit,n=t.oxw();t.xp6(5),t.Oqu(e.name),t.xp6(3),t.Oqu(t.xi3(9,2,n.connected,"short"))}}function v(o,a){if(1&o&&(t.TgZ(0,"ion-item",19)(1,"ion-thumbnail",2),t._UZ(2,"ion-img",20),t.qZA(),t.TgZ(3,"ion-label",21)(4,"strong"),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"strong"),t._uU(8),t.qZA(),t._uU(9,"\xa0\xa0"),t.TgZ(10,"b"),t._uU(11),t.ALo(12,"currency"),t.qZA(),t._UZ(13,"br"),t.TgZ(14,"strong"),t._uU(15),t.qZA(),t._uU(16," X "),t.TgZ(17,"strong"),t._uU(18),t.ALo(19,"currency"),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"strong"),t._uU(22,"Total: "),t.qZA(),t.TgZ(23,"b"),t._uU(24),t.ALo(25,"currency"),t.qZA()()()),2&o){const e=a.$implicit;t.xp6(2),t.Q6J("src",e.img),t.xp6(3),t.Oqu(e.categoria),t.xp6(3),t.Oqu(e.name),t.xp6(3),t.Oqu(t.xi3(12,7,e.price,"EUR")),t.xp6(4),t.Oqu(e.amount),t.xp6(3),t.Oqu(t.xi3(19,10,e.price,"EUR")),t.xp6(6),t.Oqu(t.xi3(25,13,e.total,"EUR"))}}function q(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"ion-item",22),t.NdJ("tap",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addPayment())}),t.TgZ(1,"ion-thumbnail",2),t._UZ(2,"ion-img",23),t.qZA(),t.TgZ(3,"ion-label")(4,"strong"),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"strong"),t._uU(8,"GrandTotal:"),t.qZA(),t._uU(9,"\xa0\xa0\xa0"),t.TgZ(10,"strong"),t._uU(11),t.ALo(12,"currency"),t.qZA()()()}if(2&o){const e=a.$implicit,n=t.oxw();t.xp6(5),t.Oqu(e.name),t.xp6(6),t.Oqu(t.xi3(12,2,n.getTotal(),"EUR"))}}function x(o,a){if(1&o&&(t.TgZ(0,"ion-item",24),t._UZ(1,"ion-icon",25),t.TgZ(2,"ion-label")(3,"strong"),t._uU(4),t.qZA(),t._UZ(5,"br"),t.TgZ(6,"strong"),t._uU(7,"GrandTotal:"),t.qZA(),t._uU(8,"\xa0\xa0\xa0"),t.TgZ(9,"strong"),t._uU(10),t.ALo(11,"currency"),t.qZA()()()),2&o){const e=a.$implicit;t.xp6(4),t.Oqu(e.usuario.name),t.xp6(6),t.Oqu(t.xi3(11,2,e.totalPrice,"EUR"))}}function J(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item",26),t._UZ(2,"ion-icon",27),t.TgZ(3,"ion-label")(4,"b"),t._uU(5,"Name:"),t.qZA()(),t.TgZ(6,"ion-input",28),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.name=r)}),t.qZA()(),t.TgZ(7,"ion-item",26),t._UZ(8,"ion-icon",29),t.TgZ(9,"ion-label")(10,"b"),t._uU(11,"Address:"),t.qZA()(),t.TgZ(12,"ion-input",28),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.address=r)}),t.qZA()(),t.TgZ(13,"ion-item",26),t._UZ(14,"ion-icon",30),t.TgZ(15,"ion-label")(16,"b"),t._uU(17,"City:"),t.qZA()(),t.TgZ(18,"ion-input",28),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.city=r)}),t.qZA()(),t.TgZ(19,"ion-item",26),t._UZ(20,"ion-icon",31),t.TgZ(21,"ion-label")(22,"b"),t._uU(23,"Email:"),t.qZA()(),t.TgZ(24,"ion-input",32),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.email=r)}),t.qZA()(),t.TgZ(25,"ion-item",26),t._UZ(26,"ion-icon",33),t.TgZ(27,"ion-label")(28,"b"),t._uU(29,"PhoneNumber:"),t.qZA()(),t.TgZ(30,"ion-input",34),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.phone=r)}),t.qZA()()()}if(2&o){const e=a.$implicit;t.xp6(6),t.Q6J("ngModel",e.name),t.xp6(6),t.Q6J("ngModel",e.address),t.xp6(6),t.Q6J("ngModel",e.city),t.xp6(6),t.Q6J("ngModel",e.email),t.xp6(6),t.Q6J("ngModel",e.phone)}}const E=[{path:"",component:(()=>{class o{constructor(e,n,r,d,s,f,F,Q,S,k){this.router=e,this.datepipe=n,this.navCtrl=r,this.modalCtrl=d,this.alertCtrl=s,this.cd=f,this.userService=F,this.cartService=Q,this.paymentService=S,this.orderService=k,this.products=[],this.currency="\u20ac",this.payment={totalPrice:0,created:this.datepipe.transform(new Date,"EEEE, dd/MMMM/YYYY HH:mm"),send:this.datepipe.transform(new Date,"EEEE, dd/MMMM/YYYY HH:mm")},this.payments=[],this.paymentHandler=null,this.usuario={name:"",address:"",city:"",email:"",phone:""},this.connected=this.datepipe.transform(new Date,"dd/MMMM/YYYY h:mm a"),this.order={totalPrice:0}}ngOnInit(){this.updateScroll(),this.loadPayments(),this.loadUser(),this.cartService.getProducts().subscribe(e=>{this.products=e,this.grandTotal=this.cartService.getTotalPrice()})}regresar(){this.navCtrl.navigateBack("/delivery")}updateScroll(){setTimeout(()=>{this.content.scrollToBottom()},1500)}loadUser(){this.userService.getUsers().subscribe(e=>{this.users=e,console.log(e)},e=>{console.log(e)})}getTotal(){return this.products.reduce((e,n)=>e+n.price*n.amount,0)}addPayment(){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({mode:"md",backdropDismiss:!0,component:M})).present()})}loadPayments(){this.paymentService.getPayments().subscribe(e=>{console.log(e),this.payments.push(...e.payments),this.cd.detectChanges()})}addOrder(){this.order.totalPrice=this.getTotal(),this.orderService.crearOrder(this.order).then(e=>{console.log(e),this.navCtrl.navigateBack("/delivery")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.F0),t.Y36(c.uU),t.Y36(i.SH),t.Y36(i.IN),t.Y36(i.Br),t.Y36(t.sBO),t.Y36(p.K),t.Y36(Z.N),t.Y36(T.t),t.Y36(b.p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-order"]],viewQuery:function(e,n){if(1&e&&(t.Gf(i.ki,5),t.Gf(O,5)),2&e){let r;t.iGM(r=t.CRH())&&(n.modal=r.first),t.iGM(r=t.CRH())&&(n.content=r.first)}},decls:39,vars:11,consts:[[1,"ion-no-border"],["color","secondary"],["slot","start"],[3,"tap"],["slot","icon-only","md","arrow-back-sharp","color","light"],["slot","end"],[4,"ngFor","ngForOf"],[3,"scrollEvents"],["scrollElement",""],[1,"ion-padding"],["button","","lines","none",4,"ngFor","ngForOf"],["button","","lines","full","detail","true","detail-icon","arrow-forward-sharp",3,"tap",4,"ngFor","ngForOf"],["lines","full",4,"ngFor","ngForOf"],["color","primary"],["lines","none","color","primary"],["slot","end",1,"miNote"],["type","text","hidden","",3,"ngModel","ngModelChange"],["expand","block","shape","round","color","secondary",1,"miBoton",3,"tap"],["src","../../../assets/img/avatar.png"],["button","","lines","none"],[3,"src"],[1,"ion-text-wrap"],["button","","lines","full","detail","true","detail-icon","arrow-forward-sharp",3,"tap"],["src","../../../assets/img/stripe_logo.png"],["lines","full"],["md","card-sharp","slot","start","color","secondary"],["lines","none"],["md","person-sharp","slot","start","color","dark"],["type","text",3,"ngModel","ngModelChange"],["md","home-sharp","slot","start","color","dark"],["md","location-sharp","slot","start","color","dark"],["md","mail-sharp","slot","start","color","dark"],["type","email",3,"ngModel","ngModelChange"],["md","call-sharp","slot","start","color","dark"],["type","tel",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-button",3),t.NdJ("tap",function(){return n.regresar()}),t._UZ(4,"ion-icon",4),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6," Order "),t.qZA(),t.TgZ(7,"ion-buttons",5),t.YNc(8,P,10,5,"ion-chip",6),t.qZA()()(),t.TgZ(9,"ion-content",7,8)(11,"ion-item-group")(12,"ion-item-divider")(13,"ion-label"),t._uU(14," Cart "),t.qZA()(),t.TgZ(15,"ion-list",9),t.YNc(16,v,26,16,"ion-item",10),t.qZA(),t.TgZ(17,"ion-item-divider")(18,"ion-label"),t._uU(19," Payment "),t.qZA()(),t.YNc(20,q,13,5,"ion-item",11),t.TgZ(21,"ion-list"),t.YNc(22,x,12,5,"ion-item",12),t.qZA(),t.TgZ(23,"ion-item-divider")(24,"ion-label"),t._uU(25," Cliente "),t.qZA()(),t.YNc(26,J,31,5,"ion-list",6),t.qZA()(),t.TgZ(27,"ion-footer",0)(28,"ion-toolbar",13)(29,"ion-item",14)(30,"ion-label")(31,"b"),t._uU(32,"TotalPrice"),t.qZA()(),t.TgZ(33,"ion-note",15),t._uU(34),t.ALo(35,"currency"),t.qZA(),t.TgZ(36,"ion-input",16),t.NdJ("ngModelChange",function(d){return n.order.totalPrice=d}),t.qZA()(),t.TgZ(37,"ion-button",17),t.NdJ("tap",function(){return n.addOrder()}),t._uU(38," AddOrder "),t.qZA()()()),2&e&&(t.xp6(8),t.Q6J("ngForOf",n.users),t.xp6(1),t.Q6J("scrollEvents",!0),t.xp6(7),t.Q6J("ngForOf",n.products),t.xp6(4),t.Q6J("ngForOf",n.users),t.xp6(2),t.Q6J("ngForOf",n.payments),t.xp6(4),t.Q6J("ngForOf",n.users),t.xp6(8),t.hij(" ",t.xi3(35,8,n.getTotal(),"EUR")," "),t.xp6(2),t.Q6J("ngModel",n.order.totalPrice))},dependencies:[c.sg,g.JJ,g.On,i.BJ,i.YG,i.Sm,i.hM,i.W2,i.fr,i.Gu,i.gu,i.Xz,i.pK,i.Ie,i.rH,i.Ub,i.Q$,i.q_,i.uN,i.Bs,i.wd,i.sr,i.j9,c.H9,c.uU],styles:["ion-item-divider[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;--background: var(--ion-color-primary);--color: var(--ion-color-light)}.miNoteGrandTotal[_ngcontent-%COMP%]{font-size:1em;font-weight:700;--color: #000}.miNote[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;--color: #fff;margin-right:20px}ion-thumbnail[_ngcontent-%COMP%]{border-radius:2px;border:1px solid #000}ion-item[_ngcontent-%COMP%]{--detail-icon-font-size: 1.5em;--detail-icon-opacity: 1;--detail-icon-color: var(--ion-color-dark)}ion-chip[_ngcontent-%COMP%]{--background: #000;--color: #fff}"]}),o})()}];let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(E),_.Bz]}),o})();var N=l(5642);let G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[c.uU],imports:[c.ez,g.u5,i.Pc,Y,N.K,g.UX]}),o})()},9846:(C,h,l)=>{l.d(h,{F:()=>_});var c=l(655),g=l(4650),i=l(8008);let _=(()=>{class m{constructor(u,p){this.alertController=u,this.toastController=p}alertaInformativaLogin(u,p,Z){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:u,subHeader:p,message:Z,buttons:["OK"]})).present()})}alertaInformativa(u){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:u,buttons:["OK"]})).present()})}presentToast(u){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:u,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return m.\u0275fac=function(u){return new(u||m)(g.LFG(i.Br),g.LFG(i.yF))},m.\u0275prov=g.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);