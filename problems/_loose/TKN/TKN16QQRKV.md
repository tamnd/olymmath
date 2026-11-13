---
tag: TKN16QQRKV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h414621
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6524
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208655
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2011
    source: hf-ai-mo-aops
    label: 2011 IMAC Arhimede
---
Find all functions $f: \mathbb{N} \rightarrow [0, +\infty)$ such that $f(1000)=10$ and $f(n+1)= \sum_{k=1}^n \frac{1}{f^2(k) + f(k)f(k+1) + f^2(k+1)}$ for all $n \in \mathbb{N}$ . (Here, $f^2(i)$ means $(f(i))^2$ .)
