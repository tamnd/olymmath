---
tag: YBCD3KHAVP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Mike and Harry play a game on an $8 \times 8$ board. For some positive integer $k$, Mike chooses $k$ squares and writes an $M$ in each of them. Harry then chooses $k+1$ squares and writes an $H$ in each of them. After Harry is done, Mike wins if there is a sequence of letters forming " $H M M$ " or " $M M H$," when read either horizontally or vertically, and Harry wins otherwise. Determine the smallest value of $k$ for which Mike has a winning strategy.
