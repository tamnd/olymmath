---
tag: FHA15CJ6X0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250838
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A,B,C,D$ be points on the line $d$ in that order and $AB = CD$. Denote $(P)$ as some circle that passes through $A, B$ with its tangent lines at $A, B$ are $a,b$. Denote $(Q)$ as some circle that passes through $C, D$ with its tangent lines at $C, D$ are $c,d$. Suppose that $a$ cuts $c, d$ at $K, L$ respectively and $b$ cuts $c, d$ at $M, N$ respectively. Prove that four points $K, L, M,N$ belong to a same circle $(\omega)$ and the common external tangent lines of circles $(P)$, $(Q)$ meet on $(\omega)$.
