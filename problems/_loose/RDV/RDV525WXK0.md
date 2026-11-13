---
tag: RDV525WXK0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $ f :\mathbb{Z}\mapsto\mathbb{Z} $ such that following conditions holds:
$a)$ $f(n) \cdot f(-n)=f(n^2)$ for all $n\in\mathbb{Z}$
$b)$ $f(m+n)=f(m)+f(n)+2mn$ for all $m,n\in\mathbb{Z}$
