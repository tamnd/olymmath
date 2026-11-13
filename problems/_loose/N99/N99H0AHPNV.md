---
tag: N99H0AHPNV
kind: problem
type: answer
answer: p\geq436
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185975
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine whether there exist natural numbers $n$ for which

$$
\frac{1}{n}+\frac{1}{n+1}+\ldots+\frac{1}{n^{2}}>1000
$$

holds.

If this is the case, investigate whether there exists a natural number $p$ such that every (in the decimal system) $p$-digit number $n$ has property (1). If this is also true, determine such a number $p$.
