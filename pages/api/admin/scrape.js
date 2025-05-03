
export default async function handler(req, res) {
  const { token } = req.query;
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return res.status(200).json({ message: 'TikTrend scraper completed (sample).' });
}
