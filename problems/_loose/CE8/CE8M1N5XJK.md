---
tag: CE8M1N5XJK
kind: problem
type: answer
answer: "21"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1$, $a_2$, $\cdots$ be a sequence such that $a_1=a_2=\frac 15$, and for $n \ge 3$, $$a_n=\frac{a_{n-1}+a_{n-2}}{1+a_{n-1}a_{n-2}}.$$ Find the smallest integer $n$ such that $a_n>1-5^{-2022}$.
