# AGROSCOPE web sitesi

`agroscope.com.tr` için hazırlanmış yedi sayfalı statik site. GitHub Pages üzerinde çalışır; sunucu veya veritabanı gerektirmez.

## Sayfalar

- Ana Sayfa — `index.html`
- Tarım Dronları — `tarim-dronlari.html`
- İHA Sistemleri — `iha-sistemleri.html`
- BLDC Motor — `bldc-motor.html`
- TerraSat — `terrasat.html`
- Hakkımızda — `hakkimizda.html`
- İletişim — `iletisim.html`

`assets/` içindeki drone, motor ve arazi görselleri AGROSCOPE için yapay zekâyla üretilmiş **temsili** görsellerdir. Gerçek AGROSCOPE ürün fotoğrafı veya saha sonucu değildir. Logo, proje sahibinin sağladığı görseldir.

## Yerel önizleme

Bu klasörde `python -m http.server 8766` komutunu çalıştırın; ardından `http://localhost:8766/` adresini açın.

## GitHub Pages

1. Bu klasörün içeriğini GitHub'da herkese açık bir deponun köküne yükleyin.
2. Deponun **Settings → Pages** bölümünde **Deploy from a branch → main → /(root)** seçin.
3. **Custom domain** alanına `agroscope.com.tr` yazın. Depodaki `CNAME` dosyası da bu alan adını içerir.
4. İHS DNS yönetiminde ana alan adı (`@`) için aşağıdaki A kayıtlarını oluşturun:

   | Tür | Ad | Değer |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

5. GitHub'ın **Settings → Pages → Verify domain** adımında gösterdiği hesaba özel TXT kaydını İHS DNS'e ekleyin. Doğrulama tamamlanınca **Enforce HTTPS** seçeneğini etkinleştirin.

DNS yayılımı biraz sürebilir. GitHub hesabı ve İHS DNS paneli erişimi olmadan alan adı yayına bağlanamaz.

Resmî yönergeler: [GitHub Pages sitesi oluşturma](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [özel alan adı](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [alan adı doğrulama](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## Güncelleme

Metinler `index.html` ve diğer `.html` dosyalarında; görünüm `styles.css` içindedir. İletişim bilgilerini değiştirirken görünen metin, `mailto:` ve `tel:` bağlantılarını birlikte güncelleyin.
