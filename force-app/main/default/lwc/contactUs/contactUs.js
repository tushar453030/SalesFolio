import { LightningElement } from 'lwc';
import sendContactUsEmail from '@salesforce/apex/ContactUsEmailService.sendContactUsEmail';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactUs extends LightningElement {
    name;
    phone;
    email;
    message;
    isEmailSent = false;

    handleMessageChange(event){
        this.message= event.detail.value;
    }

    handlePhoneChange(event){
        this.phone= event.detail.value;
    }
    handleEmailChange(event){
        this.email= event.detail.value;
    }
    handleNameChange(event){
        this.name= event.detail.value;
    }

    handleSubmit() {
        sendContactUsEmail({ name: this.name,phone: this.phone, email: this.email, message: this.message })
            .then(() => {
                // Show success toast notification
                this.isEmailSent =true;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Email sent successfully!',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                // Show error toast notification
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error sending email',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}