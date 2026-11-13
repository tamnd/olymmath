---
tag: FJ8YMYZKQT
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265687
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_n = n(2n+1)$. Evaluate
$$
\biggl | \sum_{1 \le j < k \le 36} \sin\bigl( \frac{\pi}{6}(a_k-a_j) \bigr) \biggr |.
$$
