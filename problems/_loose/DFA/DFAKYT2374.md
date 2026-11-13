---
tag: DFAKYT2374
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1971 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h91403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39203
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1971
    source: hf-ai-mo-aops
    label: 1971 Bundeswettbewerb Mathematik
---
The numbers $1,2,...,1970$ are written on a board. One is allowed to remove $2$ numbers and to write down their difference instead. When repeated often enough, only one number remains. Show that this number is odd.
