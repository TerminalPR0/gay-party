"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[57643,30487],{730487:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=f;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e;r&&r.set(e,n)}(r(667294));var n,o=r(145122),u=r(894826),i=d(r(96763)),a=r(856384),l=d(r(247001));function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function c(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103)
;var u=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),l=0;l<i;l++)a[l]=arguments[l+3];t.children=a}if(t&&u)for(var d in u)void 0===t[d]&&(t[d]=u[d]);else t||(t=u||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function f(e,t,r,n){void 0===r&&(r=l.default.Messages.COPY_ID);var d=u.DeveloperMode.useSetting();return!__OVERLAY__&&d&&a.SUPPORTS_COPY?c(o.MenuItem,{id:"devmode-copy-id",label:r,action:function(r){var o=null!=t&&r.shiftKey?t:e;(0,a.copy)(o);null==n||n()},icon:i.default},"devmode-copy-id"):null}f.displayName="useCopyIdItem"},242733:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.getDefaultActions=o;t.getRuleDefaultActionsFromConfig=function(e){var t=o();return Array.from(e.defaultActions).map((function(e){return t[e]}))};var n=r(726102);function o(){var e;return(e={})[n.AutomodActionType.BLOCK_MESSAGE]={type:n.AutomodActionType.BLOCK_MESSAGE},
e[n.AutomodActionType.FLAG_TO_CHANNEL]={type:n.AutomodActionType.FLAG_TO_CHANNEL,metadata:{channelId:void 0}},e[n.AutomodActionType.USER_COMMUNICATION_DISABLED]={type:n.AutomodActionType.USER_COMMUNICATION_DISABLED,metadata:{durationSeconds:60}},e}},254285:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.BaseAutomodUserExperiment=t.AutomodUpsell=t.AutomodTriggerMentionSpam=t.AutomodTriggerMLSpamFilter=t.AutomodTriggerKeywordFilter=t.AutomodTriggerDefaultKeywordList=t.AutomodPresetsAllowList=t.AutomodAllTriggers=void 0;var n=r(373505),o=(0,n.createExperiment)({kind:"user",id:"2022-01_automod_user",label:"Automod User",defaultConfig:{enableAutomodUser:!1},treatments:[{id:1,label:"Automod",config:{enableAutomodUser:!0}}]});t.BaseAutomodUserExperiment=o;var u=(0,n.createExperiment)({kind:"guild",id:"2022-01_automod",label:"All Automod Guild Trigger",defaultConfig:{enableAllAutomodTriggers:!1},treatments:[{id:1,label:"Enable All Automod Triggers",config:{
enableAllAutomodTriggers:!0}}]});t.AutomodAllTriggers=u;var i=(0,n.createExperiment)({kind:"guild",id:"2022-01_automod_trigger_keyword_filter",label:"Automod Trigger Keyword Filter",defaultConfig:{enableAutomodTriggerKeywordFilter:!1},treatments:[{id:1,label:"Keyword Filter Enabled",config:{enableAutomodTriggerKeywordFilter:!0}}]});t.AutomodTriggerKeywordFilter=i;var a=(0,n.createExperiment)({kind:"guild",id:"2022-03_automod_trigger_ml_spam_filter",label:"Automod Trigger Spam Content Filter",defaultConfig:{enableAutomodTriggerMLSpamFilter:!1},treatments:[{id:1,label:"Spam Content Filter Enabled",config:{enableAutomodTriggerMLSpamFilter:!0}}]});t.AutomodTriggerMLSpamFilter=a;var l=(0,n.createExperiment)({kind:"guild",id:"2022-03_guild_automod_default_list",label:"Automod Default Keyword List",defaultConfig:{enableAutomodTriggerDefaultKeywordList:!1},treatments:[{id:1,label:"Default List Keyword Enabled",config:{enableAutomodTriggerDefaultKeywordList:!0}}]})
;t.AutomodTriggerDefaultKeywordList=l;var d=(0,n.createExperiment)({kind:"guild",id:"2022-07_automod_trigger_menton_spam",label:"Automod Trigger Mention Spam",defaultConfig:{enableAutomodTriggerMentionSpam:!1},treatments:[{id:1,label:"Mention Spam Enabled",config:{enableAutomodTriggerMentionSpam:!0}}]});t.AutomodTriggerMentionSpam=d;var s=(0,n.createExperiment)({kind:"guild",id:"2022-04_guild_automod_upsell",label:"Guild Automod Upsell",defaultConfig:{enableAutomodUpsell:!1},treatments:[{id:1,label:"Automod Upsell Enabled",config:{enableAutomodUpsell:!0}}]});t.AutomodUpsell=s;var c=(0,n.createExperiment)({kind:"guild",id:"2022-06_guild_automod_presets_allow_list",label:"Guild Automod Presets Allow List",defaultConfig:{enableAllowList:!1},treatments:[{id:1,label:"Automod Presets Allow List Enabled",config:{enableAllowList:!0}}]});t.AutomodPresetsAllowList=c},370493:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.actionTypeToName=function(e){switch(e){
case l.AutomodActionType.BLOCK_MESSAGE:return d.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;case l.AutomodActionType.FLAG_TO_CHANNEL:return d.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;default:return d.default.Messages.GUILD_AUTOMOD_UNKNOWN}};t.createDefaultRule=function(e,t){var r=a.triggerConfigs[t],n=(0,a.getDefaultTriggerMetadataForTriggerType)(t),l={id:c(e,t),name:r.getDefaultRuleName(),guildId:e,eventType:r.eventType,triggerType:t,triggerMetadata:n,enabled:!0,creatorId:o.default.getId(),actions:(0,u.getRuleDefaultActionsFromConfig)(r),position:0,exemptChannels:new Set,exemptRoles:new Set};if(p(l))throw new Error(d.default.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);var s=(0,i.getRuleCountByTriggerType)(e,t);f(l)&&(l.triggerMetadata={keywordFilter:[]});s>0&&(l.name+=" "+(s+1));return l};t.eventTypeToName=function(e){if(e===l.AutomodEventType.MESSAGE_SEND)return d.default.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND
;return d.default.Messages.GUILD_AUTOMOD_UNKNOWN};t.getNewAutomodRuleMockId=void 0;t.isExistingRule=p;t.isRuleMentionSpamFilter=t.isRuleMLSpamFilter=t.isRuleKeywordFilter=t.isRuleDefaultKeywordListFilter=void 0;t.triggerTypeToName=function(e){switch(e){case l.AutomodTriggerType.KEYWORD_FILTER:return d.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;case l.AutomodTriggerType.ML_SPAM_FILTER:return d.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;case l.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER:return d.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_RULE_NAME;default:return d.default.Messages.GUILD_AUTOMOD_UNKNOWN}};t.validateKeywords=g;t.validateRuleBeforeSave=function(e){if(f(e)){var t;g(null!==(t=e.triggerMetadata.keywordFilter)&&void 0!==t?t:[])}if(0===e.actions.length)throw new Error(d.default.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS)};var n=r(153823),o=s(r(423046)),u=r(242733),i=r(473496),a=r(403819),l=r(726102),d=s(r(247001));function s(e){return e&&e.__esModule?e:{
default:e}}var c=function(e,t){return e+"-"+t+"-new-rule"};t.getNewAutomodRuleMockId=c;var f=function(e){return(null==e?void 0:e.triggerType)===l.AutomodTriggerType.KEYWORD_FILTER};t.isRuleKeywordFilter=f;t.isRuleMLSpamFilter=function(e){return(null==e?void 0:e.triggerType)===l.AutomodTriggerType.ML_SPAM_FILTER};t.isRuleDefaultKeywordListFilter=function(e){return(null==e?void 0:e.triggerType)===l.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER};t.isRuleMentionSpamFilter=function(e){return(null==e?void 0:e.triggerType)===l.AutomodTriggerType.MENTION_SPAM_FILTER};function g(e){if(0===e.length)throw new Error(d.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS);if(e.length>l.MAX_KEYWORDS_PER_KEYWORD_FILTER)throw new Error(d.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({limit:l.MAX_KEYWORDS_PER_KEYWORD_FILTER}));e.forEach((function(e){
if(e.length>l.MAX_CHARACTERS_PER_KEYWORD||e.length<l.MIN_CHARACTERS_PER_KEYWORD)throw new Error(d.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({keyword:e,max:l.MAX_CHARACTERS_PER_KEYWORD,min:l.MIN_CHARACTERS_PER_KEYWORD}))}))}function p(e){var t;return(0,n.isSnowflake)(null!==(t=null==e?void 0:e.id)&&void 0!==t?t:"INVALID_SNOWFLAKE")}},473496:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.groupRulesByTriggerType=t.getRuleCountByTriggerType=void 0;t.useAutomodRulesList=function(e){return R((function(t){var r;return{rulesByTriggerType:null!=e&&null!==(r=t.rules[e])&&void 0!==r?r:M(),updateRule:t.updateRule,removeRule:t.removeRule}}))};t.useAutomodStore=void 0;t.useSyncAutomodRules=S;t.useSyncAutomodRulesEffect=function(e){var t=g(S(e),2),r=t[0],n=t[1];o.useEffect((function(){A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return n();case 2:case"end":return e.stop()
}}),e)})))()}),[e,n]);return[r,n]};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),u=r(496486),i=c(r(219548)),a=c(r(193747)),l=r(327269),d=r(809703),s=r(726102);function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],i=!0,a=!1;try{
for(r=r.call(e);!(i=(n=r.next()).done);i=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){a=!0;o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return u}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t,r,n,o,u,i){try{var a=e[u](i),l=a.value}catch(e){r(e);return}a.done?t(l):Promise.resolve(l).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function i(e){p(u,n,o,i,a,"next",e)}function a(e){p(u,n,o,i,a,"throw",e)}i(void 0)}))}}function _(){_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return _.apply(this,arguments)}function m(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){
if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E={};function O(e){var t;return Date.now()-(null!==(t=E[e])&&void 0!==t?t:0)>2e4}var v=Object.freeze(((n={})[s.AutomodTriggerType.KEYWORD_FILTER]=[],n[s.AutomodTriggerType.ML_SPAM_FILTER]=[],n[s.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER]=[],n[s.AutomodTriggerType.MENTION_SPAM_FILTER]=[],n)),M=function(){return(0,
u.cloneDeep)(v)},R=(0,i.default)((function(e,t){return{rules:{},fetching:!1,error:null,updateRule:function(r){var n,o,u,i,a=r.guildId,l=r.id,d=r.triggerType,s=t().rules,c=null!==(n=s[a])&&void 0!==n?n:M(),f=null!==(o=c[d])&&void 0!==o?o:[],g=f.some((function(e){return e.id===l}))?f.map((function(e){return e.id===l?r:e})):[].concat(m(f),[r]);e({rules:_({},s,(i={},i[a]=_({},c,(u={},u[d]=g,u)),i)),error:null})},removeRule:function(r,n){var o,u=t().rules,i=u[n],a=Object.keys(i).reduce((function(e,t){var n=Number(t),o=i[n];e[n]=o.filter((function(e){return e.id!==r}));return e}),M());e({rules:_({},u,(o={},o[n]=a,o)),error:null})},syncRules:(r=A(regeneratorRuntime.mark((function r(n){var o,u,i,a,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(O(n)){r.next=2;break}return r.abrupt("return");case 2:E[n]=Date.now();r.prev=3;r.next=6;return(0,d.fetchAutomodRules)(n);case 6:u=r.sent;i=L(u);a=t().rules;e({rules:_({},a,(o={},o[n]=i,o)),error:null});r.next=16
;break;case 12:r.prev=12;r.t0=r.catch(3);s=new l.APIError(r.t0);e({error:s});case 16:case"end":return r.stop()}}),r,null,[[3,12]])}))),function(e){return r.apply(this,arguments)})};var r}));t.useAutomodStore=R;t.getRuleCountByTriggerType=function(e,t){var r,n;return(null!==(r=null===(n=R.getState().rules[e])||void 0===n?void 0:n[t])&&void 0!==r?r:[]).length};var L=function(e){var t=M();e.forEach((function(e){var r=e.triggerType;null==t[r]&&(t[r]=[]);t[r].push(e)}));return t};t.groupRulesByTriggerType=L;function S(e){var t=g(o.useState(!1),2),r=t[0],n=t[1],u=g(R((function(e){return[e.syncRules,e.fetching]}),a.default),2),i=u[0],l=u[1];return[r,o.useCallback(A(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l&&null!=e){t.next=2;break}return t.abrupt("return");case 2:t.prev=2;n(!0);t.next=6;return i(e);case 6:t.prev=6;n(!1);return t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[2,,6,9]])}))),[e,l,i])]}},
403819:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.checkTriggerTypeForFlag=t.AutomodTriggerConfigFlags=t.AUTOMOD_RULE_CONFIGS=void 0;t.getAvailableActionTypes=function(e){return Array.from(c[e].availableActionTypes)};t.getDefaultTriggerMetadataForTriggerType=function(e){switch(e){case l.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER:return{allowList:[],presets:[]};case l.AutomodTriggerType.KEYWORD_FILTER:return{keywordFilter:[]};case l.AutomodTriggerType.MENTION_SPAM_FILTER:return{mentionTotalLimit:7};case l.AutomodTriggerType.ML_SPAM_FILTER:default:return}};t.triggerConfigs=void 0;t.useAvailableTriggerTypes=function(e){var t=(0,a.useIsTriggerExperimentEnabledComputer)(e);return i.useMemo((function(){return f.filter((function(e){var r=t(e.type),n=e.perGuildMaxCount>0;return r&&n})).map((function(e){return e.type}))}),[t])};t.validateRuleByTriggerConfigOrThrow=function(e,t){var r=e.id,n=e.eventType,o=e.triggerType,u=e.actions,i=c[o];if(t.filter((function(e){
return r!==e.id&&e.triggerType===o})).length>i.perGuildMaxCount)throw new Error("You have exceeded the maximum number of rules of type "+o);if(u.some((function(e){return!i.availableActionTypes.has(e.type)})))throw new Error("You have provided an action that is not available for this trigger type");if(n!==i.eventType)throw new Error("You have provided an event type that is not available for this trigger type")};var n,o,u,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),a=r(294984),l=r(726102),d=(n=r(247001))&&n.__esModule?n:{default:n};function s(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}t.AutomodTriggerConfigFlags=u;!function(e){e.NEW="new";e.RECOMMENDED="recommended";e.BETA="beta";e.ENABLE_CUSTOM_RULE_NAME="enable_custom_rule_name"}(u||(t.AutomodTriggerConfigFlags=u={}));var c=((o={})[l.AutomodTriggerType.KEYWORD_FILTER]={getDefaultRuleName:function(){return d.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME},type:l.AutomodTriggerType.KEYWORD_FILTER,eventType:l.AutomodEventType.MESSAGE_SEND,perGuildMaxCount:3,availableActionTypes:new Set([l.AutomodActionType.BLOCK_MESSAGE,l.AutomodActionType.FLAG_TO_CHANNEL,l.AutomodActionType.USER_COMMUNICATION_DISABLED]),flags:new Set([u.ENABLE_CUSTOM_RULE_NAME]),defaultActions:new Set([l.AutomodActionType.BLOCK_MESSAGE])},o[l.AutomodTriggerType.ML_SPAM_FILTER]={getDefaultRuleName:function(){return d.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME},type:l.AutomodTriggerType.ML_SPAM_FILTER,
eventType:l.AutomodEventType.MESSAGE_SEND,perGuildMaxCount:1,availableActionTypes:new Set([l.AutomodActionType.BLOCK_MESSAGE,l.AutomodActionType.FLAG_TO_CHANNEL]),flags:new Set([u.BETA]),defaultActions:new Set([l.AutomodActionType.BLOCK_MESSAGE])},o[l.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER]={getDefaultRuleName:function(){return d.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_RULE_NAME},type:l.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER,eventType:l.AutomodEventType.MESSAGE_SEND,perGuildMaxCount:1,availableActionTypes:new Set([l.AutomodActionType.BLOCK_MESSAGE,l.AutomodActionType.FLAG_TO_CHANNEL]),flags:new Set([]),defaultActions:new Set([l.AutomodActionType.BLOCK_MESSAGE])},o[l.AutomodTriggerType.MENTION_SPAM_FILTER]={getDefaultRuleName:function(){return d.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME},type:l.AutomodTriggerType.MENTION_SPAM_FILTER,eventType:l.AutomodEventType.MESSAGE_SEND,perGuildMaxCount:1,
availableActionTypes:new Set([l.AutomodActionType.BLOCK_MESSAGE,l.AutomodActionType.FLAG_TO_CHANNEL,l.AutomodActionType.USER_COMMUNICATION_DISABLED]),flags:new Set([u.BETA]),defaultActions:new Set([l.AutomodActionType.BLOCK_MESSAGE,l.AutomodActionType.USER_COMMUNICATION_DISABLED])},o);t.triggerConfigs=c;var f=[c[l.AutomodTriggerType.MENTION_SPAM_FILTER],c[l.AutomodTriggerType.ML_SPAM_FILTER],c[l.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER],c[l.AutomodTriggerType.KEYWORD_FILTER]];t.AUTOMOD_RULE_CONFIGS=f;t.checkTriggerTypeForFlag=function(e,t){return c[e].flags.has(t)}},294984:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.canCurrentUserAccessAutomodExperiment=function(e){var t=u.AutomodAllTriggers.getCurrentConfig({guildId:e}).enableAllAutomodTriggers,r=u.AutomodTriggerMLSpamFilter.getCurrentConfig({guildId:e}).enableAutomodTriggerMLSpamFilter,n=t||r,o=u.BaseAutomodUserExperiment.getCurrentConfig({}).enableAutomodUser;return n&&o}
;t.canCurrentUserAccessAutomodMessageFilterExperiment=function(e){var t=u.AutomodAllTriggers.getCurrentConfig({guildId:e}).enableAllAutomodTriggers,r=u.AutomodTriggerKeywordFilter.getCurrentConfig({guildId:e}).enableAutomodTriggerKeywordFilter,n=u.AutomodTriggerDefaultKeywordList.getCurrentConfig({guildId:e}).enableAutomodTriggerDefaultKeywordList,o=u.AutomodTriggerMentionSpam.getCurrentConfig({guildId:e}).enableAutomodTriggerMentionSpam,i=t||r||n||o||l(e),a=u.BaseAutomodUserExperiment.getCurrentConfig({}).enableAutomodUser;return i&&a};t.useIsTriggerExperimentEnabledComputer=function(e){var t=u.BaseAutomodUserExperiment.useExperiment({}).enableAutomodUser,r=u.AutomodAllTriggers.useExperiment({guildId:e}).enableAllAutomodTriggers,o=u.AutomodTriggerKeywordFilter.useExperiment({guildId:e}).enableAutomodTriggerKeywordFilter,a=u.AutomodTriggerMLSpamFilter.useExperiment({guildId:e}).enableAutomodTriggerMLSpamFilter,d=u.AutomodTriggerDefaultKeywordList.useExperiment({guildId:e
}).enableAutomodTriggerDefaultKeywordList,s=u.AutomodTriggerMentionSpam.useExperiment({guildId:e}).enableAutomodTriggerMentionSpam,c=l(e);return n.useCallback((function(e){if(!t)return!1;if(r)return!0;switch(e){case i.AutomodTriggerType.KEYWORD_FILTER:return o||c;case i.AutomodTriggerType.ML_SPAM_FILTER:return a;case i.AutomodTriggerType.DEFAULT_KEYWORD_LIST_FILTER:return d||c;case i.AutomodTriggerType.MENTION_SPAM_FILTER:return s;default:return!1}}),[t,r,o,a,d,s,c])};var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=r(973523),u=r(254285),i=r(726102);function a(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function l(e){return o.GuildForumExperiment.getCurrentConfig({guildId:e}).enabled}},809703:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.createAutomodRule=function(e){return m.apply(this,arguments)};t.deleteAutomodRule=function(e,t){return y.apply(this,arguments)};t.fetchAutomodRules=function(e){return E.apply(this,arguments)};t.updateAutomodRule=function(e){return T.apply(this,arguments)};var n=r(496486),o=l(r(118915)),u=r(71246),i=l(r(71636)),a=r(770348);function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t,r,n,o,u,i){try{var a=e[u](i),l=a.value}catch(e){r(e);return}a.done?t(l):Promise.resolve(l).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function i(e){d(u,n,o,i,a,"next",e)}function a(e){d(u,n,o,i,a,"throw",e)}i(void 0)}))}}function c(e){
return null==e?e:Object.keys(e).reduce((function(t,r){t[(0,n.camelCase)(r)]=e[r];return t}),{})}function f(e){return null==e?e:Object.keys(e).reduce((function(t,r){t[(0,n.snakeCase)(r)]=e[r];return t}),{})}function g(e){return{type:e.type,metadata:f(e.metadata)}}function p(e){var t,r,n=f(e.triggerMetadata);null!=n&&delete n.keywordLists;return{id:e.id,name:e.name,guild_id:e.guildId,event_type:e.eventType,trigger_type:e.triggerType,trigger_metadata:n,actions:e.actions.filter(u.isNotNullish).map(g),enabled:e.enabled,creator_id:e.creatorId,position:e.position,exempt_channels:Array.from(null!==(t=e.exemptChannels)&&void 0!==t?t:[]),exempt_roles:Array.from(null!==(r=e.exemptRoles)&&void 0!==r?r:[])}}function A(e){return{type:e.type,metadata:c(e.metadata)}}function _(e){var t,r,n,o={id:null!==(t=e.id)&&void 0!==t?t:i.default.fromTimestamp(Date.now()),name:e.name,guildId:e.guild_id,eventType:e.event_type,triggerType:e.trigger_type,triggerMetadata:c(e.trigger_metadata),
actions:e.actions.filter(u.isNotNullish).map(A),enabled:e.enabled,creatorId:e.creator_id,position:e.position,exemptChannels:new Set(null!==(r=e.exempt_channels)&&void 0!==r?r:[]),exemptRoles:new Set(null!==(n=e.exempt_roles)&&void 0!==n?n:[])};null!=o.triggerMetadata&&delete o.triggerMetadata.keywordLists;return o}function m(){return(m=s(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete(r=p(t)).id;e.next=4;return o.default.post({url:a.Endpoints.GUILD_AUTOMOD_RULES(t.guildId),body:r});case 4:n=e.sent;return e.abrupt("return",_(n.body));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=s(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=p(t);e.next=3;return o.default.patch({url:a.Endpoints.GUILD_AUTOMOD_RULE(t.guildId,t.id),body:r});case 3:n=e.sent;return e.abrupt("return",_(n.body))
;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=s(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return o.default.delete({url:a.Endpoints.GUILD_AUTOMOD_RULE(r,t)});case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=s(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return o.default.get({url:a.Endpoints.GUILD_AUTOMOD_RULES(t)});case 2:r=e.sent;if(Array.isArray(r.body)){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",r.body.map(_));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},638018:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.dedupeKeywords=function(e){var t=new Set(e);return Array.from(t)};t.getKeywordStringFromKeywordFilter=function(e){
return e.join(", ")};t.getKeywordsFromString=function(e){return e.split(r).map((function(e){return e.replace(n," ").trim()})).filter((function(e){return e.length>0}))};t.isKeywordParseableString=function(e){return e.includes("\n")||e.includes(",")};t.sortKeywords=function(e){return e.sort((function(e,t){var r=e.replaceAll(o,""),n=t.replaceAll(o,"");return r.localeCompare(n)}))};var r=/[\t\n,]/g,n=/\s{2,}/g,o=/[*"']/g},279682:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.canCurrentUserManageAutomod=function(e){var t=d(e),r=(0,i.canCurrentUserAccessAutomodExperiment)(e);return t&&r};t.canCurrentUserManageMessageFilters=s;t.canCurrentUserSeeAutomodPresetsAllowlist=function(e){return u.AutomodPresetsAllowList.getCurrentConfig({guildId:e}).enableAllowList};t.canCurrentUserSeeAutomodUpsell=function(e){var t=u.AutomodUpsell.getCurrentConfig({guildId:e}).enableAutomodUpsell,r=d(e),n=s(e);return r&&n&&t};var n=l(r(30098)),o=l(r(689389)),u=r(254285),i=r(294984),a=r(770348)
;function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=n.default.getGuild(e);return null!=t&&(t.hasFeature(a.GuildFeatures.COMMUNITY)&&o.default.can(a.Permissions.MANAGE_GUILD,t))};function s(e){if(null==e)return!1;var t=d(e),r=(0,i.canCurrentUserAccessAutomodMessageFilterExperiment)(e);return t&&r}},536084:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.useAutomodEditingRuleActions=function(){return p((function(e){return{hasChanges:e.hasChanges,editingRule:e.editingRule,isLoading:e.isLoading,errorMessage:e.errorMessage,saveRule:e.saveRule,saveEditingRule:e.saveEditingRule,cancelEditingRule:e.cancelEditingRule}}))};t.useAutomodEditingRuleState=function(){return p((function(e){return{hasChanges:e.hasChanges,editingRule:e.editingRule,setEditingRule:e.setEditingRule,createNewEditingRule:e.createNewEditingRule}}))};var n,o=(n=r(219548))&&n.__esModule?n:{default:n},u=r(327269),i=r(71246),a=r(370493),l=r(403819),d=r(809703),s=r(638018)
;function c(e,t,r,n,o,u,i){try{var a=e[u](i),l=a.value}catch(e){r(e);return}a.done?t(l):Promise.resolve(l).then(n,o)}function f(){f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return f.apply(this,arguments)}var g=Object.freeze({editingRule:null,hasChanges:!1,isLoading:!1,errorMessage:null}),p=(0,o.default)((function(e,t){return{editingRule:null,hasChanges:!1,setEditingRule:function(r,n){var o=t().editingRule,u=n||null!=r&&null!=o&&r.id===o.id;null!=r&&(r=f({},r,{actions:r.actions.filter(i.isNotNullish)}));e({editingRule:r,hasChanges:u})},createNewEditingRule:function(t,r,n){var o=f({},(0,a.createDefaultRule)(t,r),{},null!=n?n:{});e({editingRule:o,hasChanges:!0});return o},isLoading:!1,errorMessage:null,cancelEditingRule:function(){e(f({},g))},saveRule:(n=(r=regeneratorRuntime.mark((function t(r,n){var o,i,c,p;return regeneratorRuntime.wrap((function(t){
for(;;)switch(t.prev=t.next){case 0:if(null!=r){t.next=3;break}e(f({},g));return t.abrupt("return",null);case 3:t.prev=3;(0,a.isRuleKeywordFilter)(r)&&(r.triggerMetadata.keywordFilter=(0,s.sortKeywords)((0,s.dedupeKeywords)(null!==(o=r.triggerMetadata.keywordFilter)&&void 0!==o?o:[])));(0,a.isRuleDefaultKeywordListFilter)(r)&&(r.triggerMetadata.allowList=(0,s.sortKeywords)((0,s.dedupeKeywords)(null!==(i=r.triggerMetadata.allowList)&&void 0!==i?i:[])));(0,l.validateRuleByTriggerConfigOrThrow)(r,n);(0,a.validateRuleBeforeSave)(r);t.next=14;break;case 10:t.prev=10;t.t0=t.catch(3);e({errorMessage:t.t0.message,isLoading:!1});return t.abrupt("return",null);case 14:t.prev=14;e({isLoading:!0});c=null;if((0,a.isExistingRule)(r)){t.next=23;break}t.next=20;return(0,d.createAutomodRule)(r);case 20:c=t.sent;t.next=26;break;case 23:t.next=25;return(0,d.updateAutomodRule)(r);case 25:c=t.sent;case 26:e(f({},g));return t.abrupt("return",c);case 30:t.prev=30;t.t1=t.catch(14);p=new u.APIError(t.t1);e({
isLoading:!1,errorMessage:p.getAnyErrorMessage()});case 34:return t.abrupt("return",null);case 35:case"end":return t.stop()}}),t,null,[[3,10],[14,30]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var u=r.apply(e,t);function i(e){c(u,n,o,i,a,"next",e)}function a(e){c(u,n,o,i,a,"throw",e)}i(void 0)}))}),function(e,t){return n.apply(this,arguments)}),saveEditingRule:function(e){var r=t(),n=r.editingRule;return(0,r.saveRule)(n,e)}};var r,n}))},106816:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.getActionInfo=function(e,t,r){var n,o,u,i;if(!function(e){switch(e){case s.AutomodActionType.BLOCK_MESSAGE:case s.AutomodActionType.FLAG_TO_CHANNEL:case s.AutomodActionType.USER_COMMUNICATION_DISABLED:return!0;default:return!1}}(e))return null;return{headerText:null!==(n=p(e))&&void 0!==n?n:"",descriptionText:null!==(o=A(e,r))&&void 0!==o?o:"",helperText:null!==(u=_(e,t))&&void 0!==u?u:null,icon:null!==(i=m(e))&&void 0!==i?i:d.default}}
;var n=r(678928),o=g(r(644263)),u=g(r(290629)),i=g(r(728429)),a=g(r(562796)),l=g(r(769752)),d=g(r(930600)),s=r(726102),c=r(397769),f=g(r(247001));function g(e){return e&&e.__esModule?e:{default:e}}var p=function(e){switch(e){case s.AutomodActionType.BLOCK_MESSAGE:return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;case s.AutomodActionType.FLAG_TO_CHANNEL:return f.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;case s.AutomodActionType.USER_COMMUNICATION_DISABLED:return f.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER}},A=function(e,t){void 0===t&&(t=s.AutomodTriggerType.KEYWORD_FILTER);switch(e){case s.AutomodActionType.BLOCK_MESSAGE:switch(t){case s.AutomodTriggerType.MENTION_SPAM_FILTER:return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;case s.AutomodTriggerType.ML_SPAM_FILTER:return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;default:
return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION}case s.AutomodActionType.FLAG_TO_CHANNEL:return f.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;case s.AutomodActionType.USER_COMMUNICATION_DISABLED:return f.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION}},_=function(e,t){switch(e){case s.AutomodActionType.BLOCK_MESSAGE:return null;case s.AutomodActionType.FLAG_TO_CHANNEL:var r,a=null==t||null===(r=t.metadata)||void 0===r?void 0:r.channelId;if(null==a)return null;var l=o.default.getChannel(a);if(null==l)return null;var d=(0,n.computeChannelName)(l,i.default,u.default);return f.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({channelName:d});case s.AutomodActionType.USER_COMMUNICATION_DISABLED:var g,p,A=null!==(g=null==t||null===(p=t.metadata)||void 0===p?void 0:p.durationSeconds)&&void 0!==g?g:0,_=(0,c.getFriendlyDurationString)(A)
;return null==_?null:f.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({duration:_})}},m=function(e){switch(e){case s.AutomodActionType.BLOCK_MESSAGE:return d.default;case s.AutomodActionType.FLAG_TO_CHANNEL:return a.default;case s.AutomodActionType.USER_COMMUNICATION_DISABLED:return l.default}}},474084:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.createOnPreventNavigation=t.confirmRuleDelete=t.confirmAddKeyword=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=r(194322);function u(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function i(){i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return i.apply(this,arguments)}function a(e,t,r,n,o,u,i){try{var a=e[u](i),l=a.value}catch(e){r(e);return}a.done?t(l):Promise.resolve(l).then(n,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function i(e){a(u,n,o,i,l,"next",e)}function l(e){a(u,n,o,i,l,"throw",e)}i(void 0)}))}}function d(e){return new Promise((function(t){(0,o.openModalLazy)((function(){return e((function(){t(!0)}),(function(e){t(!1);return e()}))}))}))}t.confirmRuleDelete=function(e){return d(function(){var t=l(regeneratorRuntime.mark((function t(o,u){var a,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2
;return r.e(38395).then(r.bind(r,538395));case 2:a=t.sent;l=a.default;return t.abrupt("return",(function(t){return n.createElement(l,i({},t,{ruleName:e,onConfirm:o,onClose:function(){return u(t.onClose)},onCancel:function(e){function t(){return e.apply(this,arguments)}t.toString=function(){return e.toString()};return t}((function(){return u(t.onClose)}))}))}));case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())};t.confirmAddKeyword=function(e,t){return d(function(){var o=l(regeneratorRuntime.mark((function o(u,a){var l,d;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:o.next=2;return r.e(61137).then(r.bind(r,861137));case 2:l=o.sent;d=l.default;return o.abrupt("return",(function(r){return n.createElement(d,i({},r,{ruleName:e,keyword:t,onConfirm:u,onClose:function(){return a(r.onClose)},onCancel:function(e){function t(){return e.apply(this,arguments)}t.toString=function(){return e.toString()};return t
}((function(){return a(r.onClose)}))}))}));case 5:case"end":return o.stop()}}),o)})));return function(e,t){return o.apply(this,arguments)}}())};t.createOnPreventNavigation=function(e){return function(t){return d(function(){var o=l(regeneratorRuntime.mark((function o(u,a){var l,d,s;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:o.next=2;return r.e(53229).then(r.bind(r,153229));case 2:l=o.sent;d=l.default;s=function(){t();u()};return o.abrupt("return",(function(t){return n.createElement(d,i({ruleName:e},t,{onConfirm:s,onClose:function(){return a(t.onClose)},onCancel:function(e){function t(){return e.apply(this,arguments)}t.toString=function(){return e.toString()};return t}((function(){return a(t.onClose)}))}))}));case 6:case"end":return o.stop()}}),o)})));return function(e,t){return o.apply(this,arguments)}}())}}}}]);
//# sourceMappingURL=f42876ea40f052f92160.js.map