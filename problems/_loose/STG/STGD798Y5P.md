---
tag: STGD798Y5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161751
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1} A_{2} A_{3} A_{4}$ be a convex quadrilateral with no pair of parallel sides. For each $i=1,2,3,4$, define $\omega_{i}$ to be the circle touching the quadrilateral externally, and which is tangent to the lines $A_{i-1} A_{i}, A_{i} A_{i+1}$ and $A_{i+1} A_{i+2}$ (indices are considered modulo 4, so $A_{0}=A_{4}, A_{5}=A_{1}$ and $A_{6}=A_{2}$ ). Let $T_{i}$ be the point of tangency of $\omega_{i}$ with the side $A_{i} A_{i+1}$. Prove that the lines $A_{1} A_{2}, A_{3} A_{4}$ and $T_{2} T_{4}$ are concurrent if and only if the lines $A_{2} A_{3}, A_{4} A_{1}$ and $T_{1} T_{3}$ are concurrent.

Russia, Pavel Kozhevnikov
