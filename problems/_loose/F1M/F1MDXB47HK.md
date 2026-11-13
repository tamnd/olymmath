---
tag: F1MDXB47HK
kind: problem
type: answer
answer: \binom{n+}{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's place ourselves on a grid $\mathbb{Z} \times \mathbb{Z}$. We start at the origin and only allow moves of one step to the right or one step up $(+(1,0)$ or $+(0,1))$. How many different paths can we take to get to the point $(m, n)$?
