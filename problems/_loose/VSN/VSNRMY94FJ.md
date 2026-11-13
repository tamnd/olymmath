---
tag: VSNRMY94FJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2794866
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18255
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219822
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Romania Team Selection Test
---
Given an integer $n\geq 2,$ colour red exactly $n$ cells of an infinite sheet of grid paper. A rectangular grid array is called special if it contains at least two red opposite corner cells; single red cells and 1-row or 1-column grid arrays whose end-cells are both red are special. Given a configuration of exactly $n$ red cells, let $N$ be the largest number of red cells a special rectangular grid array may contain. Determine the least value $N$ may take over all possible configurations of exactly $n$ red cells
