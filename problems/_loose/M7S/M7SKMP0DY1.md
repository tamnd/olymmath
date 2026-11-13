---
tag: M7SKMP0DY1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3513494
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50751
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154585
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 25th Philippine MO Area Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 25th Philippine Mathematical Olympiad Area Stage
---
In triangle $ABC$ with orthocenter $H$ , $AB=13$ , $BC=21$ and $CA=20$ . The perpendicular bisector of $CH$ meets $BC$ at $P$ and lines $PH$ and $AB$ meet at $Q$ . The line through $Q$ perpendicular to $PQ$ meets $AH$ at $X$ . The length of $AX$ can be written in the form $p/q$ , where $p$ and $q$ are relatively prime positive integers. Find $p+q$ .
