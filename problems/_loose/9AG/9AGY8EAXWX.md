---
tag: 9AGY8EAXWX
kind: problem
type: answer
answer: \tanh(2021 \tanh^{-1}(2020))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_n$ be a sequence defined by $f_0=2020$ and
$$f_{n+1} = \frac{f_n + 2020}{2020f_n + 1}$$
for all $n \geq 0$. Determine $f_{2020}$.
