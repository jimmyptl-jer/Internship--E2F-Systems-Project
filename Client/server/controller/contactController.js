// Import the "Contact" model from "../model/contactModel.js"
import Contact from "../model/contactModel.js";

// Function to retrieve a list of contacts
export const getContact = async (req, res) => {
  try {
    // Use the 'Contact' model to find all contacts in the database
    const contacts = await Contact.find({});
    
    // Respond with a 200 OK status and the list of contacts as JSON
    return res.status(200).json(contacts);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
}

// Function to add a new contact
export const addNewContact = async (req, res) => {
  try {
    // Create a new "Contact" instance with the request body data
    const newContact = new Contact(req.body);
    
    // Save the new contact to the database
    const savedContact = await newContact.save();
    
    // Respond with the saved contact as JSON
    res.json(savedContact);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
};

// Function to retrieve a contact by its ID
export const getContactWithID = async (req, res) => {
  try {
    // Extract the 'contactId' parameter from the request params
    const { contactId } = req.params;
    
    // Use the 'contactId' to find a contact by its ID
    const contact = await Contact.findById(contactId);
    
    // Check if a contact was found
    if (!contact) {
      // If no contact is found, return a 404 Not Found response
      return res.status(404).send({ message: 'Contact not found' });
    }
    
    // If a contact is found, return it in the response
    return res.status(200).send({ contact });
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
};

// Function to update a contact by its ID
export const updateContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    
    // Use 'await' to get the updated contact
    const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    
    // Check if the contact was found and updated
    if (!updatedContact) {
      return res.status(404).json({ message: 'No Contact Found' });
    }

    // Respond with a 200 OK status and a success message along with the updated contact
    return res.status(200).json({ message: "Contact Updated successfully", contact: updatedContact });

  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
};

// Function to remove a contact by its ID
export const removeContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    
    // Use 'await' to get the deleted contact
    const deletedContact = await Contact.findByIdAndRemove(contactId);
    
    // Check if the contact was found and removed
    if (!deletedContact) {
      return res.status(404).json({ message: 'No Contact Found' });
    }

    // Respond with a 200 OK status and a success message
    return res.status(200).json({ message: "Contact deleted successfully" });

  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
}
