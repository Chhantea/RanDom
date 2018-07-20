/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************!*\
  !*** ./app/javascript/packs/hello_vue.js ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_paginate__ = __webpack_require__(/*! vue-paginate */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_paginate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_paginate__);
/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from '../app.vue'

// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.body.appendChild(document.createElement('hello'))
//   const app = new Vue({
//     el,
//     render: h => h(App)
//   })

//   console.log(app)
// })


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'

// Vue.use(TurbolinksAdapter)

// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_paginate___default.a);
new Vue({
  el: '#app',
  data: {
    items: ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five', 'Item Six', 'Item Seven', 'Item Eight', 'Item Nine', 'Item Ten', 'Item Eleven', 'Item Twelve', 'Item Thirteen'],
    paginate: ['items']
  }
});

/***/ }),
/* 2 */
/*!********************************************************!*\
  !*** ./node_modules/vue-paginate/dist/vue-paginate.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/**
 * vue-paginate v3.6.0
 * (c) 2018 Taha Shashtari
 * @license MIT
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VuePaginate = factory());
}(this, function () { 'use strict';

  var warn = function () {}
  var formatComponentName

  var hasConsole = typeof console !== 'undefined'

  warn = function (msg, vm, type) {
    if ( type === void 0 ) type = 'error';

    if (hasConsole) {
      console[type]("[vue-paginate]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
        ))
    }
  }

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
    ? vm.$options.name || vm.$options._componentTag
    : vm.name
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
      )
  }

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages."
    }
    return ("\n(found in " + str + ")")
  }

  var Paginate = {
    name: 'paginate',
    props: {
      name: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      },
      per: {
        type: Number,
        default: 3,
        validator: function validator (value) {
          return value > 0
        }
      },
      tag: {
        type: String,
        default: 'ul'
      },
      container: {
        type: Object,
        default: null
      }
    },
    data: function data () {
      return {
        initialListSize: this.list.length
      }
    },
    computed: {
      parent: function parent () {
        return this.container ? this.container : this.$parent
      },
      currentPage: {
        get: function get () {
          if (this.parent.paginate[this.name]) {
            return this.parent.paginate[this.name].page
          }
        },
        set: function set (page) {
          this.parent.paginate[this.name].page = page
        }
      },
      pageItemsCount: function pageItemsCount () {
        var numOfItems = this.list.length
        var first = this.currentPage * this.per + 1
        var last = Math.min((this.currentPage * this.per) + this.per, numOfItems)
        return (first + "-" + last + " of " + numOfItems)
      },

      lastPage: function lastPage () {
        return Math.ceil(this.list.length / this.per)
      }
    },
    mounted: function mounted () {
      if (this.per <= 0) {
        warn(("<paginate name=\"" + (this.name) + "\"> 'per' prop can't be 0 or less."), this.parent)
      }
      if (!this.parent.paginate[this.name]) {
        warn(("'" + (this.name) + "' is not registered in 'paginate' array."), this.parent)
        return
      }
      this.paginateList()
    },
    watch: {
      currentPage: function currentPage () {
        this.paginateList()
      },
      list: function list () {
        if (this.currentPage >= this.lastPage) {
          this.currentPage = this.lastPage - 1
        }
        this.paginateList()
      },
      per: function per () {
        this.currentPage = 0
        this.paginateList()
      }
    },
    methods: {
      paginateList: function paginateList () {
        var index = this.currentPage * this.per
        var paginatedList = this.list.slice(index, index + this.per)
        this.parent.paginate[this.name].list = paginatedList
      },
      goToPage: function goToPage (page) {
        var lastPage = Math.ceil(this.list.length / this.per)
        if (page > lastPage) {
          warn(("You cannot go to page " + page + ". The last page is " + lastPage + "."), this.parent)
          return
        }
        this.currentPage = page - 1
      }
    },
    render: function render (h) {
      return h(this.tag, {}, this.$slots.default)
    }
  }

  var LEFT_ARROW = '«'
  var RIGHT_ARROW = '»'
  var ELLIPSES = '…'

  var LimitedLinksGenerator = function LimitedLinksGenerator (listOfPages, currentPage, limit) {
    this.listOfPages = listOfPages
    this.lastPage = listOfPages.length - 1
    this.currentPage = currentPage === this.lastPage
      ? this.lastPage - 1
      : currentPage
    this.limit = limit
  };

  LimitedLinksGenerator.prototype.generate = function generate () {
    var firstHalf = this._buildFirstHalf()
    var secondHalf = this._buildSecondHalf()
    return firstHalf.concat( secondHalf)
  };

  LimitedLinksGenerator.prototype._buildFirstHalf = function _buildFirstHalf () {
    var firstHalf = this._allPagesButLast()
      .slice(
        this._currentChunkIndex(),
        this._currentChunkIndex() + this.limit
      )
    // Add backward ellipses with first page if needed
    if (this.currentPage >= this.limit) {
      firstHalf.unshift(ELLIPSES)
      firstHalf.unshift(0)
    }
    // Add ellipses if needed
    if (this.lastPage - this.limit > this._currentChunkIndex()) {
      firstHalf.push(ELLIPSES)
    }
    return firstHalf
  };

  LimitedLinksGenerator.prototype._buildSecondHalf = function _buildSecondHalf () {
    var secondHalf = [this.lastPage]
    return secondHalf
  };

  LimitedLinksGenerator.prototype._currentChunkIndex = function _currentChunkIndex () {
    var currentChunk = Math.floor(this.currentPage / this.limit)
    return currentChunk * this.limit 
  };

  LimitedLinksGenerator.prototype._allPagesButLast = function _allPagesButLast () {
      var this$1 = this;

    return this.listOfPages.filter(function (n) { return n !== this$1.lastPage; })
  };

  var PaginateLinks = {
    name: 'paginate-links',
    props: {
      for: {
        type: String,
        required: true
      },
      limit: {
        type: Number,
        default: 0
      },
      simple: {
        type: Object,
        default: null,
        validator: function validator (obj) {
          return obj.prev && obj.next
        }
      },
      stepLinks: {
        type: Object,
        default: function () {
          return {
            prev: LEFT_ARROW,
            next: RIGHT_ARROW
          }
        },
        validator: function validator$1 (obj) {
          return obj.prev && obj.next
        }
      },
      showStepLinks: {
        type: Boolean
      },
      hideSinglePage: {
        type: Boolean
      },
      classes: {
        type: Object,
        default: null
      },
      async: {
        type: Boolean,
        default: false
      },
      container: {
        type: Object,
        default: null
      }
    },
    data: function data () {
      return {
        listOfPages: [],
        numberOfPages: 0,
        target: null
      }
    },
    computed: {
      parent: function parent () {
        return this.container ? this.container.el : this.$parent
      },
      state: function state () {
        return this.container ? this.container.state : this.$parent.paginate[this.for]
      },
      currentPage: {
        get: function get () {
          if (this.state) {
            return this.state.page
          }
        },
        set: function set (page) {
          this.state.page = page
        }
      }
    },
    mounted: function mounted () {
      var this$1 = this;

      if (this.simple && this.limit) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'simple' and 'limit' props can't be used at the same time. In this case, 'simple' will take precedence, and 'limit' will be ignored."), this.parent, 'warn')
      }
      if (this.simple && !this.simple.next) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'simple' prop doesn't contain 'next' value."), this.parent)
      }
      if (this.simple && !this.simple.prev) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'simple' prop doesn't contain 'prev' value."), this.parent)
      }
      if (this.stepLinks && !this.stepLinks.next) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'step-links' prop doesn't contain 'next' value."), this.parent)
      }
      if (this.stepLinks && !this.stepLinks.prev) {
        warn(("<paginate-links for=\"" + (this.for) + "\"> 'step-links' prop doesn't contain 'prev' value."), this.parent)
      }
      this.$nextTick(function () {
        this$1.updateListOfPages()
      })
    },
    watch: {
      'state': {
        handler: function handler () {
          this.updateListOfPages()
        },
        deep: true
      },
      currentPage: function currentPage (toPage, fromPage) {
        this.$emit('change', toPage + 1, fromPage + 1)
      }
    },
    methods: {
      updateListOfPages: function updateListOfPages () {
        this.target = getTargetPaginateComponent(this.parent.$children, this.for)
        if (!this.target) {
          if (this.async) { return }
          warn(("<paginate-links for=\"" + (this.for) + "\"> can't be used without its companion <paginate name=\"" + (this.for) + "\">"), this.parent)
          warn("To fix that issue you may need to use :async=\"true\" on <paginate-links> component to allow for asyncronous rendering", this.parent, 'warn')
          return
        }
        this.numberOfPages = Math.ceil(this.target.list.length / this.target.per)
        this.listOfPages = getListOfPageNumbers(this.numberOfPages)
      }
    },
    render: function render (h) {
      var this$1 = this;

      if (!this.target && this.async) { return null }

      var links = this.simple
        ? getSimpleLinks(this, h)
        : this.limit > 1
        ? getLimitedLinks(this, h)
        : getFullLinks(this, h)

      if (this.hideSinglePage && this.numberOfPages <= 1) {
        return null
      }

      var el = h('ul', {
        class: ['paginate-links', this.for]
      }, links)

      if (this.classes) {
        this.$nextTick(function () {
          addAdditionalClasses(el.elm, this$1.classes)
        })
      }
      return el
    }
  }

  function getFullLinks (vm, h) {
    var allLinks = vm.showStepLinks
      ? [vm.stepLinks.prev ].concat( vm.listOfPages, [vm.stepLinks.next])
      : vm.listOfPages
    return allLinks.map(function (link) {
      var data = {
        on: {
          click: function (e) {
            e.preventDefault()
            vm.currentPage = getTargetPageForLink(
              link,
              vm.limit,
              vm.currentPage,
              vm.listOfPages,
              vm.stepLinks
            )
          }
        }
      }
      var liClasses = getClassesForLink(
        link,
        vm.currentPage,
        vm.listOfPages.length - 1,
        vm.stepLinks
      )
      var linkText = link === vm.stepLinks.next || link === vm.stepLinks.prev
        ? link
        : link + 1 // it means it's a number
      return h('li', { class: liClasses }, [h('a', data, linkText)])
    })
  }

  function getLimitedLinks (vm, h) {
    var limitedLinks = new LimitedLinksGenerator(
      vm.listOfPages,
      vm.currentPage,
      vm.limit,
      vm.stepLinks
    ).generate()

    limitedLinks = vm.showStepLinks
      ? [vm.stepLinks.prev ].concat( limitedLinks, [vm.stepLinks.next])
      : limitedLinks

    var limitedLinksMetadata = getLimitedLinksMetadata(limitedLinks)

    return limitedLinks.map(function (link, index) {
      var data = {
        on: {
          click: function (e) {
            e.preventDefault()
            vm.currentPage = getTargetPageForLink(
              link,
              vm.limit,
              vm.currentPage,
              vm.listOfPages,
              vm.stepLinks,
              limitedLinksMetadata[index]
            )
          }
        }
      }
      var liClasses = getClassesForLink(
        link,
        vm.currentPage,
        vm.listOfPages.length - 1,
        vm.stepLinks
      )
      // If the link is a number,
      // then incremented by 1 (since it's 0 based).
      // otherwise, do nothing (so, it's a symbol).
      var text = (link === parseInt(link, 10)) ? link + 1 : link
      return h('li', { class: liClasses }, [h('a', data, text)])
    })
  }

  function getSimpleLinks (vm, h) {
    var lastPage = vm.listOfPages.length - 1
    var prevData = {
      on: {
        click: function (e) {
          e.preventDefault()
          if (vm.currentPage > 0) { vm.currentPage -= 1 }
        }
      }
    }
    var nextData = {
      on: {
        click: function (e) {
          e.preventDefault()
          if (vm.currentPage < lastPage) { vm.currentPage += 1 }
        }
      }
    }
    var nextListData = { class: ['next', vm.currentPage >= lastPage ? 'disabled' : ''] }
    var prevListData = { class: ['prev', vm.currentPage <= 0 ? 'disabled' : ''] }
    var prevLink = h('li', prevListData, [h('a', prevData, vm.simple.prev)])
    var nextLink = h('li', nextListData, [h('a', nextData, vm.simple.next)])
    return [prevLink, nextLink]
  }

  function getTargetPaginateComponent (children, targetName) {
    return children
      .filter(function (child) { return (child.$vnode.componentOptions.tag === 'paginate'); })
      .find(function (child) { return child.name === targetName; })
  }

  function getListOfPageNumbers (numberOfPages) {
    // converts number of pages into an array
    // that contains each individual page number
    // For Example: 4 => [0, 1, 2, 3]
    return Array.apply(null, { length: numberOfPages })
      .map(function (val, index) { return index; })
  }

  function getClassesForLink(link, currentPage, lastPage, ref) {
    var prev = ref.prev;
    var next = ref.next;

    var liClass = []
    if (link === prev) {
      liClass.push('left-arrow')
    } else if (link === next) {
      liClass.push('right-arrow')
    } else if (link === ELLIPSES) {
      liClass.push('ellipses')
    } else {
      liClass.push('number')
    }

    if (link === currentPage) {
      liClass.push('active')
    }

    if (link === prev && currentPage <= 0) {
      liClass.push('disabled')
    } else if (link === next && currentPage >= lastPage) {
      liClass.push('disabled')
    }
    return liClass
  }

  function getTargetPageForLink (link, limit, currentPage, listOfPages, ref, metaData) {
    var prev = ref.prev;
    var next = ref.next;
    if ( metaData === void 0 ) metaData = null;

    var currentChunk = Math.floor(currentPage / limit)
    if (link === prev) {
      return (currentPage - 1) < 0 ? 0 : currentPage - 1
    } else if (link === next) {
      return (currentPage + 1 > listOfPages.length - 1)
        ? listOfPages.length - 1
        : currentPage + 1
    } else if (metaData && metaData === 'right-ellipses') {
      return (currentChunk + 1) * limit
    } else if (metaData && metaData === 'left-ellipses') {
      var chunkContent = listOfPages.slice(currentChunk * limit, currentChunk * limit + limit)
      var isLastPage = currentPage === listOfPages.length - 1
      if (isLastPage && chunkContent.length === 1) {
        currentChunk--
      }
      return (currentChunk - 1) * limit + limit - 1
    }
    // which is number
    return link
  }

  /**
   * Mainly used here to check whether the displayed
   * ellipses is for showing previous or next links
   */
  function getLimitedLinksMetadata (limitedLinks) {
    return limitedLinks.map(function (link, index) {
      if (link === ELLIPSES && limitedLinks[index - 1] === 0) {
        return 'left-ellipses'
      } else if (link === ELLIPSES && limitedLinks[index - 1] !== 0) {
        return 'right-ellipses'
      }
      return link
    })
  }

  function addAdditionalClasses (linksContainer, classes) {
    Object.keys(classes).forEach(function (selector) {
      if (selector === 'ul') {
        var selectorValue = classes['ul']
        if (Array.isArray(selectorValue)) {
          selectorValue.forEach(function (c) { return linksContainer.classList.add(c); })
        } else {
          linksContainer.classList.add(selectorValue)
        }
      }
      linksContainer.querySelectorAll(selector).forEach(function (node) {
        var selectorValue = classes[selector]
        if (Array.isArray(selectorValue)) {
          selectorValue.forEach(function (c) { return node.classList.add(c); })
        } else {
          node.classList.add(selectorValue)
        }
      })
    })
  }

  function paginateDataGenerator (listNames) {
    if ( listNames === void 0 ) listNames = [];

    return listNames.reduce(function (curr, listName) {
      curr[listName] = {
        list: [],
        page: 0
      }
      return curr
    }, {})
  }

  var vuePaginate = {}

  vuePaginate.install = function (Vue) {
    Vue.mixin({
      created: function created () {
        if (this.paginate !== 'undefined' && this.paginate instanceof Array) {
          this.paginate = paginateDataGenerator(this.paginate)
        }
      },
      methods: {
        paginated: function paginated (listName) {
          if (!this.paginate || !this.paginate[listName]) {
            warn(("'" + listName + "' is not registered in 'paginate' array."), this)
            return
          }
          return this.paginate[listName].list
        }
      }
    })
    Vue.component('paginate', Paginate)
    Vue.component('paginate-links', PaginateLinks)
  }

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vuePaginate)
  }

  return vuePaginate;

}));

/***/ })
/******/ ]);
//# sourceMappingURL=hello_vue-7e43c2955f7e52daf144.js.map