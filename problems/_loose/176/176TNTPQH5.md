---
tag: 176TNTPQH5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be a polynomial with integer coefficients of degree $n \geqslant 2$. Let $k$ be an integer and $Q$ the polynomial

$$
Q(X)=P(P(\cdots(P(X)) \cdots))
$$

where $P$ is written $k$ times. Show that there are at most $n$ integers $a$ such that $Q(a)=a$.
