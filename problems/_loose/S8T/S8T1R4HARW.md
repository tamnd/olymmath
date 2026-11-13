---
tag: S8T1R4HARW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $0=x_{1}<x_{2}<...<x_{2n+1}=1$ are real numbers with $x_{i+1}-x_{i} \leq h$ for $1 \leq i \leq 2n$, show that
$\frac{1-h}{2}<\sum_{i=1}^{n}{x_{2i}(x_{2i+1}-x_{2i-1})}\leq \frac{1+h}{2}$
