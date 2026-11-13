---
tag: NW60YQJZXT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130774
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $n \geq 2, x_{1}, x_{2}, \ldots, x_{n} \in R^{+}, \sum_{k=1}^{n} x_{k}=n$, prove: $\sum_{k=1}^{n} \frac{1}{1+x_{k}+x_{k+1}} \leq \frac{n}{1+2 \prod_{k=1}^{n} x_{k}}$, here $x_{n+1}=x_{1}$.
