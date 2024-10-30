var Serie = /** @class */ (function () {
    function Serie(id, name, chanel, seasons, image, description, link) {
        this.id = id;
        this.name = name;
        this.chanel = chanel;
        this.seasons = seasons;
        this.image = image;
        this.description = description;
        this.link = link;
    }
    Serie.prototype.Prom = function (Se) {
        var Sum = 0;
        for (var i = 0; i < Se.length; i++) {
            Sum += Se[i].seasons;
        }
        var rta = Sum / Se.length;
        return rta;
    };
    return Serie;
}());
export { Serie };
