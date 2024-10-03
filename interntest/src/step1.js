import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./style.css"






const personalInformationValidation = yup.object().shape({
  firstName: yup.string().required("First Name is required."),
  lastName: yup.string().required("Last Name is required."),
   dob: yup
  .date()
  .required("Date of birth is required")
  .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), "You must be at least 18 years old"),
  country: yup.string().required("Country is required"),
});

export default function PersonalInformationForm({ setPersonalInformation }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInformationValidation),
  });

  const submitPersonalInformation = (data) => {
    setPersonalInformation(data);
    navigate("/family");
    console.log(data);
  };

  return (
    <div className="Personalform">
      <p>Step 1 of 2</p>
      <h3>Personal Information</h3>
      <form onSubmit={handleSubmit(submitPersonalInformation)}>


      <div className="inputFeild">
      <label htmlFor="firstName">First Name</label>
        <input {...register("firstName")} placeholder="First Name" />
        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>
        
         


        <div className="inputFeild">

        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName")} placeholder="Last Name" />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
              </div>
        
        <div className="inputFeild">
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" {...register("dob")} />
       {errors.dob && <p className="error">{errors.dob.message}</p>}
        
       </div>



       <div className="inputFeild">
        <label htmlFor="country">Country</label>
        <select {...register("country")} defaultValue="">
          <option value="" disabled>Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <p className="error">{errors.country.message}</p>}
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}





// const personalInformationValidation = yup.object().shape({
//   firstName: yup.string().required("First Name is required."),
//   lastName: yup.string().required("Last Name is required."),
// });

// export default function PersonalInformationForm({ setPersonalInformation }) {
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm();

//   const submitPersonalInformation = (data) => {
//     setPersonalInformation(data);
//     navigate("/family");
//     console.log(data);
//   };

//   return (
//     <div>
//       <h3>Personal Information</h3>
//       <form onSubmit={handleSubmit(submitPersonalInformation)}>
//         <input {...register("firstName")} placeholder="First Name" />
//         <input {...register("lastName")} placeholder="Last Name" />
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }




// export default function PersonalInformationForm({ setPersonalInformation }) {

//   const navigate = useNavigate();
//     const { register, handleSubmit } = useForm();

//     const submitPersonalInformation = (data) => {
//         setPersonalInformation(data);
//         // You can navigate here for testing
//         navigate("/family")
//         console.log(data);
//     };

//     return (
//         <div>
//             <h3>Personal Information</h3>
//             <form onSubmit={handleSubmit(submitPersonalInformation)}>
//                 <input {...register("firstName")} placeholder="First Name" />
//                 <input {...register("lastName")} placeholder="Last Name" />
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// }





// export default function PersonalInformationForm({ setPersonalInformation }) {
//     const navigate = useNavigate();
    
//     const handleClick = () => {
//         setPersonalInformation({ firstName: "Test" });
//         navigate("/family");
//     };

//     return (
//         <div>
//             <h3>Personal Information</h3>
//             <button onClick={handleClick}>Go to Family</button>
//         </div>
//     );
// }






// const personalInformationValidation = yup.object().shape({
//   firstName: yup.string().required("First Name is required."),
//   lastName: yup.string().required("Last Name is required."),
//   dob: yup
//     .string()
//     .required("Date of birth is required")
//     .matches(/^\d{4}-\d{2}-\d{2}$/, "Date of Birth must be in the format YYYY-MM-DD"),
//   country: yup.string().required("Country is required"),
// });




// export default function PersonalInformationForm({setPersonalInformation}) {
    
   
//     const navigate=useNavigate()
  
    
//     const {
//       register,
//       handleSubmit,
//       formState: { errors},
//       reset,
//     } = useForm({
//       resolver: yupResolver(personalInformationValidation),
//     });
  
    
    
    
//     const submitPersonalInformation = (data) => {
//       setPersonalInformation(data); 
//       reset();
//       navigate("/family") 
      
//     };
  
   
    
  
//     return (
      
  
//           <div className="Personal-form">
//               <p>Step 1 of 2</p>
//             <h3>Personal Information</h3>
//             <form onSubmit={handleSubmit(submitPersonalInformation)}>
//               <label htmlFor="firstName">First Name</label>
//               <input {...register("firstName")} placeholder="First Name" />
//               {errors.firstName && <p>{errors.firstName.message}</p>}
  
//               <label htmlFor="lastName">Last Name</label>
//               <input {...register("lastName")} placeholder="Last Name" />
//               {errors.lastName && <p>{errors.lastName.message}</p>}
  
//               <label htmlFor="dob">Date of Birth</label>
//               <input {...register("dob")} placeholder="Date of Birth (YYYY-MM-DD)" />
//               {errors.dob && <p>{errors.dob.message}</p>}
  
//               <label htmlFor="country">Country</label>
//               <select {...register("country")} defaultValue="">
//                 <option value="" disabled>
//                   Select Country
//                 </option>
//                 <option value="Pakistan">Pakistan</option>
//                 <option value="India">India</option>
//                 <option value="Australia">Australia</option>
//                 <option value="USA">USA</option>
//               </select>
//               {errors.country && <p>{errors.country.message}</p>}
  
//               <input type="submit" value="Submit Personal Info" />
//             </form>
//           </div>
//         )}
  
      
    
  
  