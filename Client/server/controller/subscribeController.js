import Subscribe from '../model/subcribeModal.js'
import axios from 'axios'

export const addNewSubscribe = async (req, res) => {
  try {
    // Create a new Subscribe instance with the request body data
    const newSubscribe = new Subscribe(req.body);
    // Save the new Subscribe to the database
    const savedSubscribe = await newSubscribe.save();
    // Assuming req.body contains the email address
    const email = req.body.email;
    // Send a test email using the TestMail.app API key
    // await sendTestEmail(email);
    // Send the saved Subscribe as a JSON response
    res.json(savedSubscribe);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
};
const sendTestEmail = async (email) => {
  try {
    // Replace 'YOUR_TESTMAIL_APP_API_KEY' with your actual TestMail.app API key
    const apiKey = 'c853a75e-9b3a-460b-bf4e-8f3f24207be7';
    // TestMail.app API endpoint for sending test emails
    const apiUrl = 'https://api.testmail.app/api/json/send';
    // Construct the request payload
    const payload = {
      key: apiKey,
      to: email,
      subject: 'Test Email',
      text: 'This is a test email sent using TestMail.app',
    };
    // Make a POST request to the TestMail.app API
    const response = await axios.post(apiUrl, payload);
    // Log the response from the API (you may want to handle this differently in a production environment)
    console.log('TestMail.app API Response:', response.data);
  } catch (error) {
    // Handle errors related to sending the test email
    console.error('Error sending test email:', error.message);
    throw error;
  }
};