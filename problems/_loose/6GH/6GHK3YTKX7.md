---
tag: 6GHK3YTKX7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all subsets of $\mathbb N$ like $S$ such that
$$\forall m,n \in S \implies \dfrac{m+n}{\gcd(m,n)} \in S $$
