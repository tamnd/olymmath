---
tag: TMMG0RC260
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2065937
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28002
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228351
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
Nine pawns forming a $3$ by $3$ square are placed in the lower left hand corner of an $8$ by $8$ chessboard. Any pawn may jump over another one standing next to it into a free square, i .e. may be reflected symmetrically with respect to a neighb our's centre (jumps may be horizontal , vertical or diagonal) . It is required to rearrange the nine pawns in another corner of the chessboard (in another $3$ by $3$ square) by means of such jumps. Can the pawns be thus re-arranged in the
(a) upper left hand corner?
(b) upper right hand corner?

(J . E . Briskin)
