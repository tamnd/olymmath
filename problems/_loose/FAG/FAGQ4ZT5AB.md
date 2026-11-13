---
tag: FAGQ4ZT5AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2027198
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38583
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/1996
    source: hf-ai-mo-aops
    label: 1996 Estonia National Olympiad
---
John and Mary play the following game. First they choose integers $n > m > 0$ and put $n$ sweets on an empty table. Then they start to make moves alternately. A move consists of choosing a nonnegative integer $k\le m$ and taking $k$ sweets away from the table (if $k = 0$ , nothing happens in fact). In doing so no value for $k$ can be chosen more than once (by none of the players) or can be greater than the number of sweets at the table at the moment of choice. The game is over when one of the players can make no more moves.
John and Mary decided that at the beginning Mary chooses the numbers $m$ and $n$ and then John determines whether the performer of the last move wins or looses. Can Mary choose $m$ and $n$ in such way that independently of John's decision she will be able to win?
