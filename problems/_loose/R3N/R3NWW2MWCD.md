---
tag: R3NWW2MWCD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2965028
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39308
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1984
    source: hf-ai-mo-aops
    label: 1984 Bundeswettbewerb Mathematik
---
The sequences $a_1, a_2, a_3,...$ and $b_1, b_2, b_3,... $ suffices for all positive integers $n$ of the following recursion: $a_{n+1} = a_n - b_n$ and $b_{n+1} = 2b_n$ , if $a_n \ge b_n$ , $a_{n+1} = 2a_n$ and $b_{n+1} = b_n - a_n$ , if $a_n < b_n$ .
For which pairs $(a_1, b_1)$ of positive real initial terms is there an index $k$ with $a_k = 0$ ?
