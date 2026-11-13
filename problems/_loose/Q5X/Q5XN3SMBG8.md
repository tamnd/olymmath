---
tag: Q5XN3SMBG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h462017
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7163
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2011
    source: hf-ai-mo-aops
    label: 2011 Romania Team Selection Test
---
Determine all real-valued functions $f$ on the set of real numbers satisfying
$$2f(x)=f(x+y)+f(x+2y)$$
for all real numbers $x$ and all non-negative real numbers $y$ .
