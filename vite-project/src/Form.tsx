 
interface FormData {
    isim: string;
    email: string;
}

function Form(){
    const [formData, setFormData] = useState<FormData>({isim: "", email: ""});
    const [hata, setHata] = useState<string>("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData || !formData.email.includes("@")){
            setHata("gecersiz mail adersi");
            return;0
        }
        alert(`Salam ${formData.email}!`);
        setHata("");
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData , [e.target.name]: e.target.value
        });
    }

    return <div></div>
}
export default Form;