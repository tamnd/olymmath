---
tag: KZ28JN0C5Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A strip consists of $n$ squares which are numerated in their order by integers $1,2,3,..., n$. In the beginning, one square is empty while each remaining square contains one piece. Whenever a square contains a piece and its some neighbouring square contains another piece while the square immediately following the neighbouring square is empty, one may raise the first piece over the second one to the empty square, removing the second piece from the strip.
Find all possibilites which square can be initially empty, if it is possible to reach a state where the strip contains only one piece and
a) $n = 2008$,
b) $n = 2009$.
