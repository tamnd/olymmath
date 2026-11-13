---
tag: 3V1KKSZF4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218970
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 69th Belarusian Mathematical Olympiad
---
Let $AA_1$ be the bisector of a triangle $ABC$. Points $D$ and $F$ are chosen on the line $BC$ such that $A_1$ is the midpoint of the segment $DF$. A line $l$, different from $BC$, passes through $A_1$ and intersects the lines $AB$ and $AC$ at points $B_1$ and $C_1$, respectively.
Find the locus of the points of intersection of the lines $B_1D$ and $C_1F$ for all possible positions of $l$.

*(M. Karpuk)*
