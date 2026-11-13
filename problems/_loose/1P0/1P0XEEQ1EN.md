---
tag: 1P0XEEQ1EN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite (in both directions) strip of squares, indexed by the integers, are placed several stones (more than one may be placed on a single square). We perform a sequence of moves of one of the following types:
(a) Remove one stone from each of the squares $n - 1$ and $n$ and place one stone on square $n + 1$.
(b) Remove two stones from square $n$ and place one stone on each of the squares $n + 1$, $n - 2$.
Prove that any sequence of such moves will lead to a position in which no further moves can be made, and moreover that this position is independent of the sequence of moves.
*D. Fon-der-Flaas*
