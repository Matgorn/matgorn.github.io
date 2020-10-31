function contact() {
  return `
    <a id="kontakt"></a>
    <hr class="section-hr">
    <section class="container" id="contact">
      <h2>Skontaktuj się z nami</h2>
      <span>
        <i class="fas fa-phone"></i><p><a href="tel:+48123456789">+ 48 123 456 789</a></p>
      </span>

      <span>
        <i class="fas fa-envelope"></i><p>example@gmail.com</p>
      </span>

      <h4>Lub wyślij wiadomość bezpośrednio</h4>

      <div class="form-container">
        <form id="contact-form" action="">

        <label for="fname">Imię</label>
        <input type="text" id="fname" name="firstname" placeholder="Podaj imię..">

        <label for="tel">Numer Telefonu</label>
        <input type="text" id="tel" name="tel" placeholder="123 456 789">

        <label for="subject">Wiadomość</label>
        <textarea id="subject" name="subject" placeholder="O co chciałbyś zapytać.." style="height:200px"></textarea>

        <button id="submit-btn">Wyślij</button>
        <p id="send-info"></p>

        </form>
      </div>
    </section>
    <footer><p>Projekt i realizacja | <span>Matgorn</span> </p></footer>
  `
};

export default contact();