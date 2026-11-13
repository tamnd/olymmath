---
tag: 4XXCRVPWGY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Danube Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h1879911
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22639
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223787
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2014
    source: hf-ai-mo-aops
    label: 2014 Danube Mathematical Competition
  - at: danube/2014
    source: hf-mathnet
    label: Romania THE 2014 DANUBE MATHEMATICAL COMPETITION
---
Let $S$ be a set of positive integers such that $\lfloor \sqrt{x}\rfloor =\lfloor \sqrt{y}\rfloor $ for all $x, y \in S$ . Show that the products $xy$ , where $x, y \in S$ , are pairwise distinct.
