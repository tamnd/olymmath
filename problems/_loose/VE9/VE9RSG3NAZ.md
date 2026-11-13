---
tag: VE9RSG3NAZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2986387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60535
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2013
    source: hf-ai-mo-aops
    label: 2013 Switzerland - Final Round
---
Each of $2n + 1$ students chooses a finite, nonempty set of consecutive integers . Two students are friends if they have chosen a common number. Everyone student is friends with at least $n$ other students. Show that there is a student who is friends with everyone else.
