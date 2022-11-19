import GuestBook from '../models/guestbookModel.js';
import generateToken from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler';

//Auth user & get token
const getReview = asyncHandler(async (req, res) => {
  const guestBook = await GuestBook.find().sort({ createdAt: -1 });
  if (guestBook) {
    res.json(guestBook);
  } else {
    res.status(404);
    throw new Error('Tours not found');
  }
});

const updateGuestBook = asyncHandler(async (req, res) => {
  //console.log(req.body._id);
  const guestBook = await GuestBook.findByIdAndUpdate(req.body._id, {
    isVisible: req.body.isVisible,
  });
  if (guestBook) {
    res.json(guestBook);
  } else {
    res.status(404);
    throw new Error('GusestBook not found');
  }
});
//Add new Review
const addReview = asyncHandler(async (req, res) => {
  //console.log(req.body);
  const { name, email, city, message } = req.body;

  const guestBook = await GuestBook.create({
    name,
    email,
    city,
    message,
  });

  if (guestBook) {
    res.status(201).json({
      _id: guestBook._id,
      name: guestBook.name,
      email: guestBook.email,
      city: guestBook.city,
      message: guestBook.message,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

export { addReview, getReview, updateGuestBook };
