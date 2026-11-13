---
tag: 33PVEA3CR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1973 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h146595
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39222
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1973
    source: hf-ai-mo-aops
    label: 1973 Bundeswettbewerb Mathematik
---
We work in the decimal system and the following operations are allowed to be done with a positive integer:
a) append $4$ at the end of the number.
b) append $0$ at the end of the number.
c) divide the number by $2$ if it's even.
Show that starting with $4$ , we can reach every positive integer by a finite number of these operations
