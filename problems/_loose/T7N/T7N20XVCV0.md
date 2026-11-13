---
tag: T7N20XVCV0
kind: problem
type: answer
answer: a_{n}=n^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(a_{n}\right)_{n \geq 1}$ defined by $a_{0}=0, a_{1}=1$ and $a_{n+1}=2 \sqrt{a_{n+1} \cdot a_{n}}-a_{n}+1, n \geq 1$. Show that $a_{n}=\sum_{k=1}^{n} \sqrt{1+4 \sqrt{a_{k} \cdot a_{k-1}}}$

Florin Rotaru, Focșani (GMB nr.9/2014)
