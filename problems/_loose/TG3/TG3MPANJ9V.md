---
tag: TG3MPANJ9V
kind: problem
type: answer
answer: Inger has a winning strategy.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2019
    source: hf-mathnet
    label: Baltic Way Baltic Way 2019
---
The two women Inger and Ellen play the following game. On a large piece of paper are $2019$ six-pointed snowflakes $*$, placed in general position (and not touching). Each of the six arms of the snowflake has an extreme end, called its *apex*.

A move consists of drawing a curve connecting two apices, possibly belonging to the same snowflake. The curve may not intersect itself and may not touch any previously drawn curves. Also, it may not touch any of the snowflakes (except at the two apices forming its endpoints). Each apex may be used only once.

Inger makes the first move, and then the players alternate. The first player who cannot make a move has lost the game. Which player has a winning strategy?
