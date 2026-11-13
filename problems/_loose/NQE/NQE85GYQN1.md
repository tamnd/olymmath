---
tag: NQE85GYQN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528894
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25973
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11112
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=335
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2008
    source: hf-ai-mo-aops
    label: 2008 JBMO Shortlist
  - at: jbmo-sl/2008
    source: hf-numina-olympiads
    label: JBMO-SL
  - at: jbmo-sl/2008
    source: hf-mathnet
    label: JBMO 2008 Shortlist JBMO
---
Is it possible to arrange the numbers $1^1, 2^2,..., 2008^{2008}$ one after the other, in such a way that the obtained number is a perfect square? (Explain your answer.)
