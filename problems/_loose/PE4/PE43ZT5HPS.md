---
tag: PE43ZT5HPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Polynomials $(P_n(X))_{n\in\mathbb{N}}$ are defined as: $$P_0(X)=0, P_1(X)=X+2,$$ $$P_n(X)=P_{n-1}(X)+3P_{n-1}(X)\cdot P_{n-2}(X)+P_{n-2}(X), (\forall) n\geq2.$$ Show that if $ k $ divides $m$ then $P_k(X)$ divides $P_m(X).$
