---
tag: EHQ87NV33S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042145
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59209
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160577
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2010
    source: hf-ai-mo-aops
    label: 2010 Singapore Junior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Find the sum of all the $5$ -digit integers which are not multiples of $11$ and whose digits are $1, 3, 4, 7, 9$ .
