import {
  Card,
  Input,
  Button,
  Typography,
  
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
    const ref = useRef();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1hr0l0o",
        "template_6f404xh",
        ref.current,
        "x_CkO3iVwm3Q2MAHz"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you. I will get back to you as soon as possible",
            showConfirmButton: false,
            timer: 1500,
          });

          console.log(result.text);
          e.target.reset();
        
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          
        }
      );
 
  

  
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

 

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div className="lg:w-[60%] md:w-[75%] w-[95%] mt-2 border-4 border-[#8A569B] bg-[#dcdcdc] rounded-2xl mb-20 py-5  lg:py-10  mx-auto ">
      <Card color="transparent" shadow={false}>
        <Typography
          className="text-center bg-[#8A569B]  md:py-2 text-white dark:text-white md:mx-24 lg:mx-[150px] rounded-xl text-sm py-2 mx-10 md:text-xl lg:text-3xl "
          variant="h4"
          color="blue-gray"
        >
          আমাদের সাথে যোগাযোগ করুন
        </Typography>

        <form
          ref={ref}
          onSubmit={handleSubmit}
          className=" lg:w-[90%] w-full  mx-auto w- mt-8 mb-2  max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              আপনার নাম
            </Typography>
            <Input
              name="name"
              size="lg"
              placeholder="নাম"
              onChange={handleChange}
              className=" !border-t-blue-gray-200 w-[98%] md:w-full mx auto bg-cyan-100 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              ইমেল
            </Typography>
            <Input
              size="lg"
              onChange={handleChange}
              name="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 w-[98%] md:w-full mx auto bg-cyan-100 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              মেসেজ
            </Typography>
            <Input
              type="text"
              size="lg"
              name="message"
              onChange={handleChange}
              placeholder="মেসেজ লিখুন "
              className=" !border-t-blue-gray-200  w-[98%] md:w-full mx auto bg-cyan-100 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button
            type="submit"
            className="mt-6 w-[98%] md:w-full mx auto py-2 text-xl "
            fullWidth
          >
            {loading ? "Sending..." : "সাবমিট"}
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default ContactUs;
