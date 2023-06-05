# HW15-11-_JS-DOM_06.23
Homework_JS_week11_DOM
# HW15-11-\_JS-DOM

Home Work_week15 (11)

1. Сколько детей (дочерних DOM-узлов) у элемента `<ul>` в примере ниже:

   ```jsx
   <ul>
     <li>Привет</li>
     <li>Мир</li>
   </ul>
   ```

   //2

2. Есть такой элемент: `<input id= "input" value = "Привет">`. Какой вызов поменяет значение в нём?
   //Нужно сначала найти элемент по id и записать в переменную: let element=document.getElementById("input"); , а потом заменить значение в ней, например: element.value = 'Пока';
3. Сколько потомков будет у `<div>` после кода ниже?

   ```jsx
   <div id="div"></div>
   <p id="p">Привет</p>

   <script>
     div.append(p);
     div.append(p);
   </script>
   ```

   //1, проверка с помощью console.log(document.getElementById('div').childNodes.length); в JS

4. В каких случаях для элемента elem не верно `elem.firstChild == elem.lastChild`?

- Когда у elem два или более потомков
- Когда у elem единственный потомок
- Когда у elem нет потомков
- Нет такого варианта ответа
  //Когда у elem два или более потомков

5. Какое свойство задает класс элемента?
   //className
6. Для чего используется запись: `setAttribute(name, value)`?
   //для установления значения атрибута
7. Назовите метод добавления текста к документу.
   //с помощью свойства .textContent
8. Как получить HTML-содержимое DOM-элемента elem?
   //с помощью document.getElementById, например: let elem = document.getElementById('elem');
9. Что такое объект события и какие у него могут быть свойства?
   //объект, связанный с определенным событием и содержащий информацию об этом событии
10. Что такое BOM и DOM?
    //BOM=Browser Object Model, DOM=Document Object Model
11. Есть вот такая страница:

    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <form name="search">
          <label>Поиск: <input type="text" name="search" /> </label>
          <input type="submit" value="Search!" />
        </form>
        <hr />
        <form name="search-person">
          Поиск по посетителям:
          <table id="age-table">
            <tr>
              <td>Возраст:</td>
              <td id="age-list">
                <label>
                  <input type="radio" name="age" value="young" />до 18</label
                >
                <label>
                  <input type="radio" name="age" value="mature" />18-50</label
                >
                <label>
                  <input type="radio" name="age" value="senior" />старше
                  50</label
                >
              </td>
            </tr>
            <tr>
              <td>Дополнительно:</td>
              <td>
                <input type="text" name="info" />
                <input type="text" name="info" />
                <input type="text" name="info" />
              </td>
            </tr>
          </table>
          <input type="button" value="Search!" />
        </form>
      </body>
    </html>
    ```

    Как найти в ней:

    1. Таблицу с `id="age-table"` //let element=document.getElementById("age-table");
    2. Все элементы `label` **внутри** этой таблицы (их три) //let element=document.querySelectorAll("label");
    3. Форму `form` с именем `name="search-person"` //let element=document.getElementByName("search-person");

12. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?
    //в консоли набрать window.location.href="http://www......" (можно привязать этот переход по ссылке к какому-то действию пользователя).
