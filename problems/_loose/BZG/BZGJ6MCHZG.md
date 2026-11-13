---
tag: BZGJ6MCHZG
kind: problem
type: answer
answer: "335"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For how many integers $n$ with $1 \le n \le 2012$ is the product
$$
\prod_{k=0}^{n-1} \left( \left( 1 + e^{2 \pi i k / n} \right)^n + 1 \right)
$$
equal to zero?
