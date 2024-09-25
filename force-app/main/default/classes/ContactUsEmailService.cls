public with sharing class ContactUsEmailService {
    @AuraEnabled
    public static void sendContactUsEmail(String name, String phone, String email, String message) {
        // Create the email object
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        
        // Set recipient - use org email as recipient
        String orgEmail = email; // Replace with your email
        mail.setToAddresses(new String[] {orgEmail});
        
        // Set email subject and body
        mail.setSubject('New Contact Us Form Submission');
        String body = 'You have received a new message from your website contact form.\n\n' +
                      'Name: ' + name + '\n' +
                      'Phone: ' + phone + '\n' +
                      'Email: ' + email + '\n' +
                      'Message: ' + message;
        mail.setPlainTextBody(body);
        
        // Optionally set the "reply to" address as the user's email
        mail.setReplyTo(email);
        
        // Send the email
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}