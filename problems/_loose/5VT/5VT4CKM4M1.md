---
tag: 5VT4CKM4M1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162788
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=87
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad in Slovenia
---
Let $AB$ be the longest side of triangle $ABC$. Let $M$ and $N$ be points on side $AB$ such that $|AM| = |AC|$ and $|BN| = |BC|$. The midpoints of segments $MC$ and $NC$ are $P$ and $R$, respectively. The incircle of triangle $ABC$ touches sides $BC$ and $AC$ at points $D$ and $E$. Prove that points $P, R, D$, and $E$ are concyclic.
