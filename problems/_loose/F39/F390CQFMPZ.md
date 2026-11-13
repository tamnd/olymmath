---
tag: F390CQFMPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1610576
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54636
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248141
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=91
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Romania Team Selection Test
  - at: ro-tst
    source: hf-mathnet
    label: Romania THE 68th NMO SELECTION TESTS FOR THE BALKAN AND INTERNATIONAL MATHEMATICAL OLYMPIADS
---
Consider a finite collection of 3-element sets $A_i$ , no two of which share more than one element, whose union has cardinality 2017. Show that the elements of this union can be coloured with two colors, blue and red, so that at least 64 elements are blue and each $A_i$ has at least one red element.
