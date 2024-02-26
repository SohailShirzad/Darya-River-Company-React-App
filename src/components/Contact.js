
import {React , useRef, useState, useEffect} from 'react'
import '../App.css'
import '../index.css'
import { useId } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom';
import Success from './Success'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const id = useId();
    const form = useRef();
    const [errors, setErrors] = useState({});
    const[success, SetSuccess] = useState(false);

    const [formData, setFormData] = useState(
        {name: "", phone: "", email: "", description: ""}
    );


    const validValues = (inputValues) =>{
        let errors = {};
        if (inputValues.name.trim().length === 0){
            errors.name = "Name is required";
        }else if(inputValues.name.trim().length > 50){
            errors.name = "Name is too long"
        }
        if (inputValues.phone.trim().length < 10){
            errors.phone = "Phone is not valid. i.e 07961988873";
        };
        if (!inputValues.email.trim()){
            errors.email = "Email is required";
        }else if(!/\S+@\S+\.\S+/.test(inputValues.email)){
            errors.email = "Email is not valid";
        };
        if (inputValues.description.trim().length > 50 || inputValues.description.trim().length < 8 ){
            errors.description = "Description should be greather than 8 and less than 50 characters";
        }
        return errors;
    };


    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

   function handleSubmit(event){
    event.preventDefault();
    setErrors(validValues(formData));
    SetSuccess(true);
   };

   console.log(success);

   useEffect(() => {
    if (Object.keys(errors).length === 0 && success) {
        // SetSuccess(true);
        // return<Navigate to ="/success" />
        sendEmail();
    }},[errors]);

  const sendEmail = () => {  
//   emailjs
//   .sendForm('service_nr1vkos', 'template_zs8kkph', form.current, {
//       publicKey: 'WEt2w76hRwRFGYvZo'
//   })
//   .then(
//       () => {
//           console.log('SUCCESS');
//       },
//       (error) =>{
//           console.log('FAILED', error.text);
//       },
//   );
}

    return (
        
        <section className="contact-container flex">
            <div className='contact-left-section light-black'>
                <form ref={form} onSubmit={handleSubmit} className="flex" id="contact-page-contact-form"autoComplete='off'>
                    <h2 className=' outfit bold white-text text-center' id="contact-left-section-heading">Send us a message</h2>
                    <div className="input-container">
                        <div>
                            <span className="material-symbols-outlined">person</span>
                            <input type="text" id={id + 'name'} name="name" placeholder="Name ..." onChange={handleChange} value={formData.name} aria-label='name'
                            style ={{border: errors.name ? "1px solid gray": null}}/>
                        </div>
                        {errors.name ? (<p className='error'>{errors.name}</p>): null}
                    </div>
                    <div className="input-container">
                        <div>
                            <span className="material-symbols-outlined">call</span>
                            <input type="tel" id={id + 'phone'} name="phone" placeholder="Phone Number ..." onChange={handleChange} value={formData.phone} aria-label='phone'
                            style ={{border: errors.email ? "1px solid gray": null}}/>
                        </div>
                        {errors.phone ? (<p className='error'>Please enter a valid phone</p>): null}
                    </div>
                    <div className="input-container">
                        <div>
                            <span className="material-symbols-outlined">mail</span>
                            <input type="email" id={id + 'email'} name="email" placeholder="Email ..." onChange={handleChange}  value={formData.email} aria-label='email'
                            style ={{border: errors.email ? "1px solid gray": null}}/>
                        </div>
                        {errors.email ? (<p className='error'>{errors.email}</p>): null}
                    </div>
                    <div className="input-container">
                        <div>
                            <span className="material-symbols-outlined">description</span>
                            <textarea type="text" id={id + 'description'} name="description" placeholder="Message..." onChange={handleChange} value={formData.description} aria-label='text-input'
                            style ={{border: errors.description ? "1px solid gray": null}}>
                             </textarea>
                        </div>
                        {errors.description ? (<p className='error'>{errors.description}</p>): null}
                    </div>
                    

                    <button className='outfit bold'  id="Submit-button">Submit</button>

                </form>
            </div>
            <div className='contact-right-section'>
                <svg width="1366" height="768" viewBox="0 0 1366 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1366" height="768" fill="#1E1E1E" />
                    <g id="Untitled design (1) 1" clipPath="url(#clip0_0_1)">
                        <ellipse id="background" cx="565.953" cy="394.606" rx="415.331" ry="301" transform="rotate(24 565.953 394.606)" fill="url(#paint0_linear_0_1)" />
                        <g id="tail">
                            <g id="tail_2">
                                <mask id="mask0_0_1">
                                    <g id="86a1abbba8">
                                        <path id="Vector" d="M810.667 361.333H1163.82V534.667H810.667V361.333Z" fill="white" />
                                    </g>
                                </mask>
                                <g mask="url(#mask0_0_1)">
                                    <g id="Group">
                                        <path id="Vector_2" d="M811.99 361.609L852.604 369.63L892.266 392.792L954.589 434.771L1041.47 459.318L1092.46 464.984L1146.29 487.641L1163.77 520.677H1111.82L1059.88 525.87L987.875 534.365L952.229 531.536L922.953 496.599L915.865 496.135L901.24 465.927L892.266 470.651L862.036 442.323L853.745 441.745L841.745 417.307L811.99 361.609Z" fill="#D38B4F" />
                                    </g>
                                </g>
                            </g>
                            <g id="Clip path group">
                                <mask id="mask1_0_1">
                                    <g id="5c619e9c0c">
                                        <path id="Vector_3" d="M1030.67 469.333H1163.82V529.333H1030.67V469.333Z" fill="white" />
                                    </g>
                                </mask>
                                <g mask="url(#mask1_0_1)">
                                    <g id="Group_2">
                                        <path id="Vector_4" d="M1059.88 525.87L1111.82 520.677H1163.77L1146.29 487.641L1105.12 470.307V483.391L1098.13 494.25L1072.15 508.88L1041.47 503.688L1059.42 516.432L1031.15 529.266L1059.88 525.87Z" fill="#E9BD92" />
                                    </g>
                                </g>
                            </g>
                            <path id="Vector_5" d="M841.266 406.448L838.271 375.557L843.495 367.839L811.99 361.609L841.745 417.307L853.745 441.745L862.036 442.323L892.266 470.651V443.266L841.266 406.448Z" fill="#E9BD92" />
                            <path id="Vector_6" d="M857.318 391L908.63 419.036L933.24 420.401L892.266 392.792L852.604 369.63L811.99 361.609L831.714 398.521L857.318 391Z" fill="#1B1711" />
                            <g id="Clip path group_2">
                                <mask id="mask2_0_1">
                                    <g id="b6d3c15ece">
                                        <path id="Vector_7" d="M1041.33 458.667H1163.82V522.667H1041.33V458.667Z" fill="white" />
                                    </g>
                                </mask>
                                <g mask="url(#mask2_0_1)">
                                    <g id="Group_3">
                                        <path id="Vector_8" d="M1111.82 520.677H1163.77L1146.29 487.641L1108.88 471.891L1092.46 464.984L1041.47 459.318L1118.59 488.906L1129.93 497.078L1105.12 491.411L1107.89 507.146L1093.44 522.521L1111.82 520.677Z" fill="#1B1711" />
                                    </g>
                                </g>
                            </g>
                            <path id="Vector_9" d="M928.141 437.609L1027.3 464.984L1041.47 459.318L959.307 436.109L928.141 437.609Z" fill="#1B1711" />
                        </g>
                        <g id="main-body">
                            <path id="Vector_10" d="M624.776 536.115L671.286 543.313L712.833 607.536L756.276 633.964L764.776 674.568L739.281 684.005L711.891 678.339L698.667 684.005L694.771 697.224L720.385 704.766H785.542L805.38 695.328L829.938 667.005L789.323 609.422L792.198 584.745L780.828 543.313L718.5 434.771H480.516L306.766 385.047L323.969 464.984L344.922 504.318L350.188 624.526L340.839 674.568L317.271 698.156L331.49 704.766H368.859L383.078 676.453L385.505 650.016L400.25 573.401L424.917 522.521L624.776 536.115Z" fill="#98673D" />
                            <g id="group_3">
                                <mask id="mask3_0_1">
                                    <g id="747807bca0">
                                        <path id="Vector_11" d="M282.667 150.667H993.333V717.865H282.667V150.667Z" fill="white" />
                                    </g>
                                </mask>
                                <g mask="url(#mask3_0_1)">
                                    <g id="Group_4">
                                        <path id="Vector_12" d="M302.036 312.896L306.766 385.047L322.818 446.094L396.479 524.458L410.635 598.099L415.365 671.729L408.75 690.604L395.526 705.719L403.094 714.214H436.141L459.75 679.281V589.594L471.089 531.057L559.849 543.313H617.458L700.563 508.411L732.193 519.26L745.891 554.672L810.578 596.677L907.365 614.135L930.505 627.833L949.865 655.682V685.411L944.208 694.385L931.927 709.49L916.349 709.958L925.792 717.984H962.146L975.833 697.688L986.698 659.927L992.844 631.604L990 600.453L941.833 583.458L903.594 546.641L881.396 498.021L841.745 417.307L811.99 361.609L760.99 336.589L658.063 310.151L569.766 297.885L547.578 289.391L493.276 277.115L477.214 260.125L455.974 253.99L433.776 231.333L426.224 211.026L405.443 151.562L283.625 260.599L292.13 304.021L302.036 312.896Z" fill="#E9BD92" />
                                    </g>
                                </g>
                            </g>
                            <path id="Vector_13" d="M939.208 640.359L955.531 653.797V692.5L961.193 701.938L982.922 673.063V673.052L992.844 631.604L990 600.453L941.833 583.458L903.594 546.641L843.151 495.667L816.703 447.99L861.568 457.677L841.745 417.307L811.99 361.609L760.99 336.589L658.063 310.151L569.766 297.885L547.578 289.391L493.276 277.115L477.214 260.125L455.974 253.99L433.776 231.333L426.224 211.026L405.443 151.562L283.625 260.599L292.13 304.021L302.036 312.896L336.031 320.563L303.969 342.328L310.224 383.802L338.557 434.771L364.995 401.411L395.214 425.958L368.781 455.547L382.625 471.891L388.917 495.193L401.505 513.448L410.635 598.099L415.365 671.729L413 710.432L442.745 699.109L459.75 675.5L451.25 622.953L459.75 589.594L472.661 512.813L457.542 496.448L458.172 471.271L457.865 406.385L476.745 347.927L489.026 328.229V289.391L493.432 328.406L463.208 407.714L466.359 487.641L483.99 513.448L496.568 526.656L558.276 534.365L616.193 539.245L700.563 508.411L681.672 447.99L710.948 476.318L733.609 493.62L756.276 543.313L824.271 588.651L907.365 614.135L930.505 627.833L939.208 640.359Z" fill="#D38B4F" />
                            <path id="Vector_14" d="M455.974 253.99L433.776 231.333L455.974 293.162H482.094L489.026 289.391L498.469 333.443L489.656 416.125L517.349 431L565.198 459.318L628.167 470.651L681.672 447.99L710.948 476.318L731.417 436.109L765.406 416.125L861.568 457.677L841.745 417.307L811.99 361.609L760.99 336.589L658.062 310.151L569.766 297.885L547.578 289.391L493.276 277.115L477.214 260.125L455.974 253.99Z" fill="#1B1711" />
                            <path id="Vector_15" d="M440.547 301.281L368.781 377.5L364.995 401.411L359.958 371.307L440.547 301.281Z" fill="#1B1711" />
                            <path id="Vector_16" d="M756.276 543.312L824.271 588.651L872.615 603.484L826.156 584.88L756.276 543.312Z" fill="#1B1711" />
                            <path id="Vector_17" d="M401.505 513.448L388.917 495.193L401.505 504.318V513.448Z" fill="#1B1711" />
                            <path id="Vector_18" d="M350.188 109.583V313.651L376.208 305.844L415.984 263.099L424.917 231.5L420.823 211.62V166.083L405.219 141.292L374.719 105.87L359.844 108.464L350.188 109.583Z" fill="#D38B4F" />
                            <g id="Clip path group_4">
                                <mask id="mask4_0_1">
                                    <g id="446788f40b">
                                        <path id="Vector_19" d="M374.667 50.1927H440V166.667H374.667V50.1927Z" fill="white" />
                                    </g>
                                </mask>
                                <g mask="url(#mask4_0_1)">
                                    <g id="Group_5">
                                        <path id="Vector_20" d="M433.094 50.3334L439.052 62.7448V102.516L436.068 111.807L433.094 141.292L430.12 148.979H424.917L420.823 166.083L405.219 141.292L374.719 105.87L384.026 94.3438L403.349 69.4375L423.052 51.9688L433.094 50.3334Z" fill="#99583A" />
                                    </g>
                                </g>
                            </g>
                            <path id="Vector_21" d="M350.188 248.604L359.474 251.203L370.995 260.859H378.813L385.13 248.604L387.547 238.562V215.885L379.557 209.76L376.208 200.646L374.719 209.76L358.354 173.885L361.703 192.474L359.109 193.964L364.313 208.083L350.188 196.396V248.604Z" fill="#1B1711" />
                            <path id="Vector_22" d="M350.188 141.292L353.161 160.141L361.703 167.937L376.208 200.646L374.719 209.76L358.354 173.885L361.703 192.474L359.109 193.964L364.313 208.083L350.188 196.396V141.292Z" fill="#9E6739" />
                            <path id="Vector_23" d="M376.208 208.271L379.922 227.781V243.391L374.719 253.057L366.385 256.995L376.208 253.802L378.812 250.458L383.078 242.089L381.974 222.203L376.208 208.271Z" fill="#161411" />
                            <path id="Vector_24" d="M350.188 211.802L362.271 213.474L370.448 224.62L368.021 235.776L357.245 242.281L350.188 243.766V211.802Z" fill="#0C0C0D" />
                            <path id="Vector_25" d="M350.188 263.099H358.724L368.859 259.078L359.474 251.203L350.188 248.604V263.099Z" fill="#907861" />
                            <path id="Vector_26" d="M356.688 255.844H350.188V248.604L359.474 251.203L360.698 252.229L356.688 255.844Z" fill="#0C0C0D" />
                            <path id="Vector_27" d="M376.208 200.646L361.703 167.937L356.87 152.516L363.193 162.74L364.312 167.568L366.542 170.911L366.385 162.177V157.167L367.844 153.818L363.193 147.87L378.625 153.073L389.042 160.323L392.016 166.083L395.922 175.521V181.141L387.547 190.432L392.375 181.875L388.479 181.323L392.562 179.089L388.292 174.26L384.208 178.526L377.703 188.203L376.208 200.646Z" fill="#1B1711" />
                            <path id="Vector_28" d="M405.219 141.292L374.719 105.87L359.844 108.464L350.188 109.583V141.292L360.313 129.568H355.432L360.313 123.151L353.161 125.661L350.922 115.526L353.708 110.885L360.313 114.781L369.016 109.406L377.703 116.089L398.151 139.312L408.74 157.167L414.875 170.542L414.13 186.896L412.089 195.63L414.875 191.542L417.484 200.646L420.823 211.62V166.083L405.219 141.292Z" fill="#9E6739" />
                            <path id="Vector_29" d="M350.188 294.323L359.526 296.177L376.396 288L389.974 265.698L386.76 253.057L398.333 256.995L404.057 248.604L420.078 228.948L419.25 215.286L412.698 219.885L404.75 219.604L400.698 217.375L397.214 212.5L400.281 221.005L408.646 224.349L398.75 232.635L394.427 235.63L387.547 238.563L385.13 248.604L378.813 260.859L371.839 267.974L358.031 266.724L350.188 268.109V294.323Z" fill="#C4A17F" />
                            <path id="Vector_30" d="M368.859 259.078L370.995 260.859H378.813L371.839 267.974L358.031 266.724L350.188 268.109V263.099H358.724L368.859 259.078Z" fill="#9E6739" />
                            <path id="Vector_31" d="M404.542 227.781L392.76 221.005L388.854 208.271V196.396L395.922 181.141L387.547 190.432L392.375 181.875L388.479 181.323L392.562 179.089L388.292 174.26L384.208 178.526L377.703 188.203L376.208 200.646L379.557 209.76L387.547 215.885V238.562L394.427 235.63L404.542 227.781Z" fill="#9E6739" />
                            <path id="Vector_32" d="M371.703 166.083L376.396 160.927H381.328L385.505 165.526L390.375 171.927L385.505 168.594L382.292 172.911L378.115 173.885L373.651 172.354L371.703 167.401H369.609L371.703 166.083Z" fill="#0C0C0D" />
                            <path id="Vector_33" d="M350.187 109.583V313.651L324.156 305.844L284.37 263.099L275.448 231.5L279.542 211.62V166.083L295.156 141.292L325.646 105.87L340.505 108.464L350.187 109.583Z" fill="#D38B4F" />
                            <g id="Clip path group_5">
                                <mask id="mask5_0_1">
                                    <g id="f4f56132a3">
                                        <path id="Vector_34" d="M261.26 50.1927H326.667V166.667H261.26V50.1927Z" fill="white" />
                                    </g>
                                </mask>
                                <g mask="url(#mask5_0_1)">
                                    <g id="Group_6">
                                        <path id="Vector_35" d="M267.271 50.3334L261.323 62.7448V102.516L264.297 111.807L267.271 141.292L270.245 148.979H275.448L279.542 166.083L295.156 141.292L325.646 105.87L316.349 94.3438L297 69.4375L277.302 51.9688L267.271 50.3334Z" fill="#99583A" />
                                    </g>
                                </g>
                            </g>
                            <path id="Vector_36" d="M350.187 248.604L340.891 251.203L329.354 260.859H321.542L315.229 248.604L312.807 238.562V215.885L320.807 209.76L324.156 200.646L325.646 209.76L342 173.885L338.651 192.474L341.266 193.964L336.052 208.083L350.187 196.396V248.604Z" fill="#1B1711" />
                            <path id="Vector_37" d="M350.188 141.292L347.214 160.141L338.651 167.937L324.156 200.646L325.646 209.76L342 173.885L338.651 192.474L341.266 193.964L336.052 208.083L350.188 196.396V141.292Z" fill="#9E6739" />
                            <path id="Vector_38" d="M324.156 208.271L320.432 227.781V243.391L325.646 253.057L333.969 256.995L324.156 253.802L321.542 250.458L317.271 242.089L318.391 222.203L324.156 208.271Z" fill="#161411" />
                            <path id="Vector_39" d="M350.187 211.802L338.104 213.474L329.917 224.62L332.333 235.776L343.109 242.281L350.187 243.766V211.802Z" fill="#0C0C0D" />
                            <path id="Vector_40" d="M350.187 263.099H341.625L331.49 259.078L340.891 251.203L350.187 248.604V263.099Z" fill="#907861" />
                            <path id="Vector_41" d="M343.677 255.844H350.187V248.604L340.891 251.203L339.667 252.229L343.677 255.844Z" fill="#0C0C0D" />
                            <path id="Vector_42" d="M324.156 200.646L338.651 167.937L343.484 152.516L337.161 162.74L336.052 167.568L333.813 170.911L333.969 162.177V157.167L332.516 153.818L337.161 147.87L321.729 153.073L311.323 160.323L308.349 166.083L304.453 175.521V181.141L312.807 190.432L307.979 181.875L311.885 181.323L307.792 179.089L312.073 174.26L316.167 178.526L322.672 188.203L324.156 200.646Z" fill="#1B1711" />
                            <path id="Vector_43" d="M295.156 141.292L325.646 105.87L340.505 108.464L350.187 109.583V141.292L340.052 129.568H344.922L340.052 123.151L347.214 125.661L349.432 115.526L346.641 110.885L340.052 114.781L331.349 109.406L322.672 116.089L302.214 139.312L291.625 157.167L285.49 170.542L286.224 186.896L288.266 195.63L285.49 191.542L282.885 200.646L279.542 211.62V166.083L295.156 141.292Z" fill="#9E6739" />
                            <path id="Vector_44" d="M350.187 294.323L340.839 296.177L323.969 288L310.401 265.698L313.604 253.057L302.026 256.995L296.318 248.604L280.276 228.948L281.115 215.286L287.667 219.885L295.615 219.604L299.656 217.375L303.135 212.5L300.078 221.005L291.708 224.349L301.615 232.635L305.937 235.63L312.807 238.563L315.229 248.604L321.542 260.859L328.516 267.974L342.323 266.724L350.187 268.109V294.323Z" fill="#C4A17F" />
                            <path id="Vector_45" d="M331.49 259.078L329.354 260.859H321.542L328.516 267.974L342.323 266.724L350.187 268.109V263.099H341.625L331.49 259.078Z" fill="#9E6739" />
                            <path id="Vector_46" d="M295.823 227.781L307.604 221.005L311.51 208.271V196.396L304.453 181.141L312.807 190.432L307.979 181.875L311.885 181.323L307.792 179.089L312.073 174.26L316.167 178.526L322.672 188.203L324.156 200.646L320.807 209.76L312.807 215.885V238.562L305.937 235.63L295.823 227.781Z" fill="#9E6739" />
                            <path id="Vector_47" d="M328.661 166.083L323.969 160.927H319.047L314.859 165.526L309.99 171.927L314.859 168.594L318.062 172.911L322.25 173.885L326.703 172.354L328.661 167.401H330.755L328.661 166.083Z" fill="#0C0C0D" />
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="565.953" y1="93.6061" x2="565.953" y2="695.606" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8B3232" />
                            <stop offset="1" stopColor="#8B3232" stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_0_1">
                            <rect width="1366" height="768" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className='Form-submit'>{Object.keys(errors).length === 0 && success ? (
                <p>swdsd</p>
                
            ): null}
            </div>
        </section>
    )
    // {Object.keys(errors).length === 0 && success ?(
    //     <Router>
    //     <Routes>
    //         <Route
    //             path='/success'
    //             element={<Success />} 
    //         />
    //     </Routes>
    //     </Router>
    // ):null}
}