---
tag: A1E5QRAS94
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h438850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6315
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2011
    source: hf-ai-mo-aops
    label: 2011 China Second Round Olympiad
---
Given $n\ge 4$ real numbers $a_{n}>...>a_{1} > 0$ . For $r > 0$ , let $f_{n}(r)$ be the number of triples $(i,j,k)$ with $1\leq i<j<k\leq n$ such that $\frac{a_{j}-a_{i}}{a_{k}-a_{j}}=r$ . Prove that ${f_{n}(r)}<\frac{n^{2}}{4}$ .
