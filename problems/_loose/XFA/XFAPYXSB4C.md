---
tag: XFAPYXSB4C
kind: problem
type: answer
answer: "2019"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a real number $a$ and an integer $n(\geq 2)$, define
$$S_n (a) = n^a \sum_{k=1}^{n-1} \frac{1}{k^{2019} (n-k)^{2019}}$$
Find every value of $a$ s.t. sequence $\{S_n(a)\}_{n\geq 2}$ converges to a positive real.
