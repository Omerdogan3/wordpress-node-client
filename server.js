const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const crawler = require('./crawler');
const wp_publisher = require('./wpPublisher');

// app.get('/', (req, res) => {
//   crawler().then((result)=>{
//     res.send(result).then(
//         wp_publisher(result)
//     );
//   });
// });


const result = {"title":"JOY – Film inceleme","data":"\n\nFilm adı : Joy\n\nVizyon Tarihi: 8 Ocak 2016\n\nYapımı: 2016-ABD\n\nTür: Dram\n\nYönetmen ve Senaryo: David O. Russell\n\nOyuncular: Jennifer Lawrence, Bradley Cooper, Edgar Ramirez, Robert De Niro, Virginia Madsen, Isabelle Rossellini, Diane Ladd\n\nJoy, küçüklüğünden beri hayal gücü ve tasarım yeteneği güçlü olan bir kadındır. Annesi ve babası ayrılınca hayallerinden vazgeçip, hayatını ailesine adayan bir kadına dönüşmeye başlamıştır. Annesi kendisini pembe dizilerle bir odaya kapatmış, babası ise başka bir kadına aşık olup onunla kalmaya başlamıştır. Joy ileriki zamanlarda aşık olmuş ve evlenmiştir. Bu evlilik sonucu 2 çocuğu olmuştur lakin evliliği uzun sürememiş ve bitmek durumunda kalmıştır.\n\nJoy’un boşandığı kocası kendine kalacak bir yer bulamadığından dolayı Joy’un bodrumunda yaşamaya başlamıştır. Bir sürü sonra bu kalabalık yuvaya yeni sevgilisinden ayrılan babası eklenince Joy kendini tümüyle bakıma muhtaç olan ailesine adamış ve hayallerinden uzaklaşmayı tercih etmiştir.\n\nJoy’un bu zor durumlarda akıl danışacağı tek kişi anneannesi olan Mimi’dir. Mimi Joy’a her zaman hayallerini takip etmesini ve bu bakıma muhtaç olan evi ancak hayallerini takip ettiği zaman kaldırabileceğini söylemiştir. Joy ne kadar hayallerine takip etmeye çalışsa da hep karşına engeller çıkmış ve Joy da bu engellerde genellikle pes etme noktasına gelmiştir.\n\nGel zaman git zaman Joy’un hayatı bu şekilde rutin giderken, Joy’un eline batan cam kırıkları sayesinde aklına bir tasarım gelmiştir. Pastel boya ve bebek saçlarıyla tasarımını geliştirmiş ve ev kadınlarına yönelik kullanışlı bir paspas üretmiştir. Bu paspas, kendi kendini sıkabilen ve paspası yumuşacık olacak şekilde Joy tarafından tasarlanmıştır. Joy ilk yatırım ve satışlar için evini ipotek ettirecek kadar ilerlemiştir. Kaldıramayacağı kadar borca batmış, ailesini kaybedecek duruma gelmiştir. Fakat Mimi daima onun arkasında durmuş ve Joy’un başarabileceğine daima inanmıştır.\n\nJoy, eski kocası sayesinde bir televizyon şirketi ile tanışmıştır. Bu televizyon şirketi ilk zamanlar Joy’un icat ettiği ürünü gülünç bulmuş ve reddetmiştir. Lakin Joy vazgeçmemiş ve televizyonda icadını kendi sunmak istemiştir. Şirketteki insanlar Joy’a bir şans vermiş ve sunması için Joy’u televizyon karşına çıkarmışlardır. Joy sunduğu paspas icadı ile satış rekorları kırmış ve hayalini bir nebze olsun gerçekleştirmiştir.\n\nJoy bir şekilde battığı borç bataklığından çıkarken karşına tekrardan aşamayacağını düşündüğü iki engel çıkmıştır. Birincisi, ona daima destek çıkan anneannesi vefat etmiş, ikincisi, paspas ürünlerini üreten şirket tarafından dolandırıldığını anlamıştır. Joy bu engelleri anneannesinin varlığını hayal ederek ve düştüğü yerden ayağa kalkmaya inanarak atlatmayı başarmıştır. Joy geçen zaman üzerine zengin olmaya başlamış ve bataklıktan tamamen çıkmayı başarmıştır.\n\nBu filmde, düşme halinin insan hayatına nasıl yansıdığı anlatılmak istenmiştir. Tökezleyebilir, düşebilirsiniz… Bunların hepsi hayatın akışı içerisinde karşımıza çıkabilecek sorunlardır. Düşmek güzeldir çünkü düştüğünüz zaman ayağa kalkarken daha deneyimle ve daha azimle kalkarsınız. Düşebilirsiniz çünkü düşen insan elindekilerinin değerini anlayabilir. Elindekinin değerini anlayan azimli bir insan tekrar düşmemek ve kendisi için dik durmaya çabalar. O yüzden düşebilirsiniz. Lakin sahip olduklarınızı düşünerek asla pes etmeyin.\n\nDibe vurduğunuzu düşünüyorsanız, daha önce hiç bu kadar derine batmadıysanız hemen açın ve bu filmi izleyin. Bu film size ayağı kalkmaya öğretecektir…\n\nEş yazar: İrem ELMAS\n\n","imgDir":"./images/anu.jpg"};

app.get('/', (req, res) => {
  wp_publisher(result)
});






app.listen(port, () => console.log(`Listening on port ${port}`));
