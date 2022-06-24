import React from "react";

function Contact() {

    const submitForm = () => {};
    return(
        <section>
            <h1 className="text-4xl font-bold flex items center">
                <span>Contact Me</span>
            </h1>
            <form onSubmit={submitForm}>
                <button className="my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200">
                    submit
                </button>
            </form>
        </section>
    );
}

export default Contact;