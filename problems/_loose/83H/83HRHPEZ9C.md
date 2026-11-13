---
tag: 83HRHPEZ9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610436
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2616
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Germany Team Selection Test
  - at: isl/2024
    source: hf-mathnet
    label: IMO IMO2024 Shortlisted Problems
---
Let $n$ be a positive integer. The integers $1, 2, 3,\,\ldots, n^2$ are to be written in the cells of an $n\times n$ board such that each integer is written in exactly one cell and each cell contains exactly one integer. For every integer $d$ with $d\mid n$ , the $d$ -*division* of the board is the division of the board into $(n/d)^2$ nonoverlapping sub-boards, each of size $d\times d$ , such that each cell is contained in exactly one $d\times d$ sub-board.

We say that $n$ is a *cool number* if the integers can be written on the $n\times n$ board such that, for each integer $d$ with $d\mid n$ and $1<d<n$ , in the $d$ -division of the board, the sum of the integers written in each $d\times d$ sub-board is not a multiple of $d$ .

Determine all even cool numbers.

*Proposed by Melek Güngör, Türkiye*
