---
tag: CBFKAWZPEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83743
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22998
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2001
    source: hf-ai-mo-aops
    label: 2001 IberoAmerican
---
In a board of $2000\times2001$ squares with integer coordinates $(x,y)$ , $0\leq{x}\leq1999$ and $0\leq{y}\leq2000$ . A ship in the table moves in the following way: before a move, the ship is in position $(x,y)$ and has a velocity of $(h,v)$ where $x,y,h,v$ are integers. The ship chooses new velocity $(h^\prime,v^\prime)$ such that $h^\prime-h,v^\prime-v\in\{-1,0,1\}$ . The new position of the ship will be $(x^\prime,y^\prime)$ where $x^\prime$ is the remainder of the division of $x+h^\prime$ by $2000$ and $y^\prime$ is the remainder of the division of $y+v^\prime$ by $2001$ .

There are two ships on the board: The Martian ship and the Human trying to capture it. Initially each ship is in a different square and has velocity $(0,0)$ . The Human is the first to move; thereafter they continue moving alternatively.

Is there a strategy for the Human to capture the Martian, independent of the initial positions and the Martian's moves?

*Note*: The Human catches the Martian ship by reaching the same position as the Martian ship after the same move.
