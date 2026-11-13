---
tag: MZA07A3YFA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive sequence $\{f(n)\}$ satisfies $f(1)=a(0<a<1)$, and $f(n+1) \leqslant \frac{f(n)}{1+f(n)}$, prove:
(1) $f(n) \leqslant \frac{a}{1+(n-1) a}$;
(2) $\sum_{k=1}^{n} \frac{f(k)}{k+1}<1$.
