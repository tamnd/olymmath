---
tag: C3ACZDMT4E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\phi(n)$ be the number of positive integers less than or equal to $n$ that are relatively prime to $n$. Evaluate

$$\lim_{m \rightarrow \infty}\frac{\sum_{n = 1}^m \phi(60n)}{\sum_{n = 1}^m \phi(n)}$$
