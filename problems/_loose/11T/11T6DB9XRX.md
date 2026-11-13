---
tag: 11T6DB9XRX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h421152
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7404
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2011
    source: hf-ai-mo-aops
    label: 2011 Tuymaada Olympiad
---
In a word of more than $10$ letters, any two consecutive letters are different. Prove that one can change places of two consecutive letters so that the resulting word is not *periodic*, that is, cannot be divided into equal subwords.
