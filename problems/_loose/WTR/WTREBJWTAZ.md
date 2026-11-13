---
tag: WTREBJWTAZ
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=156978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, Blake and Ruby, play the following game on an infinite grid of unit squares, all initially colored white. The players take turns starting with Blake. On Blake's turn, Blake selects one white unit square and colors it blue. On Ruby's turn, Ruby selects two white unit squares and colors them red. The players alternate until Blake decides to end the game. At this point, Blake gets a score, given by the number of unit squares in the largest (in terms of area) simple polygon containing only blue unit squares.
What is the largest score Blake can guarantee?
