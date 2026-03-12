(function(){
'use strict';
var $otp$ui$icons$InformationCircle$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $otp$hooks$use_scroll_to$use_scroll_to_ref$$, $otp$pages$budget$committee$preview$$, $otp$pages$budget$committee$details$$, $otp$pages$budget$committee$committee_member_card$$, $otp$pages$budget$committee$committee_gallery$$, $otp$pages$budget$committee$committee$$, $otp$pages$budget$table$format_currency$$, $otp$pages$budget$table$sub_total_all_sections$$, 
$otp$pages$budget$table$total_section$$, $otp$pages$budget$table$pad_two_digits$$, $otp$pages$budget$table$detail_line_item$$, $otp$pages$budget$table$details__GT_render_items$$, $otp$pages$budget$table$section_line_item$$, $otp$pages$budget$table$budget_table$$, $otp$pages$budget$cost_breakdown$preview$$, $otp$pages$budget$cost_breakdown$details$$, $otp$pages$budget$cost_breakdown$footer$$, $otp$pages$budget$cost_breakdown$cost_breakdown$$, $otp$pages$budget$location$preview_text$$, $otp$pages$budget$location$preview$$, 
$otp$pages$budget$location$full_details$$, $otp$pages$budget$location$location_section$$, $otp$pages$budget$cash_flow$parse_date$$, $otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$format_currency$$, $otp$pages$budget$cash_flow$priority_tag_bg$$, $otp$pages$budget$cash_flow$priority_tag_text$$, $otp$pages$budget$cash_flow$priority_dot_classes$$, $otp$pages$budget$cash_flow$priority_amount_class$$, $otp$pages$budget$cash_flow$priority_label$$, $otp$pages$budget$cash_flow$group_by_month$$, 
$otp$pages$budget$cash_flow$month_rollups$$, $otp$pages$budget$cash_flow$status_classes$$, $otp$pages$budget$cash_flow$timeline_node$$, $otp$pages$budget$cash_flow$now_marker$$, $otp$pages$budget$cash_flow$month_header$$, $otp$pages$budget$cash_flow$month_summary_row$$, $otp$pages$budget$cash_flow$view_toggle$$, $otp$pages$budget$cash_flow$summary_header$$, $otp$pages$budget$cash_flow$cash_flow$$, $otp$pages$budget$non_profit$non_profit$$, $otp$pages$budget$sponsors$logo_card$$, $otp$pages$budget$sponsors$name_item$$, 
$otp$pages$budget$sponsors$tier_section$$, $otp$pages$budget$sponsors$sponsors_section$$, $otp$pages$budget$why_support$preview$$, $otp$pages$budget$why_support$details$$, $otp$pages$budget$why_support$why_support$$, $otp$pages$budget$section$section_link$$, $otp$pages$budget$section$header$$, $otp$pages$budget$section$budget_section$$, $cljs$cst$857$admin_apr_26$$, $cljs$cst$871$venice_sep_26$$, $cljs$cst$830$venice_sep_25$$, $cljs$cst$849$la_feb_26$$, $cljs$cst$859$venice_may_26$$, $cljs$cst$824$priority$$, 
$cljs$cst$904$accent$$, $cljs$cst$810$venue$$, $cljs$cst$853$la_mar_26$$, $cljs$cst$886$n_crit$$, $cljs$cst$875$admin_oct_26$$, $cljs$cst$907$supporter$$, $cljs$cst$835$admin_oct_25$$, $cljs$cst$862$venice_jun_26$$, $cljs$cst$889$has_now$$, $cljs$cst$813$the_studio$$, $cljs$cst$895$month$$, $cljs$cst$906$benefactor$$, $cljs$cst$837$la_nov_25$$, $cljs$cst$847$contingency_jan_26$$, $cljs$cst$865$venice_jul_26$$, $cljs$cst$885$entries$$, $cljs$cst$884$all_paid$$, $cljs$cst$825$normal$$, $cljs$cst$822$admin_jul_25$$, 
$cljs$cst$866$admin_jul_26$$, $cljs$cst$887$n_paid$$, $cljs$cst$818$documentation$$, $cljs$cst$829$contingency_aug_25$$, $cljs$cst$870$contingency_aug_26$$, $cljs$cst$819$debt_raised$$, $cljs$cst$863$admin_jun_26$$, $cljs$cst$807$expanded_items$$, $cljs$cst$898$tier$$, $cljs$cst$839$contingency_nov_25$$, $cljs$cst$879$contingency_nov_26$$, $cljs$cst$804$tax$$, $cljs$cst$814$logistics$$, $cljs$cst$860$admin_may_26$$, $cljs$cst$846$admin_jan_26$$, $cljs$cst$848$venice_feb_26$$, $cljs$cst$843$venice_jan_26$$, 
$cljs$cst$888$n_items$$, $cljs$cst$876$contingency_oct_26$$, $cljs$cst$836$contingency_oct_25$$, $cljs$cst$854$admin_mar_26$$, $cljs$cst$826$paid$$, $cljs$cst$802$details$$, $cljs$cst$880$venice_dec_26$$, $cljs$cst$852$venice_mar_26$$, $cljs$cst$905$order$$, $cljs$cst$850$admin_feb_26$$, $cljs$cst$858$contingency_apr_26$$, $cljs$cst$891$entry$$, $cljs$cst$881$admin_dec_26$$, $cljs$cst$841$admin_dec_25$$, $cljs$cst$809$item$$, $cljs$cst$878$admin_nov_26$$, $cljs$cst$838$admin_nov_25$$, $cljs$cst$823$due$$, 
$cljs$cst$808$description$$, $cljs$cst$844$critical$$, $cljs$cst$867$contingency_jul_26$$, $cljs$cst$827$contingency_jul_25$$, $cljs$cst$882$contingency_dec_26$$, $cljs$cst$842$contingency_dec_25$$, $cljs$cst$861$contingency_may_26$$, $cljs$cst$864$contingency_jun_26$$, $cljs$cst$801$amount$$, $cljs$cst$897$past_QMARK_$$, $cljs$cst$821$cash_flow_model$$, $cljs$cst$890$dot$$, $cljs$cst$893$expanded_QMARK_$$, $cljs$cst$806$set_expanded_items$$, $cljs$cst$803$rate$$, $cljs$cst$851$contingency_feb_26$$, 
$cljs$cst$816$marketing$$, $cljs$cst$812$la_prod$$, $cljs$cst$902$patron$$, $cljs$cst$883$fill$$, $cljs$cst$820$funds_raised$$, $cljs$cst$873$contingency_sep_26$$, $cljs$cst$833$contingency_sep_25$$, $cljs$cst$908$members$$, $cljs$cst$805$cost_data$$, $cljs$cst$877$venice_nov_26$$, $cljs$cst$892$rollup$$, $cljs$cst$903$individual$$, $cljs$cst$872$admin_sep_26$$, $cljs$cst$831$admin_sep_25$$, $cljs$cst$856$venice_apr_26$$, $cljs$cst$901$institution$$, $cljs$cst$900$logo$$, $cljs$cst$832$high$$, $cljs$cst$815$opening$$, 
$cljs$cst$909$anchor$$, $cljs$cst$811$admin$$, $cljs$cst$855$contingency_mar_26$$, $cljs$cst$874$venice_oct_26$$, $cljs$cst$834$venice_oct_25$$, $cljs$cst$896$now$$, $cljs$cst$868$venice_aug_26$$, $cljs$cst$869$admin_aug_26$$, $cljs$cst$828$admin_aug_25$$, $cljs$cst$899$founding_patron$$, $cljs$cst$840$la_dec_25$$, $cljs$cst$845$la_jan_26$$, $cljs$cst$817$publication$$, $cljs$cst$894$target_total$$;
$otp$ui$icons$InformationCircle$$ = function($G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$, $G__85467$jscomp$inline_3650_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__41633__auto__$jscomp$8$$) {
  $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$), $G__85467$jscomp$inline_3650_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__41633__auto__$jscomp$8$$], 
  null);
  $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$, 0, null);
  $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$ = $APP.$cljs$core$__destructure_map$$($G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$);
  $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$, $APP.$cljs$cst$67$class$$);
  $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$ = $APP.$helix$impl$props$normalize_class$$($G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$);
  $G__85467$jscomp$inline_3650_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__41633__auto__$jscomp$8$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__85467$jscomp$inline_3650_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__41633__auto__$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__85467$jscomp$inline_3650_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__41633__auto__$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__85467$jscomp$inline_3650_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__41633__auto__$jscomp$8$$);
  $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$, children:$G__85467$jscomp$inline_3650_JSCompiler_inline_result$jscomp$inline_3649_maybe_ref__41633__auto__$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__85463_JSCompiler_temp_const$jscomp$inline_3648_class$$jscomp$7_map__85461_map__85461__$1_props__41632__auto__$jscomp$8_vec__85458$$);
};
$cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($pred$jscomp$14$$, $coll$jscomp$728$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$seq$$($coll$jscomp$728$$);
    if ($JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$) {
      var $G__51749$jscomp$inline_2192_JSCompiler_inline_result$jscomp$435$$ = $APP.$cljs$core$first$$($JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$);
      $G__51749$jscomp$inline_2192_JSCompiler_inline_result$jscomp$435$$ = $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$($G__51749$jscomp$inline_2192_JSCompiler_inline_result$jscomp$435$$) : $pred$jscomp$14$$.call(null, $G__51749$jscomp$inline_2192_JSCompiler_inline_result$jscomp$435$$);
      $JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$truth_$$($G__51749$jscomp$inline_2192_JSCompiler_inline_result$jscomp$435$$) ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$), $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$14$$, $APP.$cljs$core$rest$$($JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$))) : null;
    } else {
      $JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$ = null;
    }
    return $JSCompiler_temp$jscomp$434_temp__5823__auto__$jscomp$22$$;
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
    function $G__55445$$($ref$jscomp$9$$, $var_args$jscomp$416$$) {
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
    function $G__55445__delegate$$($ref$jscomp$8_temp__5823__auto__$jscomp$70$$, $duration$jscomp$2_p__55395$$) {
      $duration$jscomp$2_p__55395$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__55395$$, 0, null);
      $ref$jscomp$8_temp__5823__auto__$jscomp$70$$ = $ref$jscomp$8_temp__5823__auto__$jscomp$70$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$8_temp__5823__auto__$jscomp$70$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$408$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__55395$$) ? $duration$jscomp$2_p__55395$$ : 0.35, $APP.$cljs$cst$409$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$410$y$$, $ref$jscomp$8_temp__5823__auto__$jscomp$70$$, 
      $APP.$cljs$cst$411$autoKill$$, !1], null), $APP.$cljs$cst$412$ease$$, "power2.inOut"], null))) : null;
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
$otp$pages$budget$committee$preview$$ = function($G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$, $maybe_ref__41633__auto__$jscomp$106$$) {
  $G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$), $maybe_ref__41633__auto__$jscomp$106$$], null);
  $G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__87792$$ = function() {
        return {children:[function() {
          var $G__87796$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87796$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87796$$);
        }(), function() {
          var $G__87800$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87800$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87800$$);
        }(), function() {
          var $G__87804$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87804$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87804$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__87792$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__87792$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87788_map__87786_props__41632__auto__$jscomp$106_vec__87783$$);
};
$otp$pages$budget$committee$details$$ = function($G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$, $maybe_ref__41633__auto__$jscomp$107$$) {
  $G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$), $maybe_ref__41633__auto__$jscomp$107$$], null);
  $G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$otp$styles$body_base$$]))), children:[function() {
      var $G__87819$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-amber-600  dark:text-amber-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__87823$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87823$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87823$$);
        }(), function() {
          var $G__87827$$ = {children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87827$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__87827$$);
        }(), function() {
          var $G__87831$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87831$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87831$$);
        }(), function() {
          var $G__87835$$ = {children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87835$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__87835$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__87819$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__87819$$);
    }(), function() {
      var $G__87839$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-2xl", "text-rose-600   dark:text-rose-400"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__87839$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__87839$$);
    }(), function() {
      var $G__87843$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__87847$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87847$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__87847$$);
        }(), function() {
          var $G__87851$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87851$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87851$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87843$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87843$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87815_map__87813_props__41632__auto__$jscomp$107_vec__87810$$);
};
$otp$pages$budget$committee$committee_member_card$$ = function($G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$, $maybe_ref__41633__auto__$jscomp$108$$) {
  $G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$), $maybe_ref__41633__auto__$jscomp$108$$], null);
  $G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$, 0, null);
  $G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$ = $APP.$cljs$core$__destructure_map$$($G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$, $APP.$cljs$cst$165$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$, $APP.$cljs$cst$800$role$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$, 
  $APP.$cljs$cst$734$img_src$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__87866$$ = function() {
        return {"img-src":$img_src$jscomp$5$$, "imgix-fit":"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__87870$$ = function() {
            return {className:"", children:[function() {
              var $G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$197$$};
              $G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$);
              $G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$ = {position:$APP.$cljs$cst$701$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$overlays$caption_overlay$$, $G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$overlays$caption_overlay$$, $G__87874_G__87878$jscomp$inline_3971_JSCompiler_inline_result$jscomp$inline_3970$$);
            }(), function() {
              var $G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$$};
              $G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$);
              $G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$ = {position:$APP.$cljs$cst$706$bl$$, "parent-styles":$overlay_styles$$, children:$G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$overlays$caption_overlay$$, $G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$overlays$caption_overlay$$, $G__87882_G__87886$jscomp$inline_3974_JSCompiler_inline_result$jscomp$inline_3973$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87870$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87870$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__87866$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$image_overlay$lazy_image_with_overlay$$, $G__87866$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87862_map__87860_map__87860__$1_props__41632__auto__$jscomp$108_vec__87857$$);
};
$otp$pages$budget$committee$committee_gallery$$ = function($G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$, $maybe_ref__41633__auto__$jscomp$109$$) {
  $G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$), $maybe_ref__41633__auto__$jscomp$109$$], null);
  $G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__87901$$ = function() {
        return {children:[function() {
          var $G__87905_G__87909$jscomp$inline_3977$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$label_muted$$), children:"Committee Members"};
          $G__87905_G__87909$jscomp$inline_3977$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__87905_G__87909$jscomp$inline_3977$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__87905_G__87909$jscomp$inline_3977$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87905_G__87909$jscomp$inline_3977$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87905_G__87909$jscomp$inline_3977$$);
        }(), function() {
          var $G__87913$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$198_p__87916$$) {
              var $credit$jscomp$3_map__87917__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$198_p__87916$$);
              $name$jscomp$198_p__87916$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__87917__$1$$, $APP.$cljs$cst$165$name$$);
              var $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__87917__$1$$, $APP.$cljs$cst$800$role$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__87917__$1$$, $APP.$cljs$cst$734$img_src$$);
              $credit$jscomp$3_map__87917__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$3_map__87917__$1$$, $APP.$cljs$cst$712$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$6$$) ? ($G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$ = {name:$name$jscomp$198_p__87916$$, role:$G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$, "img-src":$img_src$jscomp$6$$, credit:$credit$jscomp$3_map__87917__$1$$}, $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$committee$committee_member_card$$, $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$committee$committee_member_card$$, $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$)) : $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$ = null;
              $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$ = {children:$G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$, $name$jscomp$198_p__87916$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87919_G__87924$jscomp$inline_3980_JSCompiler_temp$jscomp$inline_3979_role$jscomp$1$$, $name$jscomp$198_p__87916$$);
            }, $otp$pages$budget$committee$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87913$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87913$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87901$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87901$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87897_map__87895_props__41632__auto__$jscomp$109_vec__87892$$);
};
$otp$pages$budget$committee$committee$$ = function($G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$, $maybe_ref__41633__auto__$jscomp$110$$) {
  $G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$), $maybe_ref__41633__auto__$jscomp$110$$], null);
  $G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$, 0, null);
  $G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$ = $APP.$cljs$core$__destructure_map$$($G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$, $APP.$cljs$cst$772$subtitle$$), $title$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$ = function() {
    return {id:$id$jscomp$90$$, className:"space-y-4", children:[function() {
      var $G__87939$$ = {idx:5, "section-hint":$subtitle$jscomp$2$$, title:$title$jscomp$28$$, "expand-button-label":"Read more", "preview-text":$otp$pages$budget$committee$preview$$, "full-text":$otp$pages$budget$committee$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__87939$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__87939$$);
    }(), function() {
      var $G__87943$$ = {children:$otp$pages$budget$committee$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$committee$committee_gallery$$, $G__87943$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$committee$committee_gallery$$, $G__87943$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__87935_map__87933_map__87933__$1_props__41632__auto__$jscomp$110_vec__87930$$);
};
$otp$pages$budget$table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$otp$pages$budget$table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__87945_SHARP__tax_rate$jscomp$inline_2199$$) {
    var $item_details$jscomp$inline_2197_sub_total$jscomp$inline_2198$$ = $cljs$cst$802$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__87945_SHARP__tax_rate$jscomp$inline_2199$$);
    $item_details$jscomp$inline_2197_sub_total$jscomp$inline_2198$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$amount$$, $item_details$jscomp$inline_2197_sub_total$jscomp$inline_2198$$));
    $p1__87945_SHARP__tax_rate$jscomp$inline_2199$$ = $cljs$cst$803$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$804$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__87945_SHARP__tax_rate$jscomp$inline_2199$$));
    return ($p1__87945_SHARP__tax_rate$jscomp$inline_2199$$ > 0 ? $p1__87945_SHARP__tax_rate$jscomp$inline_2199$$ * $item_details$jscomp$inline_2197_sub_total$jscomp$inline_2198$$ : 0) + $item_details$jscomp$inline_2197_sub_total$jscomp$inline_2198$$;
  }, $cost_data$$));
};
$otp$pages$budget$table$total_section$$ = function($G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$, $maybe_ref__41633__auto__$jscomp$111$$) {
  $G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$), $maybe_ref__41633__auto__$jscomp$111$$], null);
  $G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$, 0, null);
  $G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$ = $APP.$cljs$core$__destructure_map$$($G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$);
  $G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$, $cljs$cst$805$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $otp$pages$budget$table$sub_total_all_sections$$($G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__87957$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__87961$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__87961$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__87961$$);
        }(), function() {
          var $G__87965_G__87969$jscomp$inline_3983$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$otp$pages$budget$table$format_currency$$($sub_total$jscomp$1$$)};
          $G__87965_G__87969$jscomp$inline_3983$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87965_G__87969$jscomp$inline_3983$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87965_G__87969$jscomp$inline_3983$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87965_G__87969$jscomp$inline_3983$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87965_G__87969$jscomp$inline_3983$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__87957$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__87957$$);
    }(), function() {
      var $G__87973$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__87977$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__87977$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__87977$$);
        }(), function() {
          var $G__87981_G__87985$jscomp$inline_3986$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$otp$pages$budget$table$format_currency$$(66821)};
          $G__87981_G__87985$jscomp$inline_3986$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87981_G__87985$jscomp$inline_3986$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87981_G__87985$jscomp$inline_3986$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87981_G__87985$jscomp$inline_3986$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87981_G__87985$jscomp$inline_3986$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__87973$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__87973$$);
    }(), function() {
      var $G__87989$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__87993$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__87993$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__87993$$);
        }(), function() {
          var $G__87997_G__88001$jscomp$inline_3989$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_lg$$), children:$otp$pages$budget$table$format_currency$$($grand_total$$)};
          $G__87997_G__88001$jscomp$inline_3989$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__87997_G__88001$jscomp$inline_3989$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__87997_G__88001$jscomp$inline_3989$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87997_G__88001$jscomp$inline_3989$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87997_G__88001$jscomp$inline_3989$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__87989$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__87989$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87953_cost_data$jscomp$1_map__87951_map__87951__$1_props__41632__auto__$jscomp$111_vec__87948$$);
};
$otp$pages$budget$table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$otp$pages$budget$table$detail_line_item$$ = function($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$, $maybe_ref__41633__auto__$jscomp$112$$) {
  $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$), $maybe_ref__41633__auto__$jscomp$112$$], null);
  $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$, 0, null);
  $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$ = $APP.$cljs$core$__destructure_map$$($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$);
  var $idx$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$, $APP.$cljs$cst$759$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$, $APP.$cljs$cst$630$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$, 
  $cljs$cst$806$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$, $cljs$cst$807$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$70$$), $description$jscomp$4$$ = $cljs$cst$808$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$70$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__88015$$($prev$jscomp$11$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$11$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__88015$$) : $set_expanded_items$$.call(null, $G__88015$$);
      }, children:[function() {
        var $G__88017$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__88021$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88021$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88021$$);
          }(), function() {
            var $G__88025_JSCompiler_temp_const$jscomp$inline_4215$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_4216$$ = $APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__88029$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_JSCompiler_temp_const$jscomp$inline_4219$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__88033$jscomp$inline_4221_JSCompiler_inline_result$jscomp$inline_4220$$ = {};
            $G__88033$jscomp$inline_4221_JSCompiler_inline_result$jscomp$inline_4220$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$ui$icons$InformationCircle$$, $G__88033$jscomp$inline_4221_JSCompiler_inline_result$jscomp$inline_4220$$) : $APP.$helix$core$jsx$$.call(null, $otp$ui$icons$InformationCircle$$, $G__88033$jscomp$inline_4221_JSCompiler_inline_result$jscomp$inline_4220$$);
            $G__88029$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_JSCompiler_temp_const$jscomp$inline_4219$$ = {className:$G__88029$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_JSCompiler_temp_const$jscomp$inline_4219$$, children:$G__88033$jscomp$inline_4221_JSCompiler_inline_result$jscomp$inline_4220$$};
            $G__88029$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_JSCompiler_temp_const$jscomp$inline_4219$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88029$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_JSCompiler_temp_const$jscomp$inline_4219$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88029$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_JSCompiler_temp_const$jscomp$inline_4219$$);
            $G__88025_JSCompiler_temp_const$jscomp$inline_4215$$ = {className:$G__88025_JSCompiler_temp_const$jscomp$inline_4215$$, children:[$JSCompiler_temp_const$jscomp$inline_4216$$, $G__88029$jscomp$inline_4218_JSCompiler_inline_result$jscomp$inline_4217_JSCompiler_temp_const$jscomp$inline_4219$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88025_JSCompiler_temp_const$jscomp$inline_4215$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__88025_JSCompiler_temp_const$jscomp$inline_4215$$);
          }(), function() {
            var $G__88035$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_sm$$), children:$otp$pages$budget$table$format_currency$$($cljs$cst$801$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88035$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88035$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88017$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88017$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
        var $G__88051$jscomp$inline_4328_JSCompiler_inline_result$jscomp$inline_4327$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
        $G__88051$jscomp$inline_4328_JSCompiler_inline_result$jscomp$inline_4327$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88051$jscomp$inline_4328_JSCompiler_inline_result$jscomp$inline_4327$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88051$jscomp$inline_4328_JSCompiler_inline_result$jscomp$inline_4327$$);
        $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$ = {className:$G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$, children:$G__88051$jscomp$inline_4328_JSCompiler_inline_result$jscomp$inline_4327$$};
        $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$)};
        $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$ = {className:"border-l-2 border-pink-500/30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88039_G__88043$jscomp$inline_4324_G__88047$jscomp$inline_4325_JSCompiler_temp_const$jscomp$inline_4326$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$);
  }
  $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__88059$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__88063$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88063$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88063$$);
        }(), function() {
          var $G__88067$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88067$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88067$$);
        }(), function() {
          var $G__88071$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_sm$$), children:$otp$pages$budget$table$format_currency$$($cljs$cst$801$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88071$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88071$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88059$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88059$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__88012_G__88055_map__88010_map__88010__$1_props__41632__auto__$jscomp$112_vec__88007$$);
};
$otp$pages$budget$table$details__GT_render_items$$ = function($G__88245_details$jscomp$4$$) {
  for (var $G__88244_items$jscomp$8$$ = $G__88245_details$jscomp$4$$, $idx$jscomp$71$$ = 0, $prev_group$$ = null, $result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__88244_items$jscomp$8$$)) {
      return $result$jscomp$135$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__88244_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$583$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$89$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$89$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$89$$;
    }();
    $G__88244_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__88244_items$jscomp$8$$);
    $G__88245_details$jscomp$4$$ = $idx$jscomp$71$$ + 1;
    var $G__88246$$ = $curr_group$$, $G__88247$$ = function() {
      var $G__88076_G__88076__$1$$ = $result$jscomp$135$$;
      $G__88076_G__88076__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__88076_G__88076__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$238$header$$, $APP.$cljs$cst$414$label$$, $curr_group$$, $APP.$cljs$cst$99$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null)) : $G__88076_G__88076__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__88076_G__88076__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$630$detail$$, $APP.$cljs$cst$630$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$759$idx$$, $idx$jscomp$71$$, $APP.$cljs$cst$99$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null));
    }();
    $idx$jscomp$71$$ = $G__88245_details$jscomp$4$$;
    $prev_group$$ = $G__88246$$;
    $result$jscomp$135$$ = $G__88247$$;
  }
};
$otp$pages$budget$table$section_line_item$$ = function($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$, $maybe_ref__41633__auto__$jscomp$113_tax_rate$jscomp$1$$) {
  $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$), $maybe_ref__41633__auto__$jscomp$113_tax_rate$jscomp$1$$], null);
  $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$, 0, null);
  $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$ = $APP.$cljs$core$__destructure_map$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$, $APP.$cljs$cst$759$idx$$), $item$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$, $cljs$cst$809$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$, 
  $cljs$cst$806$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$, $cljs$cst$807$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$)), $scroll_to_ref$$ = $otp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$);
  $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$ = $cljs$cst$802$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$amount$$, $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$));
  $maybe_ref__41633__auto__$jscomp$113_tax_rate$jscomp$1$$ = $cljs$cst$803$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$804$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$));
  var $tax_label$$ = $APP.$cljs$cst$414$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$804$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__41633__auto__$jscomp$113_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__41633__auto__$jscomp$113_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$72$$), $render_items$$ = $otp$pages$budget$table$details__GT_render_items$$($G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$);
  $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__88088$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__88091$$($prev$jscomp$12$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$12$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__88091$$) : $set_expanded_items$jscomp$1$$.call(null, $G__88091$$);
        }, children:[function() {
          var $G__88093$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__88093$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__88093$$);
        }(), function() {
          var $G__88097$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__88101$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$otp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88101$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88101$$);
            }(), function() {
              var $G__88105_JSCompiler_temp_const$jscomp$inline_3505$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__88109$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$ = {};
              $G__88109$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$icons$ChevronRightIcon$$, $G__88109$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$icons$ChevronRightIcon$$, $G__88109$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$);
              $G__88105_JSCompiler_temp_const$jscomp$inline_3505$$ = {className:$G__88105_JSCompiler_temp_const$jscomp$inline_3505$$, children:$G__88109$jscomp$inline_3507_JSCompiler_inline_result$jscomp$inline_3506$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88105_JSCompiler_temp_const$jscomp$inline_3505$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88105_JSCompiler_temp_const$jscomp$inline_3505$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88097$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88097$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88088$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88088$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__88111$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__88115_JSCompiler_temp_const$jscomp$inline_4000$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__88119$jscomp$inline_4002_JSCompiler_inline_result$jscomp$inline_4001$$ = {className:"px-8 py-4", children:$cljs$cst$808$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)};
          $G__88119$jscomp$inline_4002_JSCompiler_inline_result$jscomp$inline_4001$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88119$jscomp$inline_4002_JSCompiler_inline_result$jscomp$inline_4001$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88119$jscomp$inline_4002_JSCompiler_inline_result$jscomp$inline_4001$$);
          $G__88115_JSCompiler_temp_const$jscomp$inline_4000$$ = {className:$G__88115_JSCompiler_temp_const$jscomp$inline_4000$$, children:$G__88119$jscomp$inline_4002_JSCompiler_inline_result$jscomp$inline_4001$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88115_JSCompiler_temp_const$jscomp$inline_4000$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88115_JSCompiler_temp_const$jscomp$inline_4000$$);
        }(), function() {
          var $G__88123$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__88129_G__88138_ri$$) {
              var $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__88129_G__88138_ri$$);
              $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$ = $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$.$fqn$ : null;
              switch($G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$) {
                case "header":
                  $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__88133$jscomp$inline_4006_JSCompiler_inline_result$jscomp$inline_4005$$ = {children:$APP.$cljs$cst$414$label$$.$cljs$core$IFn$_invoke$arity$1$($G__88129_G__88138_ri$$)};
                  $G__88133$jscomp$inline_4006_JSCompiler_inline_result$jscomp$inline_4005$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88133$jscomp$inline_4006_JSCompiler_inline_result$jscomp$inline_4005$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88133$jscomp$inline_4006_JSCompiler_inline_result$jscomp$inline_4005$$);
                  $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$ = {className:$G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$, children:$G__88133$jscomp$inline_4006_JSCompiler_inline_result$jscomp$inline_4005$$};
                  $G__88129_G__88138_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__88129_G__88138_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$, $G__88129_G__88138_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$, $G__88129_G__88138_ri$$);
                case "detail":
                  return $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$ = {idx:$APP.$cljs$cst$759$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__88129_G__88138_ri$$), detail:$APP.$cljs$cst$630$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__88129_G__88138_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__88129_G__88138_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__88129_G__88138_ri$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$table$detail_line_item$$, $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$, $G__88129_G__88138_ri$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$detail_line_item$$, $G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$, $G__88129_G__88138_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__88126_G__88126__$1_G__88128_G__88137_JSCompiler_temp_const$jscomp$inline_4004$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__88123$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__88123$$);
        }(), function() {
          var $G__88142$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__88146$$ = function() {
                return {children:[function() {
                  var $G__88150$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__88154$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88154$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88154$$);
                    }(), function() {
                      var $G__88158$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__88162$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88162$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88162$$);
                        }(), function() {
                          var $G__88166$$ = {children:$otp$pages$budget$table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88166$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88166$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88158$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88158$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88150$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88150$$);
                }(), function() {
                  var $G__88170$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__88174$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88174$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88174$$);
                    }(), function() {
                      var $G__88178$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__88182$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88182$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88182$$);
                        }(), function() {
                          var $G__88186$$ = {children:$otp$pages$budget$table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88186$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88186$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88178$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88178$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88170$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88170$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88146$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88146$$);
            }() : null, function() {
              var $G__88190$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__88194$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88194$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88194$$);
                }(), function() {
                  var $G__88198$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__88202$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88202$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88202$$);
                    }(), function() {
                      var $G__88206$$ = {children:$otp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88206$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88206$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88198$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88198$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88190$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88190$$);
            }(), function() {
              var $G__88210$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__88213_88249$$($prev$jscomp$13$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$13$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__88213_88249$$) : $set_expanded_items$jscomp$1$$.call(null, $G__88213_88249$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__88215_JSCompiler_temp_const$jscomp$inline_3513$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__88219$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$ = {};
                  $G__88219$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$icons$ChevronRightIcon$$, $G__88219$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$icons$ChevronRightIcon$$, $G__88219$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$);
                  $G__88215_JSCompiler_temp_const$jscomp$inline_3513$$ = {className:$G__88215_JSCompiler_temp_const$jscomp$inline_3513$$, children:$G__88219$jscomp$inline_3515_JSCompiler_inline_result$jscomp$inline_3514$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88215_JSCompiler_temp_const$jscomp$inline_3513$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88215_JSCompiler_temp_const$jscomp$inline_3513$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88210$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88210$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88142$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88142$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88111$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88111$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__88084_details$jscomp$5_map__88082_map__88082__$1_props__41632__auto__$jscomp$113_vec__88079$$);
};
$otp$pages$budget$table$budget_table$$ = function($G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$, $maybe_ref__41633__auto__$jscomp$114$$) {
  $G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$), $maybe_ref__41633__auto__$jscomp$114$$], null);
  $G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$, 0, null);
  $G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$ = $APP.$cljs$core$__destructure_map$$($G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$, $cljs$cst$805$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$, 1, null);
  $G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__88236_idx$jscomp$73$$, $G__88235_item$jscomp$39$$) {
      $G__88235_item$jscomp$39$$ = {idx:$G__88236_idx$jscomp$73$$, item:$G__88235_item$jscomp$39$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__88236_idx$jscomp$73$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__88236_idx$jscomp$73$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$table$section_line_item$$, $G__88235_item$jscomp$39$$, $G__88236_idx$jscomp$73$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$section_line_item$$, $G__88235_item$jscomp$39$$, $G__88236_idx$jscomp$73$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__88240$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$table$total_section$$, $G__88240$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$total_section$$, $G__88240$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__88231_map__88226_map__88226__$1_props__41632__auto__$jscomp$114_vec__88223_vec__88227$$);
};
$otp$pages$budget$cost_breakdown$preview$$ = function($G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$, $maybe_ref__41633__auto__$jscomp$115$$) {
  $G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$), $maybe_ref__41633__auto__$jscomp$115$$], null);
  $G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__88261$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88261$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__88261$$);
    }(), function() {
      var $G__88265$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88265$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88265$$);
    }(), function() {
      var $G__88269$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88269$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88269$$);
    }(), function() {
      var $G__88273$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88273$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88273$$);
    }(), function() {
      var $G__88277$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88277$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88277$$);
    }(), function() {
      var $G__88281$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88281$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88281$$);
    }(), function() {
      var $G__88285$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88285$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88285$$);
    }(), function() {
      var $G__88289$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88289$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88289$$);
    }(), function() {
      var $G__88293$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88293$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88293$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88257_map__88255_props__41632__auto__$jscomp$115_vec__88252$$);
};
$otp$pages$budget$cost_breakdown$details$$ = function($G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$, $maybe_ref__41633__auto__$jscomp$116$$) {
  $G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$), $maybe_ref__41633__auto__$jscomp$116$$], null);
  $G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__88308$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88308$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__88308$$);
    }(), function() {
      var $G__88312$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88312$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88312$$);
    }(), function() {
      var $G__88316$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88316$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88316$$);
    }(), function() {
      var $G__88320$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88320$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88320$$);
    }(), function() {
      var $G__88324$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88324$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88324$$);
    }(), function() {
      var $G__88328$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88328$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88328$$);
    }(), function() {
      var $G__88332$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88332$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88332$$);
    }(), function() {
      var $G__88336$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88336$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88336$$);
    }(), function() {
      var $G__88340$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88340$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88340$$);
    }(), function() {
      var $G__88344$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88344$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__88344$$);
    }(), function() {
      var $G__88348$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88348$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88348$$);
    }(), function() {
      var $G__88352$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88352$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88352$$);
    }(), function() {
      var $G__88356$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88356$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88356$$);
    }(), function() {
      var $G__88360$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88360$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88360$$);
    }(), function() {
      var $G__88364$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88364$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88364$$);
    }(), function() {
      var $G__88368$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88368$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88368$$);
    }(), function() {
      var $G__88372$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__88376$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88376$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88376$$);
        }(), function() {
          var $G__88380$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88380$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88380$$);
        }(), function() {
          var $G__88384$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88384$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88384$$);
        }(), function() {
          var $G__88388$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88388$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88388$$);
        }(), function() {
          var $G__88392$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88392$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88392$$);
        }(), function() {
          var $G__88396$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88396$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88396$$);
        }(), function() {
          var $G__88400$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88400$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__88400$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88372$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88372$$);
    }(), function() {
      var $G__88404$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88404$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88404$$);
    }(), function() {
      var $G__88408$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88408$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88408$$);
    }(), function() {
      var $G__88412$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88412$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88412$$);
    }(), function() {
      var $G__88416$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88416$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88416$$);
    }(), function() {
      var $G__88420$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88420$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88420$$);
    }(), function() {
      var $G__88424$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88424$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88424$$);
    }(), function() {
      var $G__88428$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88428$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88428$$);
    }(), function() {
      var $G__88432$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88432$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88432$$);
    }(), function() {
      var $G__88436$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88436$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88436$$);
    }(), function() {
      var $G__88440$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__88444$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88444$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88444$$);
        }(), function() {
          var $G__88448$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88448$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88448$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88440$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88440$$);
    }(), function() {
      var $G__88452$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__88456$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88456$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88456$$);
        }(), function() {
          var $G__88460$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88460$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88460$$);
        }(), function() {
          var $G__88464$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88464$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88464$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88452$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88452$$);
    }(), function() {
      var $G__88468$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88468$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88468$$);
    }(), function() {
      var $G__88472$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88472$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88472$$);
    }(), function() {
      var $G__88476$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88476$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88476$$);
    }(), function() {
      var $G__88480$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88480$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88480$$);
    }(), function() {
      var $G__88484$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__88488$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88488$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88488$$);
        }(), function() {
          var $G__88492$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88492$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88492$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88484$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__88484$$);
    }(), function() {
      var $G__88496$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88496$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88496$$);
    }(), function() {
      var $G__88500$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88500$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88500$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88304_map__88302_props__41632__auto__$jscomp$116_vec__88299$$);
};
$otp$pages$budget$cost_breakdown$footer$$ = function($G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$, $maybe_ref__41633__auto__$jscomp$117$$) {
  $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$), $maybe_ref__41633__auto__$jscomp$117$$], null);
  $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$ = {"cost-data":$otp$pages$budget$cost_breakdown$cost_data$$};
  $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$table$budget_table$$, $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$table$budget_table$$, $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88511_G__88515$jscomp$inline_4009_map__88509_props__41632__auto__$jscomp$117_vec__88506$$);
};
$otp$pages$budget$cost_breakdown$cost_breakdown$$ = function($G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$, $G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$) {
  $G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$), $G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$], null);
  $G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$, 0, null);
  var $map__88524__$1_title$jscomp$29$$ = $APP.$cljs$core$__destructure_map$$($G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$);
  $G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__88524__$1_title$jscomp$29$$, $APP.$cljs$cst$286$id$$);
  $G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__88524__$1_title$jscomp$29$$, $APP.$cljs$cst$772$subtitle$$);
  $map__88524__$1_title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__88524__$1_title$jscomp$29$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$ = {idx:3, "section-hint":$G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$, title:$map__88524__$1_title$jscomp$29$$, "expand-button-label":"Read more", "preview-text":$otp$pages$budget$cost_breakdown$preview$$, "full-text":$otp$pages$budget$cost_breakdown$details$$, "footer-text":$otp$pages$budget$cost_breakdown$footer$$};
  $G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$);
  $G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$ = {id:$G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$, children:$G__88530$jscomp$inline_4012_JSCompiler_inline_result$jscomp$inline_4011_maybe_ref__41633__auto__$jscomp$118_subtitle$jscomp$3$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88526_id$jscomp$91_map__88524_props__41632__auto__$jscomp$118_vec__88521$$);
};
$otp$pages$budget$location$preview_text$$ = function($G__61517_props__41632__auto__$jscomp$119$$) {
  $APP.$helix$core$extract_cljs_props$$($G__61517_props__41632__auto__$jscomp$119$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__61517_props__41632__auto__$jscomp$119$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$body_base$$), children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__61521$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61521$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61521$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__61525$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61525$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61525$$);
    }(), function() {
      var $G__61529$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61529$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61529$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__61533$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61533$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61533$$);
    }(), function() {
      var $G__61537$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61537$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61537$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61517_props__41632__auto__$jscomp$119$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__61517_props__41632__auto__$jscomp$119$$);
};
$otp$pages$budget$location$preview$$ = function($G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$, $maybe_ref__41633__auto__$jscomp$120$$) {
  $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$), $maybe_ref__41633__auto__$jscomp$120$$], null);
  $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$ = {};
  $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$location$preview_text$$, $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$location$preview_text$$, $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__61555_G__61559$jscomp$inline_3522_map__61550_props__41632__auto__$jscomp$120_vec__61547$$);
};
$otp$pages$budget$location$full_details$$ = function($G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$, $maybe_ref__41633__auto__$jscomp$121$$) {
  $G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$), $maybe_ref__41633__auto__$jscomp$121$$], null);
  $G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$, 0, null);
  $G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$ = $APP.$cljs$core$__destructure_map$$($G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$, $APP.$cljs$cst$772$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$4$$ = $APP.$otp$hooks$use_media_query$use_touch_enabled$$();
  $G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__61584$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$body_base$$), children:[function() {
          var $G__61590_G__61594$jscomp$inline_3525$$ = {};
          $G__61590_G__61594$jscomp$inline_3525$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$location$preview_text$$, $G__61590_G__61594$jscomp$inline_3525$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$location$preview_text$$, $G__61590_G__61594$jscomp$inline_3525$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61590_G__61594$jscomp$inline_3525$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__61590_G__61594$jscomp$inline_3525$$);
        }(), function() {
          var $G__61596$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__61601$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$4$$, "initial-view":$APP.$otp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$otp$pages$venue$map_config$ant_paths$$, layers:$APP.$otp$pages$venue$map_config$layers$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$map$mapbox_map$$, $G__61601$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$map$mapbox_map$$, $G__61601$$);
            }(), function() {
              var $G__61606$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61606$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61606$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61596$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61596$$);
        }(), function() {
          var $G__61614$$ = function() {
            return {className:"px-4 mt-8 flex flex-col sm:flex-row gap-4", children:[function() {
              var $G__61618$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__61618$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__61618$$);
            }(), function() {
              var $G__61624$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
              children:"Open in Maps ↗"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__61624$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__61624$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61614$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61614$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61584$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61584$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__61580_map__61576_map__61576__$1_props__41632__auto__$jscomp$121_vec__61573$$);
};
$otp$pages$budget$location$location_section$$ = function($G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$, $G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$) {
  $G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$), $G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$], null);
  $G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$, 0, null);
  var $map__61663__$1_title$jscomp$31$$ = $APP.$cljs$core$__destructure_map$$($G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$);
  $G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61663__$1_title$jscomp$31$$, $APP.$cljs$cst$286$id$$);
  $G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61663__$1_title$jscomp$31$$, $APP.$cljs$cst$772$subtitle$$);
  $map__61663__$1_title$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61663__$1_title$jscomp$31$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$ = {idx:7, "section-hint":$G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$, title:$map__61663__$1_title$jscomp$31$$, "expand-button-label":"Expand details", "preview-text":$otp$pages$budget$location$preview$$, "full-text":$otp$pages$budget$location$full_details$$};
  $G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$);
  $G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$ = {id:$G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$, children:$G__61681$jscomp$inline_4015_JSCompiler_inline_result$jscomp$inline_4014_maybe_ref__41633__auto__$jscomp$122_subtitle$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__61673_id$jscomp$93_map__61663_props__41632__auto__$jscomp$122_vec__61660$$);
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
    return $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$220$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$parse_date$$, $cljs$cst$823$due$$), $entries$jscomp$4$$));
};
$otp$pages$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$parse_date$$, $cljs$cst$823$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $otp$pages$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$154$$ = $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$17$$ = $d$jscomp$154$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__88871_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__88871_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__88872_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__88872_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__88873_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$844$critical$$, $cljs$cst$824$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__88873_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$154$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$154$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$884$all_paid$$, $cljs$cst$885$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$886$n_crit$$, $APP.$cljs$cst$736$total$$, $APP.$cljs$cst$414$label$$, $cljs$cst$826$paid$$, $cljs$cst$887$n_paid$$, $cljs$cst$888$n_items$$, $cljs$cst$889$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$17$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$otp$pages$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$890$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$395$text$$, "text-emerald-600 dark:text-emerald-300", $APP.$cljs$cst$414$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$890$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$395$text$$, "text-slate-500", $APP.$cljs$cst$414$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$890$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$395$text$$, "text-slate-500", $APP.$cljs$cst$414$label$$, "—"], null);
  }
};
$otp$pages$budget$cash_flow$timeline_node$$ = function($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $G__88924_89646_entry$jscomp$29_maybe_ref__41633__auto__$jscomp$123$$) {
  $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$), $G__88924_89646_entry$jscomp$29_maybe_ref__41633__auto__$jscomp$123$$], null);
  $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, 0, null);
  $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$ = $APP.$cljs$core$__destructure_map$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$);
  $G__88924_89646_entry$jscomp$29_maybe_ref__41633__auto__$jscomp$123$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $cljs$cst$891$entry$$);
  var $idx$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $APP.$cljs$cst$759$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$ = $APP.$cljs$core$__destructure_map$$($G__88924_89646_entry$jscomp$29_maybe_ref__41633__auto__$jscomp$123$$);
  var $title$jscomp$32$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $APP.$cljs$cst$288$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $cljs$cst$823$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, 
  $cljs$cst$801$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $cljs$cst$824$priority$$);
  $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$), $cljs$cst$826$paid$$), $st$$ = $otp$pages$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$));
  $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$74$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__88924_89646_entry$jscomp$29_maybe_ref__41633__auto__$jscomp$123$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, $G__88924_89646_entry$jscomp$29_maybe_ref__41633__auto__$jscomp$123$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$, 
  $G__88924_89646_entry$jscomp$29_maybe_ref__41633__auto__$jscomp$123$$);
  $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__88930$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__88936$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88936$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88936$$);
        }(), function() {
          var $G__88940$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88940$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88940$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88930$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88930$$);
    }(), function() {
      var $G__88944_G__88948$jscomp$inline_4229$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__88944_G__88948$jscomp$inline_4229$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88944_G__88948$jscomp$inline_4229$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88944_G__88948$jscomp$inline_4229$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88944_G__88948$jscomp$inline_4229$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__88944_G__88948$jscomp$inline_4229$$);
    }(), function() {
      var $G__88954$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__88958$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__88962_JSCompiler_temp_const$jscomp$3109$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3110_d$jscomp$inline_3530$$ = $otp$pages$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3110_d$jscomp$inline_3530$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3110_d$jscomp$inline_3530$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3110_d$jscomp$inline_3530$$.getDate());
              $G__88962_JSCompiler_temp_const$jscomp$3109$$ = {className:$G__88962_JSCompiler_temp_const$jscomp$3109$$, children:$JSCompiler_inline_result$jscomp$3110_d$jscomp$inline_3530$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88962_JSCompiler_temp_const$jscomp$3109$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88962_JSCompiler_temp_const$jscomp$3109$$);
            }(), function() {
              var $G__88966$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$otp$pages$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88966$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88966$$);
            }(), function() {
              var $G__88970$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$890$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$395$text$$.$cljs$core$IFn$_invoke$arity$1$($st$$))), children:$APP.$cljs$cst$414$label$$.$cljs$core$IFn$_invoke$arity$1$($st$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__88970$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__88970$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88958$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88958$$);
        }(), function() {
          var $G__88974$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$32$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88974$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88974$$);
        }(), function() {
          var $G__88978$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$otp$pages$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__88978$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__88978$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88954$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88954$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88923_89645_G__88926_map__88921_map__88921__$1_map__88922__$1_props__41632__auto__$jscomp$123_status$jscomp$11_vec__88918$$);
};
$otp$pages$budget$cash_flow$now_marker$$ = function($G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$) {
  $APP.$helix$core$extract_cljs_props$$($G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$21$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$21$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$21$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__88988_89656$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$, $G__88988_89656$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$, $G__88988_89656$$);
  $G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$ = function() {
    return {ref:$ref$jscomp$21$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__88994$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__89000$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89000$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89000$$);
        }(), function() {
          var $G__89004$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89004$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89004$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88994$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88994$$);
    }(), function() {
      var $G__89008$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89008$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89008$$);
    }(), function() {
      var $G__89012$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89012$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89012$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__88987_89655_G__88990_props__41632__auto__$jscomp$124$$);
};
$otp$pages$budget$cash_flow$month_header$$ = function($G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$, $G__89024_89666_maybe_ref__41633__auto__$jscomp$125$$) {
  $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$), $G__89024_89666_maybe_ref__41633__auto__$jscomp$125$$], null);
  $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$, 0, null);
  $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$ = $APP.$cljs$core$__destructure_map$$($G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$);
  var $label$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$, $APP.$cljs$cst$414$label$$), $idx$jscomp$75$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$, $APP.$cljs$cst$759$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$22$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$22$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$22$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$75$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__89024_89666_maybe_ref__41633__auto__$jscomp$125$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$, $G__89024_89666_maybe_ref__41633__auto__$jscomp$125$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$, $G__89024_89666_maybe_ref__41633__auto__$jscomp$125$$);
  $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$ = function() {
    return {ref:$ref$jscomp$22$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__89040$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89040$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89040$$);
    }(), function() {
      var $G__89048$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$18$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89048$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89048$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89023_89665_G__89032_map__89021_map__89021__$1_props__41632__auto__$jscomp$125_vec__89018$$);
};
$otp$pages$budget$cash_flow$month_summary_row$$ = function($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$) {
  $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$), $G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$], null);
  $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, 0, null);
  $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$ = $APP.$cljs$core$__destructure_map$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$);
  $G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $cljs$cst$892$rollup$$);
  var $idx$jscomp$76$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $APP.$cljs$cst$759$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$ = $APP.$cljs$core$__destructure_map$$($G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$);
  var $label$jscomp$19$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $APP.$cljs$cst$414$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $APP.$cljs$cst$736$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, 
  $cljs$cst$826$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $cljs$cst$888$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, 
  $cljs$cst$886$n_crit$$);
  $G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $cljs$cst$884$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $cljs$cst$889$has_now$$), $ref$jscomp$23$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$2$$ = $APP.$cljs$core$truth_$$($G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$396$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$883$fill$$, "bg-transparent", $APP.$cljs$cst$395$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$396$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$883$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$395$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$396$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$883$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$395$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$23$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$23$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$76$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$, $G__89142_89694_all_paid$jscomp$2_maybe_ref__41633__auto__$jscomp$126_rollup$$);
  $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$ = function() {
    return {ref:$ref$jscomp$23$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__89158$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__89168$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$396$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$883$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89168$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89168$$);
        }(), function() {
          var $G__89178$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89178$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89178$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89158$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89158$$);
    }(), function() {
      var $G__89186_G__89192$jscomp$inline_4232$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__89186_G__89192$jscomp$inline_4232$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89186_G__89192$jscomp$inline_4232$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89186_G__89192$jscomp$inline_4232$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89186_G__89192$jscomp$inline_4232$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89186_G__89192$jscomp$inline_4232$$);
    }(), function() {
      var $G__89206$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__89212$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__89218$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$19$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89218$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89218$$);
            }(), function() {
              var $G__89226$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89226$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89226$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__89238$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89238$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89238$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__89246$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89246$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89246$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89212$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89212$$);
        }(), function() {
          var $G__89256$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__89262$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$395$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$))), children:$otp$pages$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89262$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89262$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__89268$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89268$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89268$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__89274$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($otp$pages$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89274$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89274$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89256$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89256$$);
        }(), function() {
          var $G__89280_G__89286$jscomp$inline_4235$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__89280_G__89286$jscomp$inline_4235$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89280_G__89286$jscomp$inline_4235$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89280_G__89286$jscomp$inline_4235$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89280_G__89286$jscomp$inline_4235$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89280_G__89286$jscomp$inline_4235$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89206$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89206$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89141_89693_G__89150_map__89125_map__89125__$1_map__89132__$1_props__41632__auto__$jscomp$126_vec__89122$$);
};
$otp$pages$budget$cash_flow$view_toggle$$ = function($G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$, $maybe_ref__41633__auto__$jscomp$127$$) {
  $G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$), $maybe_ref__41633__auto__$jscomp$127$$], null);
  $G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$, 0, null);
  $G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$ = $APP.$cljs$core$__destructure_map$$($G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$, $cljs$cst$893$expanded_QMARK_$$), $on_toggle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$, $APP.$cljs$cst$783$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$1$$, children:[function() {
      var $G__89329$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89329$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89329$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "Summary" : "Expand", function() {
      var $G__89333$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__89333$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__89333$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__89324_map__89322_map__89322__$1_props__41632__auto__$jscomp$127_vec__89319$$);
};
$otp$pages$budget$cash_flow$summary_header$$ = function($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$) {
  $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$), $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$], null);
  $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, 0, null);
  $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$ = $APP.$cljs$core$__destructure_map$$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$);
  $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, $cljs$cst$885$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, $cljs$cst$894$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, $cljs$cst$820$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, $cljs$cst$819$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__89342_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__89342_SHARP_$$)));
  }, $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__89345_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$844$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$824$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__89345_SHARP_$$)));
  }, $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$155$$ = new Date();
    $d$jscomp$155$$.setDate($d$jscomp$155$$.getDate() + 7);
    return $d$jscomp$155$$;
  }(), $ref$jscomp$24$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$24$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$24$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$, $G__89360_89785_entries$jscomp$6_maybe_ref__41633__auto__$jscomp$128$$);
  $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$ = function() {
    return {ref:$ref$jscomp$24$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__89366$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__89370$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89370$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89370$$);
        }(), function() {
          var $G__89374$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89374$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89374$$);
        }(), function() {
          var $G__89378$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89378$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89378$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89366$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89366$$);
    }(), function() {
      var $G__89382$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$otp$pages$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89382$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89382$$);
    }(), function() {
      var $G__89386$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89386$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89386$$);
    }(), function() {
      var $G__89390$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__89394$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__89398$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89398$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89398$$);
            }(), function() {
              var $G__89402$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$otp$pages$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89402$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89402$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89394$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89394$$);
        }(), function() {
          var $G__89406$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__89410$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89410$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89410$$);
            }(), function() {
              var $G__89414$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$otp$pages$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89414$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89414$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89406$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89406$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89390$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89390$$);
    }(), function() {
      var $G__89418$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__89422$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__89426$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89426$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89426$$);
            }(), function() {
              var $G__89430$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$otp$pages$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89430$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89430$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89422$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89422$$);
        }(), function() {
          var $G__89434$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__89438$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89438$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89438$$);
            }(), function() {
              var $G__89442$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$otp$pages$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89442$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89442$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89434$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89434$$);
        }(), function() {
          var $G__89446$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__89450$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89450$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89450$$);
            }(), function() {
              var $G__89454$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$otp$pages$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89454$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89454$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89446$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89446$$);
        }(), function() {
          var $G__89458$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__89462$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89462$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89462$$);
            }(), function() {
              var $G__89466$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89466$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89466$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89458$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89458$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89418$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89418$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89359_89784_G__89362_map__89358_map__89358__$1_props__41632__auto__$jscomp$128_vec__89355$$);
};
$otp$pages$budget$cash_flow$cash_flow$$ = function($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, $G__89484_89792_maybe_ref__41633__auto__$jscomp$129$$) {
  $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$), $G__89484_89792_maybe_ref__41633__auto__$jscomp$129$$], null);
  $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, 0, null);
  $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$ = $APP.$cljs$core$__destructure_map$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$);
  var $id$jscomp$94$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, 1, null);
  $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, 1, null), $container_ref$jscomp$3$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($otp$pages$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$) : $otp$pages$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__89484_89792_maybe_ref__41633__auto__$jscomp$129$$ = [$otp$pages$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, $G__89484_89792_maybe_ref__41633__auto__$jscomp$129$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$, $G__89484_89792_maybe_ref__41633__auto__$jscomp$129$$);
  $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$ = function() {
    return {id:$id$jscomp$94$$, ref:$container_ref$jscomp$3$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__89491$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__89491$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__89491$$);
    }() : $otp$pages$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__89496_G__89503$jscomp$inline_4024$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__89496_G__89503$jscomp$inline_4024$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89496_G__89503$jscomp$inline_4024$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89496_G__89503$jscomp$inline_4024$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89496_G__89503$jscomp$inline_4024$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89496_G__89503$jscomp$inline_4024$$);
    }() : function() {
      var $G__89540_map__89506__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($otp$pages$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89540_map__89506__$1_sorted$jscomp$1$$, $cljs$cst$821$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89540_map__89506__$1_sorted$jscomp$1$$, $cljs$cst$820$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89540_map__89506__$1_sorted$jscomp$1$$, 
      $cljs$cst$819$debt_raised$$), $target_total$jscomp$1$$ = $otp$pages$budget$table$sub_total_all_sections$$($otp$pages$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__89470_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__89470_SHARP_$$, $cljs$cst$824$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__89540_map__89506__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$date__GT_ms$$, $otp$pages$budget$cash_flow$parse_date$$, $cljs$cst$823$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $otp$pages$budget$cash_flow$group_by_month$$($G__89540_map__89506__$1_sorted$jscomp$1$$), $now_ms$$ = $otp$pages$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = 
        null, $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = 0, $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ = 0;;) {
          if ($G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ < $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$) {
            var $G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ = $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$), $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$ = $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$month$$, $APP.$cljs$cst$414$label$$, $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ = $APP.$cljs$core$seq$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$);
            $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$ = null;
            for (var $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ = 0, $i__89534_89802$$ = 0;;) {
              if ($i__89534_89802$$ < $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$) {
                var $entry_89803$$ = $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__89534_89802$$), $entry_ms_89804$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_89803$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_89804$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$896$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$891$entry$$, $cljs$cst$891$entry$$, $entry_89803$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$897$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_89803$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__89534_89802$$ += 1;
              } else {
                if ($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ = $APP.$cljs$core$seq$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$) ? ($G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ = $APP.$cljs$core$_chunked_first$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$), $G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ = $APP.$cljs$core$_chunked_rest$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$), 
                  $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$ = $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$, $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ = $APP.$cljs$core$count$$($G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$)) : ($G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$ = $APP.$cljs$core$first$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$), 
                  $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$))), $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                  $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$896$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$891$entry$$, $cljs$cst$891$entry$$, $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$, $APP.$cljs$cst$759$idx$$, 
                  $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$897$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$))], null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ = 
                  $APP.$cljs$core$next$$($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$), $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$ = null, $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ = 0), $i__89534_89802$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ += 1;
          } else {
            if ($G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$ = $APP.$cljs$core$seq$$($G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$)) {
                $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = $APP.$cljs$core$_chunked_first$$($G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$), $G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$ = $APP.$cljs$core$_chunked_rest$$($G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$), $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = 
                $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$, $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = $APP.$cljs$core$count$$($G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$);
              } else {
                $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = $APP.$cljs$core$first$$($G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$);
                $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = $otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$month$$, $APP.$cljs$cst$414$label$$, $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = $APP.$cljs$core$seq$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$);
                $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = null;
                for ($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ = $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ = 0;;) {
                  if ($G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ < $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$) {
                    $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$ = $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$), $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__89814_c__5673__auto___89811_count__89533_89801_entry_ms_89817_entry_ms_89840$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$896$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$891$entry$$, $cljs$cst$891$entry$$, $G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$897$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__89813_chunk__89532_89800_entry_89816_entry_89839_month_label_89798$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ += 1;
                  } else {
                    if ($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = $APP.$cljs$core$seq$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$) ? ($G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ = $APP.$cljs$core$_chunked_first$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$), $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$), $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$, $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ = $APP.$cljs$core$count$$($G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$)) : 
                      ($G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = $APP.$cljs$core$first$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$), $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ = $otp$pages$budget$cash_flow$date__GT_ms$$($otp$pages$budget$cash_flow$parse_date$$($cljs$cst$823$due$$.$cljs$core$IFn$_invoke$arity$1$($G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$896$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$891$entry$$, $cljs$cst$891$entry$$, $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$, $APP.$cljs$cst$759$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$897$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = $APP.$cljs$core$next$$($G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$), $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = 
                      null, $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ = 0), $G__89812_group_89797_i__89538_89838_seq__89531_89799_seq__89531_89810__$1_temp__5823__auto___89809$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$ = $APP.$cljs$core$next$$($G__89829_seq__89518_89793_seq__89518_89827__$1_temp__5823__auto___89826$$);
                $G__89830_G__89848_chunk__89519_89794_group_89833_seq__89535_89835_seq__89535_89846__$1_temp__5823__auto___89845__$1$$ = null;
                $G__89831_G__89849_c__5673__auto___89828_chunk__89536_89836_count__89520_89795_entry_89852_month_label_89834$$ = 0;
              }
              $G__89850_c__5673__auto___89847_count__89537_89837_entry_ms_89853_i__89521_89796$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$896$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__89540_map__89506__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__89544$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cash_flow$summary_header$$, $G__89544$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$summary_header$$, $G__89544$$);
        }(), function() {
          var $G__89548$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$4$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cash_flow$view_toggle$$, $G__89548$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$view_toggle$$, $G__89548$$);
        }(), function() {
          var $G__89552$$ = function() {
            return {className:"relative", children:[function() {
              var $G__89556$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89556$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89556$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$4$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__89562_G__89566_G__89572_i$jscomp$423$$, $G__89561_G__89571_item$jscomp$40$$) {
              var $G__89559_G__89559__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__89561_G__89571_item$jscomp$40$$);
              $G__89559_G__89559__$1$$ = $G__89559_G__89559__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__89559_G__89559__$1$$.$fqn$ : null;
              switch($G__89559_G__89559__$1$$) {
                case "month":
                  return $G__89561_G__89571_item$jscomp$40$$ = {label:$APP.$cljs$cst$414$label$$.$cljs$core$IFn$_invoke$arity$1$($G__89561_G__89571_item$jscomp$40$$), idx:$APP.$cljs$cst$759$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__89561_G__89571_item$jscomp$40$$)}, $G__89562_G__89566_G__89572_i$jscomp$423$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__89562_G__89566_G__89572_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$month_header$$, 
                  $G__89561_G__89571_item$jscomp$40$$, $G__89562_G__89566_G__89572_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$month_header$$, $G__89561_G__89571_item$jscomp$40$$, $G__89562_G__89566_G__89572_i$jscomp$423$$);
                case "now":
                  return $G__89562_G__89566_G__89572_i$jscomp$423$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__89562_G__89566_G__89572_i$jscomp$423$$, "now") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__89562_G__89566_G__89572_i$jscomp$423$$, "now");
                case "entry":
                  return $G__89561_G__89571_item$jscomp$40$$ = {entry:$cljs$cst$891$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__89561_G__89571_item$jscomp$40$$), idx:$APP.$cljs$cst$759$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__89561_G__89571_item$jscomp$40$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$826$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$891$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__89561_G__89571_item$jscomp$40$$)))}, 
                  $G__89562_G__89566_G__89572_i$jscomp$423$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__89562_G__89566_G__89572_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$timeline_node$$, $G__89561_G__89571_item$jscomp$40$$, $G__89562_G__89566_G__89572_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$timeline_node$$, $G__89561_G__89571_item$jscomp$40$$, 
                  $G__89562_G__89566_G__89572_i$jscomp$423$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__89559_G__89559__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$ = $otp$pages$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$15$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$));
              for (var $G__89878_chunk__89576_89864_seq__89575_89875__$1$$ = null, $G__89879_count__89577_89865$$ = 0, $G__89877_i__89578_89866$$ = 0;;) {
                if ($G__89877_i__89578_89866$$ < $G__89879_count__89577_89865$$) {
                  var $vec__89605_89867$$ = $G__89878_chunk__89576_89864_seq__89575_89875__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__89877_i__89578_89866$$), $i_89868$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__89605_89867$$, 0, null), $r_89869$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__89605_89867$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$91$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$91$$ ? $cljs$cst$889$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_89869$$) : $and__5140__auto__$jscomp$91$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__89609$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__89609$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__89609$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__89614$$ = {rollup:$r_89869$$, idx:$i_89868$$}, $G__89615$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_89868$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$month_summary_row$$, $G__89614$$, $G__89615$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$month_summary_row$$, $G__89614$$, $G__89615$$);
                  }());
                  $G__89877_i__89578_89866$$ += 1;
                } else {
                  if ($c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$ = $APP.$cljs$core$seq$$($c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$)) {
                    $G__89878_chunk__89576_89864_seq__89575_89875__$1$$ = $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__89878_chunk__89576_89864_seq__89575_89875__$1$$)) {
                      $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$ = $APP.$cljs$core$_chunked_first$$($G__89878_chunk__89576_89864_seq__89575_89875__$1$$), $G__89877_i__89578_89866$$ = $APP.$cljs$core$_chunked_rest$$($G__89878_chunk__89576_89864_seq__89575_89875__$1$$), $G__89878_chunk__89576_89864_seq__89575_89875__$1$$ = $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$, $G__89879_count__89577_89865$$ = $APP.$cljs$core$count$$($c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$), 
                      $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$ = $G__89877_i__89578_89866$$;
                    } else {
                      $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$ = $APP.$cljs$core$first$$($G__89878_chunk__89576_89864_seq__89575_89875__$1$$);
                      var $i_89882$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$, 0, null), $r_89883$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$92$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$92$$ ? $cljs$cst$889$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_89883$$) : $and__5140__auto__$jscomp$92$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__89622$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__89622$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__89622$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__89627$$ = {rollup:$r_89883$$, idx:$i_89882$$}, $G__89628$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_89882$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$month_summary_row$$, $G__89627$$, $G__89628$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$month_summary_row$$, $G__89627$$, $G__89628$$);
                      }());
                      $c__5673__auto___89876_rollups_seq__89575_89863_temp__5823__auto___89874_vec__89618_89881$$ = $APP.$cljs$core$next$$($G__89878_chunk__89576_89864_seq__89575_89875__$1$$);
                      $G__89878_chunk__89576_89864_seq__89575_89875__$1$$ = null;
                      $G__89879_count__89577_89865$$ = 0;
                    }
                    $G__89877_i__89578_89866$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                var $G__89632$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$cash_flow$now_marker$$, $G__89632$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$now_marker$$, $G__89632$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$15$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89552$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89552$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89540_map__89506__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89540_map__89506__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89483_89791_G__89487_map__89476_map__89476__$1_props__41632__auto__$jscomp$129_vec__89473_vec__89477_vec__89480$$);
};
$otp$pages$budget$non_profit$non_profit$$ = function($G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$, $maybe_ref__41633__auto__$jscomp$130$$) {
  $G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$), $maybe_ref__41633__auto__$jscomp$130$$], null);
  $G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$, 0, null);
  $G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$ = $APP.$cljs$core$__destructure_map$$($G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$);
  var $id$jscomp$95$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$, $APP.$cljs$cst$772$subtitle$$), $title$jscomp$33$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$$ = $APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$$ = $APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$ = function() {
    return {id:$id$jscomp$95$$, children:function() {
      var $G__61630$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$6$$, title:$title$jscomp$33$$, children:function() {
          var $G__61634$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__61639$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__61643$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__61647$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61647$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61647$$);
                    }(), ", a registered ", function() {
                      var $G__61652$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61652$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61652$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__61657$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61657$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61657$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61643$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__61643$$);
                }(), function() {
                  var $G__61665$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__61669_G__61675$jscomp$inline_4027$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Organization: "};
                      $G__61669_G__61675$jscomp$inline_4027$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61669_G__61675$jscomp$inline_4027$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61669_G__61675$jscomp$inline_4027$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61669_G__61675$jscomp$inline_4027$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__61669_G__61675$jscomp$inline_4027$$);
                    }(), function() {
                      var $G__61685$$ = function() {
                        return {children:[function() {
                          var $G__61689$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61689$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61689$$);
                        }(), function() {
                          var $G__61694$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61694$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61694$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61685$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__61685$$);
                    }(), function() {
                      var $G__61698$$ = function() {
                        return {children:[function() {
                          var $G__61702$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61702$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61702$$);
                        }(), function() {
                          var $G__61706$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_bold$$), children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61706$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61706$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61698$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__61698$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61665$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61665$$);
                }(), function() {
                  var $G__61710$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__61714$$ = function() {
                        return {children:[function() {
                          var $G__61718_JSCompiler_temp_const$jscomp$inline_4029$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__61722$jscomp$inline_4031_JSCompiler_inline_result$jscomp$inline_4030$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__61722$jscomp$inline_4031_JSCompiler_inline_result$jscomp$inline_4030$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61722$jscomp$inline_4031_JSCompiler_inline_result$jscomp$inline_4030$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61722$jscomp$inline_4031_JSCompiler_inline_result$jscomp$inline_4030$$);
                          $G__61718_JSCompiler_temp_const$jscomp$inline_4029$$ = {className:$G__61718_JSCompiler_temp_const$jscomp$inline_4029$$, children:["Domestic ", $G__61722$jscomp$inline_4031_JSCompiler_inline_result$jscomp$inline_4030$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61718_JSCompiler_temp_const$jscomp$inline_4029$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__61718_JSCompiler_temp_const$jscomp$inline_4029$$);
                        }(), function() {
                          var $G__61726$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__61730$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__61734$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61734$$);
                                }(), function() {
                                  var $G__61738$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61738$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61738$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61730$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61730$$);
                            }(), function() {
                              var $G__61742$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__61746$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61746$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61746$$);
                                }(), function() {
                                  var $G__61750$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61750$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61750$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61742$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61742$$);
                            }(), function() {
                              var $G__61754$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__61758$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61758$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61758$$);
                                }(), function() {
                                  var $G__61762$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61762$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61762$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61754$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61754$$);
                            }(), function() {
                              var $G__61766$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__61770$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61770$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61770$$);
                                }(), function() {
                                  var $G__61774$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__61778$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61778$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61778$$);
                                    }(), function() {
                                      var $G__61782$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61782$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61782$$);
                                    }(), function() {
                                      var $G__61786$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61786$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61786$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61774$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61774$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61766$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61766$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61726$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61726$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61714$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61714$$);
                    }(), function() {
                      var $G__61790$$ = function() {
                        return {children:[function() {
                          var $G__61794_JSCompiler_temp_const$jscomp$inline_4033$$ = $APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__61798$jscomp$inline_4035_JSCompiler_inline_result$jscomp$inline_4034$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__61798$jscomp$inline_4035_JSCompiler_inline_result$jscomp$inline_4034$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61798$jscomp$inline_4035_JSCompiler_inline_result$jscomp$inline_4034$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61798$jscomp$inline_4035_JSCompiler_inline_result$jscomp$inline_4034$$);
                          $G__61794_JSCompiler_temp_const$jscomp$inline_4033$$ = {className:$G__61794_JSCompiler_temp_const$jscomp$inline_4033$$, children:["International ", $G__61798$jscomp$inline_4035_JSCompiler_inline_result$jscomp$inline_4034$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61794_JSCompiler_temp_const$jscomp$inline_4033$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__61794_JSCompiler_temp_const$jscomp$inline_4033$$);
                        }(), function() {
                          var $G__61802$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__61806$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__61810$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61810$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61810$$);
                                }(), function() {
                                  var $G__61814$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61814$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61814$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61806$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61806$$);
                            }(), function() {
                              var $G__61818$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__61822$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61822$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61822$$);
                                }(), function() {
                                  var $G__61826$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61826$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61826$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61818$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61818$$);
                            }(), function() {
                              var $G__61830$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__61834$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61834$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61834$$);
                                }(), function() {
                                  var $G__61838$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61838$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61838$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61830$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61830$$);
                            }(), function() {
                              var $G__61842$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__61846$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61846$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61846$$);
                                }(), function() {
                                  var $G__61850$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61850$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61850$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61842$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61842$$);
                            }(), function() {
                              var $G__61854$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__61858$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61858$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61858$$);
                                }(), function() {
                                  var $G__61862$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__61866$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61866$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61866$$);
                                    }(), function() {
                                      var $G__61870$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61870$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61870$$);
                                    }(), function() {
                                      var $G__61874$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61874$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61874$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61862$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61862$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61854$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61854$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61802$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61802$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61790$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61790$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61710$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61710$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61639$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61639$$);
            }(), function() {
              var $G__61878$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__61878$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__61878$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61634$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61634$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$budget$section_block$section_block$$, $G__61630$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$budget$section_block$section_block$$, $G__61630$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__61622_map__61610_map__61610__$1_props__41632__auto__$jscomp$130_vec__61607$$);
};
$otp$pages$budget$sponsors$logo_card$$ = function($G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$, $logo_map__61887__$1_maybe_ref__41633__auto__$jscomp$131$$) {
  $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$), $logo_map__61887__$1_maybe_ref__41633__auto__$jscomp$131$$], null);
  $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$, 0, null);
  $logo_map__61887__$1_maybe_ref__41633__auto__$jscomp$131$$ = $APP.$cljs$core$__destructure_map$$($G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$);
  $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__61887__$1_maybe_ref__41633__auto__$jscomp$131$$, $APP.$cljs$cst$165$name$$);
  $logo_map__61887__$1_maybe_ref__41633__auto__$jscomp$131$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__61887__$1_maybe_ref__41633__auto__$jscomp$131$$, $cljs$cst$900$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$ = {src:$logo_map__61887__$1_maybe_ref__41633__auto__$jscomp$131$$, alt:$G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__61889_G__61893$jscomp$inline_4238_map__61887_name$jscomp$199_props__41632__auto__$jscomp$131_vec__61884$$);
};
$otp$pages$budget$sponsors$name_item$$ = function($G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$, $accent_map__61908__$1_maybe_ref__41633__auto__$jscomp$132$$) {
  $G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$), $accent_map__61908__$1_maybe_ref__41633__auto__$jscomp$132$$], null);
  $G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$, 0, null);
  $accent_map__61908__$1_maybe_ref__41633__auto__$jscomp$132$$ = $APP.$cljs$core$__destructure_map$$($G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$);
  $G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__61908__$1_maybe_ref__41633__auto__$jscomp$132$$, $APP.$cljs$cst$165$name$$);
  $accent_map__61908__$1_maybe_ref__41633__auto__$jscomp$132$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__61908__$1_maybe_ref__41633__auto__$jscomp$132$$, $cljs$cst$904$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__61908__$1_maybe_ref__41633__auto__$jscomp$132$$]))), children:$G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61910_map__61908_name$jscomp$200_props__41632__auto__$jscomp$132_vec__61905$$);
};
$otp$pages$budget$sponsors$tier_section$$ = function($G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$, $map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$) {
  $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$), $map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$], null);
  $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$, 0, null);
  $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$ = $APP.$cljs$core$__destructure_map$$($G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$);
  $map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$, $cljs$cst$898$tier$$);
  $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$, $cljs$cst$908$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($otp$pages$budget$sponsors$tier_meta$$, $map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$);
  $map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$ = $APP.$cljs$core$__destructure_map$$($map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$);
  var $label$jscomp$20$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$, $APP.$cljs$cst$414$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$, $cljs$cst$904$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__61975_map__61975__$1_maybe_ref__41633__auto__$jscomp$133_tier$$, 
  $APP.$cljs$cst$396$border$$), $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$900$logo$$, $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$900$logo$$, $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$);
  $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__62010_G__62015$jscomp$inline_4040$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$20$$};
      $G__62010_G__62015$jscomp$inline_4040$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62010_G__62015$jscomp$inline_4040$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__62010_G__62015$jscomp$inline_4040$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62010_G__62015$jscomp$inline_4040$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62010_G__62015$jscomp$inline_4040$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__62020$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$201_p__62023$$) {
          var $G__62026_logo$jscomp$1_map__62024__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$201_p__62023$$);
          $name$jscomp$201_p__62023$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62026_logo$jscomp$1_map__62024__$1$$, $APP.$cljs$cst$165$name$$);
          $G__62026_logo$jscomp$1_map__62024__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62026_logo$jscomp$1_map__62024__$1$$, $cljs$cst$900$logo$$);
          $G__62026_logo$jscomp$1_map__62024__$1$$ = {name:$name$jscomp$201_p__62023$$, logo:$G__62026_logo$jscomp$1_map__62024__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$sponsors$logo_card$$, $G__62026_logo$jscomp$1_map__62024__$1$$, $name$jscomp$201_p__62023$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$logo_card$$, $G__62026_logo$jscomp$1_map__62024__$1$$, $name$jscomp$201_p__62023$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62020$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62020$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__62032$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__62042__$1_name$jscomp$202_p__62039$$) {
          $map__62042__$1_name$jscomp$202_p__62039$$ = $APP.$cljs$core$__destructure_map$$($map__62042__$1_name$jscomp$202_p__62039$$);
          $map__62042__$1_name$jscomp$202_p__62039$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62042__$1_name$jscomp$202_p__62039$$, $APP.$cljs$cst$165$name$$);
          var $G__62046_JSCompiler_temp_const$jscomp$inline_4042$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__62057$jscomp$inline_4044_JSCompiler_inline_result$jscomp$inline_4043$$ = {name:$map__62042__$1_name$jscomp$202_p__62039$$, accent:$accent$jscomp$1$$};
          $G__62057$jscomp$inline_4044_JSCompiler_inline_result$jscomp$inline_4043$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$sponsors$name_item$$, $G__62057$jscomp$inline_4044_JSCompiler_inline_result$jscomp$inline_4043$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$name_item$$, $G__62057$jscomp$inline_4044_JSCompiler_inline_result$jscomp$inline_4043$$);
          $G__62046_JSCompiler_temp_const$jscomp$inline_4042$$ = {className:$G__62046_JSCompiler_temp_const$jscomp$inline_4042$$, children:$G__62057$jscomp$inline_4044_JSCompiler_inline_result$jscomp$inline_4043$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__62046_JSCompiler_temp_const$jscomp$inline_4042$$, $map__62042__$1_name$jscomp$202_p__62039$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62046_JSCompiler_temp_const$jscomp$inline_4042$$, $map__62042__$1_name$jscomp$202_p__62039$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62032$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62032$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61994_map__61955_map__61955__$1_members$jscomp$1_props__41632__auto__$jscomp$133_vec__61952$$);
};
$otp$pages$budget$sponsors$sponsors_section$$ = function($G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$, $maybe_ref__41633__auto__$jscomp$134$$) {
  $G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$), $maybe_ref__41633__auto__$jscomp$134$$], null);
  $G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$, 0, null);
  $G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$ = $APP.$cljs$core$__destructure_map$$($G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$);
  var $id$jscomp$96$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$, $APP.$cljs$cst$772$subtitle$$), $title$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__62127$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__62127$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__62127$$, 1, null);
    return $cljs$cst$905$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($otp$pages$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$898$tier$$, $otp$pages$budget$sponsors$sponsors$$));
  $G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$ = function() {
    return {id:$id$jscomp$96$$, children:function() {
      var $G__62148$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$34$$, children:function() {
          var $G__62154$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__62162$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__62168$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62168$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62168$$);
                }(), function() {
                  var $G__62176$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62176$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62176$$);
                }(), function() {
                  var $G__62186$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62186$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62186$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62162$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62162$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__62205_members$jscomp$2_p__62195$$) {
              var $G__62208_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62205_members$jscomp$2_p__62195$$, 0, null);
              $G__62205_members$jscomp$2_p__62195$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62205_members$jscomp$2_p__62195$$, 1, null);
              $G__62205_members$jscomp$2_p__62195$$ = {tier:$G__62208_tier$jscomp$2$$, members:$G__62205_members$jscomp$2_p__62195$$};
              $G__62208_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__62208_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($otp$pages$budget$sponsors$tier_section$$, $G__62205_members$jscomp$2_p__62195$$, $G__62208_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$tier_section$$, $G__62205_members$jscomp$2_p__62195$$, $G__62208_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62154$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62154$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$budget$section_block$section_block$$, $G__62148$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$budget$section_block$section_block$$, $G__62148$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62142_map__62116_map__62116__$1_props__41632__auto__$jscomp$134_vec__62113$$);
};
$otp$pages$budget$why_support$preview$$ = function($G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$, $maybe_ref__41633__auto__$jscomp$135$$) {
  $G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$), $maybe_ref__41633__auto__$jscomp$135$$], null);
  $G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__61981$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61981$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61981$$);
    }(), function() {
      var $G__61985$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61985$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61985$$);
    }(), function() {
      var $G__61990$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61990$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61990$$);
    }(), function() {
      var $G__61996$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__61996$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__61996$$);
    }(), function() {
      var $G__62000$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62000$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62000$$);
    }(), function() {
      var $G__62006$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62006$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62006$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__61977_map__61974_props__41632__auto__$jscomp$135_vec__61971$$);
};
$otp$pages$budget$why_support$details$$ = function($G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$, $maybe_ref__41633__auto__$jscomp$136$$) {
  $G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$), $maybe_ref__41633__auto__$jscomp$136$$], null);
  $G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__62279$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62279$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62279$$);
    }(), function() {
      var $G__62293$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62293$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62293$$);
    }(), function() {
      var $G__62305$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62305$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62305$$);
    }(), function() {
      var $G__62313$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62313$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62313$$);
    }(), function() {
      var $G__62317$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62317$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62317$$);
    }(), function() {
      var $G__62329$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62329$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62329$$);
    }(), function() {
      var $G__62333$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62333$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62333$$);
    }(), function() {
      var $G__62338_G__62342$jscomp$inline_4047$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__62338_G__62342$jscomp$inline_4047$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62338_G__62342$jscomp$inline_4047$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62338_G__62342$jscomp$inline_4047$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62338_G__62342$jscomp$inline_4047$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62338_G__62342$jscomp$inline_4047$$);
    }(), function() {
      var $G__62347$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-5"]))), children:[function() {
          var $G__62352_G__62356$jscomp$inline_4050$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"National dignity, made public: "};
          $G__62352_G__62356$jscomp$inline_4050$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62352_G__62356$jscomp$inline_4050$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62352_G__62356$jscomp$inline_4050$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62352_G__62356$jscomp$inline_4050$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62352_G__62356$jscomp$inline_4050$$);
        }(), function() {
          var $G__62364_G__62372$jscomp$inline_4053$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Soft power that compounds: "};
          $G__62364_G__62372$jscomp$inline_4053$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62364_G__62372$jscomp$inline_4053$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62364_G__62372$jscomp$inline_4053$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62364_G__62372$jscomp$inline_4053$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62364_G__62372$jscomp$inline_4053$$);
        }(), function() {
          var $G__62380_G__62385$jscomp$inline_4056$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Narrative control: "};
          $G__62380_G__62385$jscomp$inline_4056$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62380_G__62385$jscomp$inline_4056$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62380_G__62385$jscomp$inline_4056$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62380_G__62385$jscomp$inline_4056$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62380_G__62385$jscomp$inline_4056$$);
        }(), function() {
          var $G__62389_G__62394$jscomp$inline_4059$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"A platform for future generations: "};
          $G__62389_G__62394$jscomp$inline_4059$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62389_G__62394$jscomp$inline_4059$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62389_G__62394$jscomp$inline_4059$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62389_G__62394$jscomp$inline_4059$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62389_G__62394$jscomp$inline_4059$$);
        }(), function() {
          var $G__62399_G__62403$jscomp$inline_4062$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Diaspora cohesion: "};
          $G__62399_G__62403$jscomp$inline_4062$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62399_G__62403$jscomp$inline_4062$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62399_G__62403$jscomp$inline_4062$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62399_G__62403$jscomp$inline_4062$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62399_G__62403$jscomp$inline_4062$$);
        }(), function() {
          var $G__62407_G__62411$jscomp$inline_4065$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$em_bold$$, "italic"]))), children:"Institutional consequences: "};
          $G__62407_G__62411$jscomp$inline_4065$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62407_G__62411$jscomp$inline_4065$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62407_G__62411$jscomp$inline_4065$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__62407_G__62411$jscomp$inline_4065$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__62407_G__62411$jscomp$inline_4065$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62347$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62347$$);
    }(), function() {
      var $G__62415$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__62423$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62423$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62423$$);
        }(), function() {
          var $G__62427$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62427$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62427$$);
        }(), function() {
          var $G__62437$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62437$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62437$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62415$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62415$$);
    }(), function() {
      var $G__62443$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62443$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62443$$);
    }(), function() {
      var $G__62448$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying representation with consequences: an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable.'};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62448$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62448$$);
    }(), function() {
      var $G__62452$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62452$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62452$$);
    }(), function() {
      var $G__62456$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62456$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62456$$);
    }(), function() {
      var $G__62460$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62460$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62460$$);
    }(), function() {
      var $G__62464$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$otp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__62464$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__62464$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__62261_map__62235_props__41632__auto__$jscomp$136_vec__62232$$);
};
$otp$pages$budget$why_support$why_support$$ = function($G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$, $G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$) {
  $G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$), $G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$], null);
  $G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$, 0, null);
  var $map__62473__$1_title$jscomp$35$$ = $APP.$cljs$core$__destructure_map$$($G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$);
  $G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62473__$1_title$jscomp$35$$, $APP.$cljs$cst$286$id$$);
  $G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62473__$1_title$jscomp$35$$, $APP.$cljs$cst$772$subtitle$$);
  $map__62473__$1_title$jscomp$35$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__62473__$1_title$jscomp$35$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$ = {idx:9, "section-hint":$G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$, title:$map__62473__$1_title$jscomp$35$$, "expand-button-label":"Read more", "preview-text":$otp$pages$budget$why_support$preview$$, "full-text":$otp$pages$budget$why_support$details$$};
  $G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$expandable_text$expandable_text_area_2$$, $G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$expandable_text$expandable_text_area_2$$, 
  $G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$);
  $G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$ = {id:$G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$, children:$G__62479$jscomp$inline_4068_JSCompiler_inline_result$jscomp$inline_4067_maybe_ref__41633__auto__$jscomp$137_subtitle$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__62475_id$jscomp$97_map__62473_props__41632__auto__$jscomp$137_vec__62470$$);
};
$otp$pages$budget$section$section_link$$ = function($G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$, $maybe_ref__41633__auto__$jscomp$138$$) {
  $G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$), $maybe_ref__41633__auto__$jscomp$138$$], null);
  $G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$, 0, null);
  $G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$ = $APP.$cljs$core$__destructure_map$$($G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$);
  var $title$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$, $APP.$cljs$cst$288$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$, $cljs$cst$909$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$otp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$3$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$nav_link$$), children:[$title$jscomp$36$$, " ", function() {
      var $G__89660$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$icons$ChevronRightIcon$$, $G__89660$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$icons$ChevronRightIcon$$, $G__89660$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__89654_map__89652_map__89652__$1_props__41632__auto__$jscomp$138_vec__89649$$);
};
$otp$pages$budget$section$header$$ = function($G__89672_props__41632__auto__$jscomp$139$$) {
  $APP.$helix$core$extract_cljs_props$$($G__89672_props__41632__auto__$jscomp$139$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89672_props__41632__auto__$jscomp$139$$ = function() {
    return {className:"relative", children:[function() {
      var $G__89676_G__89680$jscomp$inline_4071$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__89676_G__89680$jscomp$inline_4071$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__89676_G__89680$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__89676_G__89680$jscomp$inline_4071$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89676_G__89680$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89676_G__89680$jscomp$inline_4071$$);
    }(), function() {
      var $G__89684_G__89688$jscomp$inline_4074$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$otp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__89684_G__89688$jscomp$inline_4074$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__89684_G__89688$jscomp$inline_4074$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__89684_G__89688$jscomp$inline_4074$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89684_G__89688$jscomp$inline_4074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89684_G__89688$jscomp$inline_4074$$);
    }(), function() {
      var $G__89692$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__89698$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$otp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__89702$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89702$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89702$$);
            }(), function() {
              var $G__89706$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89706$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89706$$);
            }(), function() {
              var $G__89710$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89710$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89710$$);
            }(), function() {
              var $G__89714$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89714$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89714$$);
            }(), function() {
              var $G__89718$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89718$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89718$$);
            }(), function() {
              var $G__89722$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89722$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89722$$);
            }(), function() {
              var $G__89726$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89726$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89726$$);
            }(), function() {
              var $G__89730$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89730$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89730$$);
            }(), function() {
              var $G__89734$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$section_link$$, $G__89734$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$section_link$$, $G__89734$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89698$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89698$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89692$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89692$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89672_props__41632__auto__$jscomp$139$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__89672_props__41632__auto__$jscomp$139$$);
};
$otp$pages$budget$section$budget_section$$ = function($G__89744_props__41632__auto__$jscomp$140$$) {
  $APP.$helix$core$extract_cljs_props$$($G__89744_props__41632__auto__$jscomp$140$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89744_props__41632__auto__$jscomp$140$$ = function() {
    return {"section-id":"budget-section", children:function() {
      var $G__89749$$ = {children:[function() {
        var $G__89751$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$header$$, $G__89751$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$header$$, $G__89751$$);
      }(), function() {
        var $G__89753$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$landing$press_release$press_release$$, $G__89753$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$landing$press_release$press_release$$, $G__89753$$);
      }(), function() {
        var $G__89757$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$pages$landing$studio$about_studio$$, $G__89757$$) : $APP.$helix$core$jsx$$.call(null, $APP.$otp$pages$landing$studio$about_studio$$, $G__89757$$);
      }(), function() {
        var $G__89761$$ = {id:"section-3", subtitle:"financials", title:"budget"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cost_breakdown$cost_breakdown$$, $G__89761$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cost_breakdown$cost_breakdown$$, $G__89761$$);
      }(), function() {
        var $G__89765$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$cash_flow$cash_flow$$, $G__89765$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$cash_flow$cash_flow$$, $G__89765$$);
      }(), function() {
        var $G__89769$$ = {id:"section-5", subtitle:"team", title:"committee"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$committee$committee$$, $G__89769$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$committee$committee$$, $G__89769$$);
      }(), function() {
        var $G__89773$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$sponsors$sponsors_section$$, $G__89773$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$sponsors$sponsors_section$$, $G__89773$$);
      }(), function() {
        var $G__89777$$ = {id:"section-7", subtitle:"venue", title:"location information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$location$location_section$$, $G__89777$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$location$location_section$$, $G__89777$$);
      }(), function() {
        var $G__89781$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$non_profit$non_profit$$, $G__89781$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$non_profit$non_profit$$, $G__89781$$);
      }(), function() {
        var $G__89787$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$why_support$why_support$$, $G__89787$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$why_support$why_support$$, $G__89787$$);
      }()]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$otp$ui$page_shell$page_shell$$, $G__89749$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$otp$ui$page_shell$page_shell$$, $G__89749$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$otp$ui$section$section$$, $G__89744_props__41632__auto__$jscomp$140$$, "budget-section") : $APP.$helix$core$jsx$$.call(null, $APP.$otp$ui$section$section$$, $G__89744_props__41632__auto__$jscomp$140$$, "budget-section");
};
$APP.$otp$pages$budget$page$budget_view$$ = function($G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$, $maybe_ref__41633__auto__$jscomp$141$$) {
  $G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$), $maybe_ref__41633__auto__$jscomp$141$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$ = {};
  $G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($otp$pages$budget$section$budget_section$$, $G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$) : $APP.$helix$core$jsx$$.call(null, $otp$pages$budget$section$budget_section$$, $G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__89894_G__89898$jscomp$inline_3565_props__41632__auto__$jscomp$141_vec__89890$$);
};
$cljs$cst$857$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$871$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$830$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$849$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$859$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$824$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$904$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$810$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$853$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$886$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$875$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$907$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$835$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$862$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$889$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$813$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$895$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$906$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$837$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$847$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$865$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$885$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$884$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$825$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$822$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$866$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$887$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$818$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$829$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$870$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$819$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$863$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$807$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$898$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$839$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$879$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$804$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$814$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$860$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$846$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$848$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$843$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$888$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$876$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$836$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$854$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$826$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$802$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$880$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$852$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$905$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$850$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$858$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$891$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$881$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$841$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$809$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$878$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$838$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$823$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$808$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$844$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$867$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$827$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$882$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$842$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$861$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$864$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$801$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$897$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$821$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$890$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$893$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$806$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$803$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$851$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$816$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$812$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$902$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$883$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$820$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$873$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$833$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$908$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$805$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$877$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$892$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$903$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$872$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$831$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$856$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$901$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$900$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$832$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$815$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$909$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$811$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$855$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$874$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$834$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$896$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$868$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$869$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$828$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$899$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$840$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$845$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$817$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$894$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $otp$pages$budget$committee$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Archbishop Derderian", $APP.$cljs$cst$800$role$$, "Committee Lead", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, 
[$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$800$role$$, "Chief Curator", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$800$role$$, "Curator", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Zadik Zadikian", $APP.$cljs$cst$800$role$$, "Artist", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Rafi Ourfalian", $APP.$cljs$cst$800$role$$, "Legal Advisor", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Khachik Khudikyan", $APP.$cljs$cst$800$role$$, "Logistics Advisor", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Andranik Torosyan", $APP.$cljs$cst$800$role$$, "Financial Advisor", 
$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Aram Alajajian", $APP.$cljs$cst$800$role$$, "Architect", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$800$role$$, "Committee Member", $APP.$cljs$cst$712$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$preview$$, 
"otp.pages.budget.committee/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$details$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$details$$, 
"otp.pages.budget.committee/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$committee_member_card$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$committee_member_card$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$committee_member_card$$, "otp.pages.budget.committee/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$committee_gallery$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$committee_gallery$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$committee_gallery$$, "otp.pages.budget.committee/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$committee$committee$$, "", null, null) : (void 0).call(null, $otp$pages$budget$committee$committee$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$committee$committee$$, 
"otp.pages.budget.committee/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$total_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$table$total_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$total_section$$, 
"otp.pages.budget.table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$detail_line_item$$, "", null, null) : (void 0).call(null, $otp$pages$budget$table$detail_line_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$detail_line_item$$, 
"otp.pages.budget.table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, $otp$pages$budget$table$section_line_item$$, 
'(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$section_line_item$$, "otp.pages.budget.table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $otp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", 
null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$table$budget_table$$, "otp.pages.budget.table/budget-table"));
var $otp$pages$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$810$venue$$, $APP.$cljs$cst$288$title$$, "Venue \x26 Operations", $cljs$cst$808$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Base", $APP.$cljs$cst$288$title$$, "Base Rent", $cljs$cst$801$amount$$, 145600, $cljs$cst$808$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Base", $APP.$cljs$cst$288$title$$, 
"Base Staff", $cljs$cst$801$amount$$, 50000, $cljs$cst$808$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Base", $APP.$cljs$cst$288$title$$, "Curatorial Mediator", $cljs$cst$801$amount$$, 25000, $cljs$cst$808$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Base", $APP.$cljs$cst$288$title$$, "Cleaning", $cljs$cst$801$amount$$, 7000, $cljs$cst$808$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Permits \x26 Signage", $cljs$cst$801$amount$$, 10000, $cljs$cst$808$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Fire Safety Cert.", $cljs$cst$801$amount$$, 3500, $cljs$cst$808$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Liability Ins.", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Construction", $APP.$cljs$cst$288$title$$, "Partitions \x26 Walls", $cljs$cst$801$amount$$, 9500, $cljs$cst$808$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, 
"Construction", $APP.$cljs$cst$288$title$$, "Lighting", $cljs$cst$801$amount$$, 7500, $cljs$cst$808$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Taxes", $APP.$cljs$cst$288$title$$, "Signage Taxes", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Taxes", $APP.$cljs$cst$288$title$$, "VAT 22%", $cljs$cst$801$amount$$, 55E3, $cljs$cst$808$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Team Lodging", $cljs$cst$801$amount$$, 95E3, $cljs$cst$808$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Per Diem", $cljs$cst$801$amount$$, 66E3, $cljs$cst$808$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Project Insurance", $cljs$cst$801$amount$$, 5E4, $cljs$cst$808$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$811$admin$$, $APP.$cljs$cst$288$title$$, "Administration", $cljs$cst$808$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Curators", $cljs$cst$801$amount$$, 9E4, $cljs$cst$808$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Artist", $cljs$cst$801$amount$$, 
45E3, $cljs$cst$808$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Project Coordinator", $cljs$cst$801$amount$$, 45E3, $cljs$cst$808$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Team Travel", $cljs$cst$801$amount$$, 
49E3, $cljs$cst$808$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Team Lodging", $cljs$cst$801$amount$$, 7500, $cljs$cst$808$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Misc", $cljs$cst$801$amount$$, 5500, $cljs$cst$808$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$812$la_prod$$, $APP.$cljs$cst$288$title$$, "LA Production", $cljs$cst$808$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Lead Caster", $cljs$cst$801$amount$$, 37625, $cljs$cst$808$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Caster", $cljs$cst$801$amount$$, 
22500, $cljs$cst$808$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, "General Assistant", $cljs$cst$801$amount$$, 21500, $cljs$cst$808$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Mold Maker", $cljs$cst$801$amount$$, 
15E3, $cljs$cst$808$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Foam Sprayer", $cljs$cst$801$amount$$, 9E3, $cljs$cst$808$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Casting Asst. ×3", 
$cljs$cst$801$amount$$, 9E3, $cljs$cst$808$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Packers ×4", $cljs$cst$801$amount$$, 14E3, $cljs$cst$808$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Labor", $APP.$cljs$cst$288$title$$, 
"Crate Makers ×2", $cljs$cst$801$amount$$, 1E4, $cljs$cst$808$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Studio Rental", $cljs$cst$801$amount$$, 22500, $cljs$cst$808$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Overhead", 
$APP.$cljs$cst$288$title$$, "Foam Space Rental", $cljs$cst$801$amount$$, 5500, $cljs$cst$808$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Utilities", $cljs$cst$801$amount$$, 3E3, $cljs$cst$808$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Pigment", $cljs$cst$801$amount$$, 11500, $cljs$cst$808$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Honeycomb", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Polymers", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Foam Material", $cljs$cst$801$amount$$, 21E3, $cljs$cst$808$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Plaster", $cljs$cst$801$amount$$, 4500, $cljs$cst$808$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Supplies", $cljs$cst$801$amount$$, 10500, $cljs$cst$808$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Mold Supplies", $cljs$cst$801$amount$$, 17500, $cljs$cst$808$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Crate Materials", $cljs$cst$801$amount$$, 15E3, $cljs$cst$808$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Packing Supplies", $cljs$cst$801$amount$$, 5E3, $cljs$cst$808$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Misc", $cljs$cst$801$amount$$, 7500, $cljs$cst$808$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$813$the_studio$$, $APP.$cljs$cst$288$title$$, "The Studio", $cljs$cst$808$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #1", $cljs$cst$801$amount$$, 54E3, $cljs$cst$808$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #2", $cljs$cst$801$amount$$, 46500, $cljs$cst$808$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #3", $cljs$cst$801$amount$$, 23500, $cljs$cst$808$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #4", $cljs$cst$801$amount$$, 23500, $cljs$cst$808$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #5", $cljs$cst$801$amount$$, 6E3, $cljs$cst$808$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #6", $cljs$cst$801$amount$$, 6E3, $cljs$cst$808$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Installers ×4", $cljs$cst$801$amount$$, 32E3, $cljs$cst$808$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Crate Makers ×2", $cljs$cst$801$amount$$, 11E3, $cljs$cst$808$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Foam Material", $cljs$cst$801$amount$$, 11500, $cljs$cst$808$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Pigment", $cljs$cst$801$amount$$, 
6750, $cljs$cst$808$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Plaster", $cljs$cst$801$amount$$, 4750, $cljs$cst$808$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Supplies", $cljs$cst$801$amount$$, 4750, 
$cljs$cst$808$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Crate Materials", $cljs$cst$801$amount$$, 7500, $cljs$cst$808$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Packing Supplies", $cljs$cst$801$amount$$, 
2500, $cljs$cst$808$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Misc Materials", $cljs$cst$801$amount$$, 4250, $cljs$cst$808$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$814$logistics$$, $APP.$cljs$cst$288$title$$, 
"Logistics \x26 Transport", $cljs$cst$808$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "International Freight", $APP.$cljs$cst$288$title$$, 
"Ship LA → Venice", $cljs$cst$801$amount$$, 3E4, $cljs$cst$808$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "International Freight", $APP.$cljs$cst$288$title$$, "Ship Venice → LA", $cljs$cst$801$amount$$, 3E4, $cljs$cst$808$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "International Freight", $APP.$cljs$cst$288$title$$, "Transit Insurance", $cljs$cst$801$amount$$, 12E3, $cljs$cst$808$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Installers (Venice)", $cljs$cst$801$amount$$, 7200, $cljs$cst$808$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Uninstallers (Venice)", $cljs$cst$801$amount$$, 9E3, $cljs$cst$808$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Port Handling", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Barge (Port → Stor.)", $cljs$cst$801$amount$$, 3E3, $cljs$cst$808$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Trucking (Stor. → Venue)", $cljs$cst$801$amount$$, 1200, $cljs$cst$808$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Barge (Stor. → Venue)", $cljs$cst$801$amount$$, 3E3, $cljs$cst$808$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Forklift \x26 Operator", 
$cljs$cst$801$amount$$, 1300, $cljs$cst$808$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Handling Crew", $cljs$cst$801$amount$$, 500, $cljs$cst$808$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, 
"Storage", $APP.$cljs$cst$288$title$$, "Short-Term Storage", $cljs$cst$801$amount$$, 1200, $cljs$cst$808$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Storage", $APP.$cljs$cst$288$title$$, "Empty Crate Storage", $cljs$cst$801$amount$$, 2E3, $cljs$cst$808$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Storage", $APP.$cljs$cst$288$title$$, "Waste Removal", $cljs$cst$801$amount$$, 1E3, $cljs$cst$808$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Barge", $cljs$cst$801$amount$$, 3E3, $cljs$cst$808$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Trucking", $cljs$cst$801$amount$$, 1200, $cljs$cst$808$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Port Handling", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$815$opening$$, $APP.$cljs$cst$288$title$$, "Opening Week", $cljs$cst$808$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering — Food", $cljs$cst$801$amount$$, 5250, $cljs$cst$808$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering — Beverages", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering Staff", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Rentals", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Event Coordinator", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Security", $cljs$cst$801$amount$$, 800, $cljs$cst$808$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Audio, Light \x26 Tech", $cljs$cst$801$amount$$, 1E3, $cljs$cst$808$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Event Photography", $cljs$cst$801$amount$$, 500, $cljs$cst$808$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Invitations", $cljs$cst$801$amount$$, 500, $cljs$cst$808$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "VIP Programs", $APP.$cljs$cst$288$title$$, "VIP Press Preview", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "VIP Programs", $APP.$cljs$cst$288$title$$, "VIP Water Taxi", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$816$marketing$$, $APP.$cljs$cst$288$title$$, "Marketing \x26 PR", $cljs$cst$808$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Design", $APP.$cljs$cst$288$title$$, "Visual Identity", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Design", $APP.$cljs$cst$288$title$$, 
"Essentials Package", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Design", $APP.$cljs$cst$288$title$$, "Website \x26 Hosting", $cljs$cst$801$amount$$, 7500, $cljs$cst$808$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Design", $APP.$cljs$cst$288$title$$, 
"OOH Design", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Design", $APP.$cljs$cst$288$title$$, "Exhibition Graphics", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Writing", $APP.$cljs$cst$288$title$$, 
"Social Copywriting", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Writing", $APP.$cljs$cst$288$title$$, "PR Writing", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Advertising", $APP.$cljs$cst$288$title$$, 
"Totem Placement", $cljs$cst$801$amount$$, 8500, $cljs$cst$808$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Vaporetto Wraps", $cljs$cst$801$amount$$, 12500, $cljs$cst$808$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, 
"Advertising", $APP.$cljs$cst$288$title$$, "Poster Printing", $cljs$cst$801$amount$$, 5E3, $cljs$cst$808$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Outdoor Posters", $cljs$cst$801$amount$$, 3E3, $cljs$cst$808$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Social Media Ads", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Social Campaign Mgmt", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Digital Pub Ads", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Print Pub Ads", $cljs$cst$801$amount$$, 5E3, $cljs$cst$808$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "PR", $APP.$cljs$cst$288$title$$, "PR — Pre-Opening", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "PR", $APP.$cljs$cst$288$title$$, "PR — Ongoing", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "PR", $APP.$cljs$cst$288$title$$, "Marketing Mgmt Fee", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$817$publication$$, $APP.$cljs$cst$288$title$$, "Publications", $cljs$cst$808$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Writing", $APP.$cljs$cst$288$title$$, "Curatorial Essay", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Writing", $APP.$cljs$cst$288$title$$, 
"Catalogue Essays", $cljs$cst$801$amount$$, 4E3, $cljs$cst$808$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Catalogue", $APP.$cljs$cst$288$title$$, "Design", $cljs$cst$801$amount$$, 7500, $cljs$cst$808$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Catalogue", 
$APP.$cljs$cst$288$title$$, "Editing \x26 Layout", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Catalogue", $APP.$cljs$cst$288$title$$, "Printing", $cljs$cst$801$amount$$, 12E3, $cljs$cst$808$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, 
"Catalogue", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$801$amount$$, 1E3, $cljs$cst$808$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Tote", $APP.$cljs$cst$288$title$$, "Design", $cljs$cst$801$amount$$, 2500, $cljs$cst$808$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Tote", $APP.$cljs$cst$288$title$$, 
"Printing", $cljs$cst$801$amount$$, 4500, $cljs$cst$808$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Tote", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$801$amount$$, 1E3, $cljs$cst$808$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Stationery", $APP.$cljs$cst$288$title$$, 
"Design", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Stationery", $APP.$cljs$cst$288$title$$, "Printing", $cljs$cst$801$amount$$, 1500, $cljs$cst$808$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Stationery", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$801$amount$$, 
250, $cljs$cst$808$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$818$documentation$$, $APP.$cljs$cst$288$title$$, "Documentation", $cljs$cst$808$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$802$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Production", $APP.$cljs$cst$288$title$$, "Camera \x26 Lighting", $cljs$cst$801$amount$$, 1E4, $cljs$cst$808$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Production", $APP.$cljs$cst$288$title$$, 
"DPs ×2", $cljs$cst$801$amount$$, 20400, $cljs$cst$808$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Production", $APP.$cljs$cst$288$title$$, "Assistant / Gaffer", $cljs$cst$801$amount$$, 4500, $cljs$cst$808$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, 
"Production", $APP.$cljs$cst$288$title$$, "Sound Recording", $cljs$cst$801$amount$$, 2800, $cljs$cst$808$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Install", $cljs$cst$801$amount$$, 1750, $cljs$cst$808$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$583$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Exhibition", $cljs$cst$801$amount$$, 1800, $cljs$cst$808$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Opening", $cljs$cst$801$amount$$, 1400, $cljs$cst$808$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Post", $APP.$cljs$cst$288$title$$, "Film Assembly", $cljs$cst$801$amount$$, 3E3, $cljs$cst$808$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Post", $APP.$cljs$cst$288$title$$, "Final Cut \x26 Color", $cljs$cst$801$amount$$, 2400, $cljs$cst$808$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Post", $APP.$cljs$cst$288$title$$, "Sound Edit \x26 Mix", $cljs$cst$801$amount$$, 1600, $cljs$cst$808$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Post", $APP.$cljs$cst$288$title$$, "Social Deliverables", $cljs$cst$801$amount$$, 6E3, $cljs$cst$808$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$583$group$$, "Post", $APP.$cljs$cst$288$title$$, "Backup \x26 Archive", $cljs$cst$801$amount$$, 750, $cljs$cst$808$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$preview$$, 
"otp.pages.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$details$$, 
"otp.pages.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$footer$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$footer$$, 
"otp.pages.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($otp$pages$budget$cost_breakdown$cost_breakdown$$, "otp.pages.budget.cost-breakdown/cost-breakdown"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$preview_text$$, "", null, null) : (void 0).call(null, $otp$pages$budget$location$preview_text$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$preview_text$$, 
"otp.pages.budget.location/preview-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$location$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$preview$$, 
"otp.pages.budget.location/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$full_details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $otp$pages$budget$location$full_details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$full_details$$, "otp.pages.budget.location/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$location$location_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$location$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$location$location_section$$, 
"otp.pages.budget.location/location-section"));
var $otp$pages$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$819$debt_raised$$, 0, $cljs$cst$820$funds_raised$$, 175000, $cljs$cst$821$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$822$admin_jul_25$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team (Jul)", $cljs$cst$823$due$$, "2025-07-15", $cljs$cst$801$amount$$, 10000, $cljs$cst$824$priority$$, 
$cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$827$contingency_jul_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Jul)", $cljs$cst$823$due$$, "2025-07-20", $cljs$cst$801$amount$$, 500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$828$admin_aug_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Aug)", $cljs$cst$823$due$$, "2025-08-15", $cljs$cst$801$amount$$, 10000, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$829$contingency_aug_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Aug)", $cljs$cst$823$due$$, "2025-08-20", $cljs$cst$801$amount$$, 500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$830$venice_sep_25$$, $APP.$cljs$cst$288$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$823$due$$, "2025-09-05", $cljs$cst$801$amount$$, 13000, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$831$admin_sep_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$823$due$$, "2025-09-15", $cljs$cst$801$amount$$, 20000, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$833$contingency_sep_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Sep)", $cljs$cst$823$due$$, "2025-09-20", $cljs$cst$801$amount$$, 650, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$834$venice_oct_25$$, $APP.$cljs$cst$288$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$823$due$$, "2025-10-05", $cljs$cst$801$amount$$, 13E3, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$835$admin_oct_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$823$due$$, "2025-10-15", $cljs$cst$801$amount$$, 2E4, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$836$contingency_oct_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Oct)", $cljs$cst$823$due$$, "2025-10-20", $cljs$cst$801$amount$$, 650, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$837$la_nov_25$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$823$due$$, "2025-11-10", $cljs$cst$801$amount$$, 31325, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$838$admin_nov_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Nov)", $cljs$cst$823$due$$, "2025-11-15", $cljs$cst$801$amount$$, 1E4, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$839$contingency_nov_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Nov)", $cljs$cst$823$due$$, "2025-11-20", $cljs$cst$801$amount$$, 1566, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$840$la_dec_25$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$823$due$$, "2025-12-10", $cljs$cst$801$amount$$, 31325, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$841$admin_dec_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Dec)", $cljs$cst$823$due$$, "2025-12-15", $cljs$cst$801$amount$$, 1E4, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$842$contingency_dec_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Dec)", $cljs$cst$823$due$$, "2025-12-20", $cljs$cst$801$amount$$, 1566, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$843$venice_jan_26$$, $APP.$cljs$cst$288$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$823$due$$, "2026-01-05", $cljs$cst$801$amount$$, 30650, $cljs$cst$824$priority$$, $cljs$cst$844$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$845$la_jan_26$$, 
$APP.$cljs$cst$288$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$823$due$$, "2026-01-10", $cljs$cst$801$amount$$, 30325, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$846$admin_jan_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team (Jan)", $cljs$cst$823$due$$, "2026-01-15", $cljs$cst$801$amount$$, 1E4, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$847$contingency_jan_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jan)", $cljs$cst$823$due$$, "2026-01-20", $cljs$cst$801$amount$$, 3049, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$826$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$848$venice_feb_26$$, $APP.$cljs$cst$288$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$823$due$$, "2026-02-05", $cljs$cst$801$amount$$, 183900, $cljs$cst$824$priority$$, $cljs$cst$844$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$849$la_feb_26$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$823$due$$, "2026-02-10", $cljs$cst$801$amount$$, 74825, $cljs$cst$824$priority$$, $cljs$cst$844$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$850$admin_feb_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$823$due$$, "2026-02-15", $cljs$cst$801$amount$$, 10500, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$851$contingency_feb_26$$, 
$APP.$cljs$cst$288$title$$, "Contingency (Feb)", $cljs$cst$823$due$$, "2026-02-20", $cljs$cst$801$amount$$, 12936, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$852$venice_mar_26$$, $APP.$cljs$cst$288$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$823$due$$, "2026-03-05", $cljs$cst$801$amount$$, 172200, $cljs$cst$824$priority$$, 
$cljs$cst$844$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$853$la_mar_26$$, $APP.$cljs$cst$288$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$823$due$$, "2026-03-10", $cljs$cst$801$amount$$, 97325, $cljs$cst$824$priority$$, $cljs$cst$844$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$286$id$$, $cljs$cst$854$admin_mar_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$823$due$$, "2026-03-15", $cljs$cst$801$amount$$, 10500, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$855$contingency_mar_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Mar)", $cljs$cst$823$due$$, "2026-03-20", $cljs$cst$801$amount$$, 
13476, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$856$venice_apr_26$$, $APP.$cljs$cst$288$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$823$due$$, "2026-04-05", $cljs$cst$801$amount$$, 110267, $cljs$cst$824$priority$$, $cljs$cst$844$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$857$admin_apr_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$823$due$$, "2026-04-15", $cljs$cst$801$amount$$, 33E3, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$858$contingency_apr_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Apr)", $cljs$cst$823$due$$, "2026-04-20", 
$cljs$cst$801$amount$$, 5513, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$859$venice_may_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (May)", $cljs$cst$823$due$$, "2026-05-05", $cljs$cst$801$amount$$, 53717, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$860$admin_may_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$823$due$$, "2026-05-15", $cljs$cst$801$amount$$, 10500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$861$contingency_may_26$$, $APP.$cljs$cst$288$title$$, "Contingency (May)", $cljs$cst$823$due$$, "2026-05-20", $cljs$cst$801$amount$$, 
2686, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$862$venice_jun_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$823$due$$, "2026-06-05", $cljs$cst$801$amount$$, 94467, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$863$admin_jun_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$823$due$$, "2026-06-15", $cljs$cst$801$amount$$, 12500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$864$contingency_jun_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jun)", $cljs$cst$823$due$$, "2026-06-20", 
$cljs$cst$801$amount$$, 4723, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$865$venice_jul_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$823$due$$, "2026-07-05", $cljs$cst$801$amount$$, 53717, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$866$admin_jul_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$823$due$$, "2026-07-15", $cljs$cst$801$amount$$, 10500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$867$contingency_jul_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jul)", $cljs$cst$823$due$$, "2026-07-20", $cljs$cst$801$amount$$, 
2686, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$868$venice_aug_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$823$due$$, "2026-08-05", $cljs$cst$801$amount$$, 53717, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$869$admin_aug_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$823$due$$, "2026-08-15", $cljs$cst$801$amount$$, 10500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$870$contingency_aug_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Aug)", $cljs$cst$823$due$$, "2026-08-20", $cljs$cst$801$amount$$, 
2686, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$871$venice_sep_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$823$due$$, "2026-09-05", $cljs$cst$801$amount$$, 53717, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$872$admin_sep_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$823$due$$, "2026-09-15", $cljs$cst$801$amount$$, 12500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$873$contingency_sep_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Sep)", $cljs$cst$823$due$$, "2026-09-20", 
$cljs$cst$801$amount$$, 2686, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$874$venice_oct_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$823$due$$, "2026-10-05", $cljs$cst$801$amount$$, 42217, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$875$admin_oct_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$823$due$$, "2026-10-15", $cljs$cst$801$amount$$, 10500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$876$contingency_oct_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Oct)", $cljs$cst$823$due$$, "2026-10-20", $cljs$cst$801$amount$$, 
2111, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$877$venice_nov_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$823$due$$, "2026-11-05", $cljs$cst$801$amount$$, 42217, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$878$admin_nov_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$823$due$$, "2026-11-15", $cljs$cst$801$amount$$, 10500, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$879$contingency_nov_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Nov)", $cljs$cst$823$due$$, "2026-11-20", $cljs$cst$801$amount$$, 
2111, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$880$venice_dec_26$$, $APP.$cljs$cst$288$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$823$due$$, "2026-12-05", $cljs$cst$801$amount$$, 134517, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$881$admin_dec_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$823$due$$, "2026-12-15", $cljs$cst$801$amount$$, 20500, $cljs$cst$824$priority$$, $cljs$cst$832$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$882$contingency_dec_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Dec)", $cljs$cst$823$due$$, "2026-12-20", 
$cljs$cst$801$amount$$, 6726, $cljs$cst$824$priority$$, $cljs$cst$825$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$timeline_node$$, "otp.pages.budget.cash-flow/timeline-node"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$now_marker$$, "otp.pages.budget.cash-flow/now-marker"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$month_header$$, "otp.pages.budget.cash-flow/month-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$month_summary_row$$, "otp.pages.budget.cash-flow/month-summary-row"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$view_toggle$$, "", null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$view_toggle$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$view_toggle$$, 
"otp.pages.budget.cash-flow/view-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$summary_header$$, "otp.pages.budget.cash-flow/summary-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', 
null, null) : (void 0).call(null, $otp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$cash_flow$cash_flow$$, "otp.pages.budget.cash-flow/cash-flow"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $otp$pages$budget$non_profit$non_profit$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$non_profit$non_profit$$, 
"otp.pages.budget.non-profit/non-profit"));
var $otp$pages$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $cljs$cst$898$tier$$, $cljs$cst$899$founding_patron$$, $cljs$cst$900$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$901$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Armenian Fund USA", $cljs$cst$898$tier$$, $cljs$cst$899$founding_patron$$, $cljs$cst$900$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$901$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Khudikyan Family", $cljs$cst$898$tier$$, $cljs$cst$902$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$903$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Ourfalian Family", 
$cljs$cst$898$tier$$, $cljs$cst$902$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$903$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Sarafyan Family", $cljs$cst$898$tier$$, $cljs$cst$902$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$903$individual$$], null)], null), $otp$pages$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$899$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$414$label$$, 
"Founding Patrons", $cljs$cst$904$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$396$border$$, "border-pink-500/30", $cljs$cst$905$order$$, 0], null), $cljs$cst$902$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$414$label$$, "Patrons", $cljs$cst$904$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$396$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$905$order$$, 1], null), $cljs$cst$906$benefactor$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$414$label$$, "Benefactors", $cljs$cst$904$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$396$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$905$order$$, 2], null), $cljs$cst$907$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$414$label$$, "Supporters", $cljs$cst$904$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$396$border$$, "border-slate-400 dark:border-slate-600", $cljs$cst$905$order$$, 3], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$logo_card$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$logo_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$logo_card$$, 
"otp.pages.budget.sponsors/logo-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$name_item$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$name_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$name_item$$, 
"otp.pages.budget.sponsors/name-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$tier_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$tier_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$tier_section$$, 
"otp.pages.budget.sponsors/tier-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$sponsors$sponsors_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$sponsors$sponsors_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$sponsors$sponsors_section$$, 
"otp.pages.budget.sponsors/sponsors-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$why_support$preview$$, "", null, null) : (void 0).call(null, $otp$pages$budget$why_support$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$why_support$preview$$, 
"otp.pages.budget.why-support/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$why_support$details$$, "", null, null) : (void 0).call(null, $otp$pages$budget$why_support$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$why_support$details$$, 
"otp.pages.budget.why-support/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$why_support$why_support$$, "", null, null) : (void 0).call(null, $otp$pages$budget$why_support$why_support$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$why_support$why_support$$, 
"otp.pages.budget.why-support/why-support"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $otp$pages$budget$section$section_link$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$section$section_link$$, "otp.pages.budget.section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$section$header$$, "", null, null) : (void 0).call(null, $otp$pages$budget$section$header$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$section$header$$, 
"otp.pages.budget.section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($otp$pages$budget$section$budget_section$$, "", null, null) : (void 0).call(null, $otp$pages$budget$section$budget_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($otp$pages$budget$section$budget_section$$, 
"otp.pages.budget.section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$300$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$301$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$otp$pages$budget$page$budget_view$$, "", null, null) : (void 0).call(null, $APP.$otp$pages$budget$page$budget_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$otp$pages$budget$page$budget_view$$, 
"otp.pages.budget.page/budget-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);