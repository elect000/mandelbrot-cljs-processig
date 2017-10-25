// Compiled by ClojureScript 1.9.473 {}
goog.provide('mandelbrot_cljs_app.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
mandelbrot_cljs_app.core.depth = (20);
mandelbrot_cljs_app.core.calc = (function mandelbrot_cljs_app$core$calc(c,z){
var cx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c);
var cy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(z);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(z);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cx + (x * x)) + ((0) - (y * y))),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (((2) * x) * y))], null);
});
mandelbrot_cljs_app.core.comp_size = (function mandelbrot_cljs_app$core$comp_size(c){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c);
return ((x * x) + (y * y));
});
mandelbrot_cljs_app.core.mandelbrotbean = (function mandelbrot_cljs_app$core$mandelbrotbean(c,z,time){
if(((4) < mandelbrot_cljs_app.core.comp_size.call(null,z))){
return null;
} else {
if((time < (0))){
return true;
} else {
return mandelbrot_cljs_app.core.mandelbrotbean.call(null,c,mandelbrot_cljs_app.core.calc.call(null,c,z),(time - (1)));

}
}
});
mandelbrot_cljs_app.core.mandelbrotbean_QMARK_ = (function mandelbrot_cljs_app$core$mandelbrotbean_QMARK_(p__8475){
var vec__8479 = p__8475;
var a = cljs.core.nth.call(null,vec__8479,(0),null);
var i = cljs.core.nth.call(null,vec__8479,(1),null);
return mandelbrot_cljs_app.core.mandelbrotbean.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),a,new cljs.core.Keyword(null,"y","y",-1757859776),i], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),mandelbrot_cljs_app.core.depth);
});
mandelbrot_cljs_app.core.cell_size = (800);
mandelbrot_cljs_app.core.mandelbrots = cljs.core.doall.call(null,cljs.core.filter.call(null,mandelbrot_cljs_app.core.mandelbrotbean_QMARK_,(function (){var iter__7602__auto__ = (function mandelbrot_cljs_app$core$iter__8482(s__8483){
return (new cljs.core.LazySeq(null,(function (){
var s__8483__$1 = s__8483;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8483__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var a = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7598__auto__ = ((function (s__8483__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function mandelbrot_cljs_app$core$iter__8482_$_iter__8484(s__8485){
return (new cljs.core.LazySeq(null,((function (s__8483__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__8485__$1 = s__8485;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__8485__$1);
if(temp__4657__auto____$1){
var s__8485__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8485__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__8485__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__8487 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__8486 = (0);
while(true){
if((i__8486 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__8486);
cljs.core.chunk_append.call(null,b__8487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,i], null));

var G__8488 = (i__8486 + (1));
i__8486 = G__8488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8487),mandelbrot_cljs_app$core$iter__8482_$_iter__8484.call(null,cljs.core.chunk_rest.call(null,s__8485__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8487),null);
}
} else {
var i = cljs.core.first.call(null,s__8485__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,i], null),mandelbrot_cljs_app$core$iter__8482_$_iter__8484.call(null,cljs.core.rest.call(null,s__8485__$2)));
}
} else {
return null;
}
break;
}
});})(s__8483__$1,a,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__8483__$1,a,xs__5205__auto__,temp__4657__auto__))
;
var fs__7599__auto__ = cljs.core.seq.call(null,iterys__7598__auto__.call(null,cljs.core.range.call(null,(-1),(1),(1.0 / mandelbrot_cljs_app.core.cell_size))));
if(fs__7599__auto__){
return cljs.core.concat.call(null,fs__7599__auto__,mandelbrot_cljs_app$core$iter__8482.call(null,cljs.core.rest.call(null,s__8483__$1)));
} else {
var G__8489 = cljs.core.rest.call(null,s__8483__$1);
s__8483__$1 = G__8489;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,(-2),(1),(1.0 / mandelbrot_cljs_app.core.cell_size)));
})()));
mandelbrot_cljs_app.core.setup = (function mandelbrot_cljs_app$core$setup(){
return quil.core.background.call(null,(255),(255),(255));
});
mandelbrot_cljs_app.core.draw = (function mandelbrot_cljs_app$core$draw(){
quil.core.push_matrix.call(null);

quil.core.stroke.call(null,(50),(0),(100));

quil.core.scale.call(null,0.5,0.5);

quil.core.translate.call(null,((2) * mandelbrot_cljs_app.core.cell_size),((1) * mandelbrot_cljs_app.core.cell_size));

var seq__8495_8499 = cljs.core.seq.call(null,mandelbrot_cljs_app.core.mandelbrots);
var chunk__8496_8500 = null;
var count__8497_8501 = (0);
var i__8498_8502 = (0);
while(true){
if((i__8498_8502 < count__8497_8501)){
var c_8503 = cljs.core._nth.call(null,chunk__8496_8500,i__8498_8502);
cljs.core.apply.call(null,quil.core.point,cljs.core.map.call(null,((function (seq__8495_8499,chunk__8496_8500,count__8497_8501,i__8498_8502,c_8503){
return (function (p1__8490_SHARP_){
return (p1__8490_SHARP_ * mandelbrot_cljs_app.core.cell_size);
});})(seq__8495_8499,chunk__8496_8500,count__8497_8501,i__8498_8502,c_8503))
,c_8503));

var G__8504 = seq__8495_8499;
var G__8505 = chunk__8496_8500;
var G__8506 = count__8497_8501;
var G__8507 = (i__8498_8502 + (1));
seq__8495_8499 = G__8504;
chunk__8496_8500 = G__8505;
count__8497_8501 = G__8506;
i__8498_8502 = G__8507;
continue;
} else {
var temp__4657__auto___8508 = cljs.core.seq.call(null,seq__8495_8499);
if(temp__4657__auto___8508){
var seq__8495_8509__$1 = temp__4657__auto___8508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8495_8509__$1)){
var c__7633__auto___8510 = cljs.core.chunk_first.call(null,seq__8495_8509__$1);
var G__8511 = cljs.core.chunk_rest.call(null,seq__8495_8509__$1);
var G__8512 = c__7633__auto___8510;
var G__8513 = cljs.core.count.call(null,c__7633__auto___8510);
var G__8514 = (0);
seq__8495_8499 = G__8511;
chunk__8496_8500 = G__8512;
count__8497_8501 = G__8513;
i__8498_8502 = G__8514;
continue;
} else {
var c_8515 = cljs.core.first.call(null,seq__8495_8509__$1);
cljs.core.apply.call(null,quil.core.point,cljs.core.map.call(null,((function (seq__8495_8499,chunk__8496_8500,count__8497_8501,i__8498_8502,c_8515,seq__8495_8509__$1,temp__4657__auto___8508){
return (function (p1__8490_SHARP_){
return (p1__8490_SHARP_ * mandelbrot_cljs_app.core.cell_size);
});})(seq__8495_8499,chunk__8496_8500,count__8497_8501,i__8498_8502,c_8515,seq__8495_8509__$1,temp__4657__auto___8508))
,c_8515));

var G__8516 = cljs.core.next.call(null,seq__8495_8509__$1);
var G__8517 = null;
var G__8518 = (0);
var G__8519 = (0);
seq__8495_8499 = G__8516;
chunk__8496_8500 = G__8517;
count__8497_8501 = G__8518;
i__8498_8502 = G__8519;
continue;
}
} else {
}
}
break;
}

quil.core.pop_matrix.call(null);

return quil.core.no_loop.call(null);
});
mandelbrot_cljs_app.core.mandelbrot_cljs_app = (function mandelbrot_cljs_app$core$mandelbrot_cljs_app(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mandelbrot-cljs-app",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.5 * mandelbrot_cljs_app.core.cell_size),((1) * mandelbrot_cljs_app.core.cell_size)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,mandelbrot_cljs_app.core.setup))?(function() { 
var G__8520__delegate = function (args){
return cljs.core.apply.call(null,mandelbrot_cljs_app.core.setup,args);
};
var G__8520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8521__i = 0, G__8521__a = new Array(arguments.length -  0);
while (G__8521__i < G__8521__a.length) {G__8521__a[G__8521__i] = arguments[G__8521__i + 0]; ++G__8521__i;}
  args = new cljs.core.IndexedSeq(G__8521__a,0);
} 
return G__8520__delegate.call(this,args);};
G__8520.cljs$lang$maxFixedArity = 0;
G__8520.cljs$lang$applyTo = (function (arglist__8522){
var args = cljs.core.seq(arglist__8522);
return G__8520__delegate(args);
});
G__8520.cljs$core$IFn$_invoke$arity$variadic = G__8520__delegate;
return G__8520;
})()
:mandelbrot_cljs_app.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,mandelbrot_cljs_app.core.draw))?(function() { 
var G__8523__delegate = function (args){
return cljs.core.apply.call(null,mandelbrot_cljs_app.core.draw,args);
};
var G__8523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8524__i = 0, G__8524__a = new Array(arguments.length -  0);
while (G__8524__i < G__8524__a.length) {G__8524__a[G__8524__i] = arguments[G__8524__i + 0]; ++G__8524__i;}
  args = new cljs.core.IndexedSeq(G__8524__a,0);
} 
return G__8523__delegate.call(this,args);};
G__8523.cljs$lang$maxFixedArity = 0;
G__8523.cljs$lang$applyTo = (function (arglist__8525){
var args = cljs.core.seq(arglist__8525);
return G__8523__delegate(args);
});
G__8523.cljs$core$IFn$_invoke$arity$variadic = G__8523__delegate;
return G__8523;
})()
:mandelbrot_cljs_app.core.draw));
});
goog.exportSymbol('mandelbrot_cljs_app.core.mandelbrot_cljs_app', mandelbrot_cljs_app.core.mandelbrot_cljs_app);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),mandelbrot_cljs_app.core.mandelbrot_cljs_app,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mandelbrot-cljs-app"], null));
}

//# sourceMappingURL=core.js.map