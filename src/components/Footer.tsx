export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} ShootWithCasso — All rights reserved.
          </p>
        </div>
        <div className="md:text-right text-sm text-gray-600">
          <a href="https://instagram.com" className="hover:underline">Instagram</a>
          <span className="mx-3">•</span>
          <a href="https://tiktok.com" className="hover:underline">TikTok</a>
          <span className="mx-3">•</span>
          <a href="https://youtube.com" className="hover:underline">YouTube</a>
          <span className="mx-3">•</span>
          <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}


