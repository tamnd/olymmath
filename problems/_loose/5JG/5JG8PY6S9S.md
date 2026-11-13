---
tag: 5JG8PY6S9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1685018
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16557
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218200
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2018
    source: hf-ai-mo-aops
    label: 2018 Hong Kong TST
---
Given triangle $ABC$ , let $D$ be an inner point of segment $BC$ . Let $P$ and $Q$ be distinct inner points of the segment $AD$ . Let $K=BP\cap AC, L=CP\cap AB, E=BQ\cap AC, F=CQ\cap AB$ . Given that $KL\parallel EF$ , find all possible values of the ratio $BD:DC$ .
