import React from "react";
import axios from "axios";

export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            to: "hcho163@aucklanduni.ac.nz",
            from: "",
            subject: "",
            text: "",
            sending: false,
            sent: false,
            sentStatus: ""
        }
    }

    componentWillMount() {
        this.props.setPage("contact");
    }

    // allows input change and set user input as the state
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = event => {
        // prevents page refreshing
        event.preventDefault();
        this.sendEmail();
    }

    sendEmail() {
        this.setState({ sending: true });
        const { to, from, subject, text } = this.state;
        const email = { to, from, subject, text };
        axios.post("/api/email", email)
            .then(res => {
                this.setState({ sentStatus: res.data });
                this.setState({ sending: false });
                this.setState({ sent: true });
            }).catch(err => console.log(err));
    }

    form() {
        const { from, subject, text } = this.state;
        
        if(this.state.sent) {
            return(
                <div className="contact__email-form">
                    <h3 className="heading-primary">
                        <span className="highlight-primary">Contact me</span>
                    </h3>
                    <p className="paragraph-secondary u-margin-top-small">
                        Email me at <span className="highlight-primary">hcho163@aucklanduni.ac.nz</span>
                    </p>
                    <p className="paragraph-secondary">
                        Or you could send me a message with the form below!
                    </p>

                    <p className="heading-secondary u-margin-top-small">{this.state.sentStatus}</p>
                </div>
            )
        }
        if(this.state.sending) {
            return(
                <div className="loading u-margin-top-medium" >
                    <p className="heading-secondary">Sending...</p>
                    <div className="loading__icon"></div>
                </div>  
            )
        } else {
            return(
                <div className="contact__email-form">
                    <h3 className="heading-primary">
                        <span className="highlight-primary">Contact me</span>
                    </h3>
                    <p className="paragraph-secondary u-margin-top-small">
                        Email me at <span className="highlight-primary">hcho163@aucklanduni.ac.nz</span>
                    </p>
                    <p className="paragraph-secondary">
                        Or you could send me a message with the form below!
                    </p>

                    <form onSubmit={this.handleSubmit} className="email-form u-margin-top-medium" autoComplete="off">
                        <input
                            className="email-form__input"
                            type="email"
                            name="from"
                            value={from}
                            onChange={this.handleChange}
                            placeholder="Your Email"
                            required
                        />
                        <input
                            className="email-form__input"
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={this.handleChange}
                            placeholder="Subject"
                            required
                        />
                        <textarea
                            className="email-form__input email-form__input--text-box"
                            type="text"
                            name="text"
                            value={text}
                            onChange={this.handleChange}
                            placeholder="Message"
                            required
                        />
                        <button className="btn btn-secondary u-margin-top-small" type="submit">Send a message</button>
                    </form>
                </div>
            )
        }
    }
    
    render() {
        

        return (
            <div className="contact">
                {this.form()}
            </div>
        )
    }
}