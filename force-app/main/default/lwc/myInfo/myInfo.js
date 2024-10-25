import { LightningElement } from 'lwc';
import myProfilePhoto from "@salesforce/resourceUrl/myPhoto";
import resumeFile from "@salesforce/resourceUrl/resumeFile";

export default class NameImageComponent extends LightningElement {
    imageUrl = myProfilePhoto; // Add the correct path to your image file
    resumeUrl = resumeFile;

    downloadResume(){
        // The Salesforce document download URL
        // const fileUrl = 'https://ddl00000cmdgnuaf-dev-ed--c.develop.vf.force.com/resource/1729336774000/resumeFile?';

        // // Programmatically create an anchor element to trigger the file download
        // const link = document.createElement('a');
        // link.href = fileUrl;
        // link.target = '_blank';  // Opens the link in a new tab
        // link.download = 'resume.pdf'; // Optional: Specify a file name
        // link.click();
        const link = document.createElement('a');
        link.href = this.resumeUrl; // URL to the static resource
        link.target = '_blank';  // Opens the link in a new tab
     // Optional: Specify a file name
        link.click();
    }
}
