---
tag: DNVQA7DHC5
kind: problem
type: answer
answer: \sum_{i=1}^{n}x_{i}<\frac{8n}{15}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3, x_{i} \in[-1,+\infty), i \in\{1$, $2, \cdots, n\}$, and $\sum_{i=1}^{n} x_{i}^{5}=0$. Prove: $\sum_{i=1}^{n} x_{i}<\frac{8 n}{15}$.
