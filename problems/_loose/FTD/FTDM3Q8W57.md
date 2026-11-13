---
tag: FTDM3Q8W57
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 24th question, given an integer $n \geq 3, x_{i} \in \mathbb{R}^{+}(1 \leq i \leq n)$, and $x_{i+n}=x_{i}$, prove:
$$
\sum_{i=1}^{n} \frac{\sum_{k=i}^{n+i-2} x_{k}}{x_{i}^{2}+\sum_{k=i+1}^{n+i-2} x_{k}+1} \leq n-1 \text { . }
$$
