import { LightningElement } from 'lwc';
import myProfilePhoto from "@salesforce/resourceUrl/myPhoto";

export default class NameImageComponent extends LightningElement {
    imageUrl = myProfilePhoto; // Add the correct path to your image file

    downloadResume(){
        // The Salesforce document download URL
        const fileUrl = 'https://ddl00000cmdgnuaf-dev-ed.develop.my.salesforce.com/servlet/servlet.FileDownload?file=015dL000002Sj7X';

        // Programmatically create an anchor element to trigger the file download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.target = '_blank';  // Opens the link in a new tab
        link.download = 'resume.pdf'; // Optional: Specify a file name
        link.click();
    }
}
