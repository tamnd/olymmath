---
tag: NPRJ0KNEK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The thirty-seventh question: On an $\mathrm{m} \times \mathrm{m}$ chessboard, place $\mathrm{n}$ strips (a strip refers to a rectangle that is 1 unit wide and of any length), where a $1 \times \mathrm{k}$ strip should exactly cover $\mathrm{k}$ squares, and the squares covered by the strips do not overlap. Prove: The chessboard can have at most $\mathrm{n}+1$ disconnected blank regions (a blank region $\mathrm{T}$ refers to a set of squares where no square is covered by a strip; connect the center points of the squares in $\mathrm{T}$ in the following way to form a connected graph: $\forall a \in T$ and $b \in T$, the center points of $a$ and $\mathrm{b}$ are connected if and only if $\mathrm{a}$ and $\mathrm{b}$ share a common edge; two blank regions $\mathrm{T}$ and $\mathrm{S}$ are disconnected if $\forall \mathrm{a} \in \mathrm{T}$ and $\mathrm{b} \in \mathrm{S}$, $\mathrm{a}$ and $\mathrm{b}$ do not share a common edge).
