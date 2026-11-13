---
tag: K12F3YZKSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187304
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=62
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
I is the incenter of the triangle $\mathrm{ABC}$. A circle with center I meets the side $\mathrm{BC}$ at $\mathrm{D}$ and $\mathrm{P}$, with D nearer to B. Similarly, it meets the side CA at E and Q, with E nearer to C, and it meets AB at $\mathrm{F}$ and $\mathrm{R}$, with $\mathrm{F}$ nearer to $\mathrm{A}$. The lines EF and QR meet at $\mathrm{S}$, the lines FD and RP meet at T, and the lines DE and PQ meet at U. Show that the circumcircles of DUP, ESQ and FTR have a single point in common.
