---
tag: GHP10ZPC32
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the formal series $f=a_{0}+a_{1} x+a_{2} x^{2}+\ldots$, let $S(f)=a_{0}$. Prove that $f=\sum_{n=0}^{\infty} S\left(D^{n}(f)\right) \frac{x^{n}}{n!}$.
