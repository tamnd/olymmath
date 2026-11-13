---
tag: Q25W0YRAAW
kind: problem
type: answer
answer: P(P(a)) = a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P (x)$ be a polynomial with integer coeﬃcients. Given that for some integer $a$ and some positive integer $n$, where
$$\underbrace{P(P(\ldots P}_{\text{n times}}(a)\ldots)) = a,$$
is it true that $P (P (a)) = a$?
