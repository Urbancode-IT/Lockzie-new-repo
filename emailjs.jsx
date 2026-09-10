import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                {
                    publicKey: "YOUR_PUBLIC_KEY",
                }
            );

            alert("Your enquiry has been sent successfully!");
            form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">

            {/* Full Name + Phone Number */}
            <div className="form-row">

                <div className="form-group">
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="tel"
                        name="phone_number"
                        placeholder="Phone Number"
                        required
                    />
                </div>

            </div>

            {/* Email Address */}
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                />
            </div>

            {/* Service Interested In */}
            <div className="form-group">
                <select
                    name="service_interested"
                    defaultValue=""
                    required
                >
                    <option value="" disabled>
                        Service Interested In
                    </option>

                    <option value="Hair Extensions">
                        Hair Extensions
                    </option>

                    <option value="Hair Topper">
                        Hair Topper
                    </option>

                    <option value="Wigs">
                        Wigs
                    </option>

                    <option value="Hair Replacement">
                        Hair Replacement
                    </option>

                    <option value="Other">
                        Other
                    </option>
                </select>
            </div>

            {/* Message */}
            <div className="form-group message-group">
                <textarea
                    name="message"
                    placeholder="Tell us about yourself"
                    rows="5"
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="submit-btn"
                disabled={isSending}
            >
                {isSending ? "Sending..." : "Submit Enquiry"}
            </button>

        </form>
    );
};

export default ContactForm;