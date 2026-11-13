---
tag: DEBJF0X0KG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given *Fibonacci* sequence $(F_n),$ and a positive integer $m$, denote $k(m)$ by the smallest positive integer satisfying $F_{n+k(m)}\equiv F_n(\bmod m),$ for all natural numbers $n$.
a) Prove that: For all $m_1,m_2\in \mathbb{Z^+}$, we have:$$k([m_1,m_2])=[k(m_1),k(m_2)].$$(Here $[a,b]$ is the least common multiple of $a,b.$)

b) Determine $k(2),k(4),k(5),k(10).$
