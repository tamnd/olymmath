---
tag: 4EKTH10MBV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3335683
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1991 Tournament Of Towns
---
All internal angles of a convex octagon $ABCDEFGH$ are equal to each other and the edges are alternatively equal: $$ AB = CD = EF = GH,BC = DE = FG = HA $$ (we call such an octagon semiregular). The diagonals $AD$ , $BE$ , $CF$ , $DG$ , $EH$ , $FA$ , $GB$ and $HC$ divide the inside of the octagon into certain parts. Consider the part containing the centre of the octagon. If that part is an octagon, then this central octagon is semiregular (this is obvious). In this case we construct similar diagonals in the central octagon and so on. If, after several steps, the central figure is not an octagon, then the process stops. Prove that if the process never stops, then the initial octagon was regular.

(A. Tolpygo, Kiev)
