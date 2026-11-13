---
tag: JKQQJHVM01
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984893
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60524
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2009
    source: hf-ai-mo-aops
    label: 2009 Switzerland - Final Round
---
Given is a floor plan composed of $n$ unit squares. Albert and Berta want to cover this floor with tiles, with all tiles having the shape of a $1\times 2$ domino or a $T$ -tetromino. Albert only has tiles from one color, while Berta has two-color dominoes and tetrominoes available in four colors. Albert can use this floor plan in $a$ ways to cover tiles, Berta in $ b$ ways. Assuming that $a \ne 0$ , determine the ratio $b/a$ .
