---
tag: APANE6A1KF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h1994724
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39411
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1998
    source: hf-ai-mo-aops
    label: 1998 Bundeswettbewerb Mathematik
---
Prove that there exists an infinite sequence of perfect squares with the following properties:
(i) The arithmetic mean of any two consecutive terms is a perfect square,
(ii) Every two consecutive terms are coprime,
(iii) The sequence is strictly increasing.
