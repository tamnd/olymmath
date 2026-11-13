---
tag: Z7A4DKEXC4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176805
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Middle_European_Mathematical_Olympiad_MEMO/train/0000.parquet#row=6
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: memo
    source: hf-mathnet
    label: Middle European Mathematical Olympiad (MEMO) Middle European Mathematical Olympiad
---
Let $A B C$ be an isosceles triangle with $|A C|=|B C|$. Its incircle touches $A B$ and $B C$ at $D$ and $E$, respectively. A line (different from $A E$ ) passes through $A$ and intersects the incircle at $F$ and $G$. The lines $E F$ and $E G$ intersect the line $A B$ at $K$ and $L$, respectively. Prove that $|D K|=|D L|$.
