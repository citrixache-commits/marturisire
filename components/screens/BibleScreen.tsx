"use client";
import { useState } from "react";
import { bibleBooks, getBooksByCategory, sampleVerses, type BibleBook } from "@/data/bible";

type View = "books" | "chapters" | "verses";

export default function BibleScreen() {
  const [view, setView] = useState<View>("books");
  const [selectedBook, setSelectedBook] = useState<BibleBook | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number>(0);
  const [fontSize, setFontSize] = useState(16);

  const categories = getBooksByCategory();

  function openBook(book: BibleBook) {
    setSelectedBook(book);
    setView("chapters");
  }

  function openChapter(ch: number) {
    setSelectedChapter(ch);
    setView("verses");
  }

  function goBack() {
    if (view === "verses") setView("chapters");
    else if (view === "chapters") { setView("books"); setSelectedBook(null); }
  }

  // Find sample verses if available
  const verseKey = selectedBook ? `${selectedBook.id}-${selectedChapter}` : "";
  const verses = sampleVerses[verseKey] || null;

  return (
    <div className="px-4 py-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          {view !== "books" && (
            <button onClick={goBack} className="text-gold text-lg p-1">&larr;</button>
          )}
          <div>
            <h2 className="text-[22px] font-heading text-gold tracking-wider leading-tight">
              {view === "books" ? "Biblia Ortodoxă" : view === "chapters" ? selectedBook?.name : `${selectedBook?.abbrev} ${selectedChapter}`}
            </h2>
            {view === "books" && (
              <p className="text-[13px] text-warm-gray mt-0.5">Ediția Sinodală — 77 cărți</p>
            )}
          </div>
        </div>
        {view === "verses" && (
          <div className="flex items-center gap-2">
            <button onClick={() => setFontSize((s) => Math.max(12, s - 2))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gold text-sm"
              style={{ background: "#C5A55A15", border: "1px solid #C5A55A22" }}>A-</button>
            <button onClick={() => setFontSize((s) => Math.min(24, s + 2))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gold text-sm font-bold"
              style={{ background: "#C5A55A15", border: "1px solid #C5A55A22" }}>A+</button>
          </div>
        )}
      </div>

      {/* BOOKS LIST */}
      {view === "books" && (
        <div className="stagger-children">
          {categories.map((cat) => (
            <div key={cat.category} className="mb-5">
              <p className="text-[11px] text-gold tracking-[2px] font-heading mb-2 uppercase">{cat.category}</p>
              <div className="space-y-1.5">
                {cat.books.map((book) => {
                  const hasSample = Object.keys(sampleVerses).some((k) => k.startsWith(book.id));
                  return (
                    <button key={book.id} onClick={() => openBook(book)}
                      className="w-full text-left glass-card p-3.5 flex items-center justify-between transition-all active:scale-[0.98]">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-gold-dim w-10">{book.abbrev}</span>
                        <span className="text-[14px] text-ivory">{book.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {hasSample && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                        <span className="text-[11px] text-warm-gray">{book.chapters} cap.</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CHAPTERS GRID */}
      {view === "chapters" && selectedBook && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs px-2 py-0.5 rounded ${
              selectedBook.testament === "nou" ? "bg-gold/20 text-gold" :
              selectedBook.testament === "deuterocanonic" ? "bg-wine/40 text-gold-light" :
              "bg-warm-gray/20 text-warm-gray"
            }`}>
              {selectedBook.testament === "nou" ? "Noul Testament" :
               selectedBook.testament === "deuterocanonic" ? "Deuterocanonic" : "Vechiul Testament"}
            </span>
            <span className="text-xs text-warm-gray">{selectedBook.chapters} capitole</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: selectedBook.chapters }, (_, i) => {
              const ch = i + 1;
              const hasVerses = !!sampleVerses[`${selectedBook.id}-${ch}`];
              return (
                <button key={ch} onClick={() => openChapter(ch)}
                  className="aspect-square rounded-xl flex items-center justify-center text-lg transition-all active:scale-90"
                  style={{
                    background: hasVerses ? "#C5A55A22" : "#1A141088",
                    border: hasVerses ? "1px solid #C5A55A44" : "1px solid #C5A55A11",
                    color: hasVerses ? "#C5A55A" : "#E8E0D0",
                  }}>
                  {ch}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* VERSES */}
      {view === "verses" && (
        <div>
          {verses ? (
            <div className="space-y-3">
              {verses.map((verse, i) => (
                <p key={i} className="text-ivory leading-[1.8]" style={{ fontSize }}>
                  <span className="text-gold font-bold text-[0.75em] mr-1.5 align-super">{i + 1}</span>
                  {verse}
                </p>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-5xl mb-4">&#128220;</p>
              <p className="text-warm-gray text-sm mb-2">
                Capitolul {selectedChapter} din {selectedBook?.name}
              </p>
              <p className="text-warm-gray/60 text-xs leading-relaxed max-w-[280px] mx-auto">
                Textul complet va fi disponibil în versiunea completă. MVP-ul include Matei 1, Psalmul 1 și Ioan 1.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
