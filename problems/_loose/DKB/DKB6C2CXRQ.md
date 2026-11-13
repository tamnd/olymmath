---
tag: DKB6C2CXRQ
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(x_{n}\right)_{n \in \mathbb{N}^{*}}$ be defined such that $x_{1}=1$ and $x_{n+1}=x_{n}+n$, for any $n \in \mathbb{N}^{*}$. Calculate $\lim _{n \rightarrow \infty} \sum_{k=2}^{n} \frac{1}{x_{k}-1}$.
