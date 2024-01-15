function Form() {
  return (
    <form>
      <h3>Loại phương tiện</h3>
      <label htmlFor="oto">
        <input type="radio" name="myRadio" value="1" id="oto" />Ô tô
      </label>
      <label htmlFor="xemay">
        <input type="radio" name="myRadio" value="2" id="xemay" />
        Xe máy
      </label>
      <label htmlFor="xemaydien">
        <input type="radio" name="myRadio" value="3" id="xemaydien" />
        Xe máy điện
      </label>
      <label htmlFor="">
        <input type="text" placeholder="Biển số" />
      </label>
      <button>Kiểm tra phạt nguội</button>
    </form>
  );
}

export default Form;
