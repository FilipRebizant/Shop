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
            $quantity.val('');
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
            $quantity.val('');
        }).fail(function (data) {
            console.log('error');
            console.log(data);
        });
    });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWEzNjE4MjQxYzkzNGU1YTQ5NTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCIkcXVhbnRpdHkiLCJjbG9zZXN0IiwiZmluZCIsIiRuYW1lIiwicXVhbnRpdHkiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJuYW1lIiwidmFsIiwiZG9uZSIsInRleHQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsIiRhbW91bnQiLCJpbmZvIiwibmV3UXVhbnRpdHkiLCJmYWRlT3V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQkYsTUFBRSxjQUFGLEVBQWtCRyxLQUFsQixDQUF3QixVQUFVQyxDQUFWLEVBQWE7QUFDakNBLFVBQUVDLGNBQUY7QUFDQSxZQUFJQyxRQUFRTixFQUFFLElBQUYsQ0FBWjtBQUFBLFlBQ0lPLFlBQVlELE1BQU1FLE9BQU4sQ0FBYyxNQUFkLEVBQXNCQyxJQUF0QixDQUEyQixzQkFBM0IsQ0FEaEI7QUFBQSxZQUVJQyxRQUFRQyxXQUFXTCxNQUFNRSxPQUFOLENBQWMsTUFBZCxFQUFzQkMsSUFBdEIsQ0FBMkIsa0JBQTNCLENBRnZCOztBQUlBVCxVQUFFWSxJQUFGLENBQU87QUFDSEMsa0JBQU0sTUFESDtBQUVIQyxpQkFBSyxjQUZGO0FBR0hDLGtCQUFNLEVBQUNDLE1BQU1OLE1BQU1PLEdBQU4sRUFBUCxFQUFvQk4sVUFBVUosVUFBVVUsR0FBVixFQUE5Qjs7QUFISCxTQUFQLEVBS0dDLElBTEgsQ0FLUSxVQUFVSCxJQUFWLEVBQWdCO0FBQ3BCZixjQUFFLE9BQUYsRUFBV21CLElBQVgsQ0FBZ0JKLElBQWhCO0FBQ0FSLHNCQUFVVSxHQUFWLENBQWMsRUFBZDtBQUVILFNBVEQsRUFTR0csSUFUSCxDQVNRLFVBQVVMLElBQVYsRUFBZ0I7QUFDcEJNLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZUCxJQUFaO0FBQ0gsU0FaRDtBQWFILEtBbkJEOztBQXFCQWYsTUFBRSxtQkFBRixFQUF1QkcsS0FBdkIsQ0FBNkIsVUFBVUMsQ0FBVixFQUFhO0FBQ3RDQSxVQUFFQyxjQUFGO0FBQ0EsWUFBSUMsUUFBUU4sRUFBRSxJQUFGLENBQVo7QUFBQSxZQUNJTyxZQUFZRCxNQUFNRSxPQUFOLENBQWMsTUFBZCxFQUFzQkMsSUFBdEIsQ0FBMkIsc0JBQTNCLENBRGhCO0FBQUEsWUFFSUMsUUFBUUMsV0FBV0wsTUFBTUUsT0FBTixDQUFjLE1BQWQsRUFBc0JDLElBQXRCLENBQTJCLGtCQUEzQixDQUZ2QjtBQUFBLFlBR0ljLFVBQVVqQixNQUFNRSxPQUFOLENBQWMsTUFBZCxFQUFzQkMsSUFBdEIsQ0FBMkIsTUFBM0IsQ0FIZDs7QUFLQVQsVUFBRVksSUFBRixDQUFPO0FBQ0hDLGtCQUFNLE1BREg7QUFFSEMsaUJBQUssbUJBRkY7QUFHSEMsa0JBQU0sRUFBQ0MsTUFBTU4sTUFBTU8sR0FBTixFQUFQLEVBQW9CTixVQUFVSixVQUFVVSxHQUFWLEVBQTlCOztBQUhILFNBQVAsRUFLR0MsSUFMSCxDQUtRLFVBQVVILElBQVYsRUFBZ0I7QUFDcEJmLGNBQUUsT0FBRixFQUFXbUIsSUFBWCxDQUFnQkosS0FBS1MsSUFBckI7QUFDQUQsb0JBQVFKLElBQVIsQ0FBYUosS0FBS1UsV0FBbEI7QUFDQSxnQkFBSVYsS0FBS1UsV0FBTCxJQUFvQixDQUF4QixFQUEyQjtBQUN2Qm5CLHNCQUFNRSxPQUFOLENBQWMsTUFBZCxFQUFzQmtCLE9BQXRCO0FBQ0g7QUFDRG5CLHNCQUFVVSxHQUFWLENBQWMsRUFBZDtBQUVILFNBYkQsRUFhR0csSUFiSCxDQWFRLFVBQVVMLElBQVYsRUFBZ0I7QUFDcEJNLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZUCxJQUFaO0FBQ0gsU0FoQkQ7QUFpQkgsS0F4QkQ7QUEwQkgsQ0FqREQsRSIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWEzNjE4MjQxYzkzNGU1YTQ5NTciLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJCgnLmFkZFRvQmFza2V0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgJHF1YW50aXR5ID0gJHRoaXMuY2xvc2VzdCgnLnJvdycpLmZpbmQoJ2lucHV0W25hbWU9cXVhbnRpdHldJyksXHJcbiAgICAgICAgICAgICRuYW1lID0gcXVhbnRpdHkgPSAkdGhpcy5jbG9zZXN0KCcucm93JykuZmluZCgnaW5wdXRbbmFtZT1uYW1lXScpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiAnL2FkZFRvQmFza2V0JyxcclxuICAgICAgICAgICAgZGF0YToge25hbWU6ICRuYW1lLnZhbCgpLCBxdWFudGl0eTogJHF1YW50aXR5LnZhbCgpfVxyXG5cclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICQoJy5pbmZvJykudGV4dChkYXRhKTtcclxuICAgICAgICAgICAgJHF1YW50aXR5LnZhbCgnJyk7XHJcblxyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnJlbW92ZUZyb21CYXNrZXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAkcXVhbnRpdHkgPSAkdGhpcy5jbG9zZXN0KCcucm93JykuZmluZCgnaW5wdXRbbmFtZT1xdWFudGl0eV0nKSxcclxuICAgICAgICAgICAgJG5hbWUgPSBxdWFudGl0eSA9ICR0aGlzLmNsb3Nlc3QoJy5yb3cnKS5maW5kKCdpbnB1dFtuYW1lPW5hbWVdJyksXHJcbiAgICAgICAgICAgICRhbW91bnQgPSAkdGhpcy5jbG9zZXN0KCcucm93JykuZmluZCgnc3BhbicpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiAnL3JlbW92ZUZyb21CYXNrZXQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7bmFtZTogJG5hbWUudmFsKCksIHF1YW50aXR5OiAkcXVhbnRpdHkudmFsKCl9XHJcblxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJCgnLmluZm8nKS50ZXh0KGRhdGEuaW5mbyk7XHJcbiAgICAgICAgICAgICRhbW91bnQudGV4dChkYXRhLm5ld1F1YW50aXR5KTtcclxuICAgICAgICAgICAgaWYgKGRhdGEubmV3UXVhbnRpdHkgPD0gMCApe1xyXG4gICAgICAgICAgICAgICAgJHRoaXMuY2xvc2VzdCgnLnJvdycpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkcXVhbnRpdHkudmFsKCcnKTtcclxuXHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==