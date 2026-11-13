---
tag: SHV0FKWM5X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77124
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 72nd Czech and Slovak Mathematical Olympiad
---
In a convex quadrilateral $A B C D,|A B|=|B C|=|C D|$. Let furthermore, for the intersection $P$ of its diagonals $|\angle A P D|<90^{\circ}$. Let $R$ and $S$ be reflections of $A$ and $D$ with respect to $B D$ and $A C$, respectively. Prove that the lines $B C$ and $R S$ are parallel.

(Patrik Bak)
