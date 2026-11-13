---
tag: 80FMKSRED5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h623845
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8161
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210231
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2012
    source: hf-ai-mo-aops
    label: 2012 JBMO ShortLists
  - at: jbmo-sl
    source: hf-mathnet
    label: JBMO JBMO Shortlist
---
Do there exist prime numbers $p$ and $q$ such that $p^2(p^3-1)=q(q+1)$ ?
