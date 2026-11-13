---
tag: MQZMTCB1ZP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The two cats Fitz and Will play the following game. On a blackboard is written the expression
$$
x^{100} + {\square} x^{99} + {\square} x^{98} + {\square} x^{97} + \dots + {\square } x^2 + {\square} x +1.
$$
Both cats take alternate turns replacing one $\square$ with a $0$ or $1$, with Fitz going first, until (after 99 turns) all the blanks have been filled. If the resulting polynomial obtained has a real root, then Will wins, otherwise Fitz wins. Determine, with proof, which player has a winning strategy.
