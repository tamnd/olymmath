---
tag: 6XSGYYB5NK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3503631
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2024
    source: hf-ai-mo-aops
    label: 2024 Irish Math Olympiad
---
Let $\mathbb{Z}_+=\{1,2,3,4...\}$ be the set of all positive integers. Determine all functions $f : \mathbb{Z}_+ \mapsto \mathbb{Z}_+$ that satisfy:

- $f(mn)+1=f(m)+f(n)$ for all positive integers $m$ and $n$ ;
- $f(2024)=1$ ;
- $f(n)=1$ for all positive $n\equiv22\pmod{23}$ .
