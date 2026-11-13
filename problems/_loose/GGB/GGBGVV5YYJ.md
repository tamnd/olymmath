---
tag: GGBGVV5YYJ
kind: problem
type: answer
answer: 1 - \frac{1}{2008} < a_{2006} < 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $\{ a_{n}\}$ such that $a_{n+1}=a_{n}+\frac{1}{2006}a_{n}^{2}$ , $n \in N$, $a_{0}=\frac{1}{2}$.

Prove that $1-\frac{1}{2008}< a_{2006}< 1$.
