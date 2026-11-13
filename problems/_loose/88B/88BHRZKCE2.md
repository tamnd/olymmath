---
tag: 88BHRZKCE2
kind: problem
type: answer
answer: "502"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite chessboard, a rook moves alternately horizontally and vertically. The rook moves one square on the first move, two squares on the second move, and in general, $n$ squares on the $n$-th move, for any $n \in \mathbb{N}^{*}$.

Let $T$ be the set of natural numbers $n$ with the property that there exists a sequence of $n$ moves after which the rook returns to its initial position.

a) Show that $2013 \notin T$.

b) Determine the number of elements in the set $T \cap\{1,2, . ., 2012\}$.
