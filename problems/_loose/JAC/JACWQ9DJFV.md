---
tag: JACWQ9DJFV
kind: problem
type: answer
answer: a_i
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n\ge 3$, determine all strictly increasing sequences $a_1<a_2<\cdots<a_n$ such that $\text{gcd}(a_1,a_2)=1$ and for any pair of natural numbers $(k,m)$ satisfy $n\ge m\ge 3$, $m\ge k$, $$\frac{a_1+a_2+\cdots +a_m}{a_k}$$ is a positive integer.
