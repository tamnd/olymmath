---
tag: FA8YD7BE8N
kind: problem
type: answer
answer: 2^{2}+2-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a fixed real number. Define $M(t)$ to be the maximum value of $-x^{2}+2 a x+a$ over all real numbers $x$ with $x \leq t$. Determine a polynomial expression in terms of $a$ that is equal to $M(a-1)+M(a+2)$ for every real number $a$.
