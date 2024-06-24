// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
    var value = 0;
    function increment() {
        return value++;
    }
    function decrement() {
        return value--;
    }
    return { increment, decrement };
}
const count = createCounter();
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);



function findElementByClass(node, cln) {
    for (var i = 0; i < node.childNodes.length; i++) {
        var elem = node.childNodes[i];
        if (elem.className === cln) {
            return elem
        }
        else {
            result = findElementByClass(elem, cln);
            if (result) {
                return result;
            }
        }

    }


}

const rootElement = document.getElementById('p1');
const targetElement = findElementByClass(rootElement, 'super_element2');

console.log(targetElement);

