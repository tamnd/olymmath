---
tag: ZCQZQ7WA2A
kind: problem
type: answer
answer: \text{The lines } AS_a, BS_b, \text{ and } CS_c \text{ are concurrent.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250713
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2015
    source: hf-mathnet
    label: Saudi Arabia SAMC 2015
---
Let $ABC$ be a triangle and $G$ its centroid. Let $G_a, G_b$ and $G_c$ be the orthogonal projections of $G$ on sides $BC, CA$, respectively $AB$. If $S_a, S_b$ and $S_c$ are the symmetrical points of $G_a, G_b$, respectively $G_c$ with respect to $G$, prove that $AS_a, BS_b$ and $CS_c$ are concurrent.

Liana Topan
