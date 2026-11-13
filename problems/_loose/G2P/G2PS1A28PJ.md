---
tag: G2PS1A28PJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h587946
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11631
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2014
    source: hf-ai-mo-aops
    label: 2014 Olympic Revenge
---
Let $n$ a positive integer. In a $2n\times 2n$ board, $1\times n$ and $n\times 1$ pieces are arranged without overlap.
Call an arrangement **maximal** if it is impossible to put a new piece in the board without overlapping the previous ones.
Find the least $k$ such that there is a **maximal** arrangement that uses $k$ pieces.
