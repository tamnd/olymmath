---
tag: 5M4FVYV6MG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h423189
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6379
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208518
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech-Polish-Slovak_Mathematical_Match/train/0000.parquet#row=39
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2011
    source: hf-ai-mo-aops
    label: 2011 Czech-Polish-Slovak Match
---
In convex quadrilateral $ABCD$ , let $M$ and $N$ denote the midpoints of sides $AD$ and $BC$ , respectively. On sides $AB$ and $CD$ are points $K$ and $L$ , respectively, such that $\angle MKA=\angle NLC$ . Prove that if lines $BD$ , $KM$ , and $LN$ are concurrent, then $$ \angle KMN = \angle BDC \text{and} \angle LNM=\angle ABD.$$
