const DomElement = function (selector,height,width,bg,fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.makeElement = function () {
  let elem;
  if (this.selector[0] == '.') {
    elem = document.createElement('div');
    elem.classList.add(this.selector.substring(1));
    elem.textContent = 'Это элемент div';
  } else if (this.selector[0] == '#') {
    elem = document.createElement('p');
    elem.id = this.selector.substring(1);
    elem.textContent = 'Это элемент p';
  } else {
    console.log(this.selector + ': наименование селектора должно начинаться на "." или "#"');
    return;
  }
  elem.style.cssText = 
  `height: ` + this.height + `px;` +
  `width: ` + this.width + `px;` +
  `background-color: ` + this.bg + `;` +
  `font-size: ` + this.fontSize + `px`
  ;
  document.body.append(elem);
};

const newElem1 = new DomElement('.class1','100','200','blue','18');
newElem1.makeElement();

const newElem2 = new DomElement('#paragraph','200','100','aqua','22');
newElem2.makeElement();

const newElem3 = new DomElement('letter','150','150','green','16');
newElem3.makeElement();
