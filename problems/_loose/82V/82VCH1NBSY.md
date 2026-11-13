---
tag: 82VCH1NBSY
kind: problem
type: answer
answer: u_{n}=2^{n}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's consider an arithmetico-geometric sequence $u_{n+1}=a u_{n}+b$

1. Let's take another sequence $\left(v_{n}\right)$ that satisfies the same recurrence relation as $\left(u_{n}\right)$ (i.e., $\left.v_{n+1}=a \cdot v_{n}+b\right)$. What can we say about the sequence $\left(w_{n}\right)=\left(u_{n}-v_{n}\right)$?
2. By finding a simple sequence $\left(v_{n}\right)$ that satisfies the above, deduce a formula for $\left(u_{n}\right)$.
