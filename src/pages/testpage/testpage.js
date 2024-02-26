import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import virtusLogo from "./virtus-logo_cmyk.svg";
import cat1 from "./cat1.png";
const Testpage = () => {
  const data = {
    icon: virtusLogo,
    title: "Web Tasarım ve Geliştirme",
    content:
      "Modern web tasarımları, kullanıcı deneyimini en üst düzeye çıkarmak için uyumlu (responsive), özgün, yenilikçi ve güvenli bir şekilde tasarlanmaktadır. Uyumlu tasarımlar, farklı cihazlarda ve ekran boyutlarında sorunsuz bir görüntüleme sağlarken, özgün ve yenilikçi tasarımlar markanın benzersiz kimliğini yaratır ve kullanıcıların dikkatini çeker. Güvenlik, web sitesinin ziyaretçilerine güven verirken, kullanıcı dostu arayüzler ise kullanıcıların kolaylıkla gezinmesini ve istedikleri bilgilere erişmesini sağlar. Bu özellikler bir araya geldiğinde, etkileyici bir web sitesi deneyimi sunulur ve kullanıcıların memnuniyeti ve sitenin başarısı için temel bir unsur oluşturur.",
    id: "content-block-id",
    direction: "right",
  };
  const data2 = {
    icon: "/graphs.svg",
    title: "Veri Bilimi ve Yapay Zeka",
    content:
      "Veri bilimi ve yapay zeka, günümüz iş dünyasında giderek daha fazla önem kazanmaktadır. Karar destek sistemleri, işletmelerin stratejik kararlar almasına yardımcı olurken, RPA çözümleri tekrarlayıcı iş süreçlerini otomatikleştirmekte ve verimliliği artırmaktadır. Gelir-gider analitiği, işletmelerin finansal performanslarını izlemelerine ve optimize etmelerine olanak tanırken, müşteri ve ürün analitiği ise müşteri davranışlarını ve ürün performansını anlamak için kritik öneme sahiptir. Bu alanlar, şirketlerin rekabet avantajı elde etmelerine ve sürdürülebilir büyüme sağlamalarına yardımcı olmaktadır.",
    id: "content-block-id",
    direction: "left",
  };
  const data3 = {
    icon: "/graphs.svg",
    title: "Mobil Uygulama Geliştirme",
    content:
      "Modern mobil uygulamalar, kullanıcıların ihtiyaçlarına cevap vermek ve onlara mükemmel bir deneyim sunmak için uyumlu, güvenli, kullanıcı dostu, yenilikçi ve özgün bir şekilde tasarlanmaktadır. Uyumlu tasarımlar, farklı mobil cihazlarda ve ekran boyutlarında sorunsuz bir kullanıcı deneyimi sağlarken, güvenlik önlemleri uygulamanın kullanıcı verilerini korur ve güvenilir bir ortam sunar. Kullanıcı dostu arayüzler, kullanıcıların uygulamayı kolayca anlamasını ve etkileşimde bulunmasını sağlar, yenilikçi özellikler ise kullanıcıların ilgisini çeker ve uygulamanın rekabet gücünü artırır. Özgün tasarımlar ise uygulamanın benzersiz bir kimlik kazanmasını ve kullanıcıların akılda kalmasını sağlar. Tüm bu özelliklerin bir araya gelmesiyle, başarılı bir mobil uygulama ortaya çıkar ve kullanıcıların memnuniyetini sağlayarak uygulamanın başarısını artırır.",
    id: "content-block-id",
    direction: "right",
  };
  const data4 = {
    icon: "/graphs.svg",
    title: "Dijital Dönüşüm ve Strateji",
    content:
      "Kurumsal dijital dönüşüm, müşteri memnuniyetini artırmak, veri madenciliği ve analitiği yoluyla değerli içgörüler elde etmek, veriyi görselleştirerek anlamlandırmak, performansı raporlamak ve hızlı, doğru kararlar almak için önemli bir araçtır. Bu süreçte, müşteri memnuniyeti odaklı stratejiler ve süreçlerin benimsenmesi, müşteri deneyimini geliştirirken sadakati ve geliri artırabilir. Veri madenciliği ve analitiği, işletmelerin büyük veri setlerinden değerli bilgiler çıkarmasına yardımcı olurken, verinin görselleştirilmesi, karmaşık veriyi anlamak ve karar alma süreçlerini hızlandırmak için önemlidir. Performans raporlaması ise işletmelerin stratejik hedeflerine ne kadar yaklaşıldığını izlemelerine ve gerekirse düzeltici önlemler almalarına olanak tanırken, hızlı ve doğru raporlama süreçleri işletmelerin rekabet avantajını korumalarına yardımcı olur. Bu şekilde, dijital dönüşüm süreci, işletmelerin daha müşteri odaklı, veriye dayalı ve rekabetçi bir yapıya ulaşmalarına olanak sağlar.",
    id: "content-block-id",
    direction: "left",
  };

  return (
    <div>
      <ContentBlock {...data} />
      <ContentBlock {...data2} />
      <ContentBlock {...data3} />
      <ContentBlock {...data4} />
    </div>
  );
};

export default Testpage;
