export default function MessagePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Message</h1>
      <p>Bu sayfa sadece admin yetkisine sahip kullanıcılar içindir.</p>
      <p className="text-gray-700 mb-4">
        Bu alan mesajlaşma içeriğine ayrılmıştır. Burada kullanıcılar arası
        iletişim, bildirimler ve diğer mesajlaşma özellikleri yer alabilir.
      </p>
    </>
  );
}
