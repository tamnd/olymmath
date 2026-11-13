---
tag: VTD1QK7DFS
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given positive integer $n,$ find
$$\sum_{k=0}^{n} \left(\frac{\binom{n}{k} \cdot (-1)^k}{(n+1-k)^2} - \frac{(-1)^n}{(k+1)(n+1)}\right).$$
