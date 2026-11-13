---
tag: XCB2TBV3NW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_1,f_2,\ldots,f_n : [0,1]\to (0,\infty)$ be $n$ continuous functions, $n\geq 1$, and let $\sigma$ be a permutation of the set $\{1,2,\ldots, n\}$. Prove that $$ \prod^n_{i=1} \int^1_0 \frac{ f_i^2(x) }{ f_{\sigma(i)}(x) } dx \geq \prod^n_{i=1} \int^1_0 f_i(x) dx. $$
