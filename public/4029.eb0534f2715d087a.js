"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4029],{4029:(C,g,i)=>{i.r(g),i.d(g,{ClientPageModule:()=>I});var a=i(6895),u=i(433),r=i(8008),p=i(5017),c=i(655),h=i(1135),d=i(5819),t=i(4650),Z=i(9846),_=i(3071),v=i(7556),f=i(910),P=i(8132),T=i(1863);function b(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-toolbar",12)(1,"ion-buttons",13)(2,"ion-button",14),t.NdJ("tap",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.backButtonClickPayment())}),t._UZ(3,"ion-icon",15),t.qZA(),t.TgZ(4,"div",16),t._uU(5),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"ion-title",17),t._uU(8," DeletePayment "),t.qZA(),t.TgZ(9,"ion-buttons",18)(10,"ion-button",14),t.NdJ("tap",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.removeSelectedPayment())}),t._UZ(11,"ion-icon",19),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(5),t.Oqu(t.lcZ(6,1,e.paymentItemCount))}}function x(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-toolbar",20)(1,"ion-buttons",13),t._UZ(2,"ion-menu-button"),t.qZA(),t.TgZ(3,"ion-title"),t._UZ(4,"ion-img",21),t._uU(5," Client "),t.qZA(),t.TgZ(6,"ion-buttons",18)(7,"ion-button",22),t.NdJ("tap",function(l){t.CHM(e);const m=t.oxw();return t.KtG(m.menu(l))}),t._UZ(8,"ion-icon",23),t.qZA()()()}}const A=function(n){return{"selected-order":n}};function U(n,s){if(1&n&&(t.TgZ(0,"ion-item",25)(1,"ion-thumbnail",13),t._UZ(2,"ion-img",26),t.qZA(),t.TgZ(3,"ion-label")(4,"strong"),t._uU(5,"Client: "),t.qZA(),t.TgZ(6,"strong"),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"strong"),t._uU(10,"Created: "),t.qZA(),t.TgZ(11,"strong"),t._uU(12),t.ALo(13,"date"),t.qZA(),t._UZ(14,"br"),t.TgZ(15,"strong"),t._uU(16,"Send: "),t.qZA(),t.TgZ(17,"strong"),t._uU(18),t.ALo(19,"date"),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"strong"),t._uU(22,"TotalPrice: "),t.qZA(),t.TgZ(23,"strong"),t._uU(24),t.ALo(25,"currency"),t.qZA(),t._UZ(26,"br"),t.qZA()()),2&n){const e=s.$implicit,o=t.oxw(2);t.Q6J("ngClass",t.VKq(14,A,o.selectedOrder===e.id)),t.xp6(7),t.Oqu(e.usuario.name),t.xp6(5),t.Oqu(t.xi3(13,5,e.created,"short")),t.xp6(6),t.Oqu(t.xi3(19,8,e.send,"short")),t.xp6(6),t.Oqu(t.xi3(25,11,e.totalPrice,"EUR"))}}function O(n,s){if(1&n&&(t.TgZ(0,"ion-list")(1,"ion-list"),t.YNc(2,U,27,16,"ion-item",24),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.orders)}}const q=function(n){return{"selected-payment":n}};function S(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item",28),t.NdJ("press",function(){const m=t.CHM(e).$implicit,y=t.oxw(2);return t.KtG(y.selectPayment(m.id))}),t.TgZ(1,"ion-thumbnail",13),t._UZ(2,"ion-img",29),t.qZA(),t.TgZ(3,"ion-label")(4,"strong"),t._uU(5,"Client: "),t.qZA(),t.TgZ(6,"strong"),t._uU(7),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"strong"),t._uU(10,"Created: "),t.qZA(),t.TgZ(11,"strong"),t._uU(12),t.ALo(13,"date"),t.qZA(),t._UZ(14,"br"),t.TgZ(15,"strong"),t._uU(16,"Send: "),t.qZA(),t.TgZ(17,"strong"),t._uU(18),t.ALo(19,"date"),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"strong"),t._uU(22,"TotalPrice: "),t.qZA(),t.TgZ(23,"strong"),t._uU(24),t.ALo(25,"currency"),t.qZA(),t._UZ(26,"br"),t.qZA()()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.Q6J("ngClass",t.VKq(14,q,o.selectedPayment===e.id)),t.xp6(7),t.Oqu(e.usuario.name),t.xp6(5),t.Oqu(t.xi3(13,5,e.created,"short")),t.xp6(6),t.Oqu(t.xi3(19,8,e.send,"short")),t.xp6(6),t.Oqu(t.xi3(25,11,e.totalPrice,"EUR"))}}function M(n,s){if(1&n&&(t.TgZ(0,"ion-list"),t.YNc(1,S,27,16,"ion-item",27),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.payments)}}const J=[{path:"",component:(()=>{class n{constructor(e,o,l,m,y,Y,G,E,K){this.alertCtrl=e,this.popoverCtrl=o,this.cd=l,this.uiService=m,this.userService=y,this.authService=Y,this.cartService=G,this.orderService=E,this.paymentService=K,this.casacorzin=[],this.type="order",this.order={totalPrice:0,created:"",send:""},this.orders=[],this.deleteOrder=!1,this.orderItemCount=new h.X(0),this.payment={id:"",totalPrice:0,created:"",send:""},this.payments=[],this.deletePayment=!1,this.paymentItemCount=new h.X(0)}ngOnInit(){this.loadOrders(),this.loadPayments()}menu(e){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.popoverCtrl.create({mode:"md",event:e,dismissOnSelect:!0,component:d.M})).present()})}loadOrders(){return(0,c.mG)(this,void 0,void 0,function*(){this.orderService.getOrders().subscribe(e=>{console.log(e),this.orders.push(...e.orders)})})}loadPayments(){return(0,c.mG)(this,void 0,void 0,function*(){this.paymentService.getPayments().subscribe(e=>{console.log(e),this.payments.push(...e.payments)})})}clearPayment(){this.selectedPayment=null}selectPayment(e){this.deletePayment=!0,this.selectedPayment===e?this.clearPayment():this.selectedPayment=e,this.paymentToolbar(this.payment)}paymentToolbar(e){let o=!1;for(let l of this.casacorzin)if(l.id===e.id){l.amount+=1,o=!0;break}o||(e.amount=1,this.casacorzin.push(e)),this.paymentItemCount.next(this.paymentItemCount.value+1)}removeSelectedPayment(){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Warning!!!",message:"You want to delete the payment??",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:o=>{console.log("Confirmado Cancelar: blah"),this.backButtonClickPayment()}},{text:"OK",handler:()=>{console.log("Confirmado Aceptar"),this.paymentService.deletePayment(this.selectedPayment).subscribe(o=>{this.clearPayment(),this.loadPayments(),this.backButtonClickPayment(),this.uiService.presentToast("Deleted payment")},o=>{console.log(o)})}}]})).present()})}backButtonClickPayment(){this.clearPayment(),this.deletePayment=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.Br),t.Y36(r.Dh),t.Y36(t.sBO),t.Y36(Z.F),t.Y36(_.K),t.Y36(v.e),t.Y36(f.N),t.Y36(P.p),t.Y36(T.t))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-client"]],decls:17,vars:6,consts:[[1,"ion-no-border"],["color","warning",4,"ngIf"],["color","secondary",4,"ngIf"],["color","primary"],[3,"ngModel","ngModelChange"],["value","order",1,"miBoton"],["md","cart-sharp","color","light"],["value","payment",1,"miBoton"],["md","card-sharp","color","light"],[1,"ion-padding"],[3,"ngSwitch"],[4,"ngSwitchCase"],["color","warning"],["slot","start"],[3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","dark"],[1,"casacorzin-length"],[1,"miTitulo"],["slot","end"],["md","trash-sharp","slot","icon-only","color","dark"],["color","secondary"],["src","../../../assets/img/logo_small.png",1,"logo-header"],["fill","clear",3,"tap"],["md","ellipsis-vertical-sharp","slot","icon-only","color","light"],["button","","lines","none",3,"ngClass",4,"ngFor","ngForOf"],["button","","lines","none",3,"ngClass"],["src","../../../assets/img/order.png"],["button","","lines","none",3,"ngClass","press",4,"ngFor","ngForOf"],["button","","lines","none",3,"ngClass","press"],["src","../../../assets/img/stripe_logo.png"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0),t.YNc(1,b,12,3,"ion-toolbar",1),t.YNc(2,x,9,0,"ion-toolbar",2),t.TgZ(3,"ion-toolbar",3)(4,"ion-segment",4),t.NdJ("ngModelChange",function(m){return o.type=m}),t.TgZ(5,"ion-segment-button",5)(6,"ion-label"),t._uU(7,"Orders"),t.qZA(),t._UZ(8,"ion-icon",6),t.qZA(),t.TgZ(9,"ion-segment-button",7)(10,"ion-label"),t._uU(11,"Payments"),t.qZA(),t._UZ(12,"ion-icon",8),t.qZA()()()(),t.TgZ(13,"ion-content",9),t.ynx(14,10),t.YNc(15,O,3,1,"ion-list",11),t.YNc(16,M,2,1,"ion-list",11),t.BQk(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.deletePayment),t.xp6(1),t.Q6J("ngIf",!o.deletePayment),t.xp6(2),t.Q6J("ngModel",o.type),t.xp6(10),t.Q6J("ngSwitch",o.type),t.xp6(1),t.Q6J("ngSwitchCase","order"),t.xp6(1),t.Q6J("ngSwitchCase","payment"))},dependencies:[a.mk,a.sg,a.O5,a.RF,a.n9,u.JJ,u.On,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.Xz,r.Ie,r.Q$,r.q_,r.fG,r.cJ,r.GO,r.Bs,r.wd,r.sr,r.QI,a.Ov,a.H9,a.uU],styles:["ion-thumbnail[_ngcontent-%COMP%]{border-radius:2px;border:1px solid #000}"]}),n})()}];let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(J),p.Bz]}),n})();var F=i(5642);let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,u.u5,r.Pc,B,F.K]}),n})()},9846:(C,g,i)=>{i.d(g,{F:()=>p});var a=i(655),u=i(4650),r=i(8008);let p=(()=>{class c{constructor(d,t){this.alertController=d,this.toastController=t}alertaInformativaLogin(d,t,Z){return(0,a.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:d,subHeader:t,message:Z,buttons:["OK"]})).present()})}alertaInformativa(d){return(0,a.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:d,buttons:["OK"]})).present()})}presentToast(d){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:d,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return c.\u0275fac=function(d){return new(d||c)(u.LFG(r.Br),u.LFG(r.yF))},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);