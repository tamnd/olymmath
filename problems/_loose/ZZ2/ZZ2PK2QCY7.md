---
tag: ZZ2PK2QCY7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The vertices of a regular polygon with $N$ sides are marked on the blackboard. Ana and Beto play alternately, Ana begins. Each player, in turn, must do the following:
$\bullet$ join two vertices with a segment, without cutting another already marked segment; or
$\bullet$ delete a vertex that does not belong to any marked segment.
The player who cannot take any action on his turn loses the game. Determine which of the two players can guarantee victory:
a) if $N=28$
b) if $N=29$
