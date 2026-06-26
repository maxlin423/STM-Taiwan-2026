# Beautiful Creation — `data.js` Schema

This document defines the exact structure of `data.js` used by `index.html` to render the VBS slideshow. Every grade subfolder (`1/` through `6/`) must contain a `data.js` that conforms to this schema.

**Everything content-related is data-driven.** `index.html` contains only the rendering engine, CSS, and nav structure. All days, slides, vocab, key thoughts, verse text, and images live in `data.js`.

---

## File Location

```
index.html        ← main app (do not modify)
schema.md         ← this file
1/data.js         ← Grade 1 data
2/data.js         ← Grade 2 data
...
6/data.js         ← Grade 6 data
Slideshows/
  Day1/           ← slide images for Day 1
  Day2/           ← slide images for Day 2
  ...
```

---

## URL Access

| URL | Data loaded |
|-----|-------------|
| `url.com?v=1` | `1/data.js` |
| `url.com?v=2` | `2/data.js` |
| `url.com` | defaults to `1/data.js` |

---

## `data.js` Structure

A `data.js` file must declare exactly **three global variables**: `VOCAB_COLORS`, `VOCAB_ZH`, and `days`.

---

### 1. `VOCAB_COLORS`

Maps each vocabulary word to a pastel highlight color.

```js
const VOCAB_COLORS = {
  WORD: '#hexcolor',
  ...
};
```

**Rules:**
- Keys: ALL CAPS English (e.g. `GOD`, `LIGHT`)
- Values: hex color strings (e.g. `'#f9c8d4'`)
- Every vocab word used anywhere in `days` must have an entry here
- Use soft pastel colors for readability on both light and dark backgrounds
- Number of entries varies per grade

---

### 2. `VOCAB_ZH`

Maps each vocabulary word to its Traditional Chinese equivalent.

```js
const VOCAB_ZH = {
  WORD: '中文',
  ...
};
```

**Rules:**
- Keys must exactly match keys in `VOCAB_COLORS`
- Values are Traditional Chinese characters
- Used for chip display and highlight matching in Chinese verse text

---

### 3. `days`

Array of day objects — **length varies per grade** (not fixed at 4). Each day has a `titleSlide` and an array of `verseSlides`.

```js
const days = [
  { titleSlide: { ... }, verseSlides: [ ... ] },  // Day 1
  { titleSlide: { ... }, verseSlides: [ ... ] },  // Day 2
  // ... as many days as needed
];
```

**Rules:**
- Number of days is not fixed — driven entirely by array length
- Day shortcut buttons in nav are generated dynamically to match

---

#### 3a. `titleSlide`

Opening slide for each day.

```js
titleSlide: {
  image:   'Slideshows/DayX/filename.jpeg',  // path relative to index.html root
  title:   'Day title in English',           // no "Day X —" prefix
  verseEn: '"Memory verse." (Reference)',    // English memory verse + citation
  verseZh: '中文記憶金句。（參考經文）',        // Chinese memory verse + citation
  vocab:   ['WORD1', 'WORD2', ...]           // ALL CAPS keys; count varies per grade
}
```

**All fields vary per grade.**

---

#### 3b. `verseSlides[]`

Array of verse slides for the day — **count varies per grade**.

```js
{
  ref:     'Genesis 1:1',                      // scripture reference, display label only
  image:   'Slideshows/DayX/Genesis_X-X.ext', // path relative to index.html root
  keyEn:   'Short key thought in English.',    // varies per grade
  keyZh:   '中文重點句。',                      // varies per grade
  verseEn: 'Full scripture text in English.',  // varies per grade
  verseZh: '完整中文經文。',                    // varies per grade
  vocab:        ['WORD1', 'WORD2'],             // subset of day vocab; varies per grade
  keyOnlyVocab: ['WORD1']                      // optional; words to highlight in key thought only, not scripture
}
```

**All fields vary per grade.**

**Image path rules:**
- Format: `Slideshows/DayX/Genesis_X-X.ext`
- Spaces → `_`, colons → `-` (e.g. `Genesis_1-4-5.jpg`)
- Day 1 images: `.jpg` extension; Days 2+ images: `.jpeg` extension

**`ref` format:** use en-dash `–` for ranges (e.g. `'Genesis 1:4–5'`)

---

## Schema Element Checklist

Use this checklist when mapping a source file to `data.js`. Confirm each element before generating the file.

### Global
- [ ] `VOCAB_COLORS` — one entry per vocab word, ALL CAPS key, pastel hex value
- [ ] `VOCAB_ZH` — one entry per vocab word, ALL CAPS key, Traditional Chinese value

### Per Day
- [ ] `titleSlide.image` — path to title page background image
- [ ] `titleSlide.title` — day title in English (no "Day X" prefix)
- [ ] `titleSlide.verseEn` — English memory verse + citation
- [ ] `titleSlide.verseZh` — Chinese memory verse + citation
- [ ] `titleSlide.vocab[]` — vocab words for the day (ALL CAPS)

### Per Verse Slide
- [ ] `ref` — scripture reference (display only, e.g. `'Genesis 1:1'`)
- [ ] `image` — path to slide background image
- [ ] `keyEn` — English key thought (short, child-friendly)
- [ ] `keyZh` — Chinese key thought
- [ ] `verseEn` — full English scripture text
- [ ] `verseZh` — full Chinese scripture text
- [ ] `vocab[]` — vocab words relevant to this slide (subset of day vocab)
- [ ] `keyOnlyVocab[]` — optional; words that should only highlight in key thought, not scripture (e.g. SWIM, SING)

---

## Source File Parsing Example

**File: `Creation7Days.docx`** — a loosely formatted bilingual story retelling Genesis across 7 days.

### What the file contains:
- 7 day sections, each with: scripture reference, English story paragraph, Chinese story paragraph
- No explicit vocab lists, key thoughts, or image references
- Story text is a child-friendly paraphrase, not direct scripture

### Mapping to schema elements:

| Schema Element | Source | Notes |
|---|---|---|
| Number of days | 7 sections in file | Differs from Grade 1 (4 days) |
| `titleSlide.title` | Day heading (e.g. "Day 1") | Needs to be reworded as a descriptive title |
| `titleSlide.verseEn` | Scripture ref per day | Need to supply full memory verse text |
| `titleSlide.verseZh` | Chinese paragraph | Need to extract or supply memory verse |
| `titleSlide.vocab[]` | ❌ Not in file | Must be supplied separately |
| `titleSlide.image` | ❌ Not in file | Must be supplied separately |
| `ref` | Scripture ref (e.g. "Genesis 1:1-5") | Reformat to schema style |
| `keyEn` | English story paragraph | Condense to 1 short sentence |
| `keyZh` | Chinese story paragraph | Condense to 1 short sentence |
| `verseEn` | ❌ Story paraphrase only | Need actual scripture text |
| `verseZh` | ❌ Story paraphrase only | Need actual Chinese scripture text |
| `vocab[]` | ❌ Not in file | Must be supplied separately |
| `image` | ❌ Not in file | Must be supplied separately |
| `VOCAB_COLORS` | ❌ Not in file | Assign pastel colors per word |
| `VOCAB_ZH` | ❌ Not in file | Must be supplied with vocab list |

### Gaps to resolve before generating `data.js`:
1. **Vocab lists** — what words per day? (requires separate input)
2. **Images** — what image files exist for each slide?
3. **Full scripture text** — story is a paraphrase; need actual Bible verses
4. **Memory verses** — need one per day for the title slide
5. **Key thoughts** — can be condensed from the story paragraphs, but need confirmation

---

## How to Generate a New `data.js`

1. Review source file against the **Schema Element Checklist** above
2. Identify gaps and confirm with user before proceeding
3. Use `1/data.js` as structural template
4. Replace all content fields per grade — nothing is carried over unchanged except image paths and `ref` values (unless those also change)
5. Validate: every word in every `vocab[]` array must exist as a key in both `VOCAB_COLORS` and `VOCAB_ZH`
6. Save to correct subfolder (e.g. `2/data.js` for Grade 2)
