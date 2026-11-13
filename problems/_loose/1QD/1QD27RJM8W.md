---
tag: 1QD27RJM8W
kind: problem
type: answer
answer: \ln2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I_{n}=n \int_{0}^{1} \frac{\cos x}{1+e^{n x}} d x$, where $n \in \mathbb{N}^{*}$. Calculate: $\lim _{n \rightarrow \infty} I_{n}$.
