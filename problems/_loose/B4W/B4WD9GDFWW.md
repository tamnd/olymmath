---
tag: B4WD9GDFWW
kind: problem
type: answer
answer: a_n < 2021
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203941
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a monic quadratic polynomial $Q(x)$, define $$ Q_n (x) = \underbrace{Q(Q(\cdots(Q(x))\cdots))}_{\text{compose $n$ times}} $$
for every natural number $n$. Let $a_n$ be the minimum value of the polynomial $Q_n(x)$ for every natural number $n$. It is known that $a_n > 0$ for every natural number $n$ and there exists some natural number $k$ such that $a_k \neq a_{k+1}$.
(a) Prove that $a_n < a_{n+1}$ for every natural number $n$.
(b) Is it possible to satisfy $a_n < 2021$ for every natural number $n$?

*Proposed by Fajar Yuliawan*
