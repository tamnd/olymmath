---
tag: 94MZCT05TP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2065980
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28013
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1987 Tournament Of Towns
---
Two players play a game on an $8$ by $8$ chessboard according to the following rules. The first player places a knight on the board. Then each player in turn moves the knight , but cannot place it on a square where it has been before. The player who has no move loses. Who wins in an errorless game , the first player or the second one? (The knight moves are the normal ones. )

(V . Zudilin , year 12 student , Beltsy (Moldova))
