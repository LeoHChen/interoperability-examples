(window["webpackJsonpgaas-ui"]=window["webpackJsonpgaas-ui"]||[]).push([[0],{1247:function(t,e){},1264:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),r=n(36),i=n.n(r),o=(n(549),n(10)),c=n.n(o),l=n(60),p=n(53),u=n(72),m=n(87),d=n(88),f=n(89),y=n(267),h=n(529),b=n(1267),g=n(536),w=n(530),v=n.n(w),E=Object(g.a)({palette:{primary:{light:"#000",main:"#000",dark:"#000",contrastText:"#fff"},secondary:v.a},overrides:{PrivateNotchedOutline:{root:{}},MuiOutlinedInput:{notchedOutline:{borderColor:"#EBEBEB !important",borderWidth:"1px !important"}},MuiTextField:{},MuiToggleButtonGroup:{grouped:{"&:not(:first-child)":{borderLeft:"1px solid #EBEBEB"}}},MuiToggleButton:{root:{border:"1px solid #EBEBEB",backgroundColor:"#fff","&.Mui-selected":{backgroundColor:"#fff !important",color:"#000",fontWeight:"500","&:hover":{backgroundColor:"#fff !important"}},"&:hover":{backgroundColor:"#fff !important"}}}}}),T=n(269),x=n.n(T),k=n(1304),S=n(1310),j=n(537),O=n(1313),C=n(1309),B=n(1307),M=n(1308),I=n(1314),_=(n(12),n(160)),N=n.n(_),A=n(368),H=n(534),R=function(t,e){var n=t.get("transactions");console.log("addTx",n.length),n.push(e),t.set("transactions",n),localStorage.setItem("transactions",JSON.stringify(n)),window.txs=n},W=function(t,e){console.log("updateTx",e);var n=t.get("transactions").map((function(t){return t.id===e.id?e:t}));t.set("transactions",n),localStorage.setItem("transactions",JSON.stringify(n)),window.txs=n},z=function(t,e){var n=t.get("transactions").filter((function(t){return t.id!==e}));t.set("transactions",n),localStorage.setItem("transactions",JSON.stringify(n)),window.txs=n},G=function(){var t=Object(l.a)(c.a.mark((function t(e){var n,a,s,r,i,o,l,p,u,m;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.props.store,a=n.get("web3"),s=n.get("web3Context"),r=n.get("adapterAddress"),i=e.params,e.awaiting,o=e.renResponse,l=e.renSignature,p=new a.eth.Contract(H,r),t.next=8,s.lib.eth.getGasPrice();case 8:return u=t.sent,console.log("completeDeposit",e),W(n,Object.assign(e,{awaiting:"eth-settle"})),t.prev=11,t.next=14,p.methods.shiftInWithSwap(i.contractCalls[0].contractParams[0].value,i.sendAmount,o.autogen.nhash,l).send({from:s.accounts[0],gasPrice:Math.round(1.5*u)});case 14:m=t.sent,console.log("result",m),W(n,Object.assign(e,{awaiting:"",txHash:m.transactionHash})),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(11),console.log(t.t0),W(n,Object.assign(e,{error:!0}));case 23:case"end":return t.stop()}}),t,this,[[11,19]])})));return function(e){return t.apply(this,arguments)}}(),J=function(t){var e=t.amount,n=(t.renBtcAddress,t.params),a=(t.ethSig,t.destAddress),s=this.props.store.getState(),r=s.sdk,i=s.adapterAddress;console.log("initShiftIn",t);var o={sendToken:N.a.Tokens.BTC.Btc2Eth,requiredAmount:N.a.utils.value(e,"btc").sats(),sendTo:i,contractFn:"shiftInWithSwap",contractParams:[{name:"_to",type:"address",value:a}],nonce:n&&n.nonce?n.nonce:N.a.utils.randomNonce()},c=r.shiftIn(o);return window.shiftIns.push(c),c},L=function(){var t=Object(l.a)(c.a.mark((function t(e){var n,a,s,r,i,o,l,p,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.props.store,a=e.params,s=e.awaiting,r=e.renResponse,i=e.renSignature,o=e.error,console.log("initDeposit",e),s){t.next=5;break}return t.abrupt("return");case 5:if(o&&W(n,Object.assign(e,{error:!1})),!r||!i){t.next=10;break}G.bind(this)(e),t.next=29;break;case 10:return t.next=12,J.bind(this)(e);case 12:return l=t.sent,a||R(n,Object.assign(e,{params:l.params,renBtcAddress:l.addr()})),t.next=16,l.waitForDeposit(2);case 16:return p=t.sent,W(n,Object.assign(e,{awaiting:"ren-settle"})),t.prev=18,t.next=21,p.submitToRenVM();case 21:u=t.sent,W(n,Object.assign(e,{renResponse:u.response,renSignature:u.signature})),G.bind(this)(e),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(18),console.log(t.t0);case 29:case"end":return t.stop()}}),t,this,[[18,26]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(l.a)(c.a.mark((function t(e){var n,a,s,r,i,o,l,p;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.props.store,a=e.id,console.log("initInstantSwap"),s=this.props.store.getState(),r=s.amount,i=s.address,o=s.transactions,t.next=6,fetch("".concat("","/swap-gateway/create"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceAmount:r,sourceAsset:"BTC",destinationAsset:"ETH",destinationAddress:i})});case 6:return l=t.sent,t.next=9,l.json();case 9:p=t.sent,o.filter((function(t){return t.id===a})).length||R(n,Object.assign(e,{renBtcAddress:p.gatewayAddress}));case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=this;console.log("initInstantMonitoring before",this.props.store.get("transactions")),setInterval(Object(l.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.props.store.get("transactions").concat([]),n.filter((function(t){return t.instant&&"btc-init"===t.awaiting})).map(function(){var e=Object(l.a)(c.a.mark((function e(n){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/swap-gateway/status?gateway=").concat(n.renBtcAddress),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:"complete"===(s=e.sent).status&&W(t.props.store,Object.assign(n,{awaiting:"",txHash:s.txHash}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),1e3)},V=function(){var t=this,e=this.props.store.get("transactions").filter((function(t){return t.awaiting&&!t.instant}));console.log("pending",e),e.map((function(e){L.bind(t)(e)}))};window.shiftIns=[];var F=Object(A.ephemeral)(),U={txfee:100,force_gasLimit:2e5,gasLimit:2e5,verbose:!0},K=function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(m.a)(this,Object(d.a)(e).call(this,t))).state={string:""},n.interval=null,n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){var e=t.state.string;e.length<3?t.setState({string:e+"."}):t.setState({string:""})}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return s.a.createElement("span",null,this.state.string)}}]),e}(s.a.Component),Z=function(t){function e(t){return Object(p.a)(this,e),Object(m.a)(this,Object(d.a)(e).call(this,t))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.store,t.next=3,Object(A.fromConnection)("https://kovan.infura.io/v3/7be66f167c2e4a05981e2ffc4653dec2",{gsn:Object(h.a)({signKey:F},U)});case 3:n=t.sent,e.set("web3Context",n),e.set("web3",n.lib),a=new N.a("testnet"),e.set("sdk",a),(s=localStorage.getItem("transactions"))&&e.set("transactions",JSON.parse(s)),V.bind(this)(),P.bind(this)();case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.swapMonitor)}},{key:"start",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.store,n=e.get("amount"),a=e.get("address"),e.get("transactions"),s={id:"tx-"+Math.floor(Math.random()*Math.pow(10,16)),type:"deposit",instant:!1,awaiting:"btc-init",source:"btc",dest:"eth",destAddress:a,amount:n,error:!1,txHash:""},L.bind(this)(s);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"startInstant",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.store,n=e.get("amount"),a=e.get("address"),e.get("transactions"),s={id:"tx-"+Math.floor(Math.random()*Math.pow(10,16)),type:"deposit",instant:!0,awaiting:"btc-init",source:"btc",dest:"eth",destAddress:a,amount:n,error:!1,txHash:""},D.bind(this)(s);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props,e=t.classes,n=t.store,a=n.getState(),r=a.transactions,i=a.adapterAddress,o=(a.selectedTab,a.instantSwapSelected),c=a.amount,l=a.address;console.log(n.getState());var p=c<1e-4||c>5e-4&&o||!l;return s.a.createElement(k.a,{container:!0},s.a.createElement(j.a,{variant:"h1",className:e.title},"Kovan ETH \u2013 Testnet BTC Exchange"),s.a.createElement(k.a,{item:!0,xs:12,className:e.contentContainer},s.a.createElement(k.a,{container:!0,direction:"column"},s.a.createElement(k.a,{className:e.desc,item:!0,xs:12},s.a.createElement("span",null,"Swap Testnet BTC for Kovan ETH"),s.a.createElement("span",{className:e.btcLink},"Send testnet BTC from ",s.a.createElement("a",{target:"_blank",href:"https://tbtc.bitaps.com/"},"here"))),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(k.a,{container:!0},s.a.createElement(k.a,{item:!0,xs:4,className:e.amountContainer},s.a.createElement(O.a,{className:x()(e.input,e.amount),variant:"outlined",size:"small",placeholder:"0.000000",onChange:function(t){n.set("amount",t.target.value)},InputProps:{endAdornment:s.a.createElement(B.a,{className:e.endAdornment,position:"end"},"BTC")}})),s.a.createElement(k.a,{item:!0,xs:8},s.a.createElement(O.a,{className:x()(e.input,e.address),variant:"outlined",size:"small",placeholder:"Send to ETH Address",onChange:function(t){n.set("address",t.target.value)}})))),s.a.createElement(k.a,{item:!0,xs:12,className:e.switchContainer},s.a.createElement(M.a,{control:s.a.createElement(I.a,{checked:o,color:"primary",onChange:function(){return n.set("instantSwapSelected",!o)},value:"instant"}),label:"Faster swap (0 confirmations, 0.0005 BTC max)"})),s.a.createElement(k.a,{item:!0,xs:12,className:e.swapButtonContainer},s.a.createElement(C.a,{disabled:p,className:e.swapButton,variant:"outlined",color:"primary",onClick:o?this.startInstant.bind(this):this.start.bind(this)},"Start Swap")),r&&r.length?s.a.createElement(S.a,{className:e.divider}):null,s.a.createElement(k.a,{item:!0,xs:12,className:e.unfinished},r&&r.length?r.map((function(t,a){return s.a.createElement(k.a,{key:a,container:!0,direction:"row",className:e.depositItem},s.a.createElement(k.a,{item:!0,xs:3},t.amount," BTC"),s.a.createElement(k.a,{className:e.depositStatus,item:!0,xs:9},"btc-init"===t.awaiting?s.a.createElement("span",null,"Waiting for ".concat(t.instant?"0":"2"," confirmations to"),s.a.createElement(K,null)," ".concat(t.renBtcAddress)):null,"ren-settle"===t.awaiting?s.a.createElement("span",null,"Submitting to RenVM",s.a.createElement(K,null)):null,"eth-settle"===t.awaiting?s.a.createElement("span",null,"Submitting to Ethereum",s.a.createElement(K,null)):null,t.awaiting?null:"Deposit complete","btc-init"===t.awaiting||t.error||!t.awaiting?s.a.createElement("div",null,t.txHash?s.a.createElement("a",{className:e.viewLink,target:"_blank",href:"https://kovan.etherscan.io/tx/"+t.txHash},"View transaction"):null,s.a.createElement("a",{href:"javascript:;",onClick:function(){z(n,t.id)}},t.awaiting?"Cancel":"Clear")):null))})):null))),s.a.createElement(k.a,{item:!0,xs:12,className:e.info},s.a.createElement("p",null,s.a.createElement("b",{className:e.caption},"How it Works"),s.a.createElement("br",null),s.a.createElement("br",null),"This exchange uses ",s.a.createElement("a",{target:"_blank",href:"https://renproject.io/"},"RenVM"),", ",s.a.createElement("a",{target:"_blank",href:"https://uniswap.io/"},"Uniswap"),", and Open Zeppelin's ",s.a.createElement("a",{target:"_blank",href:"https://gsn.openzeppelin.com/"},"GSN")," to facilitate trustless interoperabilty between Bitcoin and Ethereum. All swaps abstract ETH away from the user with the ",s.a.createElement("b",null,"GaaS pattern"),", and faster swaps are faciliated using the ",s.a.createElement("b",null,"CaaS pattern"),". To learn more, check out our interoperability tutorials below:"),s.a.createElement("p",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/tutorials"},"GaaS Tutorial")," | Gas-less transactions"),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/tutorials"},"CaaS tutorial")," | Faster swaps via expedited confirmations"))),s.a.createElement("p",null,"Swaps are submitted to the following adapter address: ",s.a.createElement("a",{target:"_blank",href:"https://kovan.etherscan.io/address/"+i},i)),s.a.createElement("p",null,"To learn more about building interoperable applications like this with RenVM, check out our ",s.a.createElement("a",{target:"_blank",href:"https://renproject.io/developers"},"developer center")," or the following links:",s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/ren-sdk"},"Getting started with RenJS")),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:"https://docs.renproject.io/developers/gateway-js"},"Getting started with GatewayJS")),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",href:"https://github.com/renproject/ren/wiki"},"Github Spec")))),s.a.createElement("p",null)))}}]),e}(s.a.Component),q=Object(b.a)((function(){return{root:{flexGrow:1},paper:{},navContainer:{paddingTop:E.spacing(1),paddingBottom:E.spacing(3),minHeight:52},contentContainer:{border:"1px solid #333",padding:E.spacing(3),marginTop:E.spacing(4),marginBottom:E.spacing(3),"& input":{}},input:{marginBottom:E.spacing(2),width:"100%","& input":{fontSize:12},"& p":{fontSize:12},"& .MuiOutlinedInput-notchedOutline":{borderColor:"rgba(0, 0, 0, 0.5) !important"}},amountContainer:{paddingRight:E.spacing(1)},amount:{},title:{fontSize:16,fontWeight:500,marginTop:E.spacing(4)},unfinished:{},depositItem:{fontSize:12,marginBottom:E.spacing(1)},depositStatus:{display:"flex",justifyContent:"space-between"},info:{fontSize:12,marginBottom:E.spacing(1),"& p":{marginBottom:0}},divider:{marginTop:E.spacing(3),marginBottom:E.spacing(3)},desc:{marginBottom:E.spacing(3),fontSize:14,display:"flex",alignItems:"flex-end",justifyContent:"space-between"},btcLink:{fontSize:12},viewLink:{fontSize:12,marginRight:E.spacing(1)},actionTabs:{marginTop:E.spacing(2),marginBottom:E.spacing(2)},swapButtonContainer:{textAlign:"center",paddingTop:E.spacing(1),paddingBottom:E.spacing(1)},switchContainer:{textAlign:"center",paddingBottom:E.spacing(1),"& .MuiFormControlLabel-label":{fontSize:12}},swapButton:{}}}))(Object(y.b)(Z)),$=n(1311),Q=n(1312),X=function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(m.a)(this,Object(d.a)(e).call(this,t))).state={},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props;t.classes,t.store;return s.a.createElement($.a,{theme:E},s.a.createElement(Q.a,{maxWidth:"sm"},s.a.createElement(q,null)))}}]),e}(s.a.Component),Y=Object(y.a)(Object(b.a)((function(){return{}}))(X),{transactions:[],adapterAddress:"0xade8792c3ee90320cabde200ccab34b27cc88651",selectedTab:0,instantSwapSelected:!1,amount:"",address:""});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},534:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"contract IUniswapExchange","name":"_exchange","type":"address"},{"internalType":"contract IShifterRegistry","name":"_registry","type":"address"},{"internalType":"address","name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldRelayHub","type":"address"},{"indexed":true,"internalType":"address","name":"newRelayHub","type":"address"}],"name":"RelayHubChanged","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"acceptRelayedCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositZBTC","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchange","outputs":[{"internalType":"contract IUniswapExchange","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHubAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"context","type":"bytes"},{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"actualCharge","type":"uint256"},{"internalType":"bytes32","name":"preRetVal","type":"bytes32"}],"name":"postRelayedCall","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"context","type":"bytes"}],"name":"preRelayedCall","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"internalType":"contract IShifterRegistry","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"relayHubVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"_msg","type":"bytes"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32","name":"_nHash","type":"bytes32"},{"internalType":"bytes","name":"_sig","type":"bytes"}],"name":"shiftIn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32","name":"_nHash","type":"bytes32"},{"internalType":"bytes","name":"_sig","type":"bytes"}],"name":"shiftInWithSwap","outputs":[{"internalType":"uint256","name":"ethBought","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_to","type":"address"}],"name":"swap","outputs":[{"internalType":"uint256","name":"ethBought","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawZBTC","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},544:function(t,e,n){t.exports=n(1264)},549:function(t,e,n){},566:function(t,e){},568:function(t,e){},656:function(t,e){},694:function(t,e){},697:function(t,e){},727:function(t,e){},780:function(t,e){},841:function(t,e){},843:function(t,e){}},[[544,1,2]]]);
//# sourceMappingURL=main.47a0d249.chunk.js.map