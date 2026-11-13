---
tag: R7SB6NSY88
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1] \rightarrow \mathbb{R}$ be a differentiable function, with a continuous derivative, and let $s_{n}=\sum_{k=1}^{n} f\left(\frac{k}{n}\right)$.

Show that the sequence $\left(s_{n+1}-s_{n}\right)_{n \in \mathbb{N}^{*}}$ converges to $\int_{0}^{1} f(x) \mathrm{d} x$.
