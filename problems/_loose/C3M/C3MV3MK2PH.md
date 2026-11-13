---
tag: C3MV3MK2PH
kind: problem
type: answer
answer: \frac{1}{6}M\cdotn(n+1)(n+2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $a_{1}, a_{2}, \cdots, a_{n}$, let $a_{n+1}=0, M=\max _{1 \leqslant k \leqslant n}\left|a_{k}-a_{k+1}\right|$, prove: $\left|\sum_{k=1}^{n} k a_{k}\right| \leqslant \frac{1}{6} M \cdot n(n+1)(n+2)$.
