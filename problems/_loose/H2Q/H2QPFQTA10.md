---
tag: H2QPFQTA10
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h201582
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31762
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Bosnia And Herzegovina - Regional Olympiad
---
$ n$ points (no three being collinear) are given in a plane. Some points are connected and they form $ k$ segments. If no three of these segments form triangle ( equiv. there are no three points, such that each two of them are connected) prove that $ k \leq \left \lfloor \frac {n^{2}}{4}\right\rfloor$
