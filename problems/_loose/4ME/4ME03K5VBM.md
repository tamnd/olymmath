---
tag: 4ME03K5VBM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bangladesh Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3013579
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30888
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2023
    source: hf-ai-mo-aops
    label: 2023 Bangladesh Mathematical Olympiad
---
For any positive integer $n$ , define $f(n)$ to be the smallest positive integer that does not divide $n$ . For example, $f(1)=2$ , $f(6)=4$ . Prove that for any positive integer $n$ , either $f(f(n))$ or $f(f(f(n)))$ must be equal to $2$ .
