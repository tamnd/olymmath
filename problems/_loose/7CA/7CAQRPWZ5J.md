---
tag: 7CAQRPWZ5J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89782
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=90
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatian Mathematical Olympiad
---
Let $I$ be the center of the inscribed circle of triangle $ABC$, and let point $D$ be on side $\overline{AC}$ such that $|AB|=|DB|$. The inscribed circle of triangle $BCD$ touches the lines $AC$ and $BD$ at points $E$ and $F$, respectively. Prove that the line $EF$ bisects the segment $\overline{DI}$.
