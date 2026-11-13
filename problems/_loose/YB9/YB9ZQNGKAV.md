---
tag: YB9ZQNGKAV
kind: problem
type: answer
answer: 2[\frac{n}{2}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, let $z_{1}, z_{2}, \ldots, z_{n}$ be $n$ complex numbers with modulus not greater than 1. Try to find the maximum possible value of $\left|\sum_{\mathrm{k}=1}^{\mathrm{n}} \mathrm{z}_{\mathrm{k}}^{2}\right|-\left|\sum_{\mathrm{k}=1}^{\mathrm{n}} \mathrm{z}_{\mathrm{k}}\right|^{2}$.
