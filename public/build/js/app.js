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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

$(document).ready(function () {

    $('.addToBasket').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            $quantity = $this.closest('.row').find('input[name=quantity]'),
            $name = quantity = $this.closest('.row').find('input[name=name]');

        $.ajax({
            type: "POST",
            url: '/addToBasket',
            data: { name: $name.val(), quantity: $quantity.val() }

        }).done(function (data) {
            $('.info').text(data);
        }).fail(function (data) {
            console.log('error');
            console.log(data);
        });
    });

    $('.removeFromBasket').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            $quantity = $this.closest('.row').find('input[name=quantity]'),
            $name = quantity = $this.closest('.row').find('input[name=name]'),
            $amount = $this.closest('.row').find('span');

        $.ajax({
            type: "POST",
            url: '/removeFromBasket',
            data: { name: $name.val(), quantity: $quantity.val() }

        }).done(function (data) {
            $('.info').text(data.info);
            $amount.text(data.newQuantity);
            if (data.newQuantity <= 0) {
                $this.closest('.row').fadeOut();
            }
        }).fail(function (data) {
            console.log('error');
            console.log(data);
        });
    });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDFjODljY2Y3NDBjNjQ3NmNjNTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCIkcXVhbnRpdHkiLCJjbG9zZXN0IiwiZmluZCIsIiRuYW1lIiwicXVhbnRpdHkiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJuYW1lIiwidmFsIiwiZG9uZSIsInRleHQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsIiRhbW91bnQiLCJpbmZvIiwibmV3UXVhbnRpdHkiLCJmYWRlT3V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQkYsTUFBRSxjQUFGLEVBQWtCRyxLQUFsQixDQUF3QixVQUFVQyxDQUFWLEVBQWE7QUFDakNBLFVBQUVDLGNBQUY7QUFDQSxZQUFJQyxRQUFRTixFQUFFLElBQUYsQ0FBWjtBQUFBLFlBQ0lPLFlBQVlELE1BQU1FLE9BQU4sQ0FBYyxNQUFkLEVBQXNCQyxJQUF0QixDQUEyQixzQkFBM0IsQ0FEaEI7QUFBQSxZQUVJQyxRQUFRQyxXQUFXTCxNQUFNRSxPQUFOLENBQWMsTUFBZCxFQUFzQkMsSUFBdEIsQ0FBMkIsa0JBQTNCLENBRnZCOztBQUlBVCxVQUFFWSxJQUFGLENBQU87QUFDSEMsa0JBQU0sTUFESDtBQUVIQyxpQkFBSyxjQUZGO0FBR0hDLGtCQUFNLEVBQUNDLE1BQU1OLE1BQU1PLEdBQU4sRUFBUCxFQUFvQk4sVUFBVUosVUFBVVUsR0FBVixFQUE5Qjs7QUFISCxTQUFQLEVBS0dDLElBTEgsQ0FLUSxVQUFVSCxJQUFWLEVBQWdCO0FBQ3BCZixjQUFFLE9BQUYsRUFBV21CLElBQVgsQ0FBZ0JKLElBQWhCO0FBRUgsU0FSRCxFQVFHSyxJQVJILENBUVEsVUFBVUwsSUFBVixFQUFnQjtBQUNwQk0sb0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlQLElBQVo7QUFDSCxTQVhEO0FBWUgsS0FsQkQ7O0FBb0JBZixNQUFFLG1CQUFGLEVBQXVCRyxLQUF2QixDQUE2QixVQUFVQyxDQUFWLEVBQWE7QUFDdENBLFVBQUVDLGNBQUY7QUFDQSxZQUFJQyxRQUFRTixFQUFFLElBQUYsQ0FBWjtBQUFBLFlBQ0lPLFlBQVlELE1BQU1FLE9BQU4sQ0FBYyxNQUFkLEVBQXNCQyxJQUF0QixDQUEyQixzQkFBM0IsQ0FEaEI7QUFBQSxZQUVJQyxRQUFRQyxXQUFXTCxNQUFNRSxPQUFOLENBQWMsTUFBZCxFQUFzQkMsSUFBdEIsQ0FBMkIsa0JBQTNCLENBRnZCO0FBQUEsWUFHSWMsVUFBVWpCLE1BQU1FLE9BQU4sQ0FBYyxNQUFkLEVBQXNCQyxJQUF0QixDQUEyQixNQUEzQixDQUhkOztBQUtBVCxVQUFFWSxJQUFGLENBQU87QUFDSEMsa0JBQU0sTUFESDtBQUVIQyxpQkFBSyxtQkFGRjtBQUdIQyxrQkFBTSxFQUFDQyxNQUFNTixNQUFNTyxHQUFOLEVBQVAsRUFBb0JOLFVBQVVKLFVBQVVVLEdBQVYsRUFBOUI7O0FBSEgsU0FBUCxFQUtHQyxJQUxILENBS1EsVUFBVUgsSUFBVixFQUFnQjtBQUNwQmYsY0FBRSxPQUFGLEVBQVdtQixJQUFYLENBQWdCSixLQUFLUyxJQUFyQjtBQUNBRCxvQkFBUUosSUFBUixDQUFhSixLQUFLVSxXQUFsQjtBQUNBLGdCQUFJVixLQUFLVSxXQUFMLElBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCbkIsc0JBQU1FLE9BQU4sQ0FBYyxNQUFkLEVBQXNCa0IsT0FBdEI7QUFDSDtBQUNKLFNBWEQsRUFXR04sSUFYSCxDQVdRLFVBQVVMLElBQVYsRUFBZ0I7QUFDcEJNLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZUCxJQUFaO0FBQ0gsU0FkRDtBQWVILEtBdEJEO0FBd0JILENBOUNELEUiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvYXBwLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQxYzg5Y2NmNzQwYzY0NzZjYzUzIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQoJy5hZGRUb0Jhc2tldCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICRxdWFudGl0eSA9ICR0aGlzLmNsb3Nlc3QoJy5yb3cnKS5maW5kKCdpbnB1dFtuYW1lPXF1YW50aXR5XScpLFxyXG4gICAgICAgICAgICAkbmFtZSA9IHF1YW50aXR5ID0gJHRoaXMuY2xvc2VzdCgnLnJvdycpLmZpbmQoJ2lucHV0W25hbWU9bmFtZV0nKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogJy9hZGRUb0Jhc2tldCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtuYW1lOiAkbmFtZS52YWwoKSwgcXVhbnRpdHk6ICRxdWFudGl0eS52YWwoKX1cclxuXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAkKCcuaW5mbycpLnRleHQoZGF0YSk7XHJcblxyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnJlbW92ZUZyb21CYXNrZXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkcXVhbnRpdHkgPSAkdGhpcy5jbG9zZXN0KCcucm93JykuZmluZCgnaW5wdXRbbmFtZT1xdWFudGl0eV0nKSxcclxuICAgICAgICAgICAgJG5hbWUgPSBxdWFudGl0eSA9ICR0aGlzLmNsb3Nlc3QoJy5yb3cnKS5maW5kKCdpbnB1dFtuYW1lPW5hbWVdJyksXHJcbiAgICAgICAgICAgICRhbW91bnQgPSAkdGhpcy5jbG9zZXN0KCcucm93JykuZmluZCgnc3BhbicpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiAnL3JlbW92ZUZyb21CYXNrZXQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7bmFtZTogJG5hbWUudmFsKCksIHF1YW50aXR5OiAkcXVhbnRpdHkudmFsKCl9XHJcblxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJCgnLmluZm8nKS50ZXh0KGRhdGEuaW5mbyk7XHJcbiAgICAgICAgICAgICRhbW91bnQudGV4dChkYXRhLm5ld1F1YW50aXR5KTtcclxuICAgICAgICAgICAgaWYgKGRhdGEubmV3UXVhbnRpdHkgPD0gMCApe1xyXG4gICAgICAgICAgICAgICAgJHRoaXMuY2xvc2VzdCgnLnJvdycpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=