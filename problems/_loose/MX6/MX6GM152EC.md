---
tag: MX6GM152EC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097818
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28458
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1998 Tournament Of Towns
---
On an $8 \times 8$ chessboard, $17$ cells are marked. Prove that one can always choose two cells among the marked ones so that a Knight will need at least three moves to go from one of the chosen cells to the other.

(R Zhenodarov)
