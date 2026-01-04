import React, { useState } from 'react';
import { BookOpen, Rocket, Code, Terminal, MessageSquare, ChevronRight, ChevronDown, Menu, X, Cpu, Map as MapIcon, Layers, Zap } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'intro', title: 'Start: Hello World', icon: <Terminal size={18} /> },
    { id: 'vars', title: 'Lv 1: Variabel & Tipe', icon: <Code size={18} /> },
    { id: 'logic', title: 'Lv 2: Logika & Loop', icon: <Cpu size={18} /> },
    { id: 'slices', title: 'Lv 3: Slice (Koleksi)', icon: <Layers size={18} /> },
    { id: 'structs', title: 'Lv 4: Struct & Method', icon: <Rocket size={18} /> },
    { id: 'maps', title: 'Lv 5: Maps & Sort', icon: <MapIcon size={18} /> },
    { id: 'concurrent', title: 'Lv 6: Goroutines', icon: <Zap size={18} /> },
  ];

  const content = {
    intro: {
      title: "Start: Anatomi & Hello World",
      description: "Langkah pertama memahami struktur dasar bahasa Go.",
      content: [
        {
          type: "concept",
          text: "Program Go memiliki struktur minimal: Package Main, Import, dan Func Main. Go adalah bahasa yang dikompilasi (compiled) dan statically typed."
        },
        {
          type: "code",
          title: "Struktur Dasar",
          code: `package main // 1. Paket utama agar bisa dijalankan

import "fmt" // 2. Import library I/O

func main() { // 3. Pintu masuk program
    fmt.Println("Halo, Calon Gopher!")
}`
        },
        {
          type: "qa",
          question: "Saya tipe learning by doing, mulai dari mana?",
          answer: "Kita langsung praktek menggunakan Go Playground. Fokus pada membedah struktur dasar sambil menulis kode."
        }
      ]
    },
    vars: {
      title: "Level 1: Variabel & Tipe Data",
      description: "Memahami cara menyimpan data dan mencetaknya ke layar.",
      content: [
        {
          type: "concept",
          text: "Go memiliki dua gaya deklarasi variabel: Gaya Formal (var) dan Gaya Pendek (:=). Gaya pendek sangat populer karena ringkas."
        },
        {
          type: "code",
          title: "Deklarasi Variabel",
          code: `// Cara Formal
var nama string = "Budi"

// Cara Pendek (Type Inference)
// Go otomatis tahu ini int dan string
umur := 25 
pesan := "Halo Dunia"`
        },
        {
          type: "qa",
          question: "Cara cetak variabel gabung teks gimana?",
          answer: "Ada dua jurus: Jurus Koma (fmt.Println) untuk tempel biasa, dan Jurus Format (fmt.Printf) menggunakan placeholder seperti %s (string) atau %d (digit/angka)."
        },
        {
          type: "code",
          title: "Mencetak Data",
          code: `nama := "Chornael"
// Jurus Koma
fmt.Println("Halo", nama) 

// Jurus Format
fmt.Printf("Halo %s, tahun %d", nama, 2026)`
        }
      ]
    },
    logic: {
      title: "Level 2: Logika & Perulangan",
      description: "Membuat keputusan (If/Else) dan perulangan (For).",
      content: [
        {
          type: "concept",
          text: "Go hanya memiliki satu jenis loop: 'for'. Namun, 'for' ini bisa bertindak sebagai 'while' atau 'foreach'. Logika 'if' di Go tidak memerlukan tanda kurung ( )."
        },
        {
          type: "code",
          title: "Struktur If & For",
          code: `// IF tanpa kurung
if usia < 17 {
    fmt.Println("Tunggu dulu")
} else {
    fmt.Println("Boleh bikin SIM")
}

// FOR (Looping standar)
for i := 10; i > 0; i-- {
    fmt.Println(i) // Hitung mundur
}
fmt.Println("Meluncur! 🚀")`
        },
        {
          type: "qa",
          question: "Kenapa logika 'if usia < 17' saya salah?",
          answer: "Tadi ada bug logika. Jika usia 22, kondisi 'usia < 17' adalah False, jadi masuk ke Else. Pesan di Else harusnya yang positif ('Boleh bikin SIM')."
        }
      ]
    },
    slices: {
      title: "Level 3: Slice (Koleksi Data)",
      description: "Wadah data fleksibel yang bisa membesar (Dynamic Array).",
      content: [
        {
          type: "concept",
          text: "Berbeda dengan Array yang ukurannya kaku, Slice (kurung siku kosong []) bisa ditambah isinya menggunakan fungsi 'append'. Mirip ArrayList di Java atau List di Python."
        },
        {
          type: "code",
          title: "Slice & Append",
          code: `// Membuat Slice kosong
kru := []string{"Kapten Budi", "Joko"}

// Menambah data (Jurus Append)
kru = append(kru, "Kolonel Damar")

// Menghitung panjang pakai len()
for i := 0; i < len(kru); i++ {
    fmt.Println(kru[i])
}`
        },
        {
          type: "qa",
          question: "Pakai kru.length atau kru.len?",
          answer: "Bukan keduanya. Di Go, kita menggunakan fungsi pembungkus `len(kru)`. Ini mirip seperti di Python."
        }
      ]
    },
    structs: {
      title: "Level 4: Struct & Method",
      description: "Membuat objek roket dan memberinya kemampuan terbang.",
      content: [
        {
          type: "concept",
          text: "Struct adalah cetakan (blueprint) untuk data kompleks. Method adalah fungsi yang ditempelkan ke struct menggunakan 'Receiver'."
        },
        {
          type: "code",
          title: "Definisi Struct & Method",
          code: `type Roket struct {
    Nama       string
    BahanBakar int
}

// Receiver dengan Pointer (*)
// Agar data asli BERUBAH saat method dipanggil
func (r *Roket) Terbang() bool {
    if r.BahanBakar < 20 {
        return false
    }
    r.BahanBakar -= 20
    return true
}`
        },
        {
          type: "qa",
          question: "Kenapa nama struct diawali Huruf Kapital?",
          answer: "Di Go, Huruf Kapital = Exported (Public), bisa diakses package lain. Huruf Kecil = Unexported (Private)."
        },
        {
          type: "qa",
          question: "Apa beda Receiver (r *Roket) vs (r Roket)?",
          answer: "Penting! Tanpa bintang (Roket) = Fotokopi (Data asli aman tapi tak berubah). Pakai bintang (*Roket) = Remote Control (Data asli berubah/mutated). Di industri, pointer (*) dipakai untuk efisiensi memori dan mengubah state."
        }
      ]
    },
    maps: {
      title: "Level 5: Maps & Sorting",
      description: "Menyimpan data Key-Value dan menangani ketidakurutan Map.",
      content: [
        {
          type: "concept",
          text: "Map menyimpan data seperti kamus. Urutan Map di Go sengaja diacak (randomized) oleh sistem. Untuk mengurutkannya, kita harus mengekstrak Key ke dalam Slice lalu di-sort."
        },
        {
          type: "code",
          title: "Map & Comma Ok Idiom",
          code: `inventaris := map[string]string{
    "Oksigen": "100%",
    "Baterai": "Low",
}

// Cek barang aman (Comma Ok)
nilai, ada := inventaris["Topi"]
if !ada {
    fmt.Println("Barang ilegal!")
}

// Hapus barang
delete(inventaris, "Baterai")`
        },
        {
          type: "qa",
          question: "Kenapa output Map berubah-ubah terus?",
          answer: "Go menggunakan Hash Table dan sengaja mengacak urutan iterasi map agar programmer tidak bergantung pada urutan yang tidak pasti."
        },
        {
          type: "code",
          title: "Trik Mengurutkan Map",
          code: `import "sort"

// 1. Pindahkan Key ke Slice
keys := []string{}
for k := range inventaris {
    keys = append(keys, k)
}

// 2. Urutkan Slice
sort.Strings(keys)

// 3. Panggil Map sesuai urutan Slice
for _, k := range keys {
    fmt.Println(k, inventaris[k])
}`
        }
      ]
    },
    concurrent: {
      title: "Level 6: Concurrency (Goroutines)",
      description: "Menjalankan tugas paralel layaknya peluncuran roket.",
      content: [
        {
          type: "concept",
          text: "Goroutine adalah 'lightweight thread'. Dengan kata kunci 'go', fungsi berjalan di latar belakang. Main function tidak menunggu goroutine selesai, jadi kita butuh 'WaitGroup' untuk sinkronisasi."
        },
        {
          type: "code",
          title: "Pola WaitGroup",
          code: `import "sync"

func main() {
    var wg sync.WaitGroup

    wg.Add(1) // Tambah 1 tugas
    go func() {
        defer wg.Done() // Lapor selesai
        cekMesin()
    }()

    wg.Wait() // Tahan Kapten sampai semua lapor
    fmt.Println("Siap Meluncur!")
}`
        },
        {
          type: "qa",
          question: "Apa gunanya Goroutine di proyek real?",
          answer: "1. Aggregator: Mengambil data user, saldo, promo dari 3 database sekaligus (Fan-Out) biar loading cepat. \n2. Fire & Forget: Kirim email notifikasi di background tanpa bikin user nunggu loading."
        }
      ]
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-cyan-400">Go: Zero to Hero</h1>
            <p className="text-xs text-slate-400 mt-1">Journey Logbook</p>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-88px)]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium
                ${activeSection === section.id 
                  ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-700/50 shadow-lg shadow-cyan-900/20' 
                  : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'}
              `}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative w-full">
        {/* Header Mobile Trigger */}
        <div className="md:hidden p-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between sticky top-0 z-30">
          <span className="font-bold text-cyan-400">Go Learning Hub</span>
          <button onClick={() => setMobileMenuOpen(true)} className="text-slate-300">
            <Menu size={24} />
          </button>
        </div>

        <div className="max-w-4xl mx-auto p-6 md:p-12 pb-24">
          <header className="mb-8 border-b border-slate-700 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold mb-4 border border-cyan-800">
              <BookOpen size={12} />
              DOKUMENTASI MENTORING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {content[activeSection].title}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {content[activeSection].description}
            </p>
          </header>

          <div className="space-y-8">
            {content[activeSection].content.map((block, index) => (
              <ContentBlock key={index} data={block} />
            ))}
          </div>

          {/* Navigation Footer */}
          <div className="mt-12 pt-8 border-t border-slate-700 flex justify-between items-center text-sm text-slate-500">
             <p>Dirangkum dari sesi diskusi interaktif "Misi Roket".</p>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                <span>Golang Learning</span>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Component for different content types
const ContentBlock = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (data.type === 'concept') {
    return (
      <div className="bg-slate-800/50 border-l-4 border-cyan-500 p-4 rounded-r-lg text-slate-300 leading-relaxed">
        {data.text}
      </div>
    );
  }

  if (data.type === 'code') {
    return (
      <div className="mt-4 rounded-xl overflow-hidden border border-slate-700 bg-[#0d1117] shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
          <span className="text-xs font-mono text-cyan-300">{data.title || 'main.go'}</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300">
            <code>{data.code}</code>
          </pre>
        </div>
      </div>
    );
  }

  if (data.type === 'qa') {
    return (
      <div className="border border-slate-700 rounded-lg bg-slate-800/20 overflow-hidden transition-all duration-300">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-orange-500/10 rounded-md text-orange-400">
              <MessageSquare size={16} />
            </div>
            <span className="font-semibold text-slate-200 text-sm md:text-base">{data.question}</span>
          </div>
          {isOpen ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
        </button>
        
        {isOpen && (
          <div className="p-4 pt-0 pl-[3.25rem] text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 bg-slate-800/30">
            <div className="mt-3">
                <span className="font-bold text-cyan-400">Mentor: </span>
                {data.answer}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default App;