---
tag: D5PK1QX1M3
kind: problem
type: answer
answer: 0,1,2,3,\ldots,98
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a party, 100 people arrived, some of whom know each other. All acquaintances are mutual, and no new acquaintances are made during the party.

During the party, the gong struck a hundred times. After the first strike, all those who do not know anyone else among the remaining participants leave. After the second strike, all those who know exactly one of the remaining participants leave. After the third strike, all those who know exactly two of the remaining participants leave. This continues similarly - after the $k$-th strike, all those who know exactly $k-1$ people still at the party leave. Finally, after the hundredth strike, all those who know exactly 99 of the remaining participants leave. In the end, $n$ people remain. What values can the number $n$ take?
