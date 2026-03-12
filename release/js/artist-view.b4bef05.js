(function(){
'use strict';
var $otp$pages$artist$portrait$portrait_section$$, $otp$pages$artist$biography$preview$$, $otp$pages$artist$biography$details$$, $otp$pages$artist$biography$biography_section$$, $otp$pages$artist$works$works_section$$, $otp$pages$artist$escape$escape_section$$, $otp$pages$artist$video$video_section$$, $otp$pages$artist$return$0$return_section$$;
$otp$pages$artist$portrait$portrait_section$$ = function($G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$, $maybe_ref__41633__auto__$jscomp$96$$) {
  $G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$), $maybe_ref__41633__auto__$jscomp$96$$], null);
  $G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$, 0, null);
  $G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$ = $APP.$cljs$core$__destructure_map$$($G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$);
  var $id$jscomp$84$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("portrait-ref");
  $G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$, 1, null);
  $G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$ = function() {
    return {id:$id$jscomp$84$$, ref:$ref$jscomp$18$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[function() {
      var $G__87590$$ = function() {
        return {className:"px-4", children:function() {
          var $G__87596$$ = function() {
            return {className:"relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] overflow-hidden", children:[function() {
              var $G__87602$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", "imgix-fit":"crop", "active?":$visible_QMARK_$jscomp$2$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__87602$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__87602$$);
            }(), function() {
              var $G__87610$$ = function() {
                return {className:"absolute bottom-0 left-0 right-0 p-6 sm:p-10\n                                   bg-gradient-to-t from-black/70 to-transparent", children:[function() {
                  var $G__87616$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$eyebrow$$, "text-slate-500  dark:text-slate-500", "mb-2"]))), children:"The Artist"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__87616$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__87616$$);
                }(), function() {
                  var $G__87620$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$heading_display$$, "mb-2"]))), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__87620$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__87620$$);
                }(), function() {
                  var $G__87632$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_role$$]))), children:"Sculptor · Los Angeles, USA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__87632$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__87632$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87610$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87610$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87596$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87596$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87590$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87590$$);
    }(), function() {
      var $G__87640$$ = function() {
        return {className:"px-4 mt-10", children:function() {
          var $G__87646$$ = function() {
            return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6", children:[function() {
              var $G__87650$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__87650$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__87650$$);
            }(), function() {
              var $G__87658$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$otp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__87658$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__87658$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__87646$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__87646$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87640$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87640$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__87584_map__87575_map__87575__$1_props__41632__auto__$jscomp$96_vec__87572_vec__87576$$);
};
$otp$pages$artist$biography$preview$$ = function($G__60713_props__41632__auto__$jscomp$97$$) {
  $APP.$helix$core$extract_cljs_props$$($G__60713_props__41632__auto__$jscomp$97$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__60713_props__41632__auto__$jscomp$97$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__60717$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$written_by$written_by$$, $G__60717$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$written_by$written_by$$, $G__60717$$);
    }(), function() {
      var $G__60721_JSCompiler_temp_const$jscomp$inline_3941$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
      var $G__60725$jscomp$inline_3943_JSCompiler_inline_result$jscomp$inline_3942$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
      $G__60725$jscomp$inline_3943_JSCompiler_inline_result$jscomp$inline_3942$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60725$jscomp$inline_3943_JSCompiler_inline_result$jscomp$inline_3942$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60725$jscomp$inline_3943_JSCompiler_inline_result$jscomp$inline_3942$$);
      $G__60721_JSCompiler_temp_const$jscomp$inline_3941$$ = {className:$G__60721_JSCompiler_temp_const$jscomp$inline_3941$$, children:["Born in Yerevan, ", $G__60725$jscomp$inline_3943_JSCompiler_inline_result$jscomp$inline_3942$$, "’s life began in extremes. At nineteen—armed only with conviction—he ", "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. ", "He arrived in America with nothing but the instincts that had guided him since ", "childhood: to build, to shape matter, to seek form through discipline and ", 
      "elemental materials."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60721_JSCompiler_temp_const$jscomp$inline_3941$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60721_JSCompiler_temp_const$jscomp$inline_3941$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60713_props__41632__auto__$jscomp$97$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__60713_props__41632__auto__$jscomp$97$$);
};
$otp$pages$artist$biography$details$$ = function($G__60742_props__41632__auto__$jscomp$98$$) {
  $APP.$helix$core$extract_cljs_props$$($G__60742_props__41632__auto__$jscomp$98$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__60742_props__41632__auto__$jscomp$98$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__60746$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$written_by$written_by$$, $G__60746$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$written_by$written_by$$, $G__60746$$);
    }(), function() {
      var $G__60750_JSCompiler_temp_const$jscomp$inline_3945$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
      var $G__60754$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
      $G__60754$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60754$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60754$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$);
      $G__60750_JSCompiler_temp_const$jscomp$inline_3945$$ = {className:$G__60750_JSCompiler_temp_const$jscomp$inline_3945$$, children:["Born in Yerevan, ", $G__60754$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$, "’s life began in extremes. At nineteen—armed only with conviction—he ", "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. ", "He arrived in America with nothing but the instincts that had guided him since ", "childhood: to build, to shape matter, to seek form through discipline and ", 
      "elemental materials."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60750_JSCompiler_temp_const$jscomp$inline_3945$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60750_JSCompiler_temp_const$jscomp$inline_3945$$);
    }(), function() {
      var $G__60758$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["In San Francisco, he apprenticed with sculptor ", function() {
          var $G__60762$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Beniamino Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60762$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60762$$);
        }(), ", absorbing a lifelong sense of scale, color, and the physical intelligence of ", "large-form making. Drawn to the heat and velocity of New York, he moved east in ", "1974 and quickly found himself inside the crucible of the Minimalist movement, ", "assisting ", function() {
          var $G__60766$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60766$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60766$$);
        }(), " on the monumental black oil-stick wall drawings—one of which Serra titled ", function() {
          var $G__60770$$ = {children:"Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__60770$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__60770$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60758$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60758$$);
    }(), function() {
      var $G__60774$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"This immersion into New York’s severity and possibility forged an artist who has ;always moved toward intensity: toward weight, clarity, touch. The son of a builder, ;he grew up with materials—clay, plaster, stone, the raw grammar of structure. In ;New York, these instincts crystallized. In 1976 he transformed his ;ten-thousand-square-foot home and studio into a continuous field of industrial ;gold, an act of totalizing vision that set the tone for everything that followed.".split(";")};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60774$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60774$$);
    }(), function() {
      var $G__60778_JSCompiler_temp_const$jscomp$inline_3949$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
      var $G__60782$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$ = {children:"1,000 Bricks Gilded in 24-Karat Gold Leaf"};
      $G__60782$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__60782$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__60782$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$);
      $G__60778_JSCompiler_temp_const$jscomp$inline_3949$$ = {className:$G__60778_JSCompiler_temp_const$jscomp$inline_3949$$, children:["His 1978 project ", $G__60782$jscomp$inline_3951_JSCompiler_inline_result$jscomp$inline_3950$$, " marked the emergence of his now-signature language: unit-based sculptural ", "forms—bricklike, essential, endlessly recombinable—through which gold becomes ", "not decoration but ontology. For decades, Zadikian has pushed this vocabulary to ", "distill the elemental. His works hover between the geological and the luminous, ", 
      "between ancient memory and future speculation, always returning to the fundamental ", "question: What is born when matter is reduced to its clearest form?"]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60778_JSCompiler_temp_const$jscomp$inline_3949$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60778_JSCompiler_temp_const$jscomp$inline_3949$$);
    }(), function() {
      var $G__60786$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$]))), children:["Zadikian’s practice is defined by extremes—of material, of discipline, of ", "vision—and by a lifelong commitment to the structures that underlie both art ", "and the world itself. His is a studio forged through touch, labor, repetition, ", "and the pursuit of a form so essential it borders on the eternal."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60786$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60786$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60742_props__41632__auto__$jscomp$98$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__60742_props__41632__auto__$jscomp$98$$);
};
$otp$pages$artist$biography$biography_section$$ = function($G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$, $G__60801$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953_maybe_ref__41633__auto__$jscomp$99$$) {
  $G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$), $G__60801$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953_maybe_ref__41633__auto__$jscomp$99$$], null);
  $G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$, 0, null);
  $G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$ = $APP.$cljs$core$__destructure_map$$($G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$);
  $G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__60801$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953_maybe_ref__41633__auto__$jscomp$99$$ = {"section-hint":"biography", title:"The Artist", "expand-button-label":"Read full biography", "preview-text":$otp$pages$artist$biography$preview$$, "full-text":$otp$pages$artist$biography$details$$};
  $G__60801$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953_maybe_ref__41633__auto__$jscomp$99$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_light$$, $G__60801$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953_maybe_ref__41633__auto__$jscomp$99$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_light$$, $G__60801$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953_maybe_ref__41633__auto__$jscomp$99$$);
  $G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$ = {id:$G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$, children:$G__60801$jscomp$inline_3954_JSCompiler_inline_result$jscomp$inline_3953_maybe_ref__41633__auto__$jscomp$99$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__60797_id$jscomp$85_map__60795_map__60795__$1_props__41632__auto__$jscomp$99_vec__60792$$);
};
$otp$pages$artist$works$works_section$$ = function($G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$, $maybe_ref__41633__auto__$jscomp$100_ref$jscomp$19$$) {
  $G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$), $maybe_ref__41633__auto__$jscomp$100_ref$jscomp$19$$], null);
  $G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$, 0, null);
  $G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$ = $APP.$cljs$core$__destructure_map$$($G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$);
  $G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $maybe_ref__41633__auto__$jscomp$100_ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("works-ref");
  var $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($maybe_ref__41633__auto__$jscomp$100_ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$, 0, null);
  $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$, 1, null), slides:$otp$pages$artist$works$slides$$};
  $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$ = {className:"mt-6 relative pinstripe-bold", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_gallery$lazy_image_gallery$$, $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$) : 
  $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_gallery$lazy_image_gallery$$, $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$)};
  $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$ = {eyebrow:"selected works", title:"The Work", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$) : $APP.$helix$core$jsx$$.call(null, "div", 
  $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$)};
  $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, 
  $G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$);
  $G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$ = {id:$G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$, ref:$maybe_ref__41633__auto__$jscomp$100_ref$jscomp$19$$, children:$G__87684$jscomp$inline_4319_G__87688$jscomp$inline_4320_G__87692$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4318_vec__87676$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87680_id$jscomp$86_map__87675_map__87675__$1_props__41632__auto__$jscomp$100_vec__87672$$);
};
$otp$pages$artist$escape$escape_section$$ = function($G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$, $maybe_ref__41633__auto__$jscomp$101$$) {
  $G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$), $maybe_ref__41633__auto__$jscomp$101$$], null);
  $G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$, 0, null);
  $G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$ = $APP.$cljs$core$__destructure_map$$($G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$);
  var $id$jscomp$87$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$ = function() {
    return {id:$id$jscomp$87$$, children:function() {
      var $G__60893$$ = function() {
        return {eyebrow:"origins", title:"The Escape", children:function() {
          var $G__60925$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__60934$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["At nineteen—armed only with conviction—", function() {
                  var $G__60942$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60942$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60942$$);
                }(), " escaped Soviet Armenia by swimming across the ", function() {
                  var $G__60948$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Arax River"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60948$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60948$$);
                }(), " under machine-gun fire. He arrived in America with nothing but ", "the instincts that had guided him since childhood: to build, to ", "shape matter, to seek form through discipline and elemental materials."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60934$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60934$$);
            }(), function() {
              var $G__60954$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["In ", function() {
                  var $G__60958$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"San Francisco"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60958$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60958$$);
                }(), ", he apprenticed with sculptor ", function() {
                  var $G__60964$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Beniamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60964$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60964$$);
                }(), ", absorbing a lifelong sense of scale, color, and the physical ", "intelligence of large-form making. Drawn to the heat and velocity ", "of New York, he moved east in 1974 and quickly found himself inside ", "the crucible of the Minimalist movement, assisting ", function() {
                  var $G__60970$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60970$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60970$$);
                }(), " on the monumental black oil-stick wall drawings—one of which ", "Serra titled ", function() {
                  var $G__60974$$ = {children:"Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__60974$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__60974$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60954$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60954$$);
            }(), function() {
              var $G__60980$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["The son of a builder, he grew up with materials—clay, plaster, ", "stone, the raw grammar of structure. In New York, these instincts ", "crystallized. In 1976 he transformed his ten-thousand-square-foot ", "home and studio into a continuous field of industrial gold, an act ", 
              "of totalizing vision that set the tone for everything that followed."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60980$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60980$$);
            }(), function() {
              var $G__60986$$ = function() {
                return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6 my-8", children:[function() {
                  var $G__60990$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:["“The block remembers two things—the wall it was taken ", "from and the wall it will become.”"]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60990$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60990$$);
                }(), function() {
                  var $G__60996$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$otp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__60996$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__60996$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__60986$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__60986$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60925$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__60925$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__60893$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, $G__60893$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__60876_map__60860_map__60860__$1_props__41632__auto__$jscomp$101_vec__60854$$);
};
$otp$pages$artist$video$video_section$$ = function($G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$, $maybe_ref__41633__auto__$jscomp$102$$) {
  $G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$), $maybe_ref__41633__auto__$jscomp$102$$], null);
  $G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$, 0, null);
  $G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$ = $APP.$cljs$core$__destructure_map$$($G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$);
  var $id$jscomp$88$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$20$$ = $APP.$helix$hooks$use_ref$$("artist-video-ref");
  $G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$20$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$773$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$, 0, null);
  var $visible_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$, 1, null);
  $G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$ = function() {
    return {id:$id$jscomp$88$$, ref:$ref$jscomp$20$$, children:function() {
      var $G__60915$$ = function() {
        return {eyebrow:"in his own words", title:"The Artist Speaks", children:function() {
          var $G__60927$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__60936$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-8"]))), children:["Hear ", function() {
                  var $G__60946$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60946$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60946$$);
                }(), " speak about his practice, his relationship with material, and ", "the significance of representing ", function() {
                  var $G__60962$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Armenia"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60962$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60962$$);
                }(), " at the 61st Venice Biennale."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60936$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60936$$);
            }(), function() {
              var $G__60978_G__60992$jscomp$inline_3960$$ = {"playback-id":"ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ", "aspect-ratio":1.77, "should-play?":$visible_QMARK_$jscomp$4$$, "allow-audio?":!0};
              $G__60978_G__60992$jscomp$inline_3960$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$video$lazy_video$$, $G__60978_G__60992$jscomp$inline_3960$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$video$lazy_video$$, $G__60978_G__60992$jscomp$inline_3960$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60978_G__60992$jscomp$inline_3960$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__60978_G__60992$jscomp$inline_3960$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60927$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__60927$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__60915$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, $G__60915$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__60901_map__60859_map__60859__$1_props__41632__auto__$jscomp$102_vec__60853_vec__60879$$);
};
$otp$pages$artist$return$0$return_section$$ = function($G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$, $maybe_ref__41633__auto__$jscomp$103$$) {
  $G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$), $maybe_ref__41633__auto__$jscomp$103$$], null);
  $G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$, 0, null);
  $G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$ = $APP.$cljs$core$__destructure_map$$($G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$ = function() {
    return {id:$id$jscomp$89$$, children:function() {
      var $G__60846$$ = function() {
        return {eyebrow:"full circle", title:"Return to Armenia", children:function() {
          var $G__60850$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__60862_JSCompiler_temp_const$jscomp$inline_3962$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
              var $G__60866$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
              $G__60866$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60866$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60866$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$);
              $G__60862_JSCompiler_temp_const$jscomp$inline_3962$$ = {className:$G__60862_JSCompiler_temp_const$jscomp$inline_3962$$, children:["After decades in the United States, ", $G__60866$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$, " began a gradual return—not only to the country he had fled, ", "but to the questions of identity, belonging, and cultural memory ", "that had shaped his work from the very beginning."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60862_JSCompiler_temp_const$jscomp$inline_3962$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60862_JSCompiler_temp_const$jscomp$inline_3962$$);
            }(), function() {
              var $G__60870$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"Armenia in the post-Soviet era was a country in transformation. {The independence of 1991 had opened new possibilities but also {revealed old wounds. For Zadikian, returning was not a simple {homecoming; it was an encounter with a nation remaking itself {from the same elemental materials—stone, earth, will—that {he had been working with in his studio for half a century.".split("{")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60870$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60870$$);
            }(), function() {
              var $G__60875$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["The invitation to represent ", function() {
                  var $G__60883$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Armenia at the 61st Venice Biennale"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60883$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60883$$);
                }(), " carries a particular resonance. Venice and Armenia share a deep ", "historical connection: the island of ", function() {
                  var $G__60889$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"San Lazzaro degli Armeni"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60889$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60889$$);
                }(), " has housed an Armenian monastery since 1717, preserving manuscripts, ", "language, and culture through centuries of upheaval. To bring Armenian ", "art to the Biennale is to continue a conversation that has been ", "unfolding in this lagoon for over three hundred years."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60875$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60875$$);
            }(), function() {
              var $G__60895$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["For Zadikian, the Biennale is not a stage for national spectacle ", "but a place where the quiet persistence of making—the ", function() {
                  var $G__60903$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"studio as sanctuary"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60903$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60903$$);
                }(), "—can speak across borders. The pavilion will operate as a ", "living workshop, echoing the Armenian tradition of the ", function() {
                  var $G__60909$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"arvestanots"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__60909$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__60909$$);
                }(), " (workshop), where art is inseparable from the daily labor of its creation."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60895$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60895$$);
            }(), function() {
              var $G__60913$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["In representing Armenia at Venice, Zadikian closes a circle that ", "began with his escape. The young man who left a culture behind in ", "order to make art freely now returns that art to the world stage ", "under the flag of the nation he never stopped carrying with him."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60913$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60913$$);
            }(), function() {
              var $G__60921$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_closing$$, "mt-10"]))), children:["“The block is the smallest homeland. Wherever you stack it, ", "you are building Armenia.”"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__60921$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__60921$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60850$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__60850$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__60846$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, $G__60846$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__60842_map__60838_map__60838__$1_props__41632__auto__$jscomp$103_vec__60835$$);
};
$APP.$otp$pages$artist$page$artist_view$$ = function($G__87721_props__41632__auto__$jscomp$104_vec__87717$$, $maybe_ref__41633__auto__$jscomp$104$$) {
  $G__87721_props__41632__auto__$jscomp$104_vec__87717$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87721_props__41632__auto__$jscomp$104_vec__87717$$), $maybe_ref__41633__auto__$jscomp$104$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87721_props__41632__auto__$jscomp$104_vec__87717$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__87721_props__41632__auto__$jscomp$104_vec__87717$$ = {children:[function() {
    var $G__87723$$ = {id:"portrait"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$portrait$portrait_section$$, $G__87723$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$portrait$portrait_section$$, $G__87723$$);
  }(), function() {
    var $G__87727$$ = {id:"biography"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$biography$biography_section$$, $G__87727$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$biography$biography_section$$, $G__87727$$);
  }(), function() {
    var $G__87731$$ = {id:"works"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$works$works_section$$, $G__87731$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$works$works_section$$, $G__87731$$);
  }(), function() {
    var $G__87735$$ = {id:"escape"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$escape$escape_section$$, $G__87735$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$escape$escape_section$$, $G__87735$$);
  }(), function() {
    var $G__87739$$ = {id:"video"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$video$video_section$$, $G__87739$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$video$video_section$$, $G__87739$$);
  }(), function() {
    var $G__87743$$ = {id:"return"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$return$0$return_section$$, $G__87743$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$return$0$return_section$$, $G__87743$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$page_shell$page_shell$$, $G__87721_props__41632__auto__$jscomp$104_vec__87717$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$otp$ui$page_shell$page_shell$$, $G__87721_props__41632__auto__$jscomp$104_vec__87717$$);
};
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("artist-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$portrait$portrait_section$$, "otp.pages.artist.portrait/portrait-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$biography$preview$$, "", null, null) : (void 0).call(null, $otp$pages$artist$biography$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$biography$preview$$, 
"otp.pages.artist.biography/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$biography$details$$, "", null, null) : (void 0).call(null, $otp$pages$artist$biography$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$biography$details$$, 
"otp.pages.artist.biography/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$biography$biography_section$$, "", null, null) : (void 0).call(null, $otp$pages$artist$biography$biography_section$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$artist$biography$biography_section$$, "otp.pages.artist.biography/biography-section"));
var $otp$pages$artist$works$slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/artwork/1.jpeg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$711$caption$$, "GILDED BLOCK COMPOSITION", $APP.$cljs$cst$712$credit$$, "Zadik Zadikian"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, 
"https://atd-722658831.imgix.net/blue_yellow/top_view.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$711$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$712$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/side-2.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$711$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$712$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/big_red/master.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 1.78, $APP.$cljs$cst$711$caption$$, "THE BIG RED", $APP.$cljs$cst$712$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/big_red/corner_low.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$711$caption$$, "THE BIG RED", $APP.$cljs$cst$712$credit$$, "Render 2026"], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/photos/blue_unit_with_hand.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 1.5, $APP.$cljs$cst$711$caption$$, "BLUE BLOCK", $APP.$cljs$cst$712$credit$$, "Los Angeles 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/big_red/flag.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 1.38, $APP.$cljs$cst$711$caption$$, "THE BIG RED", 
$APP.$cljs$cst$712$credit$$, "Render 2026"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$works$works_section$$, "otp.pages.artist.works/works-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$escape$escape_section$$, "", null, null) : (void 0).call(null, $otp$pages$artist$escape$escape_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$escape$escape_section$$, 
"otp.pages.artist.escape/escape-section"));
var $otp$pages$artist$video$lazy_video$$ = $APP.$otp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$otp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null) : (void 0).call(null, 
$otp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$video$video_section$$, "otp.pages.artist.video/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$return$0$return_section$$, "", null, null) : (void 0).call(null, $otp$pages$artist$return$0$return_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$return$0$return_section$$, 
"otp.pages.artist.return/return-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$otp$pages$artist$page$artist_view$$, "", null, null) : (void 0).call(null, $APP.$otp$pages$artist$page$artist_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$otp$pages$artist$page$artist_view$$, 
"otp.pages.artist.page/artist-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);