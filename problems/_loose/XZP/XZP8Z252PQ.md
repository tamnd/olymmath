---
tag: XZP8Z252PQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 AIME Problems
    url: https://artofproblemsolving.com/community/c6h197934
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64112
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200225
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: aime
    source: hf-ai-mo-aops
    label: 2008 AIME Problems
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Find the largest integer $ n$ satisfying the following conditions:
(i) $ n^2$ can be expressed as the difference of two consecutive cubes;
(ii) $ 2n+79$ is a perfect square.
