---
tag: V8VAH37GS9
kind: problem
type: answer
answer: a_{10}-\sqrt{2}<10^{-383}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $a_{1}=1, a_{n}=\frac{1}{2}\left(a_{n-1}+\frac{2}{a_{n-1}}\right)$ for $n=2, \ldots, 10$, then $0<a_{10}-\sqrt{2}<10^{-370}$.
