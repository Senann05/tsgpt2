import { useState } from "react";

interface FormData {
  isim: string;
  email: string;
  sifre: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({ isim: "", email: "", sifre: "" });
  const [hata, setHata] = useState<string>("");
  const [basari, setBasari] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setHata(""); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.isim.length < 3) {
      setHata("Lütfen geçerli bir isim girin!");
      return;
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setHata("Lütfen geçerli bir email girin!");
      return;
    }
    if (formData.sifre.length < 6) {
      setHata("Şifre 6 karakter içermelidir!");
      return;
    }
    alert(`Hoş geldin, ${formData.isim}!`);
    setHata("");
    setBasari(true);
    setFormData({ isim: "", email: "", sifre: "" }); 
  };

  return (
    <div>
      {basari ? (
        <>
          <p style={{ color: "green" }}>Form başarıyla gönderildi!</p>
          <button onClick={() => setBasari(false)}>Yeniden Gönder</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>İsim:</label>
            <input type="text" name="isim" value={formData.isim} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Sifre:</label>
            <input type="password" name="sifre" value={formData.sifre} onChange={handleChange} />
          </div>
          {hata && <p style={{ color: "red" }}>{hata}</p>}
          <button type="submit">Gönder</button>
        </form>
      )}
    </div>
  );
}
export default Form;
