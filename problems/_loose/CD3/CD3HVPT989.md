---
tag: CD3HVPT989
kind: problem
type: answer
answer: n\cdot(n-1)x^{2}+n\cdotx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
52 Given: $n$ is a given positive integer, $x$ is a real number. Try to calculate: $\sum_{k=0}^{n} k^{2} \cdot C_{n}^{k} \cdot x^{k} \cdot(1-x)^{n-k}$. (Please write the answer in its simplest form.)
