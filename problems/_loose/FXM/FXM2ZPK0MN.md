---
tag: FXM2ZPK0MN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1973 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h146593
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39220
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236520
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
$n$ persons sit around a round table. The number of persons having the same gender than the person at the right of them is the same as the number of those it isn't true for.
Show that $4|n$ .
