---
tag: 8S9F4TZSFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1979 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2928303
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39270
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1979
    source: hf-ai-mo-aops
    label: 1979 Bundeswettbewerb Mathematik
---
The $n$ participants of a tournament are numbered with $0$ through $n - 1$ . At the end of the tournament it turned out that for every team, numbered with $s$ and having $t$ points, there are exactly $t$ teams having $s$ points each. Determine all possibilities for the final score list.
