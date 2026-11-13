---
tag: PDQMZBNJNH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h65867
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44180
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240453
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=74
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Iran MO (3rd Round)
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
Let $n$ points be given on a circle, and let $nk + 1$ chords between these points be drawn, where $2k+1 < n$ . Show that it is possible to select $k+1$ of the chords so that no two of them intersect.
