const { NextResponse } = require("next/server");

// src/app/api/services/route.js
let menuData = [
  {
    id: 1,
    name: "telur dadar jepang",
    description:
      "Tamagoyaki, yang secara harfiah berarti telur panggang dalam bahasa Jepang, adalah hidangan telur dadar khas Jepang yang terkenal dengan lapisan-lapisan tipisnya yang halus dan teksturnya yang lembut. Tamagoyaki biasanya dibuat dengan mengocok telur yang telah dibumbui dengan campuran mirin (anggur beras manis), kecap, dan sedikit gula, kemudian dimasak dalam lapisan tipis di atas panci khusus persegi panjang yang disebut makiyakinabe atau tamagoyaki pan",
    harga: 20000,
    gambar: "/image/telurdadar.jpeg",
    kategori: "makanan",
  },
  {
    id: 2,
    name: "beff steak",
    description:
      "Beef steak adalah hidangan daging sapi yang diiris tebal dan dimasak dengan cara dipanggang, digoreng, atau dibakar untuk menghasilkan daging yang lembut dan penuh rasa. Steak daging sapi dikenal karena teksturnya yang juicy dan rasa gurih yang khas, seringkali diperkaya dengan bumbu sederhana seperti garam dan lada, atau dilengkapi dengan saus khusus seperti saus lada hitam atau saus jamur.",
    harga: 25000,
    gambar: "/image/bef steak.jpeg",
    kategori: "makanan",
  },
  {
    id: 3,
    name: "Best ambrosia Salad",
    description:
      "Ambrosia salad adalah hidangan penutup klasik yang terkenal di Amerika Serikat, biasanya terdiri dari campuran buah-buahan, marshmallow, dan krim. Resep ini adalah salah satu variasi yang populer dan lezat:",
    harga: 23000,
    gambar: "/image/Best Ambrosia Salad.jpeg",
    kategori: "makanan",
  },
  {
    id: 4,
    name: "Brownie Ice Cream",
    description:
      "Brownie ice cream adalah kombinasi sempurna antara kue cokelat yang kaya dan es krim yang creamy, menciptakan hidangan penutup yang memanjakan lidah. Berikut ini adalah resep untuk membuat brownie ice cream yang lezat:",
    harga: 30000,
    gambar: "/image/Brownie Ice Cream.jpeg",
    kategori: "minuman",
  },
  {
    id: 5,
    name: "Brownie Milkshake",
    description:
      "Brownie milkshake adalah perpaduan sempurna antara kelembutan es krim vanila dan kekenyalan potongan brownie, menciptakan minuman penutup yang memanjakan lidah. Berikut ini adalah resep mudah untuk membuat brownie milkshake yang lezat:",
    harga: 20000,
    gambar: "/image/Brownie Milkshake.jpeg",
    kategori: "minuman",
  },
  {
    id: 6,
    name: "Cheeseburger",
    description:
      "Cheeseburger adalah salah satu ikon kuliner Amerika yang telah populer di seluruh dunia. Dengan perpaduan sempurna antara daging sapi yang juicy, keju leleh, dan roti yang lembut, cheeseburger selalu menjadi pilihan favorit untuk santapan cepat saji. Berikut ini adalah resep sederhana namun lezat untuk membuat cheeseburger klasik di rumah:",
    harga: 20000,
    gambar: "/image/Cheeseburger.jpeg",
    kategori: "makanan",
  },
  {
    id: 7,
    name: "Frozen Drinks for Summer",
    description:
      "Minuman beku untuk musim panas adalah pilihan yang sempurna untuk menyegarkan diri di bawah sinar matahari. Dengan tekstur yang lembut dan rasa yang menyegarkan, minuman beku ini menjadi penyelamat saat suhu terik. Nikmati variasi rasa buah-buahan segar, seperti stroberi, mangga, atau semangka, yang dikombinasikan dengan es serut dan sirup buah untuk menciptakan minuman yang tidak hanya lezat, tetapi juga memanjakan tenggorokan Anda. Dengan tambahan hiasan seperti irisan buah segar, daun mint, atau payung minum, minuman beku ini menjadi pilihan yang sempurna untuk piknik di taman, hari pantai, atau bersantai di teras rumah. Rasakan sensasi dingin yang menyegarkan dari minuman beku untuk musim panas ini dan biarkan diri Anda terbuai oleh kenikmatannya.",
    harga: 20000,
    gambar: "/image/Frozen Drinks for Summer.jpeg",
    kategori: "minuman",
  },
  {
    id: 8,
    name: "kentang goreng ala",
    description:
      "Kentang goreng adalah camilan yang sangat populer di seluruh dunia. Kentang yang dipotong menjadi bentuk batang, dipanggang, atau digoreng hingga menjadi renyah dan berwarna kecokelatan. Rasanya gurih dan lezat, dengan tekstur yang renyah di luar dan lembut di dalam. Kentang goreng sering disajikan sebagai pendamping hidangan utama seperti burger, steak, atau sandwich, namun juga bisa dinikmati sebagai camilan yang nikmat kapan saja. Dapat disajikan dengan berbagai bumbu dan saus, kentang goreng menjadi pilihan yang disukai oleh semua kalangan, baik anak-anak maupun dewasa.",
    harga: 20000,
    gambar: "/image/kentang goreng ala.jpeg",
    kategori: "makanan",
  },
  {
    id: 9,
    name: "Kiwi Smoothie",
    description:
      "Kiwi smoothie adalah minuman sehat yang menyegarkan, dibuat dengan campuran kiwi yang segar, buah lainnya, yogurt atau susu, dan es batu. Smoothie ini memiliki rasa manis dan asam yang seimbang, dengan aroma khas kiwi yang menyegarkan. Biasanya disajikan dalam keadaan dingin, kiwi smoothie menjadi pilihan populer untuk sarapan cepat atau camilan sehat di siang hari. Dengan kandungan serat, vitamin C, dan antioksidan dari kiwi, smoothie ini tidak hanya lezat tetapi juga baik untuk kesehatan. Cocok dinikmati di musim panas atau kapan pun Anda membutuhkan minuman menyegarkan.",
    harga: 20000,
    gambar: "/image/Kiwi Smoothie.jpeg",
    kategori: "minuman",
  },
  {
    id: 10,
    name: "kopi susu gula aren",
    description:
      "Kopi susu gula aren adalah minuman khas Indonesia yang terdiri dari campuran kopi yang kuat, susu yang kaya dan creamy, serta gula aren yang memberikan sentuhan manis dan karamel. Minuman ini biasanya disajikan dalam keadaan panas, tetapi juga bisa dinikmati dingin dengan tambahan es batu. Kopi susu gula aren memiliki rasa yang unik dan beragam, kombinasi antara kekuatan kopi, kelembutan susu, dan kehangatan gula aren. Rasanya cocok bagi mereka yang menyukai minuman kopi yang lezat dan beraroma, dengan sedikit sentuhan manis yang alami. Kopi susu gula aren adalah pilihan yang sempurna untuk memulai hari dengan semangat atau untuk dinikmati sebagai camilan di siang hari.",
    harga: 20000,
    gambar: "/image/kopi susu gula aren.jpeg",
    kategori: "minuman",
  },
  {
    id: 11,
    name: "kwetiau goreng",
    description:
      "Kwetiau goreng adalah hidangan khas Asia yang terdiri dari kwetiau (mie dari tepung beras) yang digoreng bersama dengan berbagai bahan lainnya. Kwetiau biasanya dipotong menjadi bentuk panjang dan tipis, dan kemudian digoreng dalam wajan atau penggorengan dengan minyak goreng hingga menjadi renyah.",
    harga: 20000,
    gambar: "/image/kwetiau goreng.jpeg",
    kategori: "makanan",
  },
  {
    id: 12,
    name: "lemon tea",
    description:
      "lemon tea adalah minuman segar yang terbuat dari campuran teh hitam atau teh hijau dengan perasan lemon, air, dan pemanis seperti gula atau madu. Minuman ini memiliki rasa yang menyegarkan, dengan perpaduan antara rasa pahit dari teh dan keasaman serta aroma segar dari lemon.",
    harga: 20000,
    gambar: "/image/lemon tea .jpeg",
    kategori: "minuman",
  },
  {
    id: 13,
    name: "mie goreng seafod",
    description:
      "Mie goreng seafood adalah hidangan yang lezat dan menggugah selera yang terdiri dari mie goreng yang digoreng bersama dengan berbagai jenis seafood. Mie yang digunakan bisa mie telur, mie instan, atau mie jenis lainnya, yang kemudian dicampur dengan udang, cumi-cumi, kerang, dan kadang-kadang potongan ikan segar.",
    harga: 20000,
    gambar: "/image/mie goreng seafod.jpeg",
    kategori: "makanan",
  },
  {
    id: 14,
    name: "Milk Shake",
    description:
      "Milkshake adalah minuman klasik yang terbuat dari campuran es krim, susu, dan berbagai rasa serta pemanis tambahan. Minuman ini seringkali disajikan dalam keadaan dingin dan memiliki tekstur yang kental dan creamy.",
    harga: 20000,
    gambar: "/image/Milk Shake .jpeg",
    kategori: "minuman",
  },
  {
    id: 15,
    name: "nasi chicken katsu",
    description:
      "Nasi chicken katsu adalah hidangan Jepang yang terdiri dari potongan daging ayam yang dipanir dengan tepung roti dan kemudian digoreng hingga kecokelatan dan renyah. Daging ayam yang dipanir tersebut kemudian disajikan dengan nasi putih dan disiram dengan saus khusus katsu yang gurih.",
    harga: 20000,
    gambar: "/image/nasi chicken katsu.jpeg",
    kategori: "makanan",
  },
  {
    id: 16,
    name: "nasi goreng",
    description:
      "Nasi goreng adalah hidangan klasik Asia yang terdiri dari nasi yang digoreng bersama dengan berbagai bahan tambahan dan bumbu. Nasi goreng sering dianggap sebagai simbol kuliner Asia yang kaya rasa dan tekstur, dan menjadi salah satu hidangan favorit di banyak negara di seluruh benua.",
    harga: 20000,
    gambar: "/image/nasi goreng .jpeg",
    kategori: "makanan",
  },
  {
    id: 17,
    name: "pangsit Chili Oil",
    description:
      "Pangsit chili oil adalah hidangan yang terdiri dari pangsit yang digoreng hingga renyah dan disajikan dengan saus chili oil yang pedas dan aromatik. Pangsit yang digunakan bisa berisi berbagai jenis isian, seperti daging cincang, udang, atau campuran sayuran, dan kemudian dibungkus dengan kulit pangsit dan digoreng hingga kecokelatan.",
    harga: 20000,
    gambar: "/image/pangsit Chili Oil.jpeg",
    kategori: "makanan",
  },
  {
    id: 18,
    name: "Peach Sangria",
    description:
      "Peach sangria adalah minuman yang menyegarkan dan beraroma, terdiri dari campuran anggur putih, perasan jeruk lemon, sirup peach, dan irisan buah-buahan segar seperti peach, jeruk, dan anggur. Minuman ini sering disajikan dalam keadaan dingin, memberikan kesegaran yang sempurna untuk dinikmati di musim panas atau saat cuaca sedang panas.",
    harga: 20000,
    gambar: "/image/Peach Sangria.jpeg",
    kategori: "minuman",
  },
  {
    id: 19,
    name: "spaghetii nyos",
    description:
      "Spaghetti adalah salah satu jenis pasta yang paling terkenal di dunia, terbuat dari adonan tepung terigu, air, dan telur. Bentuknya panjang dan silindris, dengan ukuran yang bervariasi tergantung pada preferensi dan merek. Spaghetti umumnya memiliki tekstur yang kenyal dan dapat menyerap saus dengan baik..",
    harga: 20000,
    gambar: "/image/spaghetii nyos.jpeg",
    kategori: "makanan",
  },
  {
    id: 20,
    name: "Strawberry Milk",
    description:
      "Strawberry milk adalah minuman yang lezat dan menyegarkan, terdiri dari campuran susu segar dengan sirup atau puree strawberry. Minuman ini memiliki rasa manis dan segar dari buah strawberry yang khas, yang dipadukan dengan kelembutan dan kelezatan dari susu.",
    harga: 20000,
    gambar: "/image/Strawberry Milk.jpeg",
    kategori: "minuman",
  },
];

export async function GET(request) {
  if (request.nextUrl.searchParams.get("category")) {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const filteredMenu = menuData.filter((menu) => menu.kategori === category);
    return NextResponse.json({
      status: 200,
      message: "succes",
      data: filteredMenu,
    });
  } else {
    return NextResponse.json({
      status: 200,
      message: "succes",
      data: menuData,
    });
  }
}

// export async function GET(request) {
//   const url = new URL(request.url);
//   const category = url.searchParams.get("category");

//   if (category) {
//     const filteredMenu = menuData.filter((menu) => menu.kategori === category);
//     return new Response(JSON.stringify(filteredMenu), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } else {
//     return new Response(JSON.stringify(menuData), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }
