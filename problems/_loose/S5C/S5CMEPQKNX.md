---
tag: S5CMEPQKNX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2074752
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38660
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236006
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Estonia National Olympiad
---
Let $PQRS$ be a cyclic quadrilateral with $\angle PSR = 90^o$ , and let $H,K$ be the projections of $Q$ on the lines $PR$ and $PS$ , respectively. Prove that the line $HK$ passes through the midpoint of the segment $SQ$ .
