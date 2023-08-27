var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Class
var AbstractShape = /** @class */ (function () {
    function AbstractShape() {
    }
    return AbstractShape;
}());
var MainCircle = /** @class */ (function (_super) {
    __extends(MainCircle, _super);
    function MainCircle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    MainCircle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return MainCircle;
}(AbstractShape));
var MainRectangle = /** @class */ (function (_super) {
    __extends(MainRectangle, _super);
    function MainRectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    MainRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return MainRectangle;
}(AbstractShape));
var circle = new MainCircle(9);
var rectangle = new MainRectangle(3, 4);
console.log("Circle area: ".concat(circle.getArea()));
console.log("Rectangle area: ".concat(rectangle.getArea()));
