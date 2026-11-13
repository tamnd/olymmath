---
tag: AE4YK7TBPX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h249173
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40045
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2008
    source: hf-ai-mo-aops
    label: 2008 Germany Team Selection Test
---
Find all real polynomials $ f$ with $ x,y \in \mathbb{R}$ such that
$$ 2 y f(x + y) + (x - y)(f(x) + f(y)) \geq 0.
$$
