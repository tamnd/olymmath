---
tag: QFJQKJV88Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomial $P(X)=X^{4}+\square X^{3}+\square X^{2}+\square X+\square$, where each square represents a blank where a coefficient will be placed, the following game is proposed between two players: Alternately, the first and the second player choose an empty blank and place an integer other than zero in it until all four blanks are filled. If the resulting polynomial has at least two integer roots, the second player wins; otherwise, the first player wins.

Prove that, by choosing the appropriate strategy, the first player can always win.
