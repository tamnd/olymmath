---
tag: 58VN8WYDZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024398
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28869
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
Each cell of a $10 \times 10$ board is painted red, blue or white, with exactly twenty of them red. No two adjacent cells are painted in the same colour. A domino consists of two adjacent cells, and it is said to be good if one cell is blue and the other is white.
(a) Prove that it is always possible to cut out $30$ good dominoes from such a board.
(b) Give an example of such a board from which it is possible to cut out $40$ good dominoes.
(c) Give an example of such a board from which it is not possible to cut out more than $30$ good dominoes.
