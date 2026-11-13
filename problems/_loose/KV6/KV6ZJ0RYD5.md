---
tag: KV6ZJ0RYD5
kind: problem
type: answer
answer: (p, n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(p,n)$ of integers so that $p$ is a prime and there exists $x,y\not\equiv0\pmod p$ with
$$x^2+y^2\equiv n\pmod p.$$
