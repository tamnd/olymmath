---
tag: FT8PR5WGVC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all strictly increasing sequences $\{a_n\}_{n=0}^\infty$ of positive integers such that for all positive integers $k,m,n$
$$\frac{a_{n+1} +a_{n+2} +\dots +a_{n+k}}{k+m}$$ is not an integer larger than $2020$.
