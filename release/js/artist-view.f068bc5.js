(function(){
'use strict';
var $otp$pages$artist$portrait$portrait_section$$, $otp$pages$artist$biography$preview$$, $otp$pages$artist$biography$details$$, $otp$pages$artist$biography$biography_section$$, $otp$pages$artist$works$works_section$$, $otp$pages$artist$escape$escape_section$$, $otp$pages$artist$video$video_section$$, $otp$pages$artist$return$0$return_section$$;
$otp$pages$artist$portrait$portrait_section$$ = function($G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$, $maybe_ref__41572__auto__$jscomp$69$$) {
  $G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$), $maybe_ref__41572__auto__$jscomp$69$$], null);
  $G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$, 0, null);
  $G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$ = $APP.$cljs$core$__destructure_map$$($G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$);
  var $id$jscomp$84$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("portrait-ref");
  $G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$755$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$, 1, null);
  $G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$ = function() {
    return {id:$id$jscomp$84$$, ref:$ref$jscomp$18$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[function() {
      var $G__169474$$ = function() {
        return {className:"px-4", children:function() {
          var $G__169478$$ = function() {
            return {className:"relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] overflow-hidden", children:[function() {
              var $G__169519$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", "imgix-fit":"crop", "active?":$visible_QMARK_$jscomp$2$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__169519$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__169519$$);
            }(), function() {
              var $G__169533$$ = function() {
                return {className:"absolute bottom-0 left-0 right-0 p-6 sm:p-10\n                                   bg-gradient-to-t from-black/70 to-transparent", children:[function() {
                  var $G__169540$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$eyebrow$$, "text-slate-500  dark:text-slate-500", "mb-2"]))), children:"The Artist"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169540$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__169540$$);
                }(), function() {
                  var $G__169570$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$heading_display$$, "mb-2"]))), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__169570$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__169570$$);
                }(), function() {
                  var $G__169576$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_role$$]))), children:"Sculptor · Los Angeles, USA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169576$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__169576$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169533$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__169533$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169478$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__169478$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169474$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169474$$);
    }(), function() {
      var $G__169580$$ = function() {
        return {className:"px-4 mt-10", children:function() {
          var $G__169585$$ = function() {
            return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6", children:[function() {
              var $G__169593$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169593$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__169593$$);
            }(), function() {
              var $G__169597$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$otp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__169597$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__169597$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__169585$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__169585$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169580$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169580$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__169466_map__169442_map__169442__$1_props__41571__auto__$jscomp$69_vec__169439_vec__169450$$);
};
$otp$pages$artist$biography$preview$$ = function($G__169695_props__41571__auto__$jscomp$70$$) {
  $APP.$helix$core$extract_cljs_props$$($G__169695_props__41571__auto__$jscomp$70$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__169695_props__41571__auto__$jscomp$70$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__169699$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$written_by$written_by$$, $G__169699$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$written_by$written_by$$, $G__169699$$);
    }(), function() {
      var $G__169703_JSCompiler_temp_const$jscomp$inline_3958$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
      var $G__169707$jscomp$inline_3960_JSCompiler_inline_result$jscomp$inline_3959$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
      $G__169707$jscomp$inline_3960_JSCompiler_inline_result$jscomp$inline_3959$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169707$jscomp$inline_3960_JSCompiler_inline_result$jscomp$inline_3959$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169707$jscomp$inline_3960_JSCompiler_inline_result$jscomp$inline_3959$$);
      $G__169703_JSCompiler_temp_const$jscomp$inline_3958$$ = {className:$G__169703_JSCompiler_temp_const$jscomp$inline_3958$$, children:["Born in Yerevan, ", $G__169707$jscomp$inline_3960_JSCompiler_inline_result$jscomp$inline_3959$$, "’s life began in extremes. At nineteen—armed only with conviction—he ", "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. ", "He arrived in America with nothing but the instincts that had guided him since ", "childhood: to build, to shape matter, to seek form through discipline and ", 
      "elemental materials."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169703_JSCompiler_temp_const$jscomp$inline_3958$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169703_JSCompiler_temp_const$jscomp$inline_3958$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169695_props__41571__auto__$jscomp$70$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__169695_props__41571__auto__$jscomp$70$$);
};
$otp$pages$artist$biography$details$$ = function($G__169717_props__41571__auto__$jscomp$71$$) {
  $APP.$helix$core$extract_cljs_props$$($G__169717_props__41571__auto__$jscomp$71$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__169717_props__41571__auto__$jscomp$71$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__169721$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$written_by$written_by$$, $G__169721$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$written_by$written_by$$, $G__169721$$);
    }(), function() {
      var $G__169726_JSCompiler_temp_const$jscomp$inline_3962$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
      var $G__169730$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
      $G__169730$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169730$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169730$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$);
      $G__169726_JSCompiler_temp_const$jscomp$inline_3962$$ = {className:$G__169726_JSCompiler_temp_const$jscomp$inline_3962$$, children:["Born in Yerevan, ", $G__169730$jscomp$inline_3964_JSCompiler_inline_result$jscomp$inline_3963$$, "’s life began in extremes. At nineteen—armed only with conviction—he ", "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. ", "He arrived in America with nothing but the instincts that had guided him since ", "childhood: to build, to shape matter, to seek form through discipline and ", 
      "elemental materials."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169726_JSCompiler_temp_const$jscomp$inline_3962$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169726_JSCompiler_temp_const$jscomp$inline_3962$$);
    }(), function() {
      var $G__169734$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["In San Francisco, he apprenticed with sculptor ", function() {
          var $G__169739$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Beniamino Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169739$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169739$$);
        }(), ", absorbing a lifelong sense of scale, color, and the physical intelligence of ", "large-form making. Drawn to the heat and velocity of New York, he moved east in ", "1974 and quickly found himself inside the crucible of the Minimalist movement, ", "assisting ", function() {
          var $G__169743$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169743$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169743$$);
        }(), " on the monumental black oil-stick wall drawings—one of which Serra titled ", function() {
          var $G__169747$$ = {children:"Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__169747$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__169747$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169734$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169734$$);
    }(), function() {
      var $G__169751$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"This immersion into New York’s severity and possibility forged an artist who has ;always moved toward intensity: toward weight, clarity, touch. The son of a builder, ;he grew up with materials—clay, plaster, stone, the raw grammar of structure. In ;New York, these instincts crystallized. In 1976 he transformed his ;ten-thousand-square-foot home and studio into a continuous field of industrial ;gold, an act of totalizing vision that set the tone for everything that followed.".split(";")};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169751$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169751$$);
    }(), function() {
      var $G__169755_JSCompiler_temp_const$jscomp$inline_3966$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
      var $G__169759$jscomp$inline_3968_JSCompiler_inline_result$jscomp$inline_3967$$ = {children:"1,000 Bricks Gilded in 24-Karat Gold Leaf"};
      $G__169759$jscomp$inline_3968_JSCompiler_inline_result$jscomp$inline_3967$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__169759$jscomp$inline_3968_JSCompiler_inline_result$jscomp$inline_3967$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__169759$jscomp$inline_3968_JSCompiler_inline_result$jscomp$inline_3967$$);
      $G__169755_JSCompiler_temp_const$jscomp$inline_3966$$ = {className:$G__169755_JSCompiler_temp_const$jscomp$inline_3966$$, children:["His 1978 project ", $G__169759$jscomp$inline_3968_JSCompiler_inline_result$jscomp$inline_3967$$, " marked the emergence of his now-signature language: unit-based sculptural ", "forms—bricklike, essential, endlessly recombinable—through which gold becomes ", "not decoration but ontology. For decades, Zadikian has pushed this vocabulary to ", "distill the elemental. His works hover between the geological and the luminous, ", 
      "between ancient memory and future speculation, always returning to the fundamental ", "question: What is born when matter is reduced to its clearest form?"]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169755_JSCompiler_temp_const$jscomp$inline_3966$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169755_JSCompiler_temp_const$jscomp$inline_3966$$);
    }(), function() {
      var $G__169763$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$]))), children:["Zadikian’s practice is defined by extremes—of material, of discipline, of ", "vision—and by a lifelong commitment to the structures that underlie both art ", "and the world itself. His is a studio forged through touch, labor, repetition, ", "and the pursuit of a form so essential it borders on the eternal."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169763$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169763$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169717_props__41571__auto__$jscomp$71$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__169717_props__41571__auto__$jscomp$71$$);
};
$otp$pages$artist$biography$biography_section$$ = function($G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$, $G__169785$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970_maybe_ref__41572__auto__$jscomp$72$$) {
  $G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$), $G__169785$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970_maybe_ref__41572__auto__$jscomp$72$$], null);
  $G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$, 0, null);
  $G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$ = $APP.$cljs$core$__destructure_map$$($G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$);
  $G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__169785$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970_maybe_ref__41572__auto__$jscomp$72$$ = {"section-hint":"biography", title:"The Artist", "expand-button-label":"Read full biography", "preview-text":$otp$pages$artist$biography$preview$$, "full-text":$otp$pages$artist$biography$details$$};
  $G__169785$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970_maybe_ref__41572__auto__$jscomp$72$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_light$$, $G__169785$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970_maybe_ref__41572__auto__$jscomp$72$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_light$$, $G__169785$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970_maybe_ref__41572__auto__$jscomp$72$$);
  $G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$ = {id:$G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$, children:$G__169785$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970_maybe_ref__41572__auto__$jscomp$72$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169781_id$jscomp$85_map__169776_map__169776__$1_props__41571__auto__$jscomp$72_vec__169773$$);
};
$otp$pages$artist$works$works_section$$ = function($G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$, $maybe_ref__41572__auto__$jscomp$73_ref$jscomp$19$$) {
  $G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$), $maybe_ref__41572__auto__$jscomp$73_ref$jscomp$19$$], null);
  $G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$, 0, null);
  $G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$ = $APP.$cljs$core$__destructure_map$$($G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$);
  $G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $maybe_ref__41572__auto__$jscomp$73_ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("works-ref");
  var $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($maybe_ref__41572__auto__$jscomp$73_ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$755$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$, 0, null);
  $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$, 1, null), slides:$otp$pages$artist$works$slides$$};
  $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$ = {className:"mt-6 relative pinstripe-bold", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_gallery$lazy_image_gallery$$, $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$) : 
  $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_gallery$lazy_image_gallery$$, $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$)};
  $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$ = {eyebrow:"selected works", title:"The Work", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$) : $APP.$helix$core$jsx$$.call(null, 
  "div", $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$)};
  $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, 
  $G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$);
  $G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$ = {id:$G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$, ref:$maybe_ref__41572__auto__$jscomp$73_ref$jscomp$19$$, children:$G__169794$jscomp$inline_4434_G__169798$jscomp$inline_4435_G__169802$jscomp$inline_4436_JSCompiler_inline_result$jscomp$inline_4433_vec__169777$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169790_id$jscomp$86_map__169769_map__169769__$1_props__41571__auto__$jscomp$73_vec__169766$$);
};
$otp$pages$artist$escape$escape_section$$ = function($G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$, $maybe_ref__41572__auto__$jscomp$74$$) {
  $G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$), $maybe_ref__41572__auto__$jscomp$74$$], null);
  $G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$, 0, null);
  $G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$ = $APP.$cljs$core$__destructure_map$$($G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$);
  var $id$jscomp$87$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$ = function() {
    return {id:$id$jscomp$87$$, children:function() {
      var $G__169836$$ = function() {
        return {eyebrow:"origins", title:"The Escape", children:function() {
          var $G__169840$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__169844$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["At nineteen—armed only with conviction—", function() {
                  var $G__169848$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169848$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169848$$);
                }(), " escaped Soviet Armenia by swimming across the ", function() {
                  var $G__169852$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Arax River"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169852$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169852$$);
                }(), " under machine-gun fire. He arrived in America with nothing but ", "the instincts that had guided him since childhood: to build, to ", "shape matter, to seek form through discipline and elemental materials."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169844$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169844$$);
            }(), function() {
              var $G__169856$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["In ", function() {
                  var $G__169860$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"San Francisco"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169860$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169860$$);
                }(), ", he apprenticed with sculptor ", function() {
                  var $G__169864$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Beniamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169864$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169864$$);
                }(), ", absorbing a lifelong sense of scale, color, and the physical ", "intelligence of large-form making. Drawn to the heat and velocity ", "of New York, he moved east in 1974 and quickly found himself inside ", "the crucible of the Minimalist movement, assisting ", function() {
                  var $G__169868$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169868$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169868$$);
                }(), " on the monumental black oil-stick wall drawings—one of which ", "Serra titled ", function() {
                  var $G__169872$$ = {children:"Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__169872$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__169872$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169856$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169856$$);
            }(), function() {
              var $G__169876$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["The son of a builder, he grew up with materials—clay, plaster, ", "stone, the raw grammar of structure. In New York, these instincts ", "crystallized. In 1976 he transformed his ten-thousand-square-foot ", "home and studio into a continuous field of industrial gold, an act ", 
              "of totalizing vision that set the tone for everything that followed."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169876$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169876$$);
            }(), function() {
              var $G__169880$$ = function() {
                return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6 my-8", children:[function() {
                  var $G__169884$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:["“The block remembers two things—the wall it was taken ", "from and the wall it will become.”"]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169884$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169884$$);
                }(), function() {
                  var $G__169888$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$otp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__169888$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__169888$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__169880$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__169880$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169840$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__169840$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__169836$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, $G__169836$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169832_map__169830_map__169830__$1_props__41571__auto__$jscomp$74_vec__169827$$);
};
$otp$pages$artist$video$video_section$$ = function($G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$, $maybe_ref__41572__auto__$jscomp$75$$) {
  $G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$), $maybe_ref__41572__auto__$jscomp$75$$], null);
  $G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$, 0, null);
  $G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$ = $APP.$cljs$core$__destructure_map$$($G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$);
  var $id$jscomp$88$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$20$$ = $APP.$helix$hooks$use_ref$$("artist-video-ref");
  $G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$20$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$773$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$, 0, null);
  var $visible_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$, 1, null);
  $G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$ = function() {
    return {id:$id$jscomp$88$$, ref:$ref$jscomp$20$$, children:function() {
      var $G__169906$$ = function() {
        return {eyebrow:"in his own words", title:"The Artist Speaks", children:function() {
          var $G__169910$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__169914$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-8"]))), children:["Hear ", function() {
                  var $G__169918$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169918$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169918$$);
                }(), " speak about his practice, his relationship with material, and ", "the significance of representing ", function() {
                  var $G__169922$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Armenia"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169922$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169922$$);
                }(), " at the 61st Venice Biennale."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169914$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169914$$);
            }(), function() {
              var $G__169926_G__169930$jscomp$inline_3977$$ = {"playback-id":"ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ", "aspect-ratio":1.77, "should-play?":$visible_QMARK_$jscomp$4$$, "allow-audio?":!0};
              $G__169926_G__169930$jscomp$inline_3977$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$video$lazy_video$$, $G__169926_G__169930$jscomp$inline_3977$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$video$lazy_video$$, $G__169926_G__169930$jscomp$inline_3977$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169926_G__169930$jscomp$inline_3977$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169926_G__169930$jscomp$inline_3977$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169910$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__169910$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__169906$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, $G__169906$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169902_map__169897_map__169897__$1_props__41571__auto__$jscomp$75_vec__169894_vec__169898$$);
};
$otp$pages$artist$return$0$return_section$$ = function($G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$, $maybe_ref__41572__auto__$jscomp$76$$) {
  $G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$), $maybe_ref__41572__auto__$jscomp$76$$], null);
  $G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$, 0, null);
  $G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$ = $APP.$cljs$core$__destructure_map$$($G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$ = function() {
    return {id:$id$jscomp$89$$, children:function() {
      var $G__169945$$ = function() {
        return {eyebrow:"full circle", title:"Return to Armenia", children:function() {
          var $G__169949$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__169953_JSCompiler_temp_const$jscomp$inline_3979$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
              var $G__169957$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3980$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Zadik Zadikian"};
              $G__169957$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3980$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169957$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3980$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169957$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3980$$);
              $G__169953_JSCompiler_temp_const$jscomp$inline_3979$$ = {className:$G__169953_JSCompiler_temp_const$jscomp$inline_3979$$, children:["After decades in the United States, ", $G__169957$jscomp$inline_3981_JSCompiler_inline_result$jscomp$inline_3980$$, " began a gradual return—not only to the country he had fled, ", "but to the questions of identity, belonging, and cultural memory ", "that had shaped his work from the very beginning."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169953_JSCompiler_temp_const$jscomp$inline_3979$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169953_JSCompiler_temp_const$jscomp$inline_3979$$);
            }(), function() {
              var $G__169961$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"Armenia in the post-Soviet era was a country in transformation. {The independence of 1991 had opened new possibilities but also {revealed old wounds. For Zadikian, returning was not a simple {homecoming; it was an encounter with a nation remaking itself {from the same elemental materials—stone, earth, will—that {he had been working with in his studio for half a century.".split("{")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169961$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169961$$);
            }(), function() {
              var $G__169965$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["The invitation to represent ", function() {
                  var $G__169969$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Armenia at the 61st Venice Biennale"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169969$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169969$$);
                }(), " carries a particular resonance. Venice and Armenia share a deep ", "historical connection: the island of ", function() {
                  var $G__169973$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"San Lazzaro degli Armeni"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169973$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169973$$);
                }(), " has housed an Armenian monastery since 1717, preserving manuscripts, ", "language, and culture through centuries of upheaval. To bring Armenian ", "art to the Biennale is to continue a conversation that has been ", "unfolding in this lagoon for over three hundred years."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169965$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169965$$);
            }(), function() {
              var $G__169977$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["For Zadikian, the Biennale is not a stage for national spectacle ", "but a place where the quiet persistence of making—the ", function() {
                  var $G__169981$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"studio as sanctuary"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169981$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169981$$);
                }(), "—can speak across borders. The pavilion will operate as a ", "living workshop, echoing the Armenian tradition of the ", function() {
                  var $G__169985$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"arvestanots"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__169985$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__169985$$);
                }(), " (workshop), where art is inseparable from the daily labor of its creation."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169977$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169977$$);
            }(), function() {
              var $G__169989$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["In representing Armenia at Venice, Zadikian closes a circle that ", "began with his escape. The young man who left a culture behind in ", "order to make art freely now returns that art to the world stage ", "under the flag of the nation he never stopped carrying with him."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169989$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169989$$);
            }(), function() {
              var $G__169993$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_closing$$, "mt-10"]))), children:["“The block is the smallest homeland. Wherever you stack it, ", "you are building Armenia.”"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__169993$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__169993$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169949$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__169949$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$section_header$section_header$$, $G__169945$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section_header$section_header$$, $G__169945$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__169941_map__169939_map__169939__$1_props__41571__auto__$jscomp$76_vec__169936$$);
};
$APP.$otp$pages$artist$page$artist_view$$ = function($G__170003_props__41571__auto__$jscomp$77_vec__169999$$, $maybe_ref__41572__auto__$jscomp$77$$) {
  $G__170003_props__41571__auto__$jscomp$77_vec__169999$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170003_props__41571__auto__$jscomp$77_vec__169999$$), $maybe_ref__41572__auto__$jscomp$77$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170003_props__41571__auto__$jscomp$77_vec__169999$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170003_props__41571__auto__$jscomp$77_vec__169999$$ = {children:[function() {
    var $G__170005$$ = {id:"portrait"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$portrait$portrait_section$$, $G__170005$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$portrait$portrait_section$$, $G__170005$$);
  }(), function() {
    var $G__170009$$ = {id:"biography"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$biography$biography_section$$, $G__170009$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$biography$biography_section$$, $G__170009$$);
  }(), function() {
    var $G__170013$$ = {id:"works"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$works$works_section$$, $G__170013$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$works$works_section$$, $G__170013$$);
  }(), function() {
    var $G__170017$$ = {id:"escape"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$escape$escape_section$$, $G__170017$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$escape$escape_section$$, $G__170017$$);
  }(), function() {
    var $G__170021$$ = {id:"video"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$video$video_section$$, $G__170021$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$video$video_section$$, $G__170021$$);
  }(), function() {
    var $G__170025$$ = {id:"return"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$artist$return$0$return_section$$, $G__170025$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$artist$return$0$return_section$$, $G__170025$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$page_shell$page_shell$$, $G__170003_props__41571__auto__$jscomp$77_vec__169999$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$otp$ui$page_shell$page_shell$$, $G__170003_props__41571__auto__$jscomp$77_vec__169999$$);
};
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("artist-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$portrait$portrait_section$$, "otp.pages.artist.portrait/portrait-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$biography$preview$$, "", null, null) : (void 0).call(null, $otp$pages$artist$biography$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$biography$preview$$, 
"otp.pages.artist.biography/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$biography$details$$, "", null, null) : (void 0).call(null, $otp$pages$artist$biography$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$biography$details$$, 
"otp.pages.artist.biography/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$biography$biography_section$$, "", null, null) : (void 0).call(null, $otp$pages$artist$biography$biography_section$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$artist$biography$biography_section$$, "otp.pages.artist.biography/biography-section"));
var $otp$pages$artist$works$slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/artwork/1.jpeg", $APP.$cljs$cst$734$aspect_ratio$$, 0.75, $APP.$cljs$cst$712$caption$$, "GILDED BLOCK COMPOSITION", $APP.$cljs$cst$713$credit$$, "Zadik Zadikian"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$735$img_src$$, 
"https://atd-722658831.imgix.net/blue_yellow/top_view.jpg", $APP.$cljs$cst$734$aspect_ratio$$, 0.75, $APP.$cljs$cst$712$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$713$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/side-2.jpg", $APP.$cljs$cst$734$aspect_ratio$$, 0.75, $APP.$cljs$cst$712$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$713$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/big_red/master.jpg", $APP.$cljs$cst$734$aspect_ratio$$, 1.78, $APP.$cljs$cst$712$caption$$, "THE BIG RED", $APP.$cljs$cst$713$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/big_red/corner_low.jpg", $APP.$cljs$cst$734$aspect_ratio$$, 0.75, $APP.$cljs$cst$712$caption$$, "THE BIG RED", $APP.$cljs$cst$713$credit$$, "Render 2026"], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/photos/blue_unit_with_hand.jpg", $APP.$cljs$cst$734$aspect_ratio$$, 1.5, $APP.$cljs$cst$712$caption$$, "BLUE BLOCK", $APP.$cljs$cst$713$credit$$, "Los Angeles 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/big_red/flag.jpg", $APP.$cljs$cst$734$aspect_ratio$$, 1.38, $APP.$cljs$cst$712$caption$$, "THE BIG RED", 
$APP.$cljs$cst$713$credit$$, "Render 2026"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$works$works_section$$, "otp.pages.artist.works/works-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$escape$escape_section$$, "", null, null) : (void 0).call(null, $otp$pages$artist$escape$escape_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$escape$escape_section$$, 
"otp.pages.artist.escape/escape-section"));
var $otp$pages$artist$video$lazy_video$$ = $APP.$otp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$otp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null) : (void 0).call(null, 
$otp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$video$video_section$$, "otp.pages.artist.video/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$artist$return$0$return_section$$, "", null, null) : (void 0).call(null, $otp$pages$artist$return$0$return_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$artist$return$0$return_section$$, 
"otp.pages.artist.return/return-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$otp$pages$artist$page$artist_view$$, "", null, null) : (void 0).call(null, $APP.$otp$pages$artist$page$artist_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$otp$pages$artist$page$artist_view$$, 
"otp.pages.artist.page/artist-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);