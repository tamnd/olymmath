---
tag: 7XZ6MZNPEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n >1$ be a natural number and $T_{n}(x)=x^n + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + ... + a_1 x^1 + a_0$.\\
Assume that for each nonzero real number $t $ we have $T_{n}(t+\frac {1}{t})=t^n+\frac {1}{t^n} $.\\
Prove that for each $0\le i \le n-1 $
$gcd (a_i,n) >1$.

*Proposed by Morteza Saghafian*
