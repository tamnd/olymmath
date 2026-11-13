---
tag: 6XXBW5S06M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2964369
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39365
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1992
    source: hf-ai-mo-aops
    label: 1992 Bundeswettbewerb Mathematik
---
A positive integer $n$ is called *good* if they sum up in one and only one way at least of two positive integers whose product also has the value $n$ . Here representations that differ only in the order of the summands are considered the same viewed. Find all good positive integers.
