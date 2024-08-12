const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('YOUR_MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  userId: String,
  theme: String
});

const User = mongoose.model('User', UserSchema);

app.get('/api/user-theme', async (req, res) => {
  // 実際の実装では、認証されたユーザーIDを使用します
  const userId = 'dummy-user-id';
  const user = await User.findOne({ userId });
  res.json({ theme: user ? user.theme : 'default' });
});

app.post('/api/user-theme', async (req, res) => {
  const { theme } = req.body;
  // 実際の実装では、認証されたユーザーIDを使用します
  const userId = 'dummy-user-id';
  await User.findOneAndUpdate({ userId }, { theme }, { upsert: true });
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});