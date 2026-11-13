---
tag: N76QF3WS7A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10905
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1998
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
There are 98 points on a circle. Two players play alternately as follows. Each player joins two points which are not already joined. The game ends when every point has been joined to at least one other. The winner is the last player to play. Does the first or second player have a winning strategy?
