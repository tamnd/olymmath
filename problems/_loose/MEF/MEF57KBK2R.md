---
tag: MEF57KBK2R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1971 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h91406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39205
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1971
    source: hf-ai-mo-aops
    label: 1971 Bundeswettbewerb Mathematik
---
Let $P$ and $Q$ be two horizontal neighbouring squares on a $n \times n$ chess board, $P$ on the left and $Q$ on the right. On the left square $P$ there is a stone that shall be moved around the board. The following moves are allowed:
1) move it one square upwards
2) move it one square to the right
3) move it one square down and one square to the left (diagonal movement)
Example: you can get from $e5$ to $f5$ , $e6$ and $d4$ .
Show that for no $n$ there is tour visting every square exactly once and ending in $Q$ .
