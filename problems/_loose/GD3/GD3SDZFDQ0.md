---
tag: GD3SDZFDQ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1978 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1872873
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55296
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1978
    source: hf-ai-mo-aops
    label: 1978 All Soviet Union Mathematical Olympiad
---
Given a simple number $p>3$ . Consider the set $M$ of the pairs $(x,y)$ with the integer coordinates in the plane such that $0 \le x < p, 0 \le y < p$ . Prove that it is possible to mark $p$ points of $M$ such that not a triple of marked points will belong to one line and there will be no parallelogram with the vertices in the marked points.
