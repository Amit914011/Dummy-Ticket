const { sendMail } = require('../common/sendmail');
const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  const { email, phone, message , subject , name } = req.body;

  if (!email || !phone || !message || !subject  || !name) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const contact = new Contact({ ...req.body  });
    await contact.save();
    res.status(201).json({ message: 'Your request has been recorded.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};



exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({success : true , error : false , data : contacts});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateContactStatus = async (req, res) => {
  const { id } = req.params;

  console.log("reaching ");
  try {
    const contact = await Contact.findByIdAndUpdate(id, { status: 'resolved' }, { new: true });
   console.log(contact , "contact");
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    await contact.save()

    // Send email notification
    await sendMail(contact.email, 'Issue Resolved', 'Your reported issue has been resolved.');

    res.status(200).json({ message: 'Contact status updated to resolved.', data : [] });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};







