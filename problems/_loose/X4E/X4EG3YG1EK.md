---
tag: X4EG3YG1EK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h1994714
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39420
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1999
    source: hf-ai-mo-aops
    label: 1999 Bundeswettbewerb Mathematik
---
The sequences $(a_n)$ and $(b_n)$ are defined by $a_1 = b_1 = 1$ and $a_{n+1} = a_n +b_n, b_{n+1} = a_nb_n$ for $n = 1,2,...$ Show that every two distinct terms of the sequence $(a_n)$ are coprime
