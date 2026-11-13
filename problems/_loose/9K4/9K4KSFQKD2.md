---
tag: 9K4KSFQKD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1971 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h91404
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39204
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236504
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
You are given a piece of paper. You can cut the paper into $8$ or $12$ pieces. Then you can do so for any of the new pieces or let them uncut and so on.
Can you get exactly $60$ pieces¿ Show that you can get every number of pieces greater than $60$ .
