(self.webpackChunkmyrtex_mf=self.webpackChunkmyrtex_mf||[]).push([[766],{766:(W,_,R)=>{R.r(_),R.d(_,{DEFAULT_ROUTER_FEATURENAME:()=>C,FullRouterStateSerializer:()=>T,MinimalRouterStateSerializer:()=>v,NavigationActionTiming:()=>p,ROUTER_CANCEL:()=>g,ROUTER_CONFIG:()=>m,ROUTER_ERROR:()=>E,ROUTER_NAVIGATED:()=>A,ROUTER_NAVIGATION:()=>f,ROUTER_REQUEST:()=>S,RouterStateSerializer:()=>N,StoreRouterConnectingModule:()=>G,createRouterSelector:()=>P,getRouterSelectors:()=>V,provideRouterStore:()=>I,routerCancelAction:()=>j,routerErrorAction:()=>b,routerNavigatedAction:()=>w,routerNavigationAction:()=>L,routerReducer:()=>K,routerRequestAction:()=>D});var a=R(9866),s=R(2331),u=R(2057),U=R(2778);const S="@ngrx/router-store/request",D=(0,a.createAction)(S,(0,a.props)()),f="@ngrx/router-store/navigation",L=(0,a.createAction)(f,(0,a.props)()),g="@ngrx/router-store/cancel",j=(0,a.createAction)(g,(0,a.props)()),E="@ngrx/router-store/error",b=(0,a.createAction)(E,(0,a.props)()),A="@ngrx/router-store/navigated",w=(0,a.createAction)(A,(0,a.props)());function K(t,e){const r=e;switch(r.type){case f:case E:case g:return{state:r.payload.routerState,navigationId:r.payload.event.id};default:return t}}class v{serialize(e){return{root:this.serializeRoute(e.root),url:e.url}}serializeRoute(e){const r=e.children.map(o=>this.serializeRoute(o));return{params:e.params,data:e.data,url:e.url,outlet:e.outlet,title:e.title,routeConfig:e.routeConfig?{path:e.routeConfig.path,pathMatch:e.routeConfig.pathMatch,redirectTo:e.routeConfig.redirectTo,outlet:e.routeConfig.outlet,title:"string"==typeof e.routeConfig.title?e.routeConfig.title:void 0}:null,queryParams:e.queryParams,fragment:e.fragment,firstChild:r[0],children:r}}}var p=function(t){return t[t.PreActivation=1]="PreActivation",t[t.PostActivation=2]="PostActivation",t}(p||{});const C="router",z=new s.InjectionToken("@ngrx/router-store Internal Configuration"),m=new s.InjectionToken("@ngrx/router-store Configuration");function x(t){return{stateKey:C,serializer:v,navigationActionTiming:p.PreActivation,...t}}class T{serialize(e){return{root:this.serializeRoute(e.root),url:e.url}}serializeRoute(e){const r=e.children.map(o=>this.serializeRoute(o));return{params:e.params,paramMap:e.paramMap,data:e.data,url:e.url,outlet:e.outlet,title:e.title,routeConfig:e.routeConfig?{component:e.routeConfig.component,path:e.routeConfig.path,pathMatch:e.routeConfig.pathMatch,redirectTo:e.routeConfig.redirectTo,outlet:e.routeConfig.outlet,title:e.routeConfig.title}:null,queryParams:e.queryParams,queryParamMap:e.queryParamMap,fragment:e.fragment,component:e.routeConfig?e.routeConfig.component:void 0,root:void 0,parent:void 0,firstChild:r[0],pathFromRoot:void 0,children:r}}}class N{}var l=function(t){return t[t.NONE=1]="NONE",t[t.ROUTER=2]="ROUTER",t[t.STORE=3]="STORE",t}(l||{});let y=(()=>{class t{constructor(r,o,n,h,O,d){this.store=r,this.router=o,this.serializer=n,this.errorHandler=h,this.config=O,this.activeRuntimeChecks=d,this.lastEvent=null,this.routerState=null,this.trigger=l.NONE,this.stateKey=this.config.stateKey,!(0,a.isNgrxMockEnvironment)()&&(0,s.isDevMode)()&&(d?.strictActionSerializability||d?.strictStateSerializability)&&this.serializer instanceof T&&console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."),this.setUpStoreStateListener(),this.setUpRouterEventsListener()}setUpStoreStateListener(){this.store.pipe((0,a.select)(this.stateKey),(0,U.withLatestFrom)(this.store)).subscribe(([r,o])=>{this.navigateIfNeeded(r,o)})}navigateIfNeeded(r,o){if(!r||!r.state||this.trigger===l.ROUTER||this.lastEvent instanceof u.NavigationStart)return;const n=r.state.url;(function q(t,e){return M(t)===M(e)})(this.router.url,n)||(this.storeState=o,this.trigger=l.STORE,this.router.navigateByUrl(n).catch(h=>{this.errorHandler.handleError(h)}))}setUpRouterEventsListener(){const r=this.config.navigationActionTiming===p.PostActivation;let o;this.router.events.pipe((0,U.withLatestFrom)(this.store)).subscribe(([n,h])=>{this.lastEvent=n,n instanceof u.NavigationStart?(this.routerState=this.serializer.serialize(this.router.routerState.snapshot),this.trigger!==l.STORE&&(this.storeState=h,this.dispatchRouterRequest(n))):n instanceof u.RoutesRecognized?(o=n,!r&&this.trigger!==l.STORE&&this.dispatchRouterNavigation(n)):n instanceof u.NavigationCancel?(this.dispatchRouterCancel(n),this.reset()):n instanceof u.NavigationError?(this.dispatchRouterError(n),this.reset()):n instanceof u.NavigationEnd&&(this.trigger!==l.STORE&&(r&&this.dispatchRouterNavigation(o),this.dispatchRouterNavigated(n)),this.reset())})}dispatchRouterRequest(r){this.dispatchRouterAction(S,{event:r})}dispatchRouterNavigation(r){const o=this.serializer.serialize(r.state);this.dispatchRouterAction(f,{routerState:o,event:new u.RoutesRecognized(r.id,r.url,r.urlAfterRedirects,o)})}dispatchRouterCancel(r){this.dispatchRouterAction(g,{storeState:this.storeState,event:r})}dispatchRouterError(r){this.dispatchRouterAction(E,{storeState:this.storeState,event:new u.NavigationError(r.id,r.url,`${r}`)})}dispatchRouterNavigated(r){const o=this.serializer.serialize(this.router.routerState.snapshot);this.dispatchRouterAction(A,{event:r,routerState:o})}dispatchRouterAction(r,o){this.trigger=l.ROUTER;try{this.store.dispatch({type:r,payload:{routerState:this.routerState,...o,event:0===this.config.routerState?o.event:{id:o.event.id,url:o.event.url,urlAfterRedirects:o.event.urlAfterRedirects}}})}finally{this.trigger=l.NONE}}reset(){this.trigger=l.NONE,this.storeState=null,this.routerState=null}static#t=this.\u0275fac=function(o){return new(o||t)(s.\u0275\u0275inject(a.Store),s.\u0275\u0275inject(u.Router),s.\u0275\u0275inject(N),s.\u0275\u0275inject(s.ErrorHandler),s.\u0275\u0275inject(m),s.\u0275\u0275inject(a.ACTIVE_RUNTIME_CHECKS))};static#e=this.\u0275prov=s.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac})}return t})();function M(t){return t?.length>0&&"/"===t[t.length-1]?t.substring(0,t.length-1):t}function I(t={}){return(0,s.makeEnvironmentProviders)([{provide:z,useValue:t},{provide:m,useFactory:x,deps:[z]},{provide:N,useClass:t.serializer?t.serializer:0===t.routerState?T:v},{provide:s.ENVIRONMENT_INITIALIZER,multi:!0,useFactory:()=>()=>(0,s.inject)(y)},y])}let G=(()=>{class t{static forRoot(r={}){return{ngModule:t,providers:[I(r)]}}static#t=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275mod=s.\u0275\u0275defineNgModule({type:t});static#r=this.\u0275inj=s.\u0275\u0275defineInjector({})}return t})();function P(){return(0,a.createFeatureSelector)(C)}function V(t=P()){const e=(0,a.createSelector)(t,i=>i&&i.state),r=(0,a.createSelector)(e,i=>i&&i.root),o=(0,a.createSelector)(r,i=>{if(!i)return;let c=i;for(;c.firstChild;)c=c.firstChild;return c}),n=(0,a.createSelector)(r,i=>i&&i.fragment),h=(0,a.createSelector)(r,i=>i&&i.queryParams),d=(0,a.createSelector)(o,i=>i&&i.params),F=(0,a.createSelector)(o,i=>i&&i.data),H=(0,a.createSelector)(e,i=>i&&i.url),Q=(0,a.createSelector)(o,i=>{if(i?.routeConfig)return"string"==typeof i.routeConfig.title?i.routeConfig.title:i.title});return{selectCurrentRoute:o,selectFragment:n,selectQueryParams:h,selectQueryParam:i=>(0,a.createSelector)(h,c=>c&&c[i]),selectRouteParams:d,selectRouteParam:i=>(0,a.createSelector)(d,c=>c&&c[i]),selectRouteData:F,selectRouteDataParam:i=>(0,a.createSelector)(F,c=>c&&c[i]),selectUrl:H,selectTitle:Q}}}}]);