---
tag: XATGECSWB9
kind: problem
type: answer
answer: 1008,1344,1680,2688
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, define $s(n)$ to be the sum of the digits of $n$. For example, $s(2014)=2+0+1+4=7$. Determine all positive integers $n$ with $1000 \leq n \leq 9999$ for which $\frac{n}{s(n)}=112$.
