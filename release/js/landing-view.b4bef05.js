(function(){
'use strict';
var $otp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $otp$nav$logo$logo_nav$$, $otp$pages$landing$artist$artist_section$$, $otp$pages$landing$curators$curator_card$$, $otp$pages$landing$curators$curators_section$$, $otp$pages$landing$in_minor_keys$pull_quote$$, $otp$pages$landing$in_minor_keys$curator_card$$, $otp$pages$landing$in_minor_keys$preview$$, $otp$pages$landing$in_minor_keys$details$$, $otp$pages$landing$in_minor_keys$in_minor_keys$$, $otp$pages$landing$venue$preview$$, 
$otp$pages$landing$venue$details$$, $otp$pages$landing$venue$location_section$$, $otp$pages$landing$hero$mobile_hero_section$$, $otp$pages$landing$teaser$teaser_section$$, $cljs$cst$920$visible_QMARK_$$, $cljs$cst$918$img$$, $cljs$cst$916$boxDecorationBreak$$, $cljs$cst$914$markers_QMARK_$$, $cljs$cst$917$WebkitBoxDecorationBreak$$, $cljs$cst$921$attribution$$, $cljs$cst$919$bio$$, $cljs$cst$913$scroll_ref$$, $cljs$cst$915$debug_QMARK_$$;
$otp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($ref$jscomp$25$$, $G__62494_62508_p__62485_scroll_ref$$) {
  var $is_active_QMARK_$jscomp$8_map__62486__$1$$ = $APP.$cljs$core$__destructure_map$$($G__62494_62508_p__62485_scroll_ref$$), $on_toggle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__62486__$1$$, $APP.$cljs$cst$783$on_toggle$$), $on_enter$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__62486__$1$$, $APP.$cljs$cst$756$on_enter$$), $start$jscomp$178$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__62486__$1$$, 
  $APP.$cljs$cst$269$start$$, "top center"), $end$jscomp$48$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__62486__$1$$, $APP.$cljs$cst$773$end$$, "bottom");
  $G__62494_62508_p__62485_scroll_ref$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($is_active_QMARK_$jscomp$8_map__62486__$1$$, $cljs$cst$913$scroll_ref$$);
  var $markers_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__62486__$1$$, $cljs$cst$914$markers_QMARK_$$, !1);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($is_active_QMARK_$jscomp$8_map__62486__$1$$, $cljs$cst$915$debug_QMARK_$$, !1);
  var $vec__62487_visited_QMARK_$jscomp$2$$ = $APP.$helix$hooks$use_state$$(!1);
  $is_active_QMARK_$jscomp$8_map__62486__$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__62487_visited_QMARK_$jscomp$2$$, 0, null);
  var $set_is_active_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__62487_visited_QMARK_$jscomp$2$$, 1, null), $G__62493_62507_vec__62490$$ = $APP.$helix$hooks$use_state$$(!1);
  $vec__62487_visited_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62493_62507_vec__62490$$, 0, null);
  var $set_visited_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62493_62507_vec__62490$$, 1, null);
  $G__62493_62507_vec__62490$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $st$jscomp$2$$ = $APP.$module$node_modules$gsap$ScrollTrigger$$.ScrollTrigger.create({trigger:$APP.$cljs$core$_deref$$($ref$jscomp$25$$), start:$start$jscomp$178$$, end:$end$jscomp$48$$, invalidateOnRefresh:!0, onRefresh:function() {
      return null;
    }, onEnter:function($self$jscomp$21$$) {
      $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_visited_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_visited_BANG_$jscomp$1$$.call(null, !0);
      return $APP.$cljs$core$truth_$$($on_enter$jscomp$1$$) ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_enter$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($self$jscomp$21$$) : $on_enter$jscomp$1$$.call(null, $self$jscomp$21$$) : null;
    }, onToggle:function($self$jscomp$22$$) {
      var $G__62495_62510$$ = $self$jscomp$22$$.isActive;
      $set_is_active_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_is_active_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($G__62495_62510$$) : $set_is_active_BANG_$$.call(null, $G__62495_62510$$);
      return $APP.$cljs$core$truth_$$($on_toggle$jscomp$2$$) ? $on_toggle$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_toggle$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$($self$jscomp$22$$) : $on_toggle$jscomp$2$$.call(null, $self$jscomp$22$$) : null;
    }, markers:$markers_QMARK_$$}), $resize_observer$jscomp$1$$ = new ResizeObserver(function() {
      return $APP.$module$node_modules$gsap$ScrollTrigger$$.ScrollTrigger.refresh();
    });
    $resize_observer$jscomp$1$$.observe(document.body);
    return function() {
      $st$jscomp$2$$.kill();
      return $resize_observer$jscomp$1$$.disconnect();
    };
  });
  $G__62494_62508_p__62485_scroll_ref$$ = [$ref$jscomp$25$$, $G__62494_62508_p__62485_scroll_ref$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__62493_62507_vec__62490$$, $G__62494_62508_p__62485_scroll_ref$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__62493_62507_vec__62490$$, $G__62494_62508_p__62485_scroll_ref$$);
  return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$vec__62487_visited_QMARK_$jscomp$2$$, $is_active_QMARK_$jscomp$8_map__62486__$1$$], null);
};
$otp$nav$logo$logo_nav$$ = function($G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$) {
  $APP.$helix$core$extract_cljs_props$$($G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$ = $otp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$269$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$773$end$$, "1000000px", $cljs$cst$914$markers_QMARK_$$, !1, $cljs$cst$915$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$, 0, null);
  $G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$, 1, null);
  $APP.$otp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($comp_ref$$);
  $APP.$otp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$614$target$$, $comp_ref$$, $APP.$cljs$cst$747$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$410$y$$, 0], null), $APP.$cljs$cst$749$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$410$y$$, -250], null), $APP.$cljs$cst$745$is_on_QMARK_$$, $G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$], 
  null));
  $G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$ = function() {
    return {ref:$comp_ref$$, className:"fixed\n                    opacity-90\n                    z-30\n                    right-8\n                    top-20\n                    flex flex-col items-end gap-3", children:function() {
      var $G__62625$$ = function() {
        return {className:"w-28 lg:w-32", children:[function() {
          var $G__62629$$ = function() {
            return {className:"cursor-pointer", onClick:function() {
              return window.open("https://www.labiennale.org/en/art/2026", "_blank");
            }, children:function() {
              var $G__62633$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__62633$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__62633$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62629$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62629$$);
        }(), function() {
          var $G__62637$$ = function() {
            return {className:"mt-4", children:function() {
              var $G__62642$$ = function() {
                return {title:"Donate Now", "additional-classes":"w-full justify-center", size:$APP.$cljs$cst$716$sm$$, "bg-opacity":0.8, "on-click":function() {
                  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                }};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$button$main_button$$, $G__62642$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$button$main_button$$, $G__62642$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62637$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62637$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62625$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62625$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62621_is_active_QMARK_$jscomp$9_props__41632__auto__$jscomp$142_vec__62617$$);
};
$otp$pages$landing$artist$artist_section$$ = function($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$, $maybe_ref__41633__auto__$jscomp$143$$) {
  $G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$), $maybe_ref__41633__auto__$jscomp$143$$], null);
  $G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$, 0, null);
  $G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$ = $APP.$cljs$core$__destructure_map$$($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$);
  var $id$jscomp$98$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$, $APP.$cljs$cst$286$id$$), $title$jscomp$37$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$26$$ = $APP.$helix$hooks$use_ref$$("artist-ref");
  $G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$26$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$, 0, null);
  var $visible_QMARK_$jscomp$5$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$, 1, null), $tag_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$916$boxDecorationBreak$$, "clone", $cljs$cst$917$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$ = function() {
    return {id:$id$jscomp$98$$, ref:$ref$jscomp$26$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$37$$) ? function() {
      var $G__88592_JSCompiler_temp_const$jscomp$inline_4076$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__88596$jscomp$inline_4078_JSCompiler_inline_result$jscomp$inline_4077$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:$title$jscomp$37$$};
      $G__88596$jscomp$inline_4078_JSCompiler_inline_result$jscomp$inline_4077$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88596$jscomp$inline_4078_JSCompiler_inline_result$jscomp$inline_4077$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88596$jscomp$inline_4078_JSCompiler_inline_result$jscomp$inline_4077$$);
      $G__88592_JSCompiler_temp_const$jscomp$inline_4076$$ = {className:$G__88592_JSCompiler_temp_const$jscomp$inline_4076$$, children:$G__88596$jscomp$inline_4078_JSCompiler_inline_result$jscomp$inline_4077$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__88592_JSCompiler_temp_const$jscomp$inline_4076$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__88592_JSCompiler_temp_const$jscomp$inline_4076$$);
    }() : null, function() {
      var $G__88601$$ = function() {
        return {className:"px-4 sm:flex sm:gap-10 sm:items-start", children:[function() {
          var $G__88606_G__88610$jscomp$inline_4081$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", "imgix-fit":"crop", "aspect-ratio":0.75, "active?":$visible_QMARK_$jscomp$5$$};
          $G__88606_G__88610$jscomp$inline_4081$$ = {className:"w-full sm:w-2/5 flex-shrink-0 aspect-[3/4] rounded-sm overflow-hidden mb-8 sm:mb-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__88606_G__88610$jscomp$inline_4081$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__88606_G__88610$jscomp$inline_4081$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88606_G__88610$jscomp$inline_4081$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88606_G__88610$jscomp$inline_4081$$);
        }(), function() {
          var $G__88618$$ = function() {
            return {className:"sm:flex-1 sm:min-w-0", children:[function() {
              var $G__88622_JSCompiler_temp_const$jscomp$inline_4083$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_name_lg$$, "mb-2"])));
              var $G__88629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$$), children:"Zadik Zadikian"};
              $G__88629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084$$);
              $G__88622_JSCompiler_temp_const$jscomp$inline_4083$$ = {className:$G__88622_JSCompiler_temp_const$jscomp$inline_4083$$, children:$G__88629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88622_JSCompiler_temp_const$jscomp$inline_4083$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88622_JSCompiler_temp_const$jscomp$inline_4083$$);
            }(), function() {
              var $G__88638$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_role$$, "mb-6"]))), children:"Artist"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88638$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88638$$);
            }(), function() {
              var $G__88646$$ = function() {
                return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
                  var $G__88654$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88654$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88654$$);
                }(), function() {
                  var $G__88660$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$otp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__88660$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__88660$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__88646$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__88646$$);
            }(), function() {
              var $G__88673$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"Born in Yerevan, Zadik Zadikian’s life began in extremes. At nineteen—armed only with conviction—he escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. He arrived in America with nothing but the instincts that had guided him since childhood: to build, to shape matter, to seek form through discipline and elemental materials."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88673$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88673$$);
            }(), function() {
              var $G__88678$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:["In San Francisco, he apprenticed with sculptor ", function() {
                  var $G__88682$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Beniamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88682$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88682$$);
                }(), ", absorbing a lifelong sense of scale, color, and the physical intelligence of large-form making. Drawn to the heat and velocity of New York, he moved east in 1974 and quickly found himself inside the crucible of the Minimalist movement, assisting ", function() {
                  var $G__88686$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88686$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88686$$);
                }(), " on the monumental black oil-stick wall drawings—one of which Serra titled ", function() {
                  var $G__88691$$ = {children:"Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__88691$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__88691$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88678$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__88678$$);
            }(), function() {
              var $G__88702$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"This immersion into New York’s severity and possibility forged an artist who has always moved toward intensity: toward weight, clarity, touch. The son of a builder, he grew up with materials—clay, plaster, stone, the raw grammar of structure. In New York, these instincts crystallized. In 1976 he transformed his ten-thousand-square-foot home and studio into a continuous field of industrial gold, an act of totalizing vision that set the tone for everything that followed."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88702$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88702$$);
            }(), function() {
              var $G__88708_JSCompiler_temp_const$jscomp$inline_4087$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
              var $G__88714$jscomp$inline_4089_JSCompiler_inline_result$jscomp$inline_4088$$ = {children:"1,000 Bricks Gilded in 24-Karat Gold Leaf"};
              $G__88714$jscomp$inline_4089_JSCompiler_inline_result$jscomp$inline_4088$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__88714$jscomp$inline_4089_JSCompiler_inline_result$jscomp$inline_4088$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__88714$jscomp$inline_4089_JSCompiler_inline_result$jscomp$inline_4088$$);
              $G__88708_JSCompiler_temp_const$jscomp$inline_4087$$ = {className:$G__88708_JSCompiler_temp_const$jscomp$inline_4087$$, children:["His 1978 project ", $G__88714$jscomp$inline_4089_JSCompiler_inline_result$jscomp$inline_4088$$, " marked the emergence of his now-signature language: unit-based sculptural forms—bricklike, essential, endlessly recombinable—through which gold becomes not decoration but ontology. For decades, Zadikian has pushed this vocabulary to distill the elemental. His works hover between the geological and the luminous, between ancient memory and future speculation, always returning to the fundamental question: What is born when matter is reduced to its clearest form?"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88708_JSCompiler_temp_const$jscomp$inline_4087$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__88708_JSCompiler_temp_const$jscomp$inline_4087$$);
            }(), function() {
              var $G__88720$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$]))), children:"Zadikian’s practice is defined by extremes—of material, of discipline, of vision—and by a lifelong commitment to the structures that underlie both art and the world itself. His is a studio forged through touch, labor, repetition, and the pursuit of a form so essential it borders on the eternal."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88720$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88720$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88618$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88618$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88601$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88601$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__88587_map__88581_map__88581__$1_props__41632__auto__$jscomp$143_vec__88578_vec__88583$$);
};
$otp$pages$landing$curators$curator_card$$ = function($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$, $maybe_ref__41633__auto__$jscomp$144$$) {
  $G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$), $maybe_ref__41633__auto__$jscomp$144$$], null);
  $G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$, 0, null);
  $G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$ = $APP.$cljs$core$__destructure_map$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$);
  var $name$jscomp$203$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$, $APP.$cljs$cst$165$name$$), $role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$, $APP.$cljs$cst$800$role$$), $img$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$, 
  $cljs$cst$918$img$$), $bio$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$, $cljs$cst$919$bio$$), $visible_QMARK_$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$, $cljs$cst$920$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$1$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$916$boxDecorationBreak$$, "clone", $cljs$cst$917$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$ = function() {
    return {className:"px-4 sm:flex sm:gap-8 sm:items-start", children:[function() {
      var $G__88546_G__88550$jscomp$inline_4092$$ = {"img-src":$img$jscomp$2$$, "imgix-fit":"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$6$$};
      $G__88546_G__88550$jscomp$inline_4092$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-20 aspect-square sm:w-36\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__88546_G__88550$jscomp$inline_4092$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__88546_G__88550$jscomp$inline_4092$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88546_G__88550$jscomp$inline_4092$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88546_G__88550$jscomp$inline_4092$$);
    }(), function() {
      var $G__88554$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__88558_JSCompiler_temp_const$jscomp$inline_4094$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_name$$, "mb-1"])));
          var $G__88562$jscomp$inline_4096_JSCompiler_inline_result$jscomp$inline_4095$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$1$$), children:$name$jscomp$203$$};
          $G__88562$jscomp$inline_4096_JSCompiler_inline_result$jscomp$inline_4095$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88562$jscomp$inline_4096_JSCompiler_inline_result$jscomp$inline_4095$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88562$jscomp$inline_4096_JSCompiler_inline_result$jscomp$inline_4095$$);
          $G__88558_JSCompiler_temp_const$jscomp$inline_4094$$ = {className:$G__88558_JSCompiler_temp_const$jscomp$inline_4094$$, children:$G__88562$jscomp$inline_4096_JSCompiler_inline_result$jscomp$inline_4095$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88558_JSCompiler_temp_const$jscomp$inline_4094$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88558_JSCompiler_temp_const$jscomp$inline_4094$$);
        }(), function() {
          var $G__88566$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_role$$, "mb-3"]))), children:$role$jscomp$2$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88566$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88566$$);
        }(), function() {
          var $G__88570$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$body_base$$), children:$bio$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88570$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88570$$);
        }(), function() {
          var $G__88575$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88575$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88575$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88554$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88554$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88542_map__88540_map__88540__$1_props__41632__auto__$jscomp$144_vec__88537$$);
};
$otp$pages$landing$curators$curators_section$$ = function($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$, $maybe_ref__41633__auto__$jscomp$145$$) {
  $G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$), $maybe_ref__41633__auto__$jscomp$145$$], null);
  $G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$, 0, null);
  $G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$ = $APP.$cljs$core$__destructure_map$$($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$);
  var $id$jscomp$99$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$, $APP.$cljs$cst$286$id$$), $title$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$27$$ = $APP.$helix$hooks$use_ref$$("curators-ref");
  $G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$27$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$, 0, null);
  var $visible_QMARK_$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$, 1, null), $title_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$916$boxDecorationBreak$$, "clone", $cljs$cst$917$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$ = function() {
    return {id:$id$jscomp$99$$, ref:$ref$jscomp$27$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[$APP.$cljs$core$truth_$$($title$jscomp$38$$) ? function() {
      var $G__88642_JSCompiler_temp_const$jscomp$inline_4098$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_name_lg$$, "mb-10 px-4"])));
      var $G__88648$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($title_style$$), children:$title$jscomp$38$$};
      $G__88648$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88648$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88648$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$);
      $G__88642_JSCompiler_temp_const$jscomp$inline_4098$$ = {className:$G__88642_JSCompiler_temp_const$jscomp$inline_4098$$, children:$G__88648$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__88642_JSCompiler_temp_const$jscomp$inline_4098$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__88642_JSCompiler_temp_const$jscomp$inline_4098$$);
    }() : null, function() {
      var $G__88658$$ = function() {
        return {className:"space-y-8 sm:space-y-12\n              divide-y divide-slate-200/50 dark:divide-white/10", children:function() {
          return function $otp$pages$landing$curators$curators_section_render_$_iter__88665$$($s__88666$$) {
            return new $APP.$cljs$core$LazySeq$$(null, function() {
              for (;;) {
                var $s__88666__$2_temp__5823__auto__$jscomp$118$$ = $APP.$cljs$core$seq$$($s__88666$$);
                if ($s__88666__$2_temp__5823__auto__$jscomp$118$$) {
                  if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__88666__$2_temp__5823__auto__$jscomp$118$$)) {
                    var $c__5626__auto__$jscomp$32$$ = $APP.$cljs$core$_chunked_first$$($s__88666__$2_temp__5823__auto__$jscomp$118$$), $size__5627__auto__$jscomp$32$$ = $APP.$cljs$core$count$$($c__5626__auto__$jscomp$32$$), $b__88668$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$32$$);
                    return function() {
                      for (var $i__88667$$ = 0;;) {
                        if ($i__88667$$ < $size__5627__auto__$jscomp$32$$) {
                          var $JSCompiler_temp_const$jscomp$4171_map__88689_map__88689__$1$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$jscomp$32$$, $i__88667$$), $G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$ = $JSCompiler_temp_const$jscomp$4171_map__88689_map__88689__$1$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_temp_const$jscomp$4171_map__88689_map__88689__$1$$), $G__88694$jscomp$inline_4242_JSCompiler_inline_result$jscomp$4172_name$jscomp$205$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp_const$jscomp$4171_map__88689_map__88689__$1$$, 
                          $APP.$cljs$cst$165$name$$);
                          $JSCompiler_temp_const$jscomp$4171_map__88689_map__88689__$1$$ = $b__88668$$;
                          $G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$7$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$));
                          $G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$curators$curator_card$$, $G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$curators$curator_card$$, $G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$)};
                          $G__88694$jscomp$inline_4242_JSCompiler_inline_result$jscomp$4172_name$jscomp$205$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$, $G__88694$jscomp$inline_4242_JSCompiler_inline_result$jscomp$4172_name$jscomp$205$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88693$jscomp$inline_4240_G__88700$jscomp$inline_4241_curator$jscomp$1$$, 
                          $G__88694$jscomp$inline_4242_JSCompiler_inline_result$jscomp$4172_name$jscomp$205$$);
                          $JSCompiler_temp_const$jscomp$4171_map__88689_map__88689__$1$$.add($G__88694$jscomp$inline_4242_JSCompiler_inline_result$jscomp$4172_name$jscomp$205$$);
                          $i__88667$$ += 1;
                        } else {
                          return !0;
                        }
                      }
                    }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__88668$$), $otp$pages$landing$curators$curators_section_render_$_iter__88665$$($APP.$cljs$core$_chunked_rest$$($s__88666__$2_temp__5823__auto__$jscomp$118$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__88668$$), null);
                  }
                  var $map__88723_map__88723__$1$$ = $APP.$cljs$core$first$$($s__88666__$2_temp__5823__auto__$jscomp$118$$), $curator$$ = $map__88723_map__88723__$1$$ = $APP.$cljs$core$__destructure_map$$($map__88723_map__88723__$1$$), $name$jscomp$204$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__88723_map__88723__$1$$, $APP.$cljs$cst$165$name$$);
                  return $APP.$cljs$core$cons$$(function() {
                    var $G__88725_G__88732$jscomp$inline_4106$$ = $APP.$helix$impl$props$merge_obj$$({"visible?":$visible_QMARK_$jscomp$7$$}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($curator$$));
                    $G__88725_G__88732$jscomp$inline_4106$$ = {className:"pt-8 sm:pt-12 first:pt-0 first:border-t-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$curators$curator_card$$, $G__88725_G__88732$jscomp$inline_4106$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$curators$curator_card$$, $G__88725_G__88732$jscomp$inline_4106$$)};
                    var $G__88726$$ = $name$jscomp$204$$;
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__88725_G__88732$jscomp$inline_4106$$, $G__88726$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88725_G__88732$jscomp$inline_4106$$, $G__88726$$);
                  }(), $otp$pages$landing$curators$curators_section_render_$_iter__88665$$($APP.$cljs$core$rest$$($s__88666__$2_temp__5823__auto__$jscomp$118$$)));
                }
                return null;
              }
            }, null, null);
          }($otp$pages$landing$curators$curators$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88658$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88658$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__88634_map__88616_map__88616__$1_props__41632__auto__$jscomp$145_vec__88613_vec__88625$$);
};
$otp$pages$landing$in_minor_keys$pull_quote$$ = function($G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$, $maybe_ref__41633__auto__$jscomp$146$$) {
  $G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$), $maybe_ref__41633__auto__$jscomp$146$$], null);
  $G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$, 0, null);
  $G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$ = $APP.$cljs$core$__destructure_map$$($G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$);
  var $text$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$, $APP.$cljs$cst$395$text$$), $attribution$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$, $cljs$cst$921$attribution$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$ = function() {
    return {className:"border-l-2 border-white/20 pl-6 my-8", children:[function() {
      var $G__88730$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:$text$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88730$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88730$$);
    }(), function() {
      var $G__88740$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$otp$styles$label_muted$$]))), children:"— " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($attribution$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__88740$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__88740$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__88710_map__88674_map__88674__$1_props__41632__auto__$jscomp$146_vec__88669$$);
};
$otp$pages$landing$in_minor_keys$curator_card$$ = function($G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$, $maybe_ref__41633__auto__$jscomp$147$$) {
  $G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$), $maybe_ref__41633__auto__$jscomp$147$$], null);
  $G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$, 0, null);
  $G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$ = $APP.$cljs$core$__destructure_map$$($G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$);
  var $visible_QMARK_$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$, $cljs$cst$920$visible_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $tag_style$jscomp$2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$916$boxDecorationBreak$$, "clone", $cljs$cst$917$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$ = function() {
    return {className:"sm:flex sm:gap-8 sm:items-start mb-10", children:[function() {
      var $G__88803_G__88807$jscomp$inline_4109$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/koyo.png", "imgix-fit":"crop", "aspect-ratio":1, "active?":$visible_QMARK_$jscomp$8$$};
      $G__88803_G__88807$jscomp$inline_4109$$ = {className:"float-left mr-4 mb-2 sm:float-none sm:mr-0 sm:mb-0\n               w-24 aspect-square sm:w-40\n               flex-shrink-0 rounded-sm overflow-hidden", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__88803_G__88807$jscomp$inline_4109$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, 
      $G__88803_G__88807$jscomp$inline_4109$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88803_G__88807$jscomp$inline_4109$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88803_G__88807$jscomp$inline_4109$$);
    }(), function() {
      var $G__88812$$ = function() {
        return {className:"sm:flex-1 sm:min-w-0", children:[function() {
          var $G__88816_JSCompiler_temp_const$jscomp$inline_4111$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_name$$, "mb-1"])));
          var $G__88822$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-slate-900/90 dark:bg-white/10 px-2 py-0.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($tag_style$jscomp$2$$), children:"Koyo Kouoh"};
          $G__88822$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88822$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88822$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112$$);
          $G__88816_JSCompiler_temp_const$jscomp$inline_4111$$ = {className:$G__88816_JSCompiler_temp_const$jscomp$inline_4111$$, children:$G__88822$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88816_JSCompiler_temp_const$jscomp$inline_4111$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88816_JSCompiler_temp_const$jscomp$inline_4111$$);
        }(), function() {
          var $G__88826$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$person_role$$, "mb-3"]))), children:"Curator, 61st Biennale Arte"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88826$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88826$$);
        }(), function() {
          var $G__88850$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$]))), children:"The curatorial statement for the 61st International Art Exhibition — La Biennale di Venezia — invites us to listen to the minor keys: the quiet tones, the lower frequencies, the persistent signals of earth and life."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88850$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88850$$);
        }(), function() {
          var $G__88861$$ = {className:"clear-both sm:hidden"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88861$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88861$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88812$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88812$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88799_map__88793_map__88793__$1_props__41632__auto__$jscomp$147_vec__88790$$);
};
$otp$pages$landing$in_minor_keys$preview$$ = function($G__88882_props__41632__auto__$jscomp$148_vec__88878$$) {
  $APP.$helix$core$extract_cljs_props$$($G__88882_props__41632__auto__$jscomp$148_vec__88878$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$28$$ = $APP.$helix$hooks$use_ref$$("imk-preview-ref");
  $G__88882_props__41632__auto__$jscomp$148_vec__88878$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$28$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88882_props__41632__auto__$jscomp$148_vec__88878$$, 0, null);
  var $visible_QMARK_$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88882_props__41632__auto__$jscomp$148_vec__88878$$, 1, null);
  $G__88882_props__41632__auto__$jscomp$148_vec__88878$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$28$$, children:[function() {
      var $G__88886$$ = {"visible?":$visible_QMARK_$jscomp$9$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$in_minor_keys$curator_card$$, $G__88886$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$in_minor_keys$curator_card$$, $G__88886$$);
    }(), function() {
      var $G__88890$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__88894$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88894$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88894$$);
        }(), function() {
          var $G__88898$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88898$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88898$$);
        }(), function() {
          var $G__88903$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88903$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88903$$);
        }(), function() {
          var $G__88907$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88907$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88907$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88890$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88890$$);
    }(), function() {
      var $G__88911$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88911$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88911$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88882_props__41632__auto__$jscomp$148_vec__88878$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88882_props__41632__auto__$jscomp$148_vec__88878$$);
};
$otp$pages$landing$in_minor_keys$details$$ = function($G__89034_props__41632__auto__$jscomp$149_vec__89028$$) {
  $APP.$helix$core$extract_cljs_props$$($G__89034_props__41632__auto__$jscomp$149_vec__89028$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$29$$ = $APP.$helix$hooks$use_ref$$("imk-details-ref");
  $G__89034_props__41632__auto__$jscomp$149_vec__89028$$ = $APP.$otp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$29$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89034_props__41632__auto__$jscomp$149_vec__89028$$, 0, null);
  var $visible_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89034_props__41632__auto__$jscomp$149_vec__89028$$, 1, null);
  $G__89034_props__41632__auto__$jscomp$149_vec__89028$$ = function() {
    return {className:"px-4", ref:$ref$jscomp$29$$, children:[function() {
      var $G__89044$$ = {"visible?":$visible_QMARK_$jscomp$10$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$in_minor_keys$curator_card$$, $G__89044$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$in_minor_keys$curator_card$$, $G__89044$$);
    }(), function() {
      var $G__89052$$ = function() {
        return {className:"text-center my-10 space-y-1", children:[function() {
          var $G__89056$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Take a deep breath]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89056$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89056$$);
        }(), function() {
          var $G__89061$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Exhale]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89061$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89061$$);
        }(), function() {
          var $G__89065$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Drop your shoulders]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89065$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89065$$);
        }(), function() {
          var $G__89069$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "italic"]))), children:"[Close your eyes]"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89069$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89069$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89052$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89052$$);
    }(), function() {
      var $G__89073$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"This is an invitation to encounter these words in the immediate physical, meteorological, ambient, and karmic conditions in which they meet you. To shift to a slower gear and tune in to the frequencies of the minor keys. Because, though often lost in the anxious cacophony of the present chaos raging through the world, the music continues. The songs of those producing beauty in spite of tragedy, the tunes of the fugitives recovering from the ruins, the harmonies of those repairing wounds and worlds."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89073$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89073$$);
    }(), function() {
      var $G__89078$$ = {text:"There is a reason, after all, that some people wish to colonize the moon, and others dance before it as an ancient friend.", attribution:"James Baldwin, 1972"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$in_minor_keys$pull_quote$$, $G__89078$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$in_minor_keys$pull_quote$$, $G__89078$$);
    }(), function() {
      var $G__89082$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The minor key, in music, alludes both to the structure of a song and to its emotional effects. It is a rich idea, so rich that it quickly overflows its technical definition and spills with metaphor. It summons moods, the blues, the call-and-response, the morna, the second line, the lament, the allegory, the whisper."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89082$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89082$$);
    }(), function() {
      var $G__89086$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The minor keys refuse orchestral bombast and goose-step military marches and come alive in the quiet tones, the lower frequencies, the hums, the consolations of poetry, all portals of improvisation to the elsewhere and the otherwise. The minor keys ask for listening that calls on the emotions and sustains them in return."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89086$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89086$$);
    }(), function() {
      var $G__89090$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The minor keys are also the small islands, worlds amid oceans with distinct and endlessly rich ecosystems, social lives that are articulated, for better and worse, within much larger political forms and ecological stakes. Here, the evocation of the key and the island extends to an archipelago of oases: gardens, courtyards, compounds, lofts, dance floors — the other worlds that artists make, the intimate and convivial universes that refresh and sustain even in terrible times; indeed, especially in terrible times."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89090$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89090$$);
    }(), function() {
      var $G__89094$$ = {text:"Look at the creole garden, you put all species on such a little lick of land: avocados, lemons, yams, sugarcanes… plus thirty or forty other species on this bit of land that doesn’t go more than fifty feet up the side of the hill, they protect each other. In the great Circle, everything is in everything else.", attribution:"Édouard Glissant, 1993"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$in_minor_keys$pull_quote$$, $G__89094$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$in_minor_keys$pull_quote$$, $G__89094$$);
    }(), function() {
      var $G__89098$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"These are the cues for an exhibition; an exhibition tuned in to the minor keys; an exhibition that invites listening to the persistent signals of earth and life, connecting to soul frequencies. If, in music, the minor keys are often associated with strangeness, melancholy and sorrow, here their joy, solace, hope, and transcendence manifest as well."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89098$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89098$$);
    }(), function() {
      var $G__89102$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"In the minor keys, sound and sensation are grounding, they hold the cadences, melodies, and silences of resonant worlds that gather and create together a polyphonous assembly of art, convening and communing in convivial collectivity, beaming across the void of alienation and the crackle of conflict."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89102$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89102$$);
    }(), function() {
      var $G__89106$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The 61st edition of the Biennale Arte is grounded in a deep belief in artists as the vital interpreters of the social and psychic condition and catalysts of new relations and possibilities."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89106$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89106$$);
    }(), function() {
      var $G__89110$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The exhibition’s composition is formed by artistic practices that open portals, that refresh and nourish, that prompt relation and relationship, that advance concept and form through networks and schools — understood freely and informally."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89110$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89110$$);
    }(), function() {
      var $G__89114$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The intended effect scrambles cohesion and dissonance in the manner of a free-jazz ensemble, or perhaps, at the scale of the Biennale Arte, a festival of ensembles with a common premise: that poetics liberate and people make beauty together."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89114$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89114$$);
    }(), function() {
      var $G__89119$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"Through relation, sharing, and transcendence, the artists and practices that operate in this spirit, like jazz, across methods, scales, senses and forms, propose to visitors an exhibitional experience that is more sensory than didactic, renewing rather than exhausting, and fortifying for the work ahead."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89119$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89119$$);
    }(), function() {
      var $G__89127$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"Through a visual and meditative procession, the exhibition prompts all senses to interconnect and meander from one universe to the other, rendering visible the possibilities that reside in the in-between spaces and beyond the portals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89127$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89127$$);
    }(), function() {
      var $G__89131$$ = {text:"…there is no choice but to tune in like jazzmen to these imperative mutations. The jazzman constantly meditates on the unpredictable, stands within it according to the laws of polyrhythm, and improvises breathtaking moments. We small-island Caribbeans are not ready, but we have this resource. The change will have to be so profound that we will no doubt have to add to the knowledge of jazz, the old totemisms, animisms, analogisms, and other metaphysics too summarily discarded. These old-world poems are already precious scores.", 
      attribution:"Patrick Chamoiseau, 2023"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$in_minor_keys$pull_quote$$, $G__89131$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$in_minor_keys$pull_quote$$, $G__89131$$);
    }(), function() {
      var $G__89136$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"In this spirit, the international exhibition of the 61st Biennale Arte intends neither a litany of commentary on world events, nor an inattention or escape from compounding and continuous intersecting crises. Rather, it proposes a radical reconnection with art’s natural habitat and role in society: that is the emotional, the visual, the sensory, the affective, the subjective."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89136$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89136$$);
    }(), function() {
      var $G__89140$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"In Minor Keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect, and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89140$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89140$$);
    }(), function() {
      var $G__89146$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"After all, it is clear by now that the enduring time of capital and empire maligned local, Indigenous and terrestrial knowledges as chimeric, and dismissed co-constitutive artistic practices as artisanal, intended for decoration or devotional rituals."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89146$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89146$$);
    }(), function() {
      var $G__89152$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The ‘civilizing mission’ flattens all with condescending contempt, and in the contemporary era entire societies and ecologies are regarded as collateral damage in the headstrong pursuit of growth supported by ruthlessness and greed. In refusing the spectacle of horror, the time has come to listen to the minor keys, to tune in sotto voce to the whispers, to the lower frequencies; to find the oases, the islands, where the dignity of all living beings is safeguarded."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89152$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89152$$);
    }(), function() {
      var $G__89162$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The exhibition posits that such radical shifts are taking place — indeed, have been underway all along — in the minor keys, and the artists, poets, performers, and filmmakers whom the exhibition will convene are grounded in their commitments to realizing them. Artists are channels to and between the minor keys and listening to, rather than speaking for them is at the core of the curatorial conceit."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89162$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89162$$);
    }(), function() {
      var $G__89170$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"The exhibition In Minor Keys stands as a collective score composed together with artists who have built universes of imagination. Artists who work at the boundaries of form, and whose practices can be thought of as intricate melodies to be heard both collectively and on their own terms. These are artists whose practices seamlessly bleed into society."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89170$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89170$$);
    }(), function() {
      var $G__89176$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:"Artists who accommodate daily life as part of a logical and aesthetically consistent relation of parts. Artists who are exceedingly generous and hospitable to life."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89176$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89176$$);
    }(), function() {
      var $G__89184$$ = {text:"In our myths, in our songs, that’s where the seeds are. It is not possible to constantly hone on the crisis. You have to have the love and you have to have the magic, that’s also life.", attribution:"Toni Morrison, 1977"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$in_minor_keys$pull_quote$$, $G__89184$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$in_minor_keys$pull_quote$$, $G__89184$$);
    }(), function() {
      var $G__89194$$ = function() {
        return {className:"mt-12 mb-6 border-t border-white/10 pt-10", children:[function() {
          var $G__89202$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$heading_section$$, "mb-6"]))), children:"The Studio — In Minor Keys"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__89202$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__89202$$);
        }(), function() {
          var $G__89210_JSCompiler_temp_const$jscomp$inline_4115$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
          var $G__89220$jscomp$inline_4117_JSCompiler_inline_result$jscomp$inline_4116$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
          $G__89220$jscomp$inline_4117_JSCompiler_inline_result$jscomp$inline_4116$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89220$jscomp$inline_4117_JSCompiler_inline_result$jscomp$inline_4116$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89220$jscomp$inline_4117_JSCompiler_inline_result$jscomp$inline_4116$$);
          $G__89210_JSCompiler_temp_const$jscomp$inline_4115$$ = {className:$G__89210_JSCompiler_temp_const$jscomp$inline_4115$$, children:["Zadik Zadikian’s ", $G__89220$jscomp$inline_4117_JSCompiler_inline_result$jscomp$inline_4116$$, " is a practice tuned precisely to these frequencies. In a pavilion where the brick — the most elementary building unit, unchanged for eleven millennia — is cast, stacked, disassembled, and reassembled over six months, simplicity becomes the method and the meaning."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89210_JSCompiler_temp_const$jscomp$inline_4115$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__89210_JSCompiler_temp_const$jscomp$inline_4115$$);
        }(), function() {
          var $G__89228$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__89234$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Doing the work."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89234$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89234$$);
            }(), " The minor keys ask for sustained attention, not spectacle. In ", function() {
              var $G__89242$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89242$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89242$$);
            }(), ", the act of making is neither performed nor concealed. Plaster is mixed, forms are poured, bricks emerge. Day after day, the labor itself is the statement — a refusal of the accelerated and the disposable in favor of the deliberate and the enduring."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89228$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__89228$$);
        }(), function() {
          var $G__89250$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__89254$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Making simple things."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89254$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89254$$);
            }(), " Each brick is humble. It carries no narrative, bears no symbol. Like the creole garden where thirty species protect each other on a lick of land, the individual unit is modest. Its power lives not in what it represents but in what it ", function() {
              var $G__89266$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"is"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89266$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89266$$);
            }(), " — material presence, weight, color, surface."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89250$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__89250$$);
        }(), function() {
          var $G__89278_JSCompiler_temp_const$jscomp$inline_4119$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
          var $G__89292$jscomp$inline_4121_JSCompiler_inline_result$jscomp$inline_4120$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Higher-order structures from simplicity."};
          $G__89292$jscomp$inline_4121_JSCompiler_inline_result$jscomp$inline_4120$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89292$jscomp$inline_4121_JSCompiler_inline_result$jscomp$inline_4120$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89292$jscomp$inline_4121_JSCompiler_inline_result$jscomp$inline_4120$$);
          $G__89278_JSCompiler_temp_const$jscomp$inline_4119$$ = {className:$G__89278_JSCompiler_temp_const$jscomp$inline_4119$$, children:[$G__89292$jscomp$inline_4121_JSCompiler_inline_result$jscomp$inline_4120$$, " When stacked, these bricks become something else entirely. Composite forms emerge — not designed from above but discovered through assembly. The whole exceeds its parts, not through complexity of component, but through the patient, improvisational logic of combination. Like polyrhythm in jazz, coherence arises from the interplay of simple, repeating elements."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89278_JSCompiler_temp_const$jscomp$inline_4119$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__89278_JSCompiler_temp_const$jscomp$inline_4119$$);
        }(), function() {
          var $G__89296_JSCompiler_temp_const$jscomp$inline_4123$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"])));
          var $G__89300$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Simplicity is not ease."};
          $G__89300$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89300$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89300$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124$$);
          $G__89296_JSCompiler_temp_const$jscomp$inline_4123$$ = {className:$G__89296_JSCompiler_temp_const$jscomp$inline_4123$$, children:[$G__89300$jscomp$inline_4125_JSCompiler_inline_result$jscomp$inline_4124$$, " To cast a perfect brick, to find the right pigment, to know which form belongs beside another — this is the discipline beneath the quiet surface. The minor keys sound gentle, but they demand the deepest listening. The studio is where that discipline lives: not in reaching for the obvious, but in reaching for the precise."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89296_JSCompiler_temp_const$jscomp$inline_4123$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__89296_JSCompiler_temp_const$jscomp$inline_4123$$);
        }(), function() {
          var $G__89305$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_base$$, "mb-6"]))), children:[function() {
              var $G__89309$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Reaching for the right tool."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89309$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89309$$);
            }(), " Zadikian does not reach for what is always close at hand. He reaches for what is right. The plaster, the mold, the trowel — each chosen not for convenience but for fidelity to the form. In this way, ", function() {
              var $G__89314$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89314$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89314$$);
            }(), " enacts the curatorial premise of In Minor Keys: that beauty is made together, through relation, through the handmade, through the refusal to shortcut the work that matters."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89305$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__89305$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89194$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89194$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89034_props__41632__auto__$jscomp$149_vec__89028$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89034_props__41632__auto__$jscomp$149_vec__89028$$);
};
$otp$pages$landing$in_minor_keys$in_minor_keys$$ = function($G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$, $G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$) {
  $G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$), $G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$], null);
  $G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$, 0, null);
  var $map__89341__$1_title$jscomp$39$$ = $APP.$cljs$core$__destructure_map$$($G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$);
  $G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__89341__$1_title$jscomp$39$$, $APP.$cljs$cst$286$id$$);
  $G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__89341__$1_title$jscomp$39$$, $APP.$cljs$cst$759$idx$$);
  var $subtitle$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__89341__$1_title$jscomp$39$$, $APP.$cljs$cst$772$subtitle$$);
  $map__89341__$1_title$jscomp$39$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__89341__$1_title$jscomp$39$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$ = {idx:$G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$, "section-hint":$subtitle$jscomp$9$$, title:$map__89341__$1_title$jscomp$39$$, "expand-button-label":"Read full statement", "preview-text":$otp$pages$landing$in_minor_keys$preview$$, "full-text":$otp$pages$landing$in_minor_keys$details$$};
  $G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$);
  $G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$ = {id:$G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$, children:$G__89349$jscomp$inline_4128_JSCompiler_inline_result$jscomp$inline_4127_idx$jscomp$77_maybe_ref__41633__auto__$jscomp$150$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89344_id$jscomp$100_map__89341_props__41632__auto__$jscomp$150_vec__89338$$);
};
$otp$pages$landing$venue$preview$$ = function($G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$, $maybe_ref__41633__auto__$jscomp$151$$) {
  $G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$), $maybe_ref__41633__auto__$jscomp$151$$], null);
  $G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$ = function() {
    return {className:"px-4", children:function() {
      var $G__63066$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-base", "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
          var $G__63070$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"two sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63070$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63070$$);
        }(), " within the historic ", function() {
          var $G__63075$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Arsenale of Venice"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63075$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63075$$);
        }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
          var $G__63079$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63079$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63079$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63066$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63066$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63060_map__63054_props__41632__auto__$jscomp$151_vec__63051$$);
};
$otp$pages$landing$venue$details$$ = function($G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$, $maybe_ref__41633__auto__$jscomp$152$$) {
  $G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$), $maybe_ref__41633__auto__$jscomp$152$$], null);
  $G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$5$$ = $APP.$otp$hooks$use_media_query$use_touch_enabled$$();
  $G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$ = function() {
    return {className:"space-y-8", children:[function() {
      var $G__63108$$ = function() {
        return {className:"px-4", children:function() {
          var $G__63112$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-base", "mb-6"]))), children:["The Armenia Pavilion 2026 is located across ", function() {
              var $G__63118$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"two sites"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63118$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63118$$);
            }(), " within the historic ", function() {
              var $G__63122$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"Arsenale of Venice"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63122$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63122$$);
            }(), "—a grand interior studio and a prominent exterior crossing. ", "Together they form a single spatial constellation: ", function() {
              var $G__63126$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share and exhibit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63126$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63126$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63112$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__63112$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63108$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63108$$);
    }(), function() {
      var $G__63131$$ = function() {
        return {className:"my-8", children:[function() {
          var $G__63135$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$5$$, "initial-view":$APP.$otp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$otp$pages$venue$map_config$ant_paths$$, layers:$APP.$otp$pages$venue$map_config$layers$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$map$mapbox_map$$, $G__63135$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$map$mapbox_map$$, $G__63135$$);
        }(), function() {
          var $G__63139$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion — approximately 8 minutes"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63139$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63139$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63131$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63131$$);
    }(), function() {
      var $G__63143$$ = function() {
        return {className:"px-4 flex flex-col sm:flex-row gap-4", children:[function() {
          var $G__63147$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__63147$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__63147$$);
        }(), function() {
          var $G__63151$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
          children:"Open in Maps ↗"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__63151$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__63151$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63143$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63143$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63104_map__63101_props__41632__auto__$jscomp$152_vec__63098$$);
};
$otp$pages$landing$venue$location_section$$ = function($G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$, $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$) {
  $G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$), $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$], null);
  $G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$, 0, null);
  $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$ = $APP.$cljs$core$__destructure_map$$($G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$);
  $G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$, $APP.$cljs$cst$286$id$$);
  $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$ = {title:$APP.$cljs$core$truth_$$($G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$) ? $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$ : "The Venue", "expand-button-label":"Explore the venue", 
  "preview-text":$otp$pages$landing$venue$preview$$, "full-text":$otp$pages$landing$venue$details$$};
  $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$);
  $G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$ = {id:$G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$, children:$G__63167$jscomp$inline_4245_JSCompiler_inline_result$jscomp$inline_4244_map__63160__$1_maybe_ref__41633__auto__$jscomp$153_title$jscomp$40$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63162_id$jscomp$101_map__63160_props__41632__auto__$jscomp$153_vec__63157$$);
};
$otp$pages$landing$hero$mobile_hero_section$$ = function($G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$) {
  $APP.$helix$core$extract_cljs_props$$($G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
  $G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$ = $otp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$773$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$, 0, null);
  var $is_active_QMARK_$jscomp$10$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$, 1, null);
  $G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$ = function() {
    return {className:"w-full h-screen bg-black", children:function() {
      var $G__88758$$ = function() {
        return {"img-src":"https://otp-media.imgix.net/jewelry/DSC02716.jpg", "active?":$is_active_QMARK_$jscomp$10$$, children:function() {
          var $G__88763$$ = function() {
            return {className:"absolute inset-0 flex items-center overflow-hidden", children:function() {
              var $G__88767$$ = function() {
                return {className:"font-ocr font-normal \n                             ml-[15%] sm:ml-[40%] md:ml-[30%] lg:ml-[25%]\n                             text-8xl md:text-11xl \n                             leading-[1em]\n                             text-amber-100/90 \n                             lowercase whitespace-nowrap", children:[function() {
                  var $G__88771$$ = {className:"line-through decoration-24", children:"rejection"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88771$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88771$$);
                }(), function() {
                  var $G__88775$$ = {};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("br", $G__88775$$) : $APP.$helix$core$jsx$$.call(null, "br", $G__88775$$);
                }(), "of", function() {
                  var $G__88780$$ = {};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("br", $G__88780$$) : $APP.$helix$core$jsx$$.call(null, "br", $G__88780$$);
                }(), "that", function() {
                  var $G__88785$$ = {};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("br", $G__88785$$) : $APP.$helix$core$jsx$$.call(null, "br", $G__88785$$);
                }(), function() {
                  var $G__88789$$ = {className:"mix-blend-overlay", children:"which"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88789$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88789$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88767$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__88767$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88763$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88763$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__88758$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__88758$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88753_outer_ctx$jscomp$1_props__41632__auto__$jscomp$154_vec__88749$$);
};
$otp$pages$landing$teaser$teaser_section$$ = function($G__63501_props__41632__auto__$jscomp$155_vec__63495$$) {
  $APP.$helix$core$extract_cljs_props$$($G__63501_props__41632__auto__$jscomp$155_vec__63495$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $outer_ref$$ = $APP.$helix$hooks$use_ref$$("outer-ref");
  $G__63501_props__41632__auto__$jscomp$155_vec__63495$$ = $otp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($outer_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$773$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63501_props__41632__auto__$jscomp$155_vec__63495$$, 0, null);
  var $is_active_QMARK_$jscomp$11$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__63501_props__41632__auto__$jscomp$155_vec__63495$$, 1, null), $label_class$jscomp$1$$ = $APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-[10px] uppercase tracking-[0.2em]", "text-amber-600  dark:text-amber-300"])), $clone_style$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$916$boxDecorationBreak$$, 
  "clone", $cljs$cst$917$WebkitBoxDecorationBreak$$, "clone"], null);
  $G__63501_props__41632__auto__$jscomp$155_vec__63495$$ = function() {
    return {id:"teaser", ref:$outer_ref$$, className:"relative w-full min-h-screen overflow-hidden", children:[function() {
      var $G__63507_G__63511$jscomp$inline_4133$$ = {"allow-audio?":!1, "playback-id":"Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00", "should-play?":$is_active_QMARK_$jscomp$11$$};
      $G__63507_G__63511$jscomp$inline_4133$$ = {className:"absolute inset-0", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$teaser$lazy_video$$, $G__63507_G__63511$jscomp$inline_4133$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$teaser$lazy_video$$, $G__63507_G__63511$jscomp$inline_4133$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63507_G__63511$jscomp$inline_4133$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63507_G__63511$jscomp$inline_4133$$);
    }(), function() {
      var $G__63517$$ = {className:"absolute inset-0 z-[1] pointer-events-none", style:{background:$APP.$helix$impl$props$__GT_js$$("linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 50%)")}};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63517$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63517$$);
    }(), function() {
      var $G__63525$$ = function() {
        return {className:"relative z-10 flex flex-col justify-center\n               min-h-screen px-6 sm:px-12 lg:px-20\n               py-16 sm:py-24\n               max-w-4xl", children:[function() {
          var $G__63529_JSCompiler_temp_const$jscomp$inline_4135$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-bold", "uppercase tracking-wider\n                leading-relaxed text-4xl sm:text-5xl lg:text-6xl", "text-slate-950  dark:text-white", "mb-6"])));
          var $G__63534$jscomp$inline_4137_JSCompiler_inline_result$jscomp$inline_4136$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/70 px-3 py-1.5 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"The Studio"};
          $G__63534$jscomp$inline_4137_JSCompiler_inline_result$jscomp$inline_4136$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63534$jscomp$inline_4137_JSCompiler_inline_result$jscomp$inline_4136$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63534$jscomp$inline_4137_JSCompiler_inline_result$jscomp$inline_4136$$);
          $G__63529_JSCompiler_temp_const$jscomp$inline_4135$$ = {className:$G__63529_JSCompiler_temp_const$jscomp$inline_4135$$, children:$G__63534$jscomp$inline_4137_JSCompiler_inline_result$jscomp$inline_4136$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__63529_JSCompiler_temp_const$jscomp$inline_4135$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__63529_JSCompiler_temp_const$jscomp$inline_4135$$);
        }(), function() {
          var $G__63546_JSCompiler_temp_const$jscomp$inline_4139$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-sm sm:text-base uppercase tracking-[0.15em]\n                leading-loose text-white/90 mb-8 max-w-xl"])));
          var $G__63550$jscomp$inline_4141_JSCompiler_inline_result$jscomp$inline_4140$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/50 px-3 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"A living studio at the heart of the Venice Biennale"};
          $G__63550$jscomp$inline_4141_JSCompiler_inline_result$jscomp$inline_4140$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63550$jscomp$inline_4141_JSCompiler_inline_result$jscomp$inline_4140$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63550$jscomp$inline_4141_JSCompiler_inline_result$jscomp$inline_4140$$);
          $G__63546_JSCompiler_temp_const$jscomp$inline_4139$$ = {className:$G__63546_JSCompiler_temp_const$jscomp$inline_4139$$, children:$G__63550$jscomp$inline_4141_JSCompiler_inline_result$jscomp$inline_4140$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63546_JSCompiler_temp_const$jscomp$inline_4139$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63546_JSCompiler_temp_const$jscomp$inline_4139$$);
        }(), function() {
          var $G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-body", "text-base sm:text-lg leading-relaxed text-white/90"])));
          var $G__63571$jscomp$inline_4294_JSCompiler_inline_result$jscomp$inline_4293$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare—casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself."};
          $G__63571$jscomp$inline_4294_JSCompiler_inline_result$jscomp$inline_4293$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63571$jscomp$inline_4294_JSCompiler_inline_result$jscomp$inline_4293$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63571$jscomp$inline_4294_JSCompiler_inline_result$jscomp$inline_4293$$);
          $G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$ = {className:$G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$, children:$G__63571$jscomp$inline_4294_JSCompiler_inline_result$jscomp$inline_4293$$};
          $G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$ = {className:"space-y-3 mb-10 max-w-lg", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__63557_G__63566$jscomp$inline_4291_JSCompiler_temp_const$jscomp$inline_4292$$);
        }(), function() {
          var $G__63584$$ = function() {
            return {className:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10", children:[function() {
              var $G__63594$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__63602$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Opening"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63602$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63602$$);
                }(), function() {
                  var $G__63608_JSCompiler_temp_const$jscomp$inline_4147$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__63616$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"9 May – 22 November 2026"};
                  $G__63616$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63616$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63616$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$);
                  $G__63608_JSCompiler_temp_const$jscomp$inline_4147$$ = {className:$G__63608_JSCompiler_temp_const$jscomp$inline_4147$$, children:$G__63616$jscomp$inline_4149_JSCompiler_inline_result$jscomp$inline_4148$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63608_JSCompiler_temp_const$jscomp$inline_4147$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63608_JSCompiler_temp_const$jscomp$inline_4147$$);
                }(), function() {
                  var $G__63626$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-medium", "text-xs", "text-amber-600/80 dark:text-amber-300/80", "mt-1"]))), children:"Preview: 6, 7, 8 May"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63626$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63626$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63594$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63594$$);
            }(), function() {
              var $G__63631$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__63637$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Venue"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63637$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63637$$);
                }(), function() {
                  var $G__63643_JSCompiler_temp_const$jscomp$inline_4151$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90 hover:text-white\n                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60\n                      transition-colors block whitespace-nowrap"])));
                  var $G__63647$jscomp$inline_4153_JSCompiler_inline_result$jscomp$inline_4152$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Arsenale Militare, Venice"};
                  $G__63647$jscomp$inline_4153_JSCompiler_inline_result$jscomp$inline_4152$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63647$jscomp$inline_4153_JSCompiler_inline_result$jscomp$inline_4152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63647$jscomp$inline_4153_JSCompiler_inline_result$jscomp$inline_4152$$);
                  $G__63643_JSCompiler_temp_const$jscomp$inline_4151$$ = {href:"https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7", target:"_blank", rel:"noopener noreferrer", className:$G__63643_JSCompiler_temp_const$jscomp$inline_4151$$, children:$G__63647$jscomp$inline_4153_JSCompiler_inline_result$jscomp$inline_4152$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__63643_JSCompiler_temp_const$jscomp$inline_4151$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__63643_JSCompiler_temp_const$jscomp$inline_4151$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63631$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63631$$);
            }(), function() {
              var $G__63651$$ = function() {
                return {className:"space-y-1", children:[function() {
                  var $G__63667$$ = {className:$APP.$helix$impl$props$normalize_class$$($label_class$jscomp$1$$), children:"Pavilion"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63667$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63667$$);
                }(), function() {
                  var $G__63683_JSCompiler_temp_const$jscomp$inline_4155$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "text-xs sm:text-sm text-white/90"])));
                  var $G__63688$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$ = {className:$APP.$helix$impl$props$normalize_class$$("bg-black/60 px-2 py-1 inline decoration-clone"), style:$APP.$helix$impl$props$dom_style$$($clone_style$$), children:"Republic of Armenia"};
                  $G__63688$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__63688$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__63688$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$);
                  $G__63683_JSCompiler_temp_const$jscomp$inline_4155$$ = {className:$G__63683_JSCompiler_temp_const$jscomp$inline_4155$$, children:$G__63688$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__63683_JSCompiler_temp_const$jscomp$inline_4155$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__63683_JSCompiler_temp_const$jscomp$inline_4155$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63651$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63651$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63584$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63584$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63525$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63525$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__63501_props__41632__auto__$jscomp$155_vec__63495$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__63501_props__41632__auto__$jscomp$155_vec__63495$$);
};
$APP.$otp$pages$landing$page$landing_view$$ = function($G__89508_container_ref$jscomp$4_props__41632__auto__$jscomp$156$$) {
  $APP.$helix$core$extract_cljs_props$$($G__89508_container_ref$jscomp$4_props__41632__auto__$jscomp$156$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89508_container_ref$jscomp$4_props__41632__auto__$jscomp$156$$ = $APP.$helix$hooks$use_ref$$("container-ref");
  $APP.$otp$hooks$use_media_query$use_touch_enabled$$();
  var $JSCompiler_temp_const$jscomp$inline_4252$$ = $APP.$helix$impl$props$normalize_class$$("overflow-x-hidden grey-grad " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100"));
  var $G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$ = {};
  $G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$ = {"section-id":"hero", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$landing$hero$mobile_hero_section$$, $G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$landing$hero$mobile_hero_section$$, $G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$)};
  $G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$otp$ui$section$section$$, $G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$, "hero") : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section$section$$, $G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$, 
  "hero");
  $G__89508_container_ref$jscomp$4_props__41632__auto__$jscomp$156$$ = {ref:$G__89508_container_ref$jscomp$4_props__41632__auto__$jscomp$156$$, className:$JSCompiler_temp_const$jscomp$inline_4252$$, children:$G__89512$jscomp$inline_4254_G__89517$jscomp$inline_4255_JSCompiler_inline_result$jscomp$inline_4253$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89508_container_ref$jscomp$4_props__41632__auto__$jscomp$156$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89508_container_ref$jscomp$4_props__41632__auto__$jscomp$156$$);
};
$cljs$cst$920$visible_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "visible?", "visible?", 2129863715);
$cljs$cst$918$img$$ = new $APP.$cljs$core$Keyword$$(null, "img", "img", 1442687358);
$cljs$cst$916$boxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "boxDecorationBreak", "boxDecorationBreak", 826536500);
$cljs$cst$914$markers_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "markers?", "markers?", -2073688636);
$cljs$cst$917$WebkitBoxDecorationBreak$$ = new $APP.$cljs$core$Keyword$$(null, "WebkitBoxDecorationBreak", "WebkitBoxDecorationBreak", 1903427859);
$cljs$cst$921$attribution$$ = new $APP.$cljs$core$Keyword$$(null, "attribution", "attribution", 1937239286);
$cljs$cst$919$bio$$ = new $APP.$cljs$core$Keyword$$(null, "bio", "bio", -331851886);
$cljs$cst$913$scroll_ref$$ = new $APP.$cljs$core$Keyword$$(null, "scroll-ref", "scroll-ref", -1108339867);
$cljs$cst$915$debug_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "debug?", "debug?", -1831756173);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("landing-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $otp$nav$logo$logo_nav$$, '(hooks/use-ref "comp-ref")(use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations comp-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target comp-ref, :on-to {:y 0}, :off-to {:y -250}, :is-on? is-active?})', null, null)), $APP.$helix$core$register_BANG_$$($otp$nav$logo$logo_nav$$, "otp.nav.logo/logo-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$landing$artist$artist_section$$, '(hooks/use-ref "artist-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$artist$artist_section$$, "otp.pages.landing.artist/artist-section"));
var $otp$pages$landing$curators$curators$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$800$role$$, "Curator", $cljs$cst$918$img$$, "https://atd-722658831.imgix.net/committee/tony.png", $cljs$cst$919$bio$$, "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator. Trained at the Royal College of Art in London, he moved to New York in 1969 and opened the Tony Shafrazi Gallery in 1979, championing Jean-Michel Basquiat, Keith Haring, and Kenny Scharf alongside Picasso, Francis Bacon, and Warhol. He first met Zadik Zadikian while the artist was working with Richard Serra, and has supported his work for decades."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$800$role$$, "Curator", $cljs$cst$918$img$$, "https://atd-722658831.imgix.net/committee/tina.png", $cljs$cst$919$bio$$, "Tina Chakarian is a curator based in Boston and Yerevan. Born in Beirut, she studied Visual Arts at UCLA and Tufts University. Since 2015, she has served as Commissioner and Development Director of the Armenian Pavilion at La Biennale di Venezia, playing a central role in shaping Armenia’s sustained presence on the global stage."], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$curators$curator_card$$, "", null, null) : (void 0).call(null, $otp$pages$landing$curators$curator_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$curators$curator_card$$, 
"otp.pages.landing.curators/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$landing$curators$curators_section$$, '(hooks/use-ref "curators-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$curators$curators_section$$, "otp.pages.landing.curators/curators-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$in_minor_keys$pull_quote$$, "", null, null) : (void 0).call(null, $otp$pages$landing$in_minor_keys$pull_quote$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$in_minor_keys$pull_quote$$, 
"otp.pages.landing.in-minor-keys/pull-quote"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$in_minor_keys$curator_card$$, "", null, null) : (void 0).call(null, $otp$pages$landing$in_minor_keys$curator_card$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$landing$in_minor_keys$curator_card$$, "otp.pages.landing.in-minor-keys/curator-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$landing$in_minor_keys$preview$$, '(hooks/use-ref "imk-preview-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$in_minor_keys$preview$$, "otp.pages.landing.in-minor-keys/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$otp$pages$landing$in_minor_keys$details$$, '(hooks/use-ref "imk-details-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$in_minor_keys$details$$, "otp.pages.landing.in-minor-keys/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null) : (void 0).call(null, $otp$pages$landing$in_minor_keys$in_minor_keys$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$landing$in_minor_keys$in_minor_keys$$, "otp.pages.landing.in-minor-keys/in-minor-keys"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$venue$preview$$, "", null, null) : (void 0).call(null, $otp$pages$landing$venue$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$venue$preview$$, 
"otp.pages.landing.venue/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$venue$details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $otp$pages$landing$venue$details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$venue$details$$, "otp.pages.landing.venue/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$venue$location_section$$, "", null, null) : (void 0).call(null, $otp$pages$landing$venue$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$venue$location_section$$, 
"otp.pages.landing.venue/location-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null) : (void 0).call(null, 
$otp$pages$landing$hero$mobile_hero_section$$, '(hooks/use-ref "outer-ctx")(use-scroll-trigger outer-ctx {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$hero$mobile_hero_section$$, "otp.pages.landing.hero/mobile-hero-section"));
var $otp$pages$landing$teaser$lazy_video$$ = $APP.$otp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$otp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null) : (void 0).call(null, 
$otp$pages$landing$teaser$teaser_section$$, '(hooks/use-ref "outer-ref")(use-scroll-trigger outer-ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$landing$teaser$teaser_section$$, "otp.pages.landing.teaser/teaser-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$otp$pages$landing$page$landing_view$$, '(hooks/use-ref "container-ref")(use-touch-enabled)', null, null) : (void 0).call(null, $APP.$otp$pages$landing$page$landing_view$$, 
'(hooks/use-ref "container-ref")(use-touch-enabled)', null, null)), $APP.$helix$core$register_BANG_$$($APP.$otp$pages$landing$page$landing_view$$, "otp.pages.landing.page/landing-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);