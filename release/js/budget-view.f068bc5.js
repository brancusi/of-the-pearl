(function(){
'use strict';
var $otp$ui$icons$InformationCircle$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $otp$hooks$use_scroll_to$use_scroll_to_ref$$, $otp$pages$budget$committee$preview$$, $otp$pages$budget$committee$details$$, $otp$pages$budget$committee$committee_member_card$$, $otp$pages$budget$committee$committee_gallery$$, $otp$pages$budget$committee$committee$$, $otp$pages$budget$table$format_currency$$, $otp$pages$budget$table$sub_total_all_sections$$, 
$otp$pages$budget$table$total_section$$, $otp$pages$budget$table$pad_two_digits$$, $otp$pages$budget$table$detail_line_item$$, $otp$pages$budget$table$details__GT_render_items$$, $otp$pages$budget$table$section_line_item$$, $otp$pages$budget$table$budget_table$$, $otp$pages$budget$cost_breakdown$preview$$, $otp$pages$budget$cost_breakdown$details$$, $otp$pages$budget$cost_breakdown$footer$$, $otp$pages$budget$cost_breakdown$cost_breakdown$$, $otp$pages$budget$location$preview_text$$, $otp$pages$budget$location$preview$$, 
$otp$pages$budget$location$full_details$$, $otp$pages$budget$location$location_section$$, $otp$pages$budget$cash_flow$parse_date$$, $otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$format_currency$$, $otp$pages$budget$cash_flow$priority_tag_bg$$, $otp$pages$budget$cash_flow$priority_tag_text$$, $otp$pages$budget$cash_flow$priority_dot_classes$$, $otp$pages$budget$cash_flow$priority_amount_class$$, $otp$pages$budget$cash_flow$priority_label$$, $otp$pages$budget$cash_flow$group_by_month$$, 
$otp$pages$budget$cash_flow$month_rollups$$, $otp$pages$budget$cash_flow$status_classes$$, $otp$pages$budget$cash_flow$timeline_node$$, $otp$pages$budget$cash_flow$now_marker$$, $otp$pages$budget$cash_flow$month_header$$, $otp$pages$budget$cash_flow$month_summary_row$$, $otp$pages$budget$cash_flow$view_toggle$$, $otp$pages$budget$cash_flow$summary_header$$, $otp$pages$budget$cash_flow$cash_flow$$, $otp$pages$budget$non_profit$non_profit$$, $otp$pages$budget$sponsors$logo_card$$, $otp$pages$budget$sponsors$name_item$$, 
$otp$pages$budget$sponsors$tier_section$$, $otp$pages$budget$sponsors$sponsors_section$$, $otp$pages$budget$why_support$preview$$, $otp$pages$budget$why_support$details$$, $otp$pages$budget$why_support$why_support$$, $otp$pages$budget$section$section_link$$, $otp$pages$budget$section$header$$, $otp$pages$budget$section$budget_section$$, $cljs$cst$856$admin_apr_26$$, $cljs$cst$870$venice_sep_26$$, $cljs$cst$829$venice_sep_25$$, $cljs$cst$848$la_feb_26$$, $cljs$cst$858$venice_may_26$$, $cljs$cst$823$priority$$, 
$cljs$cst$903$accent$$, $cljs$cst$809$venue$$, $cljs$cst$852$la_mar_26$$, $cljs$cst$885$n_crit$$, $cljs$cst$874$admin_oct_26$$, $cljs$cst$906$supporter$$, $cljs$cst$834$admin_oct_25$$, $cljs$cst$861$venice_jun_26$$, $cljs$cst$888$has_now$$, $cljs$cst$812$the_studio$$, $cljs$cst$894$month$$, $cljs$cst$905$benefactor$$, $cljs$cst$836$la_nov_25$$, $cljs$cst$846$contingency_jan_26$$, $cljs$cst$864$venice_jul_26$$, $cljs$cst$884$entries$$, $cljs$cst$883$all_paid$$, $cljs$cst$824$normal$$, $cljs$cst$821$admin_jul_25$$, 
$cljs$cst$865$admin_jul_26$$, $cljs$cst$886$n_paid$$, $cljs$cst$817$documentation$$, $cljs$cst$828$contingency_aug_25$$, $cljs$cst$869$contingency_aug_26$$, $cljs$cst$818$debt_raised$$, $cljs$cst$862$admin_jun_26$$, $cljs$cst$806$expanded_items$$, $cljs$cst$897$tier$$, $cljs$cst$838$contingency_nov_25$$, $cljs$cst$878$contingency_nov_26$$, $cljs$cst$803$tax$$, $cljs$cst$813$logistics$$, $cljs$cst$859$admin_may_26$$, $cljs$cst$845$admin_jan_26$$, $cljs$cst$847$venice_feb_26$$, $cljs$cst$842$venice_jan_26$$, 
$cljs$cst$887$n_items$$, $cljs$cst$875$contingency_oct_26$$, $cljs$cst$835$contingency_oct_25$$, $cljs$cst$853$admin_mar_26$$, $cljs$cst$825$paid$$, $cljs$cst$801$details$$, $cljs$cst$879$venice_dec_26$$, $cljs$cst$851$venice_mar_26$$, $cljs$cst$904$order$$, $cljs$cst$849$admin_feb_26$$, $cljs$cst$857$contingency_apr_26$$, $cljs$cst$890$entry$$, $cljs$cst$880$admin_dec_26$$, $cljs$cst$840$admin_dec_25$$, $cljs$cst$808$item$$, $cljs$cst$877$admin_nov_26$$, $cljs$cst$837$admin_nov_25$$, $cljs$cst$822$due$$, 
$cljs$cst$807$description$$, $cljs$cst$843$critical$$, $cljs$cst$866$contingency_jul_26$$, $cljs$cst$826$contingency_jul_25$$, $cljs$cst$881$contingency_dec_26$$, $cljs$cst$841$contingency_dec_25$$, $cljs$cst$860$contingency_may_26$$, $cljs$cst$863$contingency_jun_26$$, $cljs$cst$800$amount$$, $cljs$cst$896$past_QMARK_$$, $cljs$cst$820$cash_flow_model$$, $cljs$cst$889$dot$$, $cljs$cst$892$expanded_QMARK_$$, $cljs$cst$805$set_expanded_items$$, $cljs$cst$802$rate$$, $cljs$cst$850$contingency_feb_26$$, 
$cljs$cst$815$marketing$$, $cljs$cst$811$la_prod$$, $cljs$cst$901$patron$$, $cljs$cst$882$fill$$, $cljs$cst$819$funds_raised$$, $cljs$cst$872$contingency_sep_26$$, $cljs$cst$832$contingency_sep_25$$, $cljs$cst$907$members$$, $cljs$cst$804$cost_data$$, $cljs$cst$876$venice_nov_26$$, $cljs$cst$891$rollup$$, $cljs$cst$902$individual$$, $cljs$cst$871$admin_sep_26$$, $cljs$cst$830$admin_sep_25$$, $cljs$cst$855$venice_apr_26$$, $cljs$cst$900$institution$$, $cljs$cst$899$logo$$, $cljs$cst$831$high$$, $cljs$cst$814$opening$$, 
$cljs$cst$908$anchor$$, $cljs$cst$810$admin$$, $cljs$cst$854$contingency_mar_26$$, $cljs$cst$873$venice_oct_26$$, $cljs$cst$833$venice_oct_25$$, $cljs$cst$895$now$$, $cljs$cst$867$venice_aug_26$$, $cljs$cst$868$admin_aug_26$$, $cljs$cst$827$admin_aug_25$$, $cljs$cst$898$founding_patron$$, $cljs$cst$839$la_dec_25$$, $cljs$cst$844$la_jan_26$$, $cljs$cst$816$publication$$, $cljs$cst$893$target_total$$;
$otp$ui$icons$InformationCircle$$ = function($G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$, $G__166937$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668_maybe_ref__41572__auto__$jscomp$7$$) {
  $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$), $G__166937$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668_maybe_ref__41572__auto__$jscomp$7$$], 
  null);
  $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$, 0, null);
  $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$ = $APP.$cljs$core$__destructure_map$$($G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$);
  $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$, $APP.$cljs$cst$67$class$$);
  $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$ = $APP.$helix$impl$props$normalize_class$$($G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$);
  $G__166937$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668_maybe_ref__41572__auto__$jscomp$7$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__166937$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668_maybe_ref__41572__auto__$jscomp$7$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__166937$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668_maybe_ref__41572__auto__$jscomp$7$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__166937$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668_maybe_ref__41572__auto__$jscomp$7$$);
  $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$, children:$G__166937$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668_maybe_ref__41572__auto__$jscomp$7$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__166932_JSCompiler_temp_const$jscomp$inline_3667_class$$jscomp$8_map__166930_map__166930__$1_props__41571__auto__$jscomp$7_vec__166927$$);
};
$cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($pred$jscomp$14$$, $coll$jscomp$728$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$seq$$($coll$jscomp$728$$);
    if ($JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$) {
      var $G__51749$jscomp$inline_2193_JSCompiler_inline_result$jscomp$434$$ = $APP.$cljs$core$first$$($JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$);
      $G__51749$jscomp$inline_2193_JSCompiler_inline_result$jscomp$434$$ = $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$($G__51749$jscomp$inline_2193_JSCompiler_inline_result$jscomp$434$$) : $pred$jscomp$14$$.call(null, $G__51749$jscomp$inline_2193_JSCompiler_inline_result$jscomp$434$$);
      $JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$truth_$$($G__51749$jscomp$inline_2193_JSCompiler_inline_result$jscomp$434$$) ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$), $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$14$$, $APP.$cljs$core$rest$$($JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$))) : null;
    } else {
      $JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$ = null;
    }
    return $JSCompiler_temp$jscomp$433_temp__5823__auto__$jscomp$22$$;
  }, null, null);
};
$cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($f$jscomp$297$$, $coll$jscomp$747$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $temp__5823__auto__$jscomp$28$$ = $APP.$cljs$core$seq$$($coll$jscomp$747$$);
    if ($temp__5823__auto__$jscomp$28$$) {
      var $fst$$ = $APP.$cljs$core$first$$($temp__5823__auto__$jscomp$28$$), $fv$$ = $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$($fst$$) : $f$jscomp$297$$.call(null, $fst$$), $run$$ = $APP.$cljs$core$cons$$($fst$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__51776_SHARP_$$) {
        return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($fv$$, $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$($p1__51776_SHARP_$$) : $f$jscomp$297$$.call(null, $p1__51776_SHARP_$$));
      }, $APP.$cljs$core$next$$($temp__5823__auto__$jscomp$28$$)));
      return $APP.$cljs$core$cons$$($run$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$297$$, new $APP.$cljs$core$LazySeq$$(null, function() {
        return $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$count$$($run$$), $temp__5823__auto__$jscomp$28$$);
      }, null, null)));
    }
    return null;
  }, null, null);
};
$otp$hooks$use_scroll_to$use_scroll_to_ref$$ = function() {
  var $G__55390$$ = function() {
    function $G__55445$$($ref$jscomp$9$$, $var_args$jscomp$375$$) {
      var $G__55446__i_p__55395$jscomp$1$$ = null;
      if (arguments.length > 1) {
        $G__55446__i_p__55395$jscomp$1$$ = 0;
        for (var $G__55446__a$$ = Array(arguments.length - 1); $G__55446__i_p__55395$jscomp$1$$ < $G__55446__a$$.length;) {
          $G__55446__a$$[$G__55446__i_p__55395$jscomp$1$$] = arguments[$G__55446__i_p__55395$jscomp$1$$ + 1], ++$G__55446__i_p__55395$jscomp$1$$;
        }
        $G__55446__i_p__55395$jscomp$1$$ = new $APP.$cljs$core$IndexedSeq$$($G__55446__a$$, 0, null);
      }
      return $G__55445__delegate$$.call(this, $ref$jscomp$9$$, $G__55446__i_p__55395$jscomp$1$$);
    }
    function $G__55445__delegate$$($ref$jscomp$8_temp__5823__auto__$jscomp$56$$, $duration$jscomp$2_p__55395$$) {
      $duration$jscomp$2_p__55395$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__55395$$, 0, null);
      $ref$jscomp$8_temp__5823__auto__$jscomp$56$$ = $ref$jscomp$8_temp__5823__auto__$jscomp$56$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$8_temp__5823__auto__$jscomp$56$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$221$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__55395$$) ? $duration$jscomp$2_p__55395$$ : 0.35, $APP.$cljs$cst$222$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$223$y$$, $ref$jscomp$8_temp__5823__auto__$jscomp$56$$, 
      $APP.$cljs$cst$224$autoKill$$, !1], null), $APP.$cljs$cst$225$ease$$, "power2.inOut"], null))) : null;
    }
    $G__55445$$.$cljs$lang$maxFixedArity$ = 1;
    $G__55445$$.$cljs$lang$applyTo$ = function($arglist__55447_p__55395$jscomp$2$$) {
      var $ref$jscomp$10$$ = $APP.$cljs$core$first$$($arglist__55447_p__55395$jscomp$2$$);
      $arglist__55447_p__55395$jscomp$2$$ = $APP.$cljs$core$rest$$($arglist__55447_p__55395$jscomp$2$$);
      return $G__55445__delegate$$($ref$jscomp$10$$, $arglist__55447_p__55395$jscomp$2$$);
    };
    $G__55445$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__55445__delegate$$;
    return $G__55445$$;
  }(), $G__55391$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__55390$$, $G__55391$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__55390$$, $G__55391$$);
};
$otp$pages$budget$committee$preview$$ = function($G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$, $maybe_ref__41572__auto__$jscomp$79$$) {
  $G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$), $maybe_ref__41572__auto__$jscomp$79$$], null);
  $G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__170046$$ = function() {
        return {children:[function() {
          var $G__170050$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170050$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170050$$);
        }(), function() {
          var $G__170054$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170054$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170054$$);
        }(), function() {
          var $G__170058$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170058$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170058$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170046$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__170046$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170038_map__170036_props__41571__auto__$jscomp$79_vec__170033$$);
};
$otp$pages$budget$committee$details$$ = function($G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$, $maybe_ref__41572__auto__$jscomp$80$$) {
  $G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$), $maybe_ref__41572__auto__$jscomp$80$$], null);
  $G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$otp$styles$body_base$$]))), children:[function() {
      var $G__170099$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-amber-600  dark:text-amber-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__170105$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170105$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170105$$);
        }(), function() {
          var $G__170109$$ = {children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170109$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170109$$);
        }(), function() {
          var $G__170113$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170113$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170113$$);
        }(), function() {
          var $G__170117$$ = {children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170117$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170117$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170099$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__170099$$);
    }(), function() {
      var $G__170121$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-2xl", "text-rose-600   dark:text-rose-400"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170121$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__170121$$);
    }(), function() {
      var $G__170125$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__170129$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170129$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170129$$);
        }(), function() {
          var $G__170133$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170133$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170133$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170125$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170125$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170095_map__170093_props__41571__auto__$jscomp$80_vec__170090$$);
};
$otp$pages$budget$committee$committee_member_card$$ = function($G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$, $maybe_ref__41572__auto__$jscomp$81$$) {
  $G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$), $maybe_ref__41572__auto__$jscomp$81$$], null);
  $G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$, 0, null);
  $G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$ = $APP.$cljs$core$__destructure_map$$($G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$, $APP.$cljs$cst$167$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$, $APP.$cljs$cst$799$role$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$, 
  $APP.$cljs$cst$735$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__170148$$ = function() {
        return {"img-src":$img_src$jscomp$5$$, "imgix-fit":"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__170152$$ = function() {
            return {className:"", children:[function() {
              var $G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$197$$};
              $G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$);
              $G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$ = {position:$APP.$cljs$cst$702$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$overlays$caption_overlay$$, $G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$overlays$caption_overlay$$, $G__170156_G__170160$jscomp$inline_3988_JSCompiler_inline_result$jscomp$inline_3987$$);
            }(), function() {
              var $G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$$};
              $G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$);
              $G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$ = {position:$APP.$cljs$cst$707$bl$$, "parent-styles":$overlay_styles$$, children:$G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$overlays$caption_overlay$$, $G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$overlays$caption_overlay$$, $G__170164_G__170168$jscomp$inline_3991_JSCompiler_inline_result$jscomp$inline_3990$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170152$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170152$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__170148$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__170148$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170144_map__170142_map__170142__$1_props__41571__auto__$jscomp$81_vec__170139$$);
};
$otp$pages$budget$committee$committee_gallery$$ = function($G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$, $maybe_ref__41572__auto__$jscomp$82$$) {
  $G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$), $maybe_ref__41572__auto__$jscomp$82$$], null);
  $G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__170183$$ = function() {
        return {children:[function() {
          var $G__170187_G__170191$jscomp$inline_3994$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$label_muted$$), children:"Committee Members"};
          $G__170187_G__170191$jscomp$inline_3994$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__170187_G__170191$jscomp$inline_3994$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__170187_G__170191$jscomp$inline_3994$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170187_G__170191$jscomp$inline_3994$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170187_G__170191$jscomp$inline_3994$$);
        }(), function() {
          var $G__170195$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$198_p__170198$$) {
              var $credit$jscomp$3_map__170199__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$198_p__170198$$);
              $name$jscomp$198_p__170198$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__170199__$1$$, $APP.$cljs$cst$167$name$$);
              var $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__170199__$1$$, $APP.$cljs$cst$799$role$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__170199__$1$$, $APP.$cljs$cst$735$img_src$$);
              $credit$jscomp$3_map__170199__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__170199__$1$$, $APP.$cljs$cst$713$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$6$$) ? ($G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$ = {name:$name$jscomp$198_p__170198$$, role:$G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$, "img-src":$img_src$jscomp$6$$, credit:$credit$jscomp$3_map__170199__$1$$}, $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$committee$committee_member_card$$, $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$committee$committee_member_card$$, $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$)) : $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$ = null;
              $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$ = {children:$G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$, $name$jscomp$198_p__170198$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170201_G__170206$jscomp$inline_3997_JSCompiler_temp$jscomp$inline_3996_role$jscomp$1$$, $name$jscomp$198_p__170198$$);
            }, $otp$pages$budget$committee$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170195$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170195$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170183$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170183$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170179_map__170177_props__41571__auto__$jscomp$82_vec__170174$$);
};
$otp$pages$budget$committee$committee$$ = function($G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$, $maybe_ref__41572__auto__$jscomp$83$$) {
  $G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$), $maybe_ref__41572__auto__$jscomp$83$$], null);
  $G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$, 0, null);
  $G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$ = $APP.$cljs$core$__destructure_map$$($G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$, $APP.$cljs$cst$228$id$$), $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$, $APP.$cljs$cst$772$subtitle$$), $title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$, 
  $APP.$cljs$cst$211$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$ = function() {
    return {id:$id$jscomp$90$$, className:"space-y-4", children:[function() {
      var $G__170221$$ = {idx:5, "section-hint":$subtitle$jscomp$2$$, title:$title$jscomp$27$$, "expand-button-label":"Read more", "preview-text":$otp$pages$budget$committee$preview$$, "full-text":$otp$pages$budget$committee$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__170221$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__170221$$);
    }(), function() {
      var $G__170225$$ = {children:$otp$pages$budget$committee$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$committee$committee_gallery$$, $G__170225$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$committee$committee_gallery$$, $G__170225$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__170217_map__170215_map__170215__$1_props__41571__auto__$jscomp$83_vec__170212$$);
};
$otp$pages$budget$table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$otp$pages$budget$table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__170227_SHARP__tax_rate$jscomp$inline_2200$$) {
    var $item_details$jscomp$inline_2198_sub_total$jscomp$inline_2199$$ = $cljs$cst$801$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__170227_SHARP__tax_rate$jscomp$inline_2200$$);
    $item_details$jscomp$inline_2198_sub_total$jscomp$inline_2199$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$800$amount$$, $item_details$jscomp$inline_2198_sub_total$jscomp$inline_2199$$));
    $p1__170227_SHARP__tax_rate$jscomp$inline_2200$$ = $cljs$cst$802$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$803$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__170227_SHARP__tax_rate$jscomp$inline_2200$$));
    return ($p1__170227_SHARP__tax_rate$jscomp$inline_2200$$ > 0 ? $p1__170227_SHARP__tax_rate$jscomp$inline_2200$$ * $item_details$jscomp$inline_2198_sub_total$jscomp$inline_2199$$ : 0) + $item_details$jscomp$inline_2198_sub_total$jscomp$inline_2199$$;
  }, $cost_data$$));
};
$otp$pages$budget$table$total_section$$ = function($G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$, $maybe_ref__41572__auto__$jscomp$84$$) {
  $G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$), $maybe_ref__41572__auto__$jscomp$84$$], null);
  $G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$, 0, null);
  $G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$ = $APP.$cljs$core$__destructure_map$$($G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$);
  $G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$, $cljs$cst$804$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $otp$pages$budget$table$sub_total_all_sections$$($G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__170239$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__170243$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__170243$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__170243$$);
        }(), function() {
          var $G__170247_G__170251$jscomp$inline_4000$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$otp$pages$budget$table$format_currency$$($sub_total$jscomp$1$$)};
          $G__170247_G__170251$jscomp$inline_4000$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170247_G__170251$jscomp$inline_4000$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170247_G__170251$jscomp$inline_4000$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170247_G__170251$jscomp$inline_4000$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170247_G__170251$jscomp$inline_4000$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__170239$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__170239$$);
    }(), function() {
      var $G__170255$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__170259$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__170259$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__170259$$);
        }(), function() {
          var $G__170263_G__170267$jscomp$inline_4003$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$otp$pages$budget$table$format_currency$$(66821)};
          $G__170263_G__170267$jscomp$inline_4003$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170263_G__170267$jscomp$inline_4003$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170263_G__170267$jscomp$inline_4003$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170263_G__170267$jscomp$inline_4003$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170263_G__170267$jscomp$inline_4003$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__170255$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__170255$$);
    }(), function() {
      var $G__170271$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__170276$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__170276$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__170276$$);
        }(), function() {
          var $G__170280_G__170284$jscomp$inline_4006$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_lg$$), children:$otp$pages$budget$table$format_currency$$($grand_total$$)};
          $G__170280_G__170284$jscomp$inline_4006$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170280_G__170284$jscomp$inline_4006$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170280_G__170284$jscomp$inline_4006$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170280_G__170284$jscomp$inline_4006$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170280_G__170284$jscomp$inline_4006$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__170271$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__170271$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170235_cost_data$jscomp$1_map__170233_map__170233__$1_props__41571__auto__$jscomp$84_vec__170230$$);
};
$otp$pages$budget$table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$otp$pages$budget$table$detail_line_item$$ = function($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$, $maybe_ref__41572__auto__$jscomp$85$$) {
  $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$), $maybe_ref__41572__auto__$jscomp$85$$], null);
  $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$, 0, null);
  $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$ = $APP.$cljs$core$__destructure_map$$($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$);
  var $idx$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$, $APP.$cljs$cst$759$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$, $APP.$cljs$cst$631$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$, 
  $cljs$cst$805$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$, $cljs$cst$806$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$70$$), $description$jscomp$4$$ = $cljs$cst$807$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$70$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__170380$$($prev$jscomp$11$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$11$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__170380$$) : $set_expanded_items$$.call(null, $G__170380$$);
      }, children:[function() {
        var $G__170386$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__170390$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170390$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170390$$);
          }(), function() {
            var $G__170395_JSCompiler_temp_const$jscomp$inline_4263$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_4264$$ = $APP.$cljs$cst$211$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__170400$jscomp$inline_4266_JSCompiler_inline_result$jscomp$inline_4265_JSCompiler_temp_const$jscomp$inline_4267$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__170405$jscomp$inline_4269_JSCompiler_inline_result$jscomp$inline_4268$$ = {};
            $G__170405$jscomp$inline_4269_JSCompiler_inline_result$jscomp$inline_4268$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$ui$icons$InformationCircle$$, $G__170405$jscomp$inline_4269_JSCompiler_inline_result$jscomp$inline_4268$$) : $APP.$helix$core$jsx$$.call(null, $otp$ui$icons$InformationCircle$$, $G__170405$jscomp$inline_4269_JSCompiler_inline_result$jscomp$inline_4268$$);
            $G__170400$jscomp$inline_4266_JSCompiler_inline_result$jscomp$inline_4265_JSCompiler_temp_const$jscomp$inline_4267$$ = {className:$G__170400$jscomp$inline_4266_JSCompiler_inline_result$jscomp$inline_4265_JSCompiler_temp_const$jscomp$inline_4267$$, children:$G__170405$jscomp$inline_4269_JSCompiler_inline_result$jscomp$inline_4268$$};
            $G__170400$jscomp$inline_4266_JSCompiler_inline_result$jscomp$inline_4265_JSCompiler_temp_const$jscomp$inline_4267$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170400$jscomp$inline_4266_JSCompiler_inline_result$jscomp$inline_4265_JSCompiler_temp_const$jscomp$inline_4267$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170400$jscomp$inline_4266_JSCompiler_inline_result$jscomp$inline_4265_JSCompiler_temp_const$jscomp$inline_4267$$);
            $G__170395_JSCompiler_temp_const$jscomp$inline_4263$$ = {className:$G__170395_JSCompiler_temp_const$jscomp$inline_4263$$, children:[$JSCompiler_temp_const$jscomp$inline_4264$$, $G__170400$jscomp$inline_4266_JSCompiler_inline_result$jscomp$inline_4265_JSCompiler_temp_const$jscomp$inline_4267$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170395_JSCompiler_temp_const$jscomp$inline_4263$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170395_JSCompiler_temp_const$jscomp$inline_4263$$);
          }(), function() {
            var $G__170411$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_sm$$), children:$otp$pages$budget$table$format_currency$$($cljs$cst$800$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170411$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170411$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170386$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170386$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
        var $G__170435$jscomp$inline_4443_JSCompiler_inline_result$jscomp$inline_4442$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
        $G__170435$jscomp$inline_4443_JSCompiler_inline_result$jscomp$inline_4442$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170435$jscomp$inline_4443_JSCompiler_inline_result$jscomp$inline_4442$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__170435$jscomp$inline_4443_JSCompiler_inline_result$jscomp$inline_4442$$);
        $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$ = {className:$G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$, children:$G__170435$jscomp$inline_4443_JSCompiler_inline_result$jscomp$inline_4442$$};
        $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$)};
        $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$ = {className:"border-l-2 border-pink-500/30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170417_G__170423$jscomp$inline_4439_G__170431$jscomp$inline_4440_JSCompiler_temp_const$jscomp$inline_4441$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$);
  }
  $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__170444$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__170448$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170448$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170448$$);
        }(), function() {
          var $G__170452$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$211$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170452$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170452$$);
        }(), function() {
          var $G__170456$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_sm$$), children:$otp$pages$budget$table$format_currency$$($cljs$cst$800$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170456$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170456$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170444$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170444$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__170371_G__170440_map__170332_map__170332__$1_props__41571__auto__$jscomp$85_vec__170329$$);
};
$otp$pages$budget$table$details__GT_render_items$$ = function($G__170630_details$jscomp$4$$) {
  for (var $G__170629_items$jscomp$8$$ = $G__170630_details$jscomp$4$$, $idx$jscomp$71$$ = 0, $prev_group$$ = null, $result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__170629_items$jscomp$8$$)) {
      return $result$jscomp$135$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__170629_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$584$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$90$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$90$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$90$$;
    }();
    $G__170629_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__170629_items$jscomp$8$$);
    $G__170630_details$jscomp$4$$ = $idx$jscomp$71$$ + 1;
    var $G__170631$$ = $curr_group$$, $G__170632$$ = function() {
      var $G__170461_G__170461__$1$$ = $result$jscomp$135$$;
      $G__170461_G__170461__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__170461_G__170461__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$361$header$$, $APP.$cljs$cst$227$label$$, $curr_group$$, $APP.$cljs$cst$191$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null)) : $G__170461_G__170461__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__170461_G__170461__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$631$detail$$, $APP.$cljs$cst$631$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$759$idx$$, $idx$jscomp$71$$, $APP.$cljs$cst$191$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null));
    }();
    $idx$jscomp$71$$ = $G__170630_details$jscomp$4$$;
    $prev_group$$ = $G__170631$$;
    $result$jscomp$135$$ = $G__170632$$;
  }
};
$otp$pages$budget$table$section_line_item$$ = function($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$, $maybe_ref__41572__auto__$jscomp$86_tax_rate$jscomp$1$$) {
  $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$), $maybe_ref__41572__auto__$jscomp$86_tax_rate$jscomp$1$$], null);
  $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$, 0, null);
  $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$ = $APP.$cljs$core$__destructure_map$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$, $APP.$cljs$cst$759$idx$$), $item$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$, $cljs$cst$808$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$, 
  $cljs$cst$805$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$, $cljs$cst$806$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$)), $scroll_to_ref$$ = $otp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$);
  $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$ = $cljs$cst$801$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$800$amount$$, $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$));
  $maybe_ref__41572__auto__$jscomp$86_tax_rate$jscomp$1$$ = $cljs$cst$802$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$803$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$));
  var $tax_label$$ = $APP.$cljs$cst$227$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$803$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__41572__auto__$jscomp$86_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__41572__auto__$jscomp$86_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$72$$), $render_items$$ = $otp$pages$budget$table$details__GT_render_items$$($G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$);
  $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__170473$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__170476$$($prev$jscomp$12$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$12$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__170476$$) : $set_expanded_items$jscomp$1$$.call(null, $G__170476$$);
        }, children:[function() {
          var $G__170478$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$211$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__170478$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__170478$$);
        }(), function() {
          var $G__170482$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__170486$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$otp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170486$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170486$$);
            }(), function() {
              var $G__170490_JSCompiler_temp_const$jscomp$inline_3505$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__170494$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$ = {};
              $G__170494$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$icons$ChevronRightIcon$$, $G__170494$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$icons$ChevronRightIcon$$, $G__170494$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$);
              $G__170490_JSCompiler_temp_const$jscomp$inline_3505$$ = {className:$G__170490_JSCompiler_temp_const$jscomp$inline_3505$$, children:$G__170494$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170490_JSCompiler_temp_const$jscomp$inline_3505$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170490_JSCompiler_temp_const$jscomp$inline_3505$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170482$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170482$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170473$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170473$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__170496$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__170500_JSCompiler_temp_const$jscomp$inline_4017$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__170504$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$ = {className:"px-8 py-4", children:$cljs$cst$807$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)};
          $G__170504$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170504$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__170504$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$);
          $G__170500_JSCompiler_temp_const$jscomp$inline_4017$$ = {className:$G__170500_JSCompiler_temp_const$jscomp$inline_4017$$, children:$G__170504$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170500_JSCompiler_temp_const$jscomp$inline_4017$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170500_JSCompiler_temp_const$jscomp$inline_4017$$);
        }(), function() {
          var $G__170508$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__170514_G__170523_ri$$) {
              var $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__170514_G__170523_ri$$);
              $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$ = $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$.$fqn$ : null;
              switch($G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$) {
                case "header":
                  $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__170518$jscomp$inline_4023_JSCompiler_inline_result$jscomp$inline_4022$$ = {children:$APP.$cljs$cst$227$label$$.$cljs$core$IFn$_invoke$arity$1$($G__170514_G__170523_ri$$)};
                  $G__170518$jscomp$inline_4023_JSCompiler_inline_result$jscomp$inline_4022$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170518$jscomp$inline_4023_JSCompiler_inline_result$jscomp$inline_4022$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170518$jscomp$inline_4023_JSCompiler_inline_result$jscomp$inline_4022$$);
                  $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$ = {className:$G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$, children:$G__170518$jscomp$inline_4023_JSCompiler_inline_result$jscomp$inline_4022$$};
                  $G__170514_G__170523_ri$$ = $APP.$cljs$cst$191$key$$.$cljs$core$IFn$_invoke$arity$1$($G__170514_G__170523_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$, $G__170514_G__170523_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$, $G__170514_G__170523_ri$$);
                case "detail":
                  return $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$ = {idx:$APP.$cljs$cst$759$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__170514_G__170523_ri$$), detail:$APP.$cljs$cst$631$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__170514_G__170523_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__170514_G__170523_ri$$ = $APP.$cljs$cst$191$key$$.$cljs$core$IFn$_invoke$arity$1$($G__170514_G__170523_ri$$), 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$table$detail_line_item$$, $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$, $G__170514_G__170523_ri$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$detail_line_item$$, $G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$, $G__170514_G__170523_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__170511_G__170511__$1_G__170513_G__170522_JSCompiler_temp_const$jscomp$inline_4021$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__170508$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__170508$$);
        }(), function() {
          var $G__170527$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__170531$$ = function() {
                return {children:[function() {
                  var $G__170535$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__170539$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170539$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170539$$);
                    }(), function() {
                      var $G__170543$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__170547$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170547$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170547$$);
                        }(), function() {
                          var $G__170551$$ = {children:$otp$pages$budget$table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170551$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170551$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170543$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170543$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170535$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170535$$);
                }(), function() {
                  var $G__170555$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__170559$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170559$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170559$$);
                    }(), function() {
                      var $G__170563$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__170567$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170567$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170567$$);
                        }(), function() {
                          var $G__170571$$ = {children:$otp$pages$budget$table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170571$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170571$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170563$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170563$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170555$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170555$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170531$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170531$$);
            }() : null, function() {
              var $G__170575$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__170579$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170579$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170579$$);
                }(), function() {
                  var $G__170583$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__170587$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170587$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170587$$);
                    }(), function() {
                      var $G__170591$$ = {children:$otp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170591$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170591$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170583$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170583$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170575$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170575$$);
            }(), function() {
              var $G__170595$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__170598_170634$$($prev$jscomp$13$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$13$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__170598_170634$$) : $set_expanded_items$jscomp$1$$.call(null, $G__170598_170634$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__170600_JSCompiler_temp_const$jscomp$inline_3513$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__170604$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$ = {};
                  $G__170604$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$icons$ChevronRightIcon$$, $G__170604$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$icons$ChevronRightIcon$$, $G__170604$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$);
                  $G__170600_JSCompiler_temp_const$jscomp$inline_3513$$ = {className:$G__170600_JSCompiler_temp_const$jscomp$inline_3513$$, children:$G__170604$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170600_JSCompiler_temp_const$jscomp$inline_3513$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170600_JSCompiler_temp_const$jscomp$inline_3513$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170595$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170595$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170527$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170527$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170496$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170496$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__170469_details$jscomp$5_map__170467_map__170467__$1_props__41571__auto__$jscomp$86_vec__170464$$);
};
$otp$pages$budget$table$budget_table$$ = function($G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$, $maybe_ref__41572__auto__$jscomp$87$$) {
  $G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$), $maybe_ref__41572__auto__$jscomp$87$$], null);
  $G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$, 0, null);
  $G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$ = $APP.$cljs$core$__destructure_map$$($G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$, $cljs$cst$804$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$, 1, null);
  $G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__170621_idx$jscomp$73$$, $G__170620_item$jscomp$35$$) {
      $G__170620_item$jscomp$35$$ = {idx:$G__170621_idx$jscomp$73$$, item:$G__170620_item$jscomp$35$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__170621_idx$jscomp$73$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__170621_idx$jscomp$73$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$table$section_line_item$$, $G__170620_item$jscomp$35$$, $G__170621_idx$jscomp$73$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$section_line_item$$, $G__170620_item$jscomp$35$$, $G__170621_idx$jscomp$73$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__170625$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$table$total_section$$, $G__170625$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$total_section$$, $G__170625$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__170616_map__170611_map__170611__$1_props__41571__auto__$jscomp$87_vec__170608_vec__170612$$);
};
$otp$pages$budget$cost_breakdown$preview$$ = function($G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$, $maybe_ref__41572__auto__$jscomp$88$$) {
  $G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$), $maybe_ref__41572__auto__$jscomp$88$$], null);
  $G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__170646$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170646$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170646$$);
    }(), function() {
      var $G__170650$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170650$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170650$$);
    }(), function() {
      var $G__170654$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170654$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170654$$);
    }(), function() {
      var $G__170658$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170658$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170658$$);
    }(), function() {
      var $G__170662$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170662$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170662$$);
    }(), function() {
      var $G__170666$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170666$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170666$$);
    }(), function() {
      var $G__170670$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170670$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170670$$);
    }(), function() {
      var $G__170674$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170674$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170674$$);
    }(), function() {
      var $G__170678$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170678$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170678$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170642_map__170640_props__41571__auto__$jscomp$88_vec__170637$$);
};
$otp$pages$budget$cost_breakdown$details$$ = function($G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$, $maybe_ref__41572__auto__$jscomp$89$$) {
  $G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$), $maybe_ref__41572__auto__$jscomp$89$$], null);
  $G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__170696$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170696$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170696$$);
    }(), function() {
      var $G__170700$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170700$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170700$$);
    }(), function() {
      var $G__170704$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170704$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170704$$);
    }(), function() {
      var $G__170712$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170712$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170712$$);
    }(), function() {
      var $G__170716$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170716$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170716$$);
    }(), function() {
      var $G__170721$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170721$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170721$$);
    }(), function() {
      var $G__170725$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170725$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170725$$);
    }(), function() {
      var $G__170729$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170729$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170729$$);
    }(), function() {
      var $G__170733$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170733$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170733$$);
    }(), function() {
      var $G__170740$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170740$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170740$$);
    }(), function() {
      var $G__170750$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170750$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170750$$);
    }(), function() {
      var $G__170756$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170756$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170756$$);
    }(), function() {
      var $G__170766$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170766$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170766$$);
    }(), function() {
      var $G__170774$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170774$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170774$$);
    }(), function() {
      var $G__170780$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170780$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170780$$);
    }(), function() {
      var $G__170784$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170784$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170784$$);
    }(), function() {
      var $G__170790$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__170796$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170796$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170796$$);
        }(), function() {
          var $G__170800$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170800$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170800$$);
        }(), function() {
          var $G__170804$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170804$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170804$$);
        }(), function() {
          var $G__170810$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170810$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170810$$);
        }(), function() {
          var $G__170817$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170817$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170817$$);
        }(), function() {
          var $G__170825$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170825$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170825$$);
        }(), function() {
          var $G__170830$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170830$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170830$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170790$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170790$$);
    }(), function() {
      var $G__170838$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170838$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170838$$);
    }(), function() {
      var $G__170847$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170847$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170847$$);
    }(), function() {
      var $G__170857$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170857$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170857$$);
    }(), function() {
      var $G__170869$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170869$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170869$$);
    }(), function() {
      var $G__170879$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170879$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170879$$);
    }(), function() {
      var $G__170887$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170887$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170887$$);
    }(), function() {
      var $G__170891$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170891$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170891$$);
    }(), function() {
      var $G__170897$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170897$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170897$$);
    }(), function() {
      var $G__170905$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170905$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170905$$);
    }(), function() {
      var $G__170909$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__170913$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170913$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170913$$);
        }(), function() {
          var $G__170919$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170919$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170919$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170909$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170909$$);
    }(), function() {
      var $G__170927$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__170931$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170931$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170931$$);
        }(), function() {
          var $G__170935$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170935$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170935$$);
        }(), function() {
          var $G__170943$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170943$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170943$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170927$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170927$$);
    }(), function() {
      var $G__170947$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170947$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170947$$);
    }(), function() {
      var $G__170953$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170953$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170953$$);
    }(), function() {
      var $G__170960$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170960$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170960$$);
    }(), function() {
      var $G__170966$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170966$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170966$$);
    }(), function() {
      var $G__170972$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__170977$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170977$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170977$$);
        }(), function() {
          var $G__170981$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170981$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170981$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170972$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__170972$$);
    }(), function() {
      var $G__170989$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170989$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170989$$);
    }(), function() {
      var $G__170999$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170999$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170999$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170692_map__170689_props__41571__auto__$jscomp$89_vec__170686$$);
};
$otp$pages$budget$cost_breakdown$footer$$ = function($G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$, $maybe_ref__41572__auto__$jscomp$90$$) {
  $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$), $maybe_ref__41572__auto__$jscomp$90$$], null);
  $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$ = {"cost-data":$otp$pages$budget$cost_breakdown$cost_data$$};
  $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$table$budget_table$$, $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$budget_table$$, $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171029_G__171035$jscomp$inline_4026_map__171020_props__41571__auto__$jscomp$90_vec__171017$$);
};
$otp$pages$budget$cost_breakdown$cost_breakdown$$ = function($G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$, $G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$) {
  $G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$), $G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$], null);
  $G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$, 0, null);
  var $map__171159__$1_title$jscomp$28$$ = $APP.$cljs$core$__destructure_map$$($G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$);
  $G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171159__$1_title$jscomp$28$$, $APP.$cljs$cst$228$id$$);
  $G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171159__$1_title$jscomp$28$$, $APP.$cljs$cst$772$subtitle$$);
  $map__171159__$1_title$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171159__$1_title$jscomp$28$$, $APP.$cljs$cst$211$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$ = {idx:3, "section-hint":$G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$, title:$map__171159__$1_title$jscomp$28$$, "expand-button-label":"Read more", "preview-text":$otp$pages$budget$cost_breakdown$preview$$, "full-text":$otp$pages$budget$cost_breakdown$details$$, "footer-text":$otp$pages$budget$cost_breakdown$footer$$};
  $G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$);
  $G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$ = {id:$G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$, children:$G__171186$jscomp$inline_4029_JSCompiler_inline_result$jscomp$inline_4028_maybe_ref__41572__auto__$jscomp$91_subtitle$jscomp$3$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171175_id$jscomp$91_map__171159_props__41571__auto__$jscomp$91_vec__171156$$);
};
$otp$pages$budget$location$preview_text$$ = function($G__170293_props__41571__auto__$jscomp$92$$) {
  $APP.$helix$core$extract_cljs_props$$($G__170293_props__41571__auto__$jscomp$92$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170293_props__41571__auto__$jscomp$92$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$body_base$$), children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__170297$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170297$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170297$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__170301$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170301$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170301$$);
    }(), function() {
      var $G__170305$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170305$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170305$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__170309$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170309$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170309$$);
    }(), function() {
      var $G__170313$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170313$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170313$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170293_props__41571__auto__$jscomp$92$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__170293_props__41571__auto__$jscomp$92$$);
};
$otp$pages$budget$location$preview$$ = function($G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$, $maybe_ref__41572__auto__$jscomp$93$$) {
  $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$), $maybe_ref__41572__auto__$jscomp$93$$], null);
  $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$ = {};
  $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$location$preview_text$$, $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$location$preview_text$$, $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170326_G__170334$jscomp$inline_3522_map__170323_props__41571__auto__$jscomp$93_vec__170320$$);
};
$otp$pages$budget$location$full_details$$ = function($G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$, $maybe_ref__41572__auto__$jscomp$94$$) {
  $G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$), $maybe_ref__41572__auto__$jscomp$94$$], null);
  $G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$, 0, null);
  $G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$ = $APP.$cljs$core$__destructure_map$$($G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$, $APP.$cljs$cst$772$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$, $APP.$cljs$cst$211$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$4$$ = $APP.$otp$hooks$use_media_query$use_touch_enabled$$();
  $G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__170347$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$body_base$$), children:[function() {
          var $G__170351_G__170355$jscomp$inline_3525$$ = {};
          $G__170351_G__170355$jscomp$inline_3525$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$location$preview_text$$, $G__170351_G__170355$jscomp$inline_3525$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$location$preview_text$$, $G__170351_G__170355$jscomp$inline_3525$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170351_G__170355$jscomp$inline_3525$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170351_G__170355$jscomp$inline_3525$$);
        }(), function() {
          var $G__170357$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__170361$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$4$$, "initial-view":$APP.$otp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$otp$pages$venue$map_config$ant_paths$$, layers:$APP.$otp$pages$venue$map_config$layers$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$map$mapbox_map$$, $G__170361$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$map$mapbox_map$$, $G__170361$$);
            }(), function() {
              var $G__170365$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170365$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__170365$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170357$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170357$$);
        }(), function() {
          var $G__170369$$ = function() {
            return {className:"px-4 mt-8 flex flex-col sm:flex-row gap-4", children:[function() {
              var $G__170377$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__170377$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__170377$$);
            }(), function() {
              var $G__170382$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
              children:"Open in Maps ↗"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__170382$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__170382$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170369$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170369$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170347$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170347$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170343_map__170341_map__170341__$1_props__41571__auto__$jscomp$94_vec__170338$$);
};
$otp$pages$budget$location$location_section$$ = function($G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$, $G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$) {
  $G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$), $G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$], null);
  $G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$, 0, null);
  var $map__170409__$1_title$jscomp$30$$ = $APP.$cljs$core$__destructure_map$$($G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$);
  $G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__170409__$1_title$jscomp$30$$, $APP.$cljs$cst$228$id$$);
  $G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__170409__$1_title$jscomp$30$$, $APP.$cljs$cst$772$subtitle$$);
  $map__170409__$1_title$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__170409__$1_title$jscomp$30$$, $APP.$cljs$cst$211$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$ = {idx:7, "section-hint":$G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$, title:$map__170409__$1_title$jscomp$30$$, "expand-button-label":"Expand details", "preview-text":$otp$pages$budget$location$preview$$, "full-text":$otp$pages$budget$location$full_details$$};
  $G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$);
  $G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$ = {id:$G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$, children:$G__170425$jscomp$inline_4032_JSCompiler_inline_result$jscomp$inline_4031_maybe_ref__41572__auto__$jscomp$95_subtitle$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170415_id$jscomp$93_map__170409_props__41571__auto__$jscomp$95_vec__170406$$);
};
$otp$pages$budget$cash_flow$parse_date$$ = function($s$jscomp$226$$) {
  return new Date($s$jscomp$226$$);
};
$otp$pages$budget$cash_flow$date__GT_ms$$ = function($d$jscomp$151$$) {
  return $d$jscomp$151$$.getTime();
};
$otp$pages$budget$cash_flow$format_currency$$ = function($n$jscomp$226$$) {
  return $n$jscomp$226$$.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0});
};
$otp$pages$budget$cash_flow$priority_tag_bg$$ = function($p$jscomp$90$$) {
  switch($p$jscomp$90$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$90$$.$fqn$ : null) {
    case "critical":
      return "bg-red-500/15";
    case "high":
      return "bg-amber-400/15";
    case "normal":
      return "bg-indigo-400/15";
    default:
      return "bg-indigo-400/15";
  }
};
$otp$pages$budget$cash_flow$priority_tag_text$$ = function($p$jscomp$91$$) {
  switch($p$jscomp$91$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$91$$.$fqn$ : null) {
    case "critical":
      return "text-pink-600 dark:text-pink-300";
    case "high":
      return "text-amber-600 dark:text-amber-300";
    case "normal":
      return "text-indigo-600 dark:text-indigo-300";
    default:
      return "text-indigo-600 dark:text-indigo-300";
  }
};
$otp$pages$budget$cash_flow$priority_dot_classes$$ = function($p$jscomp$92$$, $fill_paid_QMARK_$$) {
  $fill_paid_QMARK_$$ = $APP.$cljs$core$truth_$$($fill_paid_QMARK_$$) ? "bg-transparent" : function() {
    switch($p$jscomp$92$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$92$$.$fqn$ : null) {
      case "critical":
        return "bg-pink-600 dark:bg-pink-300";
      case "high":
        return "bg-amber-500 dark:bg-amber-300";
      case "normal":
        return "bg-indigo-500 dark:bg-indigo-300";
      default:
        return "bg-indigo-500 dark:bg-indigo-300";
    }
  }();
  return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(function() {
    switch($p$jscomp$92$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$92$$.$fqn$ : null) {
      case "critical":
        return "border-pink-600 dark:border-pink-300";
      case "high":
        return "border-amber-500 dark:border-amber-300";
      case "normal":
        return "border-indigo-500 dark:border-indigo-300";
      default:
        return "border-indigo-500 dark:border-indigo-300";
    }
  }()) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($fill_paid_QMARK_$$);
};
$otp$pages$budget$cash_flow$priority_amount_class$$ = function($p$jscomp$93$$, $paid_QMARK_$jscomp$1$$) {
  if ($APP.$cljs$core$truth_$$($paid_QMARK_$jscomp$1$$)) {
    return "text-slate-600  dark:text-slate-400";
  }
  switch($p$jscomp$93$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$93$$.$fqn$ : null) {
    case "critical":
      return "text-pink-600 dark:text-pink-300";
    case "high":
      return "text-amber-500 dark:text-amber-300";
    case "normal":
      return "text-indigo-600 dark:text-indigo-300";
    default:
      return "text-indigo-600 dark:text-indigo-300";
  }
};
$otp$pages$budget$cash_flow$priority_label$$ = function($p$jscomp$94$$) {
  switch($p$jscomp$94$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$94$$.$fqn$ : null) {
    case "critical":
      return "CRIT";
    case "high":
      return "HIGH";
    case "normal":
      return "NORM";
    default:
      return "—";
  }
};
$otp$pages$budget$cash_flow$group_by_month$$ = function($entries$jscomp$4$$) {
  return $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($e$jscomp$220$$) {
    return $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$220$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$parse_date$$, $cljs$cst$822$due$$), $entries$jscomp$4$$));
};
$otp$pages$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$parse_date$$, $cljs$cst$822$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $otp$pages$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$154$$ = $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$17$$ = $d$jscomp$154$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$800$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$800$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__171573_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__171573_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__171576_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__171576_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__171579_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$843$critical$$, $cljs$cst$823$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__171579_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$154$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$154$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$883$all_paid$$, $cljs$cst$884$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$885$n_crit$$, $APP.$cljs$cst$737$total$$, $APP.$cljs$cst$227$label$$, $cljs$cst$825$paid$$, $cljs$cst$886$n_paid$$, $cljs$cst$887$n_items$$, $cljs$cst$888$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$17$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$otp$pages$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$889$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$206$text$$, "text-emerald-600 dark:text-emerald-300", $APP.$cljs$cst$227$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$889$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$206$text$$, "text-slate-500", $APP.$cljs$cst$227$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$889$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$206$text$$, "text-slate-500", $APP.$cljs$cst$227$label$$, "—"], null);
  }
};
$otp$pages$budget$cash_flow$timeline_node$$ = function($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $G__171717_173222_entry$jscomp$29_maybe_ref__41572__auto__$jscomp$96$$) {
  $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$), $G__171717_173222_entry$jscomp$29_maybe_ref__41572__auto__$jscomp$96$$], null);
  $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, 0, null);
  $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$ = $APP.$cljs$core$__destructure_map$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$);
  $G__171717_173222_entry$jscomp$29_maybe_ref__41572__auto__$jscomp$96$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $cljs$cst$890$entry$$);
  var $idx$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $APP.$cljs$cst$759$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$ = $APP.$cljs$core$__destructure_map$$($G__171717_173222_entry$jscomp$29_maybe_ref__41572__auto__$jscomp$96$$);
  var $title$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $APP.$cljs$cst$211$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $cljs$cst$822$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, 
  $cljs$cst$800$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $cljs$cst$823$priority$$);
  $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$), $cljs$cst$825$paid$$), $st$$ = $otp$pages$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$));
  $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$74$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__171717_173222_entry$jscomp$29_maybe_ref__41572__auto__$jscomp$96$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, $G__171717_173222_entry$jscomp$29_maybe_ref__41572__auto__$jscomp$96$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$, 
  $G__171717_173222_entry$jscomp$29_maybe_ref__41572__auto__$jscomp$96$$);
  $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__171761$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__171779$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171779$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171779$$);
        }(), function() {
          var $G__171798$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171798$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171798$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171761$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171761$$);
    }(), function() {
      var $G__171802_G__171806$jscomp$inline_4277$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__171802_G__171806$jscomp$inline_4277$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171802_G__171806$jscomp$inline_4277$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171802_G__171806$jscomp$inline_4277$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171802_G__171806$jscomp$inline_4277$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171802_G__171806$jscomp$inline_4277$$);
    }(), function() {
      var $G__171812$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__171817$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__171821_JSCompiler_temp_const$jscomp$3113$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3114_d$jscomp$inline_3530$$ = $otp$pages$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3114_d$jscomp$inline_3530$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3114_d$jscomp$inline_3530$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3114_d$jscomp$inline_3530$$.getDate());
              $G__171821_JSCompiler_temp_const$jscomp$3113$$ = {className:$G__171821_JSCompiler_temp_const$jscomp$3113$$, children:$JSCompiler_inline_result$jscomp$3114_d$jscomp$inline_3530$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171821_JSCompiler_temp_const$jscomp$3113$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171821_JSCompiler_temp_const$jscomp$3113$$);
            }(), function() {
              var $G__171825$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$otp$pages$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171825$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171825$$);
            }(), function() {
              var $G__171829$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$889$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$206$text$$.$cljs$core$IFn$_invoke$arity$1$($st$$))), children:$APP.$cljs$cst$227$label$$.$cljs$core$IFn$_invoke$arity$1$($st$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171829$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171829$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171817$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171817$$);
        }(), function() {
          var $G__171833$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$31$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171833$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171833$$);
        }(), function() {
          var $G__171837$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$otp$pages$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171837$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171837$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171812$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171812$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171716_173221_G__171750_map__171687_map__171687__$1_map__171700__$1_props__41571__auto__$jscomp$96_status$jscomp$11_vec__171684$$);
};
$otp$pages$budget$cash_flow$now_marker$$ = function($G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$) {
  $APP.$helix$core$extract_cljs_props$$($G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$21$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$21$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$21$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__171853_173253$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$, $G__171853_173253$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$, $G__171853_173253$$);
  $G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$ = function() {
    return {ref:$ref$jscomp$21$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__171867$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__171879$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171879$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171879$$);
        }(), function() {
          var $G__171887$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171887$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171887$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171867$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171867$$);
    }(), function() {
      var $G__171897$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171897$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171897$$);
    }(), function() {
      var $G__171903$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171903$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171903$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171852_173252_G__171863_props__41571__auto__$jscomp$97$$);
};
$otp$pages$budget$cash_flow$month_header$$ = function($G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$, $G__171977_173274_maybe_ref__41572__auto__$jscomp$98$$) {
  $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$), $G__171977_173274_maybe_ref__41572__auto__$jscomp$98$$], null);
  $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$, 0, null);
  $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$ = $APP.$cljs$core$__destructure_map$$($G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$);
  var $label$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$, $APP.$cljs$cst$227$label$$), $idx$jscomp$75$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$, $APP.$cljs$cst$759$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$22$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$22$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$22$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$75$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__171977_173274_maybe_ref__41572__auto__$jscomp$98$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$, $G__171977_173274_maybe_ref__41572__auto__$jscomp$98$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$, $G__171977_173274_maybe_ref__41572__auto__$jscomp$98$$);
  $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$ = function() {
    return {ref:$ref$jscomp$22$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__172011$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172011$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172011$$);
    }(), function() {
      var $G__172016$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$18$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172016$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172016$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171976_173273_G__172006_map__171949_map__171949__$1_props__41571__auto__$jscomp$98_vec__171944$$);
};
$otp$pages$budget$cash_flow$month_summary_row$$ = function($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$) {
  $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$), $G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$], null);
  $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, 0, null);
  $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$ = $APP.$cljs$core$__destructure_map$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$);
  $G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $cljs$cst$891$rollup$$);
  var $idx$jscomp$76$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $APP.$cljs$cst$759$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$ = $APP.$cljs$core$__destructure_map$$($G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$);
  var $label$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $APP.$cljs$cst$227$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $APP.$cljs$cst$737$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, 
  $cljs$cst$825$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $cljs$cst$887$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, 
  $cljs$cst$885$n_crit$$);
  $G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $cljs$cst$883$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $cljs$cst$888$has_now$$), $ref$jscomp$23$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$2$$ = $APP.$cljs$core$truth_$$($G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$207$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$882$fill$$, "bg-transparent", $APP.$cljs$cst$206$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$207$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$882$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$206$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$207$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$882$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$206$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$23$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$23$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$76$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, $G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$, 
  $G__172072_173276_all_paid$jscomp$2_maybe_ref__41572__auto__$jscomp$99_rollup$$);
  $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$ = function() {
    return {ref:$ref$jscomp$23$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__172082$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__172088$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$207$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$882$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172088$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172088$$);
        }(), function() {
          var $G__172092$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172092$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172092$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172082$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172082$$);
    }(), function() {
      var $G__172097_G__172101$jscomp$inline_4280$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__172097_G__172101$jscomp$inline_4280$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172097_G__172101$jscomp$inline_4280$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172097_G__172101$jscomp$inline_4280$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172097_G__172101$jscomp$inline_4280$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172097_G__172101$jscomp$inline_4280$$);
    }(), function() {
      var $G__172108$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__172112$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__172116$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$19$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172116$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172116$$);
            }(), function() {
              var $G__172120$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172120$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172120$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__172124$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172124$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172124$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__172128$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172128$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172128$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172112$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172112$$);
        }(), function() {
          var $G__172134$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__172138$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$206$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$))), children:$otp$pages$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172138$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172138$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__172146$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172146$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172146$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__172154$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172154$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172154$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172134$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172134$$);
        }(), function() {
          var $G__172162_G__172167$jscomp$inline_4283$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__172162_G__172167$jscomp$inline_4283$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172162_G__172167$jscomp$inline_4283$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172162_G__172167$jscomp$inline_4283$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172162_G__172167$jscomp$inline_4283$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172162_G__172167$jscomp$inline_4283$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172108$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172108$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172071_173275_G__172078_map__172065_map__172065__$1_map__172070__$1_props__41571__auto__$jscomp$99_vec__172062$$);
};
$otp$pages$budget$cash_flow$view_toggle$$ = function($G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$, $maybe_ref__41572__auto__$jscomp$100$$) {
  $G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$), $maybe_ref__41572__auto__$jscomp$100$$], null);
  $G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$, 0, null);
  $G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$ = $APP.$cljs$core$__destructure_map$$($G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$, $cljs$cst$892$expanded_QMARK_$$), $on_toggle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$, $APP.$cljs$cst$783$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$1$$, children:[function() {
      var $G__172232$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172232$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172232$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "Summary" : "Expand", function() {
      var $G__172240$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__172240$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__172240$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__172223_map__172214_map__172214__$1_props__41571__auto__$jscomp$100_vec__172211$$);
};
$otp$pages$budget$cash_flow$summary_header$$ = function($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$) {
  $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$), $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$], null);
  $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, 0, null);
  $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$ = $APP.$cljs$core$__destructure_map$$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$);
  $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, $cljs$cst$884$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, $cljs$cst$893$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, $cljs$cst$819$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, $cljs$cst$818$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$800$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__172278_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__172278_SHARP_$$)));
  }, $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$800$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__172287_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$843$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$823$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__172287_SHARP_$$)));
  }, $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$155$$ = new Date();
    $d$jscomp$155$$.setDate($d$jscomp$155$$.getDate() + 7);
    return $d$jscomp$155$$;
  }(), $ref$jscomp$24$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$24$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$24$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$, $G__172385_173284_entries$jscomp$6_maybe_ref__41572__auto__$jscomp$101$$);
  $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$ = function() {
    return {ref:$ref$jscomp$24$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__172403$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__172411$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172411$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172411$$);
        }(), function() {
          var $G__172419$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172419$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172419$$);
        }(), function() {
          var $G__172428$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172428$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172428$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172403$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172403$$);
    }(), function() {
      var $G__172433$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$otp$pages$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172433$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172433$$);
    }(), function() {
      var $G__172437$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172437$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172437$$);
    }(), function() {
      var $G__172442$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__172446$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__172451$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172451$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172451$$);
            }(), function() {
              var $G__172458$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$otp$pages$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172458$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172458$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172446$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172446$$);
        }(), function() {
          var $G__172464$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__172468$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172468$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172468$$);
            }(), function() {
              var $G__172478$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$otp$pages$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172478$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172478$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172464$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172464$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172442$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172442$$);
    }(), function() {
      var $G__172484$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__172489$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__172493$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172493$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172493$$);
            }(), function() {
              var $G__172498$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$otp$pages$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172498$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172498$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172489$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172489$$);
        }(), function() {
          var $G__172502$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__172507$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172507$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172507$$);
            }(), function() {
              var $G__172515$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$otp$pages$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172515$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172515$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172502$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172502$$);
        }(), function() {
          var $G__172521$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__172529$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172529$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172529$$);
            }(), function() {
              var $G__172539$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$otp$pages$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172539$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172539$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172521$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172521$$);
        }(), function() {
          var $G__172545$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__172549$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172549$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172549$$);
            }(), function() {
              var $G__172555$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172555$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172555$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172545$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172545$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172484$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172484$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172384_173283_G__172395_map__172363_map__172363__$1_props__41571__auto__$jscomp$101_vec__172360$$);
};
$otp$pages$budget$cash_flow$cash_flow$$ = function($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, $G__172622_173297_maybe_ref__41572__auto__$jscomp$102$$) {
  $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$), $G__172622_173297_maybe_ref__41572__auto__$jscomp$102$$], null);
  $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, 0, null);
  $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$ = $APP.$cljs$core$__destructure_map$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$);
  var $id$jscomp$94$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, $APP.$cljs$cst$228$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, 1, null);
  $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, 1, null), $container_ref$jscomp$4$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($otp$pages$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$4$$) : $otp$pages$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$4$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__172622_173297_maybe_ref__41572__auto__$jscomp$102$$ = [$otp$pages$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, $G__172622_173297_maybe_ref__41572__auto__$jscomp$102$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$, $G__172622_173297_maybe_ref__41572__auto__$jscomp$102$$);
  $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$ = function() {
    return {id:$id$jscomp$94$$, ref:$container_ref$jscomp$4$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__172633$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__172633$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__172633$$);
    }() : $otp$pages$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__172638_G__172651$jscomp$inline_4041$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__172638_G__172651$jscomp$inline_4041$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172638_G__172651$jscomp$inline_4041$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172638_G__172651$jscomp$inline_4041$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172638_G__172651$jscomp$inline_4041$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172638_G__172651$jscomp$inline_4041$$);
    }() : function() {
      var $G__172857_map__172661__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($otp$pages$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172857_map__172661__$1_sorted$jscomp$1$$, $cljs$cst$820$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172857_map__172661__$1_sorted$jscomp$1$$, $cljs$cst$819$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__172857_map__172661__$1_sorted$jscomp$1$$, 
      $cljs$cst$818$debt_raised$$), $target_total$jscomp$1$$ = $otp$pages$budget$table$sub_total_all_sections$$($otp$pages$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__172566_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__172566_SHARP_$$, $cljs$cst$823$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__172857_map__172661__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$parse_date$$, $cljs$cst$822$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $otp$pages$budget$cash_flow$group_by_month$$($G__172857_map__172661__$1_sorted$jscomp$1$$), $now_ms$$ = $otp$pages$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = 
        null, $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = 0, $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ = 0;;) {
          if ($G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ < $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$) {
            var $G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ = $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$), $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$ = $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$894$month$$, $APP.$cljs$cst$227$label$$, $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ = $APP.$cljs$core$seq$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$);
            $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$ = null;
            for (var $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ = 0, $i__172766_173330$$ = 0;;) {
              if ($i__172766_173330$$ < $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$) {
                var $entry_173331$$ = $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__172766_173330$$), $entry_ms_173332$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_173331$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_173332$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$890$entry$$, $cljs$cst$890$entry$$, $entry_173331$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$896$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_173331$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__172766_173330$$ += 1;
              } else {
                if ($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ = $APP.$cljs$core$seq$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$) ? ($G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ = $APP.$cljs$core$_chunked_first$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$), $G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ = 
                  $APP.$cljs$core$_chunked_rest$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$), $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$ = $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$, $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ = $APP.$cljs$core$count$$($G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$)) : 
                  ($G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$ = $APP.$cljs$core$first$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$), $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$))), 
                  $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                  $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$890$entry$$, $cljs$cst$890$entry$$, $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$896$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$))], 
                  null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ = $APP.$cljs$core$next$$($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$), $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$ = null, $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ = 
                  0), $i__172766_173330$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ += 1;
          } else {
            if ($G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$ = $APP.$cljs$core$seq$$($G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$)) {
                $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = $APP.$cljs$core$_chunked_first$$($G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$), $G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$ = $APP.$cljs$core$_chunked_rest$$($G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$), $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = 
                $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$, $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = $APP.$cljs$core$count$$($G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$);
              } else {
                $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = $APP.$cljs$core$first$$($G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$);
                $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$894$month$$, $APP.$cljs$cst$227$label$$, $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = $APP.$cljs$core$seq$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$);
                $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = null;
                for ($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ = $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ = 0;;) {
                  if ($G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ < $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$) {
                    $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$ = $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$), $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__173343_c__5673__auto___173340_count__172765_173329_entry_ms_173346_entry_ms_173372$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$890$entry$$, $cljs$cst$890$entry$$, $G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$896$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__173342_chunk__172764_173328_entry_173345_entry_173371_month_label_173325$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ += 1;
                  } else {
                    if ($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = $APP.$cljs$core$seq$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$) ? ($G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ = $APP.$cljs$core$_chunked_first$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$), $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$), $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$, $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ = $APP.$cljs$core$count$$($G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$)) : 
                      ($G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = $APP.$cljs$core$first$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$), $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$822$due$$.$cljs$core$IFn$_invoke$arity$1$($G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$890$entry$$, $cljs$cst$890$entry$$, $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$896$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = $APP.$cljs$core$next$$($G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$), $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = 
                      null, $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ = 0), $G__173341_group_173324_i__172800_173370_seq__172763_173327_seq__172763_173339__$1_temp__5823__auto___173338$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$ = $APP.$cljs$core$next$$($G__173358_seq__172670_173318_seq__172670_173356__$1_temp__5823__auto___173355$$);
                $G__173359_G__173392_chunk__172671_173319_group_173362_seq__172797_173367_seq__172797_173390__$1_temp__5823__auto___173387__$1$$ = null;
                $G__173360_G__173393_c__5673__auto___173357_chunk__172798_173368_count__172672_173320_entry_173396_month_label_173363$$ = 0;
              }
              $G__173394_c__5673__auto___173391_count__172799_173369_entry_ms_173399_i__172673_173321$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__172857_map__172661__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__172863$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cash_flow$summary_header$$, $G__172863$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$summary_header$$, $G__172863$$);
        }(), function() {
          var $G__172873$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$4$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cash_flow$view_toggle$$, $G__172873$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$view_toggle$$, $G__172873$$);
        }(), function() {
          var $G__172883$$ = function() {
            return {className:"relative", children:[function() {
              var $G__172887$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172887$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172887$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$4$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__172918_G__172927_G__172941_i$jscomp$423$$, $G__172917_G__172940_item$jscomp$36$$) {
              var $G__172905_G__172905__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__172917_G__172940_item$jscomp$36$$);
              $G__172905_G__172905__$1$$ = $G__172905_G__172905__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__172905_G__172905__$1$$.$fqn$ : null;
              switch($G__172905_G__172905__$1$$) {
                case "month":
                  return $G__172917_G__172940_item$jscomp$36$$ = {label:$APP.$cljs$cst$227$label$$.$cljs$core$IFn$_invoke$arity$1$($G__172917_G__172940_item$jscomp$36$$), idx:$APP.$cljs$cst$759$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__172917_G__172940_item$jscomp$36$$)}, $G__172918_G__172927_G__172941_i$jscomp$423$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__172918_G__172927_G__172941_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$month_header$$, 
                  $G__172917_G__172940_item$jscomp$36$$, $G__172918_G__172927_G__172941_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$month_header$$, $G__172917_G__172940_item$jscomp$36$$, $G__172918_G__172927_G__172941_i$jscomp$423$$);
                case "now":
                  return $G__172918_G__172927_G__172941_i$jscomp$423$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__172918_G__172927_G__172941_i$jscomp$423$$, "now") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__172918_G__172927_G__172941_i$jscomp$423$$, "now");
                case "entry":
                  return $G__172917_G__172940_item$jscomp$36$$ = {entry:$cljs$cst$890$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__172917_G__172940_item$jscomp$36$$), idx:$APP.$cljs$cst$759$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__172917_G__172940_item$jscomp$36$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$825$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$890$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__172917_G__172940_item$jscomp$36$$)))}, 
                  $G__172918_G__172927_G__172941_i$jscomp$423$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__172918_G__172927_G__172941_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$timeline_node$$, $G__172917_G__172940_item$jscomp$36$$, $G__172918_G__172927_G__172941_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$timeline_node$$, $G__172917_G__172940_item$jscomp$36$$, 
                  $G__172918_G__172927_G__172941_i$jscomp$423$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__172905_G__172905__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$ = $otp$pages$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$15$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$));
              for (var $G__173475_chunk__172959_173452_seq__172958_173472__$1$$ = null, $G__173476_count__172960_173453$$ = 0, $G__173474_i__172961_173454$$ = 0;;) {
                if ($G__173474_i__172961_173454$$ < $G__173476_count__172960_173453$$) {
                  var $vec__173081_173459$$ = $G__173475_chunk__172959_173452_seq__172958_173472__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__173474_i__172961_173454$$), $i_173460$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__173081_173459$$, 0, null), $r_173461$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__173081_173459$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$92$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$92$$ ? $cljs$cst$888$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_173461$$) : $and__5140__auto__$jscomp$92$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__173089$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__173089$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__173089$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__173104$$ = {rollup:$r_173461$$, idx:$i_173460$$}, $G__173105$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_173460$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$month_summary_row$$, $G__173104$$, $G__173105$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$month_summary_row$$, $G__173104$$, $G__173105$$);
                  }());
                  $G__173474_i__172961_173454$$ += 1;
                } else {
                  if ($c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$ = $APP.$cljs$core$seq$$($c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$)) {
                    $G__173475_chunk__172959_173452_seq__172958_173472__$1$$ = $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__173475_chunk__172959_173452_seq__172958_173472__$1$$)) {
                      $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$ = $APP.$cljs$core$_chunked_first$$($G__173475_chunk__172959_173452_seq__172958_173472__$1$$), $G__173474_i__172961_173454$$ = $APP.$cljs$core$_chunked_rest$$($G__173475_chunk__172959_173452_seq__172958_173472__$1$$), $G__173475_chunk__172959_173452_seq__172958_173472__$1$$ = $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$, $G__173476_count__172960_173453$$ = 
                      $APP.$cljs$core$count$$($c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$), $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$ = $G__173474_i__172961_173454$$;
                    } else {
                      $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$ = $APP.$cljs$core$first$$($G__173475_chunk__172959_173452_seq__172958_173472__$1$$);
                      var $i_173479$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$, 0, null), $r_173480$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$93$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$93$$ ? $cljs$cst$888$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_173480$$) : $and__5140__auto__$jscomp$93$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__173133$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__173133$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__173133$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__173143$$ = {rollup:$r_173480$$, idx:$i_173479$$}, $G__173144$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_173479$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$month_summary_row$$, $G__173143$$, $G__173144$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$month_summary_row$$, $G__173143$$, $G__173144$$);
                      }());
                      $c__5673__auto___173473_rollups_seq__172958_173451_temp__5823__auto___173471_vec__173118_173478$$ = $APP.$cljs$core$next$$($G__173475_chunk__172959_173452_seq__172958_173472__$1$$);
                      $G__173475_chunk__172959_173452_seq__172958_173472__$1$$ = null;
                      $G__173476_count__172960_173453$$ = 0;
                    }
                    $G__173474_i__172961_173454$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                var $G__173161$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__173161$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__173161$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$15$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172883$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172883$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172857_map__172661__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__172857_map__172661__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__172621_173296_G__172628_map__172606_map__172606__$1_props__41571__auto__$jscomp$102_vec__172601_vec__172613_vec__172616$$);
};
$otp$pages$budget$non_profit$non_profit$$ = function($G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$, $maybe_ref__41572__auto__$jscomp$103$$) {
  $G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$), $maybe_ref__41572__auto__$jscomp$103$$], null);
  $G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$, 0, null);
  $G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$ = $APP.$cljs$core$__destructure_map$$($G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$);
  var $id$jscomp$95$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$, $APP.$cljs$cst$228$id$$), $subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$, $APP.$cljs$cst$772$subtitle$$), $title$jscomp$32$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$, 
  $APP.$cljs$cst$211$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$$ = $APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$$ = $APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$ = function() {
    return {id:$id$jscomp$95$$, children:function() {
      var $G__170845$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$6$$, title:$title$jscomp$32$$, children:function() {
          var $G__170855$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__170863$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__170871$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__170877$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170877$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170877$$);
                    }(), ", a registered ", function() {
                      var $G__170885$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170885$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170885$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__170917$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170917$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170917$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170871$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__170871$$);
                }(), function() {
                  var $G__170937$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__170951_G__170964$jscomp$inline_4044$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Organization: "};
                      $G__170951_G__170964$jscomp$inline_4044$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170951_G__170964$jscomp$inline_4044$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170951_G__170964$jscomp$inline_4044$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170951_G__170964$jscomp$inline_4044$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__170951_G__170964$jscomp$inline_4044$$);
                    }(), function() {
                      var $G__170985$$ = function() {
                        return {children:[function() {
                          var $G__170997$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170997$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170997$$);
                        }(), function() {
                          var $G__171006$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171006$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171006$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__170985$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__170985$$);
                    }(), function() {
                      var $G__171022$$ = function() {
                        return {children:[function() {
                          var $G__171027$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171027$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171027$$);
                        }(), function() {
                          var $G__171037$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171037$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171037$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171022$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171022$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170937$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170937$$);
                }(), function() {
                  var $G__171049$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__171053$$ = function() {
                        return {children:[function() {
                          var $G__171059_JSCompiler_temp_const$jscomp$inline_4046$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__171069$jscomp$inline_4048_JSCompiler_inline_result$jscomp$inline_4047$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__171069$jscomp$inline_4048_JSCompiler_inline_result$jscomp$inline_4047$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171069$jscomp$inline_4048_JSCompiler_inline_result$jscomp$inline_4047$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171069$jscomp$inline_4048_JSCompiler_inline_result$jscomp$inline_4047$$);
                          $G__171059_JSCompiler_temp_const$jscomp$inline_4046$$ = {className:$G__171059_JSCompiler_temp_const$jscomp$inline_4046$$, children:["Domestic ", $G__171069$jscomp$inline_4048_JSCompiler_inline_result$jscomp$inline_4047$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171059_JSCompiler_temp_const$jscomp$inline_4046$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171059_JSCompiler_temp_const$jscomp$inline_4046$$);
                        }(), function() {
                          var $G__171083$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__171095$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__171103$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171103$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171103$$);
                                }(), function() {
                                  var $G__171118$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171118$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171118$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171095$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171095$$);
                            }(), function() {
                              var $G__171131$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__171144$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171144$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171144$$);
                                }(), function() {
                                  var $G__171165$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171165$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171165$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171131$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171131$$);
                            }(), function() {
                              var $G__171192$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__171196$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171196$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171196$$);
                                }(), function() {
                                  var $G__171201$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171201$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171201$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171192$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171192$$);
                            }(), function() {
                              var $G__171206$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__171210$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171210$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171210$$);
                                }(), function() {
                                  var $G__171214$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__171218$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171218$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171218$$);
                                    }(), function() {
                                      var $G__171223$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171223$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171223$$);
                                    }(), function() {
                                      var $G__171231$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171231$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171231$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171214$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171214$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171206$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171206$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171083$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171083$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171053$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171053$$);
                    }(), function() {
                      var $G__171235$$ = function() {
                        return {children:[function() {
                          var $G__171240_JSCompiler_temp_const$jscomp$inline_4050$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__171247$jscomp$inline_4052_JSCompiler_inline_result$jscomp$inline_4051$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__171247$jscomp$inline_4052_JSCompiler_inline_result$jscomp$inline_4051$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171247$jscomp$inline_4052_JSCompiler_inline_result$jscomp$inline_4051$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171247$jscomp$inline_4052_JSCompiler_inline_result$jscomp$inline_4051$$);
                          $G__171240_JSCompiler_temp_const$jscomp$inline_4050$$ = {className:$G__171240_JSCompiler_temp_const$jscomp$inline_4050$$, children:["International ", $G__171247$jscomp$inline_4052_JSCompiler_inline_result$jscomp$inline_4051$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171240_JSCompiler_temp_const$jscomp$inline_4050$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171240_JSCompiler_temp_const$jscomp$inline_4050$$);
                        }(), function() {
                          var $G__171257$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__171265$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__171273$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171273$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171273$$);
                                }(), function() {
                                  var $G__171283$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171283$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171283$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171265$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171265$$);
                            }(), function() {
                              var $G__171291$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__171295$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171295$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171295$$);
                                }(), function() {
                                  var $G__171303$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171303$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171303$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171291$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171291$$);
                            }(), function() {
                              var $G__171307$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__171315$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171315$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171315$$);
                                }(), function() {
                                  var $G__171324$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171324$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171324$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171307$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171307$$);
                            }(), function() {
                              var $G__171328$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__171333$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171333$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171333$$);
                                }(), function() {
                                  var $G__171337$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171337$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171337$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171328$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171328$$);
                            }(), function() {
                              var $G__171341$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__171345$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171345$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171345$$);
                                }(), function() {
                                  var $G__171349$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__171353$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171353$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171353$$);
                                    }(), function() {
                                      var $G__171357$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171357$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171357$$);
                                    }(), function() {
                                      var $G__171361$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171361$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171361$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171349$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171349$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171341$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171341$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171257$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171257$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171235$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171235$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171049$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171049$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170863$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170863$$);
            }(), function() {
              var $G__171365$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171365$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171365$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170855$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170855$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$budget$section_block$section_block$$, $G__170845$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$budget$section_block$section_block$$, $G__170845$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170839_map__170823_map__170823__$1_props__41571__auto__$jscomp$103_vec__170820$$);
};
$otp$pages$budget$sponsors$logo_card$$ = function($G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$, $logo_map__170710__$1_maybe_ref__41572__auto__$jscomp$104$$) {
  $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$), $logo_map__170710__$1_maybe_ref__41572__auto__$jscomp$104$$], null);
  $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$, 0, null);
  $logo_map__170710__$1_maybe_ref__41572__auto__$jscomp$104$$ = $APP.$cljs$core$__destructure_map$$($G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$);
  $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__170710__$1_maybe_ref__41572__auto__$jscomp$104$$, $APP.$cljs$cst$167$name$$);
  $logo_map__170710__$1_maybe_ref__41572__auto__$jscomp$104$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__170710__$1_maybe_ref__41572__auto__$jscomp$104$$, $cljs$cst$899$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$ = {src:$logo_map__170710__$1_maybe_ref__41572__auto__$jscomp$104$$, alt:$G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__170735_G__170754$jscomp$inline_4286_map__170710_name$jscomp$199_props__41571__auto__$jscomp$104_vec__170707$$);
};
$otp$pages$budget$sponsors$name_item$$ = function($G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$, $accent_map__170995__$1_maybe_ref__41572__auto__$jscomp$105$$) {
  $G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$), $accent_map__170995__$1_maybe_ref__41572__auto__$jscomp$105$$], null);
  $G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$, 0, null);
  $accent_map__170995__$1_maybe_ref__41572__auto__$jscomp$105$$ = $APP.$cljs$core$__destructure_map$$($G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$);
  $G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__170995__$1_maybe_ref__41572__auto__$jscomp$105$$, $APP.$cljs$cst$167$name$$);
  $accent_map__170995__$1_maybe_ref__41572__auto__$jscomp$105$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__170995__$1_maybe_ref__41572__auto__$jscomp$105$$, $cljs$cst$903$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__170995__$1_maybe_ref__41572__auto__$jscomp$105$$]))), children:$G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171012_map__170995_name$jscomp$200_props__41571__auto__$jscomp$105_vec__170992$$);
};
$otp$pages$budget$sponsors$tier_section$$ = function($G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$, $map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$) {
  $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$), $map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$], null);
  $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$, 0, null);
  $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$ = $APP.$cljs$core$__destructure_map$$($G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$);
  $map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$, $cljs$cst$897$tier$$);
  $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$, $cljs$cst$907$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($otp$pages$budget$sponsors$tier_meta$$, $map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$);
  $map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$ = $APP.$cljs$core$__destructure_map$$($map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$);
  var $label$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$, $APP.$cljs$cst$227$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$, $cljs$cst$903$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171048_map__171048__$1_maybe_ref__41572__auto__$jscomp$106_tier$$, 
  $APP.$cljs$cst$207$border$$), $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$899$logo$$, $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$899$logo$$, $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$);
  $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__171065_G__171071$jscomp$inline_4057$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$20$$};
      $G__171065_G__171071$jscomp$inline_4057$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171065_G__171071$jscomp$inline_4057$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__171065_G__171071$jscomp$inline_4057$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171065_G__171071$jscomp$inline_4057$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171065_G__171071$jscomp$inline_4057$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__171086$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$201_p__171096$$) {
          var $G__171109_logo$jscomp$1_map__171099__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$201_p__171096$$);
          $name$jscomp$201_p__171096$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171109_logo$jscomp$1_map__171099__$1$$, $APP.$cljs$cst$167$name$$);
          $G__171109_logo$jscomp$1_map__171099__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171109_logo$jscomp$1_map__171099__$1$$, $cljs$cst$899$logo$$);
          $G__171109_logo$jscomp$1_map__171099__$1$$ = {name:$name$jscomp$201_p__171096$$, logo:$G__171109_logo$jscomp$1_map__171099__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$sponsors$logo_card$$, $G__171109_logo$jscomp$1_map__171099__$1$$, $name$jscomp$201_p__171096$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$logo_card$$, $G__171109_logo$jscomp$1_map__171099__$1$$, $name$jscomp$201_p__171096$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171086$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171086$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__171127$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__171139__$1_name$jscomp$202_p__171138$$) {
          $map__171139__$1_name$jscomp$202_p__171138$$ = $APP.$cljs$core$__destructure_map$$($map__171139__$1_name$jscomp$202_p__171138$$);
          $map__171139__$1_name$jscomp$202_p__171138$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171139__$1_name$jscomp$202_p__171138$$, $APP.$cljs$cst$167$name$$);
          var $G__171148_JSCompiler_temp_const$jscomp$inline_4059$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__171162$jscomp$inline_4061_JSCompiler_inline_result$jscomp$inline_4060$$ = {name:$map__171139__$1_name$jscomp$202_p__171138$$, accent:$accent$jscomp$1$$};
          $G__171162$jscomp$inline_4061_JSCompiler_inline_result$jscomp$inline_4060$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$sponsors$name_item$$, $G__171162$jscomp$inline_4061_JSCompiler_inline_result$jscomp$inline_4060$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$name_item$$, $G__171162$jscomp$inline_4061_JSCompiler_inline_result$jscomp$inline_4060$$);
          $G__171148_JSCompiler_temp_const$jscomp$inline_4059$$ = {className:$G__171148_JSCompiler_temp_const$jscomp$inline_4059$$, children:$G__171162$jscomp$inline_4061_JSCompiler_inline_result$jscomp$inline_4060$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__171148_JSCompiler_temp_const$jscomp$inline_4059$$, $map__171139__$1_name$jscomp$202_p__171138$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171148_JSCompiler_temp_const$jscomp$inline_4059$$, $map__171139__$1_name$jscomp$202_p__171138$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171127$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171127$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171057_map__171046_map__171046__$1_members$jscomp$1_props__41571__auto__$jscomp$106_vec__171043$$);
};
$otp$pages$budget$sponsors$sponsors_section$$ = function($G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$, $maybe_ref__41572__auto__$jscomp$107$$) {
  $G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$), $maybe_ref__41572__auto__$jscomp$107$$], null);
  $G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$, 0, null);
  $G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$ = $APP.$cljs$core$__destructure_map$$($G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$);
  var $id$jscomp$96$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$, $APP.$cljs$cst$228$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$, $APP.$cljs$cst$772$subtitle$$), $title$jscomp$33$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$, 
  $APP.$cljs$cst$211$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__171238$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__171238$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__171238$$, 1, null);
    return $cljs$cst$904$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($otp$pages$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$897$tier$$, $otp$pages$budget$sponsors$sponsors$$));
  $G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$ = function() {
    return {id:$id$jscomp$96$$, children:function() {
      var $G__171255$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$33$$, children:function() {
          var $G__171263$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__171271$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__171279$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171279$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171279$$);
                }(), function() {
                  var $G__171287$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171287$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171287$$);
                }(), function() {
                  var $G__171297$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171297$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171297$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171271$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171271$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__171319_members$jscomp$2_p__171308$$) {
              var $G__171320_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171319_members$jscomp$2_p__171308$$, 0, null);
              $G__171319_members$jscomp$2_p__171308$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171319_members$jscomp$2_p__171308$$, 1, null);
              $G__171319_members$jscomp$2_p__171308$$ = {tier:$G__171320_tier$jscomp$2$$, members:$G__171319_members$jscomp$2_p__171308$$};
              $G__171320_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__171320_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$sponsors$tier_section$$, $G__171319_members$jscomp$2_p__171308$$, $G__171320_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$tier_section$$, $G__171319_members$jscomp$2_p__171308$$, $G__171320_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171263$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171263$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$budget$section_block$section_block$$, $G__171255$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$budget$section_block$section_block$$, $G__171255$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171251_map__171229_map__171229__$1_props__41571__auto__$jscomp$107_vec__171226$$);
};
$otp$pages$budget$why_support$preview$$ = function($G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$, $maybe_ref__41572__auto__$jscomp$108$$) {
  $G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$), $maybe_ref__41572__auto__$jscomp$108$$], null);
  $G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__170772$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170772$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170772$$);
    }(), function() {
      var $G__170788$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170788$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170788$$);
    }(), function() {
      var $G__170808$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170808$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170808$$);
    }(), function() {
      var $G__170831$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170831$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170831$$);
    }(), function() {
      var $G__170853$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170853$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170853$$);
    }(), function() {
      var $G__170895$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__170895$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__170895$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__170760_map__170748_props__41571__auto__$jscomp$108_vec__170745$$);
};
$otp$pages$budget$why_support$details$$ = function($G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$, $maybe_ref__41572__auto__$jscomp$109$$) {
  $G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$), $maybe_ref__41572__auto__$jscomp$109$$], null);
  $G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__171101$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171101$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171101$$);
    }(), function() {
      var $G__171112$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171112$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171112$$);
    }(), function() {
      var $G__171122$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171122$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171122$$);
    }(), function() {
      var $G__171133$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171133$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171133$$);
    }(), function() {
      var $G__171141$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171141$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171141$$);
    }(), function() {
      var $G__171155$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171155$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171155$$);
    }(), function() {
      var $G__171171$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171171$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171171$$);
    }(), function() {
      var $G__171177_G__171184$jscomp$inline_4064$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__171177_G__171184$jscomp$inline_4064$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171177_G__171184$jscomp$inline_4064$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171177_G__171184$jscomp$inline_4064$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171177_G__171184$jscomp$inline_4064$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171177_G__171184$jscomp$inline_4064$$);
    }(), function() {
      var $G__171371$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-5"]))), children:[function() {
          var $G__171382_G__171386$jscomp$inline_4067$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"National dignity, made public: "};
          $G__171382_G__171386$jscomp$inline_4067$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171382_G__171386$jscomp$inline_4067$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171382_G__171386$jscomp$inline_4067$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171382_G__171386$jscomp$inline_4067$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171382_G__171386$jscomp$inline_4067$$);
        }(), function() {
          var $G__171414_G__171419$jscomp$inline_4070$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Soft power that compounds: "};
          $G__171414_G__171419$jscomp$inline_4070$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171414_G__171419$jscomp$inline_4070$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171414_G__171419$jscomp$inline_4070$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171414_G__171419$jscomp$inline_4070$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171414_G__171419$jscomp$inline_4070$$);
        }(), function() {
          var $G__171423_G__171427$jscomp$inline_4073$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Narrative control: "};
          $G__171423_G__171427$jscomp$inline_4073$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171423_G__171427$jscomp$inline_4073$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171423_G__171427$jscomp$inline_4073$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171423_G__171427$jscomp$inline_4073$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171423_G__171427$jscomp$inline_4073$$);
        }(), function() {
          var $G__171431_G__171435$jscomp$inline_4076$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"A platform for future generations: "};
          $G__171431_G__171435$jscomp$inline_4076$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171431_G__171435$jscomp$inline_4076$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171431_G__171435$jscomp$inline_4076$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171431_G__171435$jscomp$inline_4076$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171431_G__171435$jscomp$inline_4076$$);
        }(), function() {
          var $G__171439_G__171443$jscomp$inline_4079$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Diaspora cohesion: "};
          $G__171439_G__171443$jscomp$inline_4079$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171439_G__171443$jscomp$inline_4079$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171439_G__171443$jscomp$inline_4079$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171439_G__171443$jscomp$inline_4079$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171439_G__171443$jscomp$inline_4079$$);
        }(), function() {
          var $G__171447_G__171451$jscomp$inline_4082$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Institutional consequences: "};
          $G__171447_G__171451$jscomp$inline_4082$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171447_G__171451$jscomp$inline_4082$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171447_G__171451$jscomp$inline_4082$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__171447_G__171451$jscomp$inline_4082$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__171447_G__171451$jscomp$inline_4082$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171371$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171371$$);
    }(), function() {
      var $G__171455$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__171459$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171459$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171459$$);
        }(), function() {
          var $G__171463$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171463$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171463$$);
        }(), function() {
          var $G__171467$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171467$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171467$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171455$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171455$$);
    }(), function() {
      var $G__171471$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171471$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171471$$);
    }(), function() {
      var $G__171475$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying representation with consequences: an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable.'};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171475$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171475$$);
    }(), function() {
      var $G__171479$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171479$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171479$$);
    }(), function() {
      var $G__171483$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171483$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171483$$);
    }(), function() {
      var $G__171487$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171487$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171487$$);
    }(), function() {
      var $G__171491$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__171491$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__171491$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__171091_map__171081_props__41571__auto__$jscomp$109_vec__171078$$);
};
$otp$pages$budget$why_support$why_support$$ = function($G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$, $G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$) {
  $G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$), $G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$], null);
  $G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$, 0, null);
  var $map__171616__$1_title$jscomp$34$$ = $APP.$cljs$core$__destructure_map$$($G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$);
  $G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171616__$1_title$jscomp$34$$, $APP.$cljs$cst$228$id$$);
  $G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171616__$1_title$jscomp$34$$, $APP.$cljs$cst$772$subtitle$$);
  $map__171616__$1_title$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__171616__$1_title$jscomp$34$$, $APP.$cljs$cst$211$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$ = {idx:9, "section-hint":$G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$, title:$map__171616__$1_title$jscomp$34$$, "expand-button-label":"Read more", "preview-text":$otp$pages$budget$why_support$preview$$, "full-text":$otp$pages$budget$why_support$details$$};
  $G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$);
  $G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$ = {id:$G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$, children:$G__171629$jscomp$inline_4085_JSCompiler_inline_result$jscomp$inline_4084_maybe_ref__41572__auto__$jscomp$110_subtitle$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__171621_id$jscomp$97_map__171616_props__41571__auto__$jscomp$110_vec__171610$$);
};
$otp$pages$budget$section$section_link$$ = function($G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$, $maybe_ref__41572__auto__$jscomp$111$$) {
  $G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$), $maybe_ref__41572__auto__$jscomp$111$$], null);
  $G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$, 0, null);
  $G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$ = $APP.$cljs$core$__destructure_map$$($G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$);
  var $title$jscomp$35$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$, $APP.$cljs$cst$211$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$, $cljs$cst$908$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$otp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$3$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$nav_link$$), children:[$title$jscomp$35$$, " ", function() {
      var $G__173290$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$icons$ChevronRightIcon$$, $G__173290$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$icons$ChevronRightIcon$$, $G__173290$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__173286_map__173282_map__173282__$1_props__41571__auto__$jscomp$111_vec__173279$$);
};
$otp$pages$budget$section$header$$ = function($G__173374_props__41571__auto__$jscomp$112$$) {
  $APP.$helix$core$extract_cljs_props$$($G__173374_props__41571__auto__$jscomp$112$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__173374_props__41571__auto__$jscomp$112$$ = function() {
    return {className:"relative", children:[function() {
      var $G__173378_G__173386$jscomp$inline_4088$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__173378_G__173386$jscomp$inline_4088$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__173378_G__173386$jscomp$inline_4088$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__173378_G__173386$jscomp$inline_4088$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__173378_G__173386$jscomp$inline_4088$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__173378_G__173386$jscomp$inline_4088$$);
    }(), function() {
      var $G__173398_G__173403$jscomp$inline_4091$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$otp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__173398_G__173403$jscomp$inline_4091$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__173398_G__173403$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__173398_G__173403$jscomp$inline_4091$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__173398_G__173403$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__173398_G__173403$jscomp$inline_4091$$);
    }(), function() {
      var $G__173407$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__173419$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__173423$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173423$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173423$$);
            }(), function() {
              var $G__173427$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173427$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173427$$);
            }(), function() {
              var $G__173431$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173431$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173431$$);
            }(), function() {
              var $G__173435$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173435$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173435$$);
            }(), function() {
              var $G__173440$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173440$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173440$$);
            }(), function() {
              var $G__173444$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173444$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173444$$);
            }(), function() {
              var $G__173448$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173448$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173448$$);
            }(), function() {
              var $G__173456$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173456$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173456$$);
            }(), function() {
              var $G__173463$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__173463$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__173463$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__173419$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__173419$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__173407$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__173407$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__173374_props__41571__auto__$jscomp$112$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__173374_props__41571__auto__$jscomp$112$$);
};
$otp$pages$budget$section$budget_section$$ = function($G__173491_props__41571__auto__$jscomp$113$$) {
  $APP.$helix$core$extract_cljs_props$$($G__173491_props__41571__auto__$jscomp$113$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__173491_props__41571__auto__$jscomp$113$$ = function() {
    return {"section-id":"budget-section", children:function() {
      var $G__173496$$ = {children:[function() {
        var $G__173498$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$header$$, $G__173498$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$header$$, $G__173498$$);
      }(), function() {
        var $G__173500$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$landing$press_release$press_release$$, $G__173500$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$landing$press_release$press_release$$, $G__173500$$);
      }(), function() {
        var $G__173504$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$landing$studio$about_studio$$, $G__173504$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$landing$studio$about_studio$$, $G__173504$$);
      }(), function() {
        var $G__173508$$ = {id:"section-3", subtitle:"financials", title:"budget"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cost_breakdown$cost_breakdown$$, $G__173508$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cost_breakdown$cost_breakdown$$, $G__173508$$);
      }(), function() {
        var $G__173512$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cash_flow$cash_flow$$, $G__173512$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$cash_flow$$, $G__173512$$);
      }(), function() {
        var $G__173516$$ = {id:"section-5", subtitle:"team", title:"committee"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$committee$committee$$, $G__173516$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$committee$committee$$, $G__173516$$);
      }(), function() {
        var $G__173520$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$sponsors$sponsors_section$$, $G__173520$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$sponsors_section$$, $G__173520$$);
      }(), function() {
        var $G__173524$$ = {id:"section-7", subtitle:"venue", title:"location information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$location$location_section$$, $G__173524$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$location$location_section$$, $G__173524$$);
      }(), function() {
        var $G__173528$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$non_profit$non_profit$$, $G__173528$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$non_profit$non_profit$$, $G__173528$$);
      }(), function() {
        var $G__173532$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$why_support$why_support$$, $G__173532$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$why_support$why_support$$, $G__173532$$);
      }()]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$page_shell$page_shell$$, $G__173496$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$otp$ui$page_shell$page_shell$$, $G__173496$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$otp$ui$section$section$$, $G__173491_props__41571__auto__$jscomp$113$$, "budget-section") : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section$section$$, $G__173491_props__41571__auto__$jscomp$113$$, "budget-section");
};
$APP.$otp$pages$budget$page$budget_view$$ = function($G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$, $maybe_ref__41572__auto__$jscomp$114$$) {
  $G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$), $maybe_ref__41572__auto__$jscomp$114$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$ = {};
  $G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$budget_section$$, $G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$budget_section$$, $G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__173542_G__173546$jscomp$inline_3565_props__41571__auto__$jscomp$114_vec__173538$$);
};
$cljs$cst$856$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$870$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$829$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$848$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$858$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$823$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$903$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$809$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$852$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$885$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$874$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$906$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$834$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$861$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$888$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$812$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$894$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$905$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$836$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$846$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$864$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$884$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$883$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$824$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$821$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$865$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$886$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$817$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$828$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$869$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$818$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$862$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$806$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$897$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$838$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$878$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$803$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$813$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$859$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$845$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$847$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$842$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$887$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$875$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$835$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$853$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$825$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$801$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$879$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$851$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$904$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$849$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$857$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$890$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$880$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$840$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$808$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$877$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$837$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$822$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$807$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$843$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$866$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$826$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$881$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$841$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$860$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$863$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$800$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$896$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$820$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$889$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$892$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$805$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$802$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$850$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$815$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$811$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$901$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$882$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$819$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$872$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$832$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$907$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$804$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$876$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$891$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$902$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$871$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$830$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$855$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$900$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$899$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$831$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$814$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$908$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$810$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$854$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$873$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$833$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$895$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$867$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$868$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$827$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$898$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$839$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$844$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$816$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$893$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $otp$pages$budget$committee$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Archbishop Derderian", $APP.$cljs$cst$799$role$$, "Committee Lead", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, 
[$APP.$cljs$cst$167$name$$, "Tony Shafrazi", $APP.$cljs$cst$799$role$$, "Chief Curator", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Tina Chakarian", $APP.$cljs$cst$799$role$$, "Curator", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Zadik Zadikian", $APP.$cljs$cst$799$role$$, "Artist", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Rafi Ourfalian", $APP.$cljs$cst$799$role$$, "Legal Advisor", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Khachik Khudikyan", $APP.$cljs$cst$799$role$$, "Logistics Advisor", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Andranik Torosyan", $APP.$cljs$cst$799$role$$, "Financial Advisor", 
$APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Aram Alajajian", $APP.$cljs$cst$799$role$$, "Architect", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$799$role$$, "Committee Member", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$735$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$preview$$, 
"otp.pages.budget.committee/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$details$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$details$$, 
"otp.pages.budget.committee/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$committee_member_card$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$committee_member_card$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$committee_member_card$$, "otp.pages.budget.committee/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$committee_gallery$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$committee_gallery$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$committee_gallery$$, "otp.pages.budget.committee/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$committee$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$committee$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$committee$$, 
"otp.pages.budget.committee/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$total_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$table$total_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$total_section$$, 
"otp.pages.budget.table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$detail_line_item$$, "", null, null) : (void 0).call(null, $otp$pages$budget$table$detail_line_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$detail_line_item$$, 
"otp.pages.budget.table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, $otp$pages$budget$table$section_line_item$$, 
'(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$section_line_item$$, "otp.pages.budget.table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $otp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", 
null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$budget_table$$, "otp.pages.budget.table/budget-table"));
var $otp$pages$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$809$venue$$, $APP.$cljs$cst$211$title$$, "Venue \x26 Operations", $cljs$cst$807$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$211$title$$, "Base Rent", $cljs$cst$800$amount$$, 145600, $cljs$cst$807$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$211$title$$, 
"Base Staff", $cljs$cst$800$amount$$, 50000, $cljs$cst$807$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$211$title$$, "Curatorial Mediator", $cljs$cst$800$amount$$, 25000, $cljs$cst$807$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$211$title$$, "Cleaning", $cljs$cst$800$amount$$, 7000, $cljs$cst$807$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$211$title$$, "Permits \x26 Signage", $cljs$cst$800$amount$$, 10000, $cljs$cst$807$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$211$title$$, "Fire Safety Cert.", $cljs$cst$800$amount$$, 3500, $cljs$cst$807$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$211$title$$, "Liability Ins.", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Construction", $APP.$cljs$cst$211$title$$, "Partitions \x26 Walls", $cljs$cst$800$amount$$, 9500, $cljs$cst$807$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Construction", $APP.$cljs$cst$211$title$$, "Lighting", $cljs$cst$800$amount$$, 7500, $cljs$cst$807$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Taxes", $APP.$cljs$cst$211$title$$, "Signage Taxes", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Taxes", $APP.$cljs$cst$211$title$$, "VAT 22%", $cljs$cst$800$amount$$, 55E3, $cljs$cst$807$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$211$title$$, "Team Lodging", $cljs$cst$800$amount$$, 95E3, $cljs$cst$807$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$211$title$$, "Per Diem", $cljs$cst$800$amount$$, 66E3, $cljs$cst$807$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$211$title$$, "Project Insurance", $cljs$cst$800$amount$$, 5E4, $cljs$cst$807$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$810$admin$$, $APP.$cljs$cst$211$title$$, "Administration", $cljs$cst$807$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Curators", $cljs$cst$800$amount$$, 9E4, $cljs$cst$807$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Artist", $cljs$cst$800$amount$$, 
45E3, $cljs$cst$807$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Project Coordinator", $cljs$cst$800$amount$$, 45E3, $cljs$cst$807$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$211$title$$, "Team Travel", $cljs$cst$800$amount$$, 
49E3, $cljs$cst$807$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$211$title$$, "Team Lodging", $cljs$cst$800$amount$$, 7500, $cljs$cst$807$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$211$title$$, "Misc", $cljs$cst$800$amount$$, 5500, $cljs$cst$807$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$811$la_prod$$, $APP.$cljs$cst$211$title$$, "LA Production", $cljs$cst$807$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, "Lead Caster", $cljs$cst$800$amount$$, 37625, $cljs$cst$807$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, "Caster", $cljs$cst$800$amount$$, 
22500, $cljs$cst$807$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, "General Assistant", $cljs$cst$800$amount$$, 21500, $cljs$cst$807$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, "Mold Maker", $cljs$cst$800$amount$$, 
15E3, $cljs$cst$807$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, "Foam Sprayer", $cljs$cst$800$amount$$, 9E3, $cljs$cst$807$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, "Casting Asst. ×3", 
$cljs$cst$800$amount$$, 9E3, $cljs$cst$807$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, "Packers ×4", $cljs$cst$800$amount$$, 14E3, $cljs$cst$807$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$211$title$$, 
"Crate Makers ×2", $cljs$cst$800$amount$$, 1E4, $cljs$cst$807$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$211$title$$, "Studio Rental", $cljs$cst$800$amount$$, 22500, $cljs$cst$807$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", 
$APP.$cljs$cst$211$title$$, "Foam Space Rental", $cljs$cst$800$amount$$, 5500, $cljs$cst$807$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$211$title$$, "Utilities", $cljs$cst$800$amount$$, 3E3, $cljs$cst$807$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Pigment", $cljs$cst$800$amount$$, 11500, $cljs$cst$807$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Honeycomb", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Polymers", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Foam Material", $cljs$cst$800$amount$$, 21E3, $cljs$cst$807$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Plaster", $cljs$cst$800$amount$$, 4500, $cljs$cst$807$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Supplies", $cljs$cst$800$amount$$, 10500, $cljs$cst$807$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Mold Supplies", $cljs$cst$800$amount$$, 17500, $cljs$cst$807$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Crate Materials", $cljs$cst$800$amount$$, 15E3, $cljs$cst$807$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Packing Supplies", $cljs$cst$800$amount$$, 5E3, $cljs$cst$807$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Misc", $cljs$cst$800$amount$$, 7500, $cljs$cst$807$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$812$the_studio$$, $APP.$cljs$cst$211$title$$, "The Studio", $cljs$cst$807$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Studio Asst. #1", $cljs$cst$800$amount$$, 54E3, $cljs$cst$807$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Studio Asst. #2", $cljs$cst$800$amount$$, 46500, $cljs$cst$807$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Studio Asst. #3", $cljs$cst$800$amount$$, 23500, $cljs$cst$807$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Studio Asst. #4", $cljs$cst$800$amount$$, 23500, $cljs$cst$807$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Studio Asst. #5", $cljs$cst$800$amount$$, 6E3, $cljs$cst$807$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$211$title$$, "Studio Asst. #6", $cljs$cst$800$amount$$, 6E3, $cljs$cst$807$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$211$title$$, "Installers ×4", $cljs$cst$800$amount$$, 32E3, $cljs$cst$807$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$211$title$$, "Crate Makers ×2", $cljs$cst$800$amount$$, 11E3, $cljs$cst$807$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Foam Material", $cljs$cst$800$amount$$, 11500, $cljs$cst$807$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Pigment", $cljs$cst$800$amount$$, 
6750, $cljs$cst$807$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Plaster", $cljs$cst$800$amount$$, 4750, $cljs$cst$807$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Supplies", $cljs$cst$800$amount$$, 4750, 
$cljs$cst$807$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Crate Materials", $cljs$cst$800$amount$$, 7500, $cljs$cst$807$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Packing Supplies", $cljs$cst$800$amount$$, 
2500, $cljs$cst$807$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$211$title$$, "Misc Materials", $cljs$cst$800$amount$$, 4250, $cljs$cst$807$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$813$logistics$$, $APP.$cljs$cst$211$title$$, 
"Logistics \x26 Transport", $cljs$cst$807$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$211$title$$, 
"Ship LA → Venice", $cljs$cst$800$amount$$, 3E4, $cljs$cst$807$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$211$title$$, "Ship Venice → LA", $cljs$cst$800$amount$$, 3E4, $cljs$cst$807$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$211$title$$, "Transit Insurance", $cljs$cst$800$amount$$, 12E3, $cljs$cst$807$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$211$title$$, "Installers (Venice)", $cljs$cst$800$amount$$, 7200, $cljs$cst$807$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$211$title$$, "Uninstallers (Venice)", $cljs$cst$800$amount$$, 9E3, $cljs$cst$807$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$211$title$$, "Port Handling", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$211$title$$, "Barge (Port → Stor.)", $cljs$cst$800$amount$$, 3E3, $cljs$cst$807$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$211$title$$, "Trucking (Stor. → Venue)", $cljs$cst$800$amount$$, 1200, $cljs$cst$807$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$211$title$$, "Barge (Stor. → Venue)", $cljs$cst$800$amount$$, 3E3, $cljs$cst$807$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$211$title$$, "Forklift \x26 Operator", 
$cljs$cst$800$amount$$, 1300, $cljs$cst$807$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$211$title$$, "Handling Crew", $cljs$cst$800$amount$$, 500, $cljs$cst$807$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Storage", $APP.$cljs$cst$211$title$$, "Short-Term Storage", $cljs$cst$800$amount$$, 1200, $cljs$cst$807$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Storage", $APP.$cljs$cst$211$title$$, "Empty Crate Storage", $cljs$cst$800$amount$$, 2E3, $cljs$cst$807$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Storage", $APP.$cljs$cst$211$title$$, "Waste Removal", $cljs$cst$800$amount$$, 1E3, $cljs$cst$807$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$211$title$$, "Reverse Barge", $cljs$cst$800$amount$$, 3E3, $cljs$cst$807$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$211$title$$, "Reverse Trucking", $cljs$cst$800$amount$$, 1200, $cljs$cst$807$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$211$title$$, "Reverse Port Handling", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$814$opening$$, $APP.$cljs$cst$211$title$$, "Opening Week", $cljs$cst$807$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$211$title$$, "Catering — Food", $cljs$cst$800$amount$$, 5250, $cljs$cst$807$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$211$title$$, "Catering — Beverages", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$211$title$$, "Catering Staff", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$211$title$$, "Rentals", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$211$title$$, "Event Coordinator", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$211$title$$, "Security", $cljs$cst$800$amount$$, 800, $cljs$cst$807$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$211$title$$, "Audio, Light \x26 Tech", $cljs$cst$800$amount$$, 1E3, $cljs$cst$807$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$211$title$$, "Event Photography", $cljs$cst$800$amount$$, 500, $cljs$cst$807$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$211$title$$, "Invitations", $cljs$cst$800$amount$$, 500, $cljs$cst$807$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "VIP Programs", $APP.$cljs$cst$211$title$$, "VIP Press Preview", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "VIP Programs", $APP.$cljs$cst$211$title$$, "VIP Water Taxi", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$815$marketing$$, $APP.$cljs$cst$211$title$$, "Marketing \x26 PR", $cljs$cst$807$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$211$title$$, "Visual Identity", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$211$title$$, 
"Essentials Package", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$211$title$$, "Website \x26 Hosting", $cljs$cst$800$amount$$, 7500, $cljs$cst$807$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$211$title$$, 
"OOH Design", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$211$title$$, "Exhibition Graphics", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$211$title$$, 
"Social Copywriting", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$211$title$$, "PR Writing", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$211$title$$, 
"Totem Placement", $cljs$cst$800$amount$$, 8500, $cljs$cst$807$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$211$title$$, "Vaporetto Wraps", $cljs$cst$800$amount$$, 12500, $cljs$cst$807$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Advertising", $APP.$cljs$cst$211$title$$, "Poster Printing", $cljs$cst$800$amount$$, 5E3, $cljs$cst$807$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$211$title$$, "Outdoor Posters", $cljs$cst$800$amount$$, 3E3, $cljs$cst$807$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$211$title$$, "Social Media Ads", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$211$title$$, "Social Campaign Mgmt", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$211$title$$, "Digital Pub Ads", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$211$title$$, "Print Pub Ads", $cljs$cst$800$amount$$, 5E3, $cljs$cst$807$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$211$title$$, "PR — Pre-Opening", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$211$title$$, "PR — Ongoing", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$211$title$$, "Marketing Mgmt Fee", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$816$publication$$, $APP.$cljs$cst$211$title$$, "Publications", $cljs$cst$807$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$211$title$$, "Curatorial Essay", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$211$title$$, 
"Catalogue Essays", $cljs$cst$800$amount$$, 4E3, $cljs$cst$807$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", $APP.$cljs$cst$211$title$$, "Design", $cljs$cst$800$amount$$, 7500, $cljs$cst$807$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", 
$APP.$cljs$cst$211$title$$, "Editing \x26 Layout", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", $APP.$cljs$cst$211$title$$, "Printing", $cljs$cst$800$amount$$, 12E3, $cljs$cst$807$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Catalogue", $APP.$cljs$cst$211$title$$, "Proofs \x26 Shipping", $cljs$cst$800$amount$$, 1E3, $cljs$cst$807$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$211$title$$, "Design", $cljs$cst$800$amount$$, 2500, $cljs$cst$807$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$211$title$$, 
"Printing", $cljs$cst$800$amount$$, 4500, $cljs$cst$807$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$211$title$$, "Proofs \x26 Shipping", $cljs$cst$800$amount$$, 1E3, $cljs$cst$807$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$211$title$$, 
"Design", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$211$title$$, "Printing", $cljs$cst$800$amount$$, 1500, $cljs$cst$807$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$211$title$$, "Proofs \x26 Shipping", $cljs$cst$800$amount$$, 
250, $cljs$cst$807$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$228$id$$, $cljs$cst$817$documentation$$, $APP.$cljs$cst$211$title$$, "Documentation", $cljs$cst$807$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$801$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$211$title$$, "Camera \x26 Lighting", $cljs$cst$800$amount$$, 1E4, $cljs$cst$807$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$211$title$$, 
"DPs ×2", $cljs$cst$800$amount$$, 20400, $cljs$cst$807$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$211$title$$, "Assistant / Gaffer", $cljs$cst$800$amount$$, 4500, $cljs$cst$807$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Production", $APP.$cljs$cst$211$title$$, "Sound Recording", $cljs$cst$800$amount$$, 2800, $cljs$cst$807$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$211$title$$, "Photo — Install", $cljs$cst$800$amount$$, 1750, $cljs$cst$807$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$211$title$$, "Photo — Exhibition", $cljs$cst$800$amount$$, 1800, $cljs$cst$807$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$211$title$$, "Photo — Opening", $cljs$cst$800$amount$$, 1400, $cljs$cst$807$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$211$title$$, "Film Assembly", $cljs$cst$800$amount$$, 3E3, $cljs$cst$807$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$211$title$$, "Final Cut \x26 Color", $cljs$cst$800$amount$$, 2400, $cljs$cst$807$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$211$title$$, "Sound Edit \x26 Mix", $cljs$cst$800$amount$$, 1600, $cljs$cst$807$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$211$title$$, "Social Deliverables", $cljs$cst$800$amount$$, 6E3, $cljs$cst$807$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$211$title$$, "Backup \x26 Archive", $cljs$cst$800$amount$$, 750, $cljs$cst$807$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$preview$$, 
"otp.pages.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$details$$, 
"otp.pages.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$footer$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$footer$$, 
"otp.pages.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$cost_breakdown$$, "otp.pages.budget.cost-breakdown/cost-breakdown"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$preview_text$$, "", null, null) : (void 0).call(null, $otp$pages$budget$location$preview_text$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$preview_text$$, 
"otp.pages.budget.location/preview-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$location$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$preview$$, 
"otp.pages.budget.location/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$full_details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $otp$pages$budget$location$full_details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$full_details$$, "otp.pages.budget.location/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$location_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$location$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$location_section$$, 
"otp.pages.budget.location/location-section"));
var $otp$pages$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$818$debt_raised$$, 0, $cljs$cst$819$funds_raised$$, 175000, $cljs$cst$820$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$821$admin_jul_25$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team (Jul)", $cljs$cst$822$due$$, "2025-07-15", $cljs$cst$800$amount$$, 10000, $cljs$cst$823$priority$$, 
$cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$826$contingency_jul_25$$, $APP.$cljs$cst$211$title$$, "Contingency (Jul)", $cljs$cst$822$due$$, "2025-07-20", $cljs$cst$800$amount$$, 500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$827$admin_aug_25$$, 
$APP.$cljs$cst$211$title$$, "Admin — Core Team (Aug)", $cljs$cst$822$due$$, "2025-08-15", $cljs$cst$800$amount$$, 10000, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$828$contingency_aug_25$$, $APP.$cljs$cst$211$title$$, "Contingency (Aug)", $cljs$cst$822$due$$, "2025-08-20", $cljs$cst$800$amount$$, 500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$829$venice_sep_25$$, $APP.$cljs$cst$211$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$822$due$$, "2025-09-05", $cljs$cst$800$amount$$, 13000, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$830$admin_sep_25$$, 
$APP.$cljs$cst$211$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$822$due$$, "2025-09-15", $cljs$cst$800$amount$$, 20000, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$832$contingency_sep_25$$, $APP.$cljs$cst$211$title$$, "Contingency (Sep)", $cljs$cst$822$due$$, "2025-09-20", $cljs$cst$800$amount$$, 650, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$833$venice_oct_25$$, $APP.$cljs$cst$211$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$822$due$$, "2025-10-05", $cljs$cst$800$amount$$, 13E3, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$834$admin_oct_25$$, 
$APP.$cljs$cst$211$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$822$due$$, "2025-10-15", $cljs$cst$800$amount$$, 2E4, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$835$contingency_oct_25$$, $APP.$cljs$cst$211$title$$, "Contingency (Oct)", $cljs$cst$822$due$$, "2025-10-20", $cljs$cst$800$amount$$, 650, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$836$la_nov_25$$, $APP.$cljs$cst$211$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$822$due$$, "2025-11-10", $cljs$cst$800$amount$$, 31325, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$837$admin_nov_25$$, 
$APP.$cljs$cst$211$title$$, "Admin — Core Team (Nov)", $cljs$cst$822$due$$, "2025-11-15", $cljs$cst$800$amount$$, 1E4, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$838$contingency_nov_25$$, $APP.$cljs$cst$211$title$$, "Contingency (Nov)", $cljs$cst$822$due$$, "2025-11-20", $cljs$cst$800$amount$$, 1566, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$839$la_dec_25$$, $APP.$cljs$cst$211$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$822$due$$, "2025-12-10", $cljs$cst$800$amount$$, 31325, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$840$admin_dec_25$$, 
$APP.$cljs$cst$211$title$$, "Admin — Core Team (Dec)", $cljs$cst$822$due$$, "2025-12-15", $cljs$cst$800$amount$$, 1E4, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$841$contingency_dec_25$$, $APP.$cljs$cst$211$title$$, "Contingency (Dec)", $cljs$cst$822$due$$, "2025-12-20", $cljs$cst$800$amount$$, 1566, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$842$venice_jan_26$$, $APP.$cljs$cst$211$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$822$due$$, "2026-01-05", $cljs$cst$800$amount$$, 30650, $cljs$cst$823$priority$$, $cljs$cst$843$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$844$la_jan_26$$, 
$APP.$cljs$cst$211$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$822$due$$, "2026-01-10", $cljs$cst$800$amount$$, 30325, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$845$admin_jan_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team (Jan)", $cljs$cst$822$due$$, "2026-01-15", $cljs$cst$800$amount$$, 1E4, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$846$contingency_jan_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Jan)", $cljs$cst$822$due$$, "2026-01-20", $cljs$cst$800$amount$$, 3049, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$825$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$847$venice_feb_26$$, $APP.$cljs$cst$211$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$822$due$$, "2026-02-05", $cljs$cst$800$amount$$, 183900, $cljs$cst$823$priority$$, $cljs$cst$843$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$848$la_feb_26$$, $APP.$cljs$cst$211$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$822$due$$, "2026-02-10", $cljs$cst$800$amount$$, 74825, $cljs$cst$823$priority$$, $cljs$cst$843$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$849$admin_feb_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$822$due$$, "2026-02-15", $cljs$cst$800$amount$$, 10500, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$850$contingency_feb_26$$, 
$APP.$cljs$cst$211$title$$, "Contingency (Feb)", $cljs$cst$822$due$$, "2026-02-20", $cljs$cst$800$amount$$, 12936, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$851$venice_mar_26$$, $APP.$cljs$cst$211$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$822$due$$, "2026-03-05", $cljs$cst$800$amount$$, 172200, $cljs$cst$823$priority$$, 
$cljs$cst$843$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$852$la_mar_26$$, $APP.$cljs$cst$211$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$822$due$$, "2026-03-10", $cljs$cst$800$amount$$, 97325, $cljs$cst$823$priority$$, $cljs$cst$843$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$228$id$$, $cljs$cst$853$admin_mar_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$822$due$$, "2026-03-15", $cljs$cst$800$amount$$, 10500, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$854$contingency_mar_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Mar)", $cljs$cst$822$due$$, "2026-03-20", $cljs$cst$800$amount$$, 
13476, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$855$venice_apr_26$$, $APP.$cljs$cst$211$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$822$due$$, "2026-04-05", $cljs$cst$800$amount$$, 110267, $cljs$cst$823$priority$$, $cljs$cst$843$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$856$admin_apr_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$822$due$$, "2026-04-15", $cljs$cst$800$amount$$, 33E3, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$857$contingency_apr_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Apr)", $cljs$cst$822$due$$, "2026-04-20", 
$cljs$cst$800$amount$$, 5513, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$858$venice_may_26$$, $APP.$cljs$cst$211$title$$, "Venice — Studio + Operations (May)", $cljs$cst$822$due$$, "2026-05-05", $cljs$cst$800$amount$$, 53717, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$859$admin_may_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$822$due$$, "2026-05-15", $cljs$cst$800$amount$$, 10500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$860$contingency_may_26$$, $APP.$cljs$cst$211$title$$, "Contingency (May)", $cljs$cst$822$due$$, "2026-05-20", $cljs$cst$800$amount$$, 
2686, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$861$venice_jun_26$$, $APP.$cljs$cst$211$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$822$due$$, "2026-06-05", $cljs$cst$800$amount$$, 94467, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$862$admin_jun_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$822$due$$, "2026-06-15", $cljs$cst$800$amount$$, 12500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$863$contingency_jun_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Jun)", $cljs$cst$822$due$$, "2026-06-20", 
$cljs$cst$800$amount$$, 4723, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$864$venice_jul_26$$, $APP.$cljs$cst$211$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$822$due$$, "2026-07-05", $cljs$cst$800$amount$$, 53717, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$865$admin_jul_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$822$due$$, "2026-07-15", $cljs$cst$800$amount$$, 10500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$866$contingency_jul_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Jul)", $cljs$cst$822$due$$, "2026-07-20", $cljs$cst$800$amount$$, 
2686, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$867$venice_aug_26$$, $APP.$cljs$cst$211$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$822$due$$, "2026-08-05", $cljs$cst$800$amount$$, 53717, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$868$admin_aug_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$822$due$$, "2026-08-15", $cljs$cst$800$amount$$, 10500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$869$contingency_aug_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Aug)", $cljs$cst$822$due$$, "2026-08-20", $cljs$cst$800$amount$$, 
2686, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$870$venice_sep_26$$, $APP.$cljs$cst$211$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$822$due$$, "2026-09-05", $cljs$cst$800$amount$$, 53717, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$871$admin_sep_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$822$due$$, "2026-09-15", $cljs$cst$800$amount$$, 12500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$872$contingency_sep_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Sep)", $cljs$cst$822$due$$, "2026-09-20", 
$cljs$cst$800$amount$$, 2686, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$873$venice_oct_26$$, $APP.$cljs$cst$211$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$822$due$$, "2026-10-05", $cljs$cst$800$amount$$, 42217, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$874$admin_oct_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$822$due$$, "2026-10-15", $cljs$cst$800$amount$$, 10500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$875$contingency_oct_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Oct)", $cljs$cst$822$due$$, "2026-10-20", $cljs$cst$800$amount$$, 
2111, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$876$venice_nov_26$$, $APP.$cljs$cst$211$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$822$due$$, "2026-11-05", $cljs$cst$800$amount$$, 42217, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$877$admin_nov_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$822$due$$, "2026-11-15", $cljs$cst$800$amount$$, 10500, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$878$contingency_nov_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Nov)", $cljs$cst$822$due$$, "2026-11-20", $cljs$cst$800$amount$$, 
2111, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$879$venice_dec_26$$, $APP.$cljs$cst$211$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$822$due$$, "2026-12-05", $cljs$cst$800$amount$$, 134517, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$228$id$$, $cljs$cst$880$admin_dec_26$$, $APP.$cljs$cst$211$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$822$due$$, "2026-12-15", $cljs$cst$800$amount$$, 20500, $cljs$cst$823$priority$$, $cljs$cst$831$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$228$id$$, $cljs$cst$881$contingency_dec_26$$, $APP.$cljs$cst$211$title$$, "Contingency (Dec)", $cljs$cst$822$due$$, "2026-12-20", 
$cljs$cst$800$amount$$, 6726, $cljs$cst$823$priority$$, $cljs$cst$824$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$timeline_node$$, "otp.pages.budget.cash-flow/timeline-node"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$now_marker$$, "otp.pages.budget.cash-flow/now-marker"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$month_header$$, "otp.pages.budget.cash-flow/month-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$month_summary_row$$, "otp.pages.budget.cash-flow/month-summary-row"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$view_toggle$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$view_toggle$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$view_toggle$$, 
"otp.pages.budget.cash-flow/view-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$summary_header$$, "otp.pages.budget.cash-flow/summary-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$cash_flow$$, "otp.pages.budget.cash-flow/cash-flow"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $otp$pages$budget$non_profit$non_profit$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$non_profit$non_profit$$, 
"otp.pages.budget.non-profit/non-profit"));
var $otp$pages$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, "Tony Shafrazi", $cljs$cst$897$tier$$, $cljs$cst$898$founding_patron$$, $cljs$cst$899$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$900$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$167$name$$, 
"Armenian Fund USA", $cljs$cst$897$tier$$, $cljs$cst$898$founding_patron$$, $cljs$cst$899$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$900$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$167$name$$, "Khudikyan Family", $cljs$cst$897$tier$$, $cljs$cst$901$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$902$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$167$name$$, "Ourfalian Family", 
$cljs$cst$897$tier$$, $cljs$cst$901$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$902$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$167$name$$, "Sarafyan Family", $cljs$cst$897$tier$$, $cljs$cst$901$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$902$individual$$], null)], null), $otp$pages$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$898$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$227$label$$, 
"Founding Patrons", $cljs$cst$903$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$207$border$$, "border-pink-500/30", $cljs$cst$904$order$$, 0], null), $cljs$cst$901$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$227$label$$, "Patrons", $cljs$cst$903$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$207$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$904$order$$, 1], null), $cljs$cst$905$benefactor$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$227$label$$, "Benefactors", $cljs$cst$903$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$207$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$904$order$$, 2], null), $cljs$cst$906$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$227$label$$, "Supporters", $cljs$cst$903$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$207$border$$, "border-slate-400 dark:border-slate-600", $cljs$cst$904$order$$, 3], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$logo_card$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$logo_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$logo_card$$, 
"otp.pages.budget.sponsors/logo-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$name_item$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$name_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$name_item$$, 
"otp.pages.budget.sponsors/name-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$tier_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$tier_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$tier_section$$, 
"otp.pages.budget.sponsors/tier-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$sponsors_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$sponsors_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$sponsors_section$$, 
"otp.pages.budget.sponsors/sponsors-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$why_support$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$why_support$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$why_support$preview$$, 
"otp.pages.budget.why-support/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$why_support$details$$, "", null, null) : (void 0).call(null, $otp$pages$budget$why_support$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$why_support$details$$, 
"otp.pages.budget.why-support/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$why_support$why_support$$, "", null, null) : (void 0).call(null, $otp$pages$budget$why_support$why_support$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$why_support$why_support$$, 
"otp.pages.budget.why-support/why-support"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $otp$pages$budget$section$section_link$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$section$section_link$$, "otp.pages.budget.section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$section$header$$, "", null, null) : (void 0).call(null, $otp$pages$budget$section$header$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$section$header$$, 
"otp.pages.budget.section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$section$budget_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$section$budget_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$section$budget_section$$, 
"otp.pages.budget.section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$197$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$198$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$otp$pages$budget$page$budget_view$$, "", null, null) : (void 0).call(null, $APP.$otp$pages$budget$page$budget_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$otp$pages$budget$page$budget_view$$, 
"otp.pages.budget.page/budget-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);