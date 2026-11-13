---
tag: KRE3GSPEBQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022133
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28924
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
There are $n$ red sticks and $n$ blue sticks. The sticks of each colour have the same total length, and can be used to construct an $n$ -gon. We wish to repaint one stick of each colour in the other colour so that the sticks of each colour can still be used to construct an $n$ -gon. Is this always possible if
(a) $n = 3$ ,
(b) $n > 3$ ?
