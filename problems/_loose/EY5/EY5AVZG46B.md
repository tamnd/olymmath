---
tag: EY5AVZG46B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1973 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368139
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25179
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1973
    source: hf-ai-mo-aops
    label: 1973 IMO Shortlist
---
Prove that for all $n \in \mathbb N$ the following is true:
$$2^n \prod_{k=1}^n \sin \frac{k \pi}{2n+1} = \sqrt{2n+1}$$
