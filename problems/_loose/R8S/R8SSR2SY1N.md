---
tag: R8SSR2SY1N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Danube Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h1880106
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22629
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223777
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2013
    source: hf-ai-mo-aops
    label: 2013 Danube Mathematical Competition
  - at: danube
    source: hf-mathnet
    label: Romania The Danube Mathematical Competition
---
Show that, for every integer $r \ge 2$ , there exists an $r$ -chromatic simple graph (no loops, nor multiple edges) which has no cycle of less than $6$ edges
