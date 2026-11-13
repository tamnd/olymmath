---
tag: GFB6XFKPRW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ana and Bojan are playing a game: Ana chooses positive integers $a$ and $b$ and each one gets $2016$ pieces of paper, visible to both - Ana gets the pieces with the numbers $a+1$, $a+2$, $\ldots$, $a+2016$ and Bojan gets the pieces with the numbers $b+1$, $b+2$, $\ldots$, $b+2016$ on them. Afterwards, one of them writes the number $a+b$ on the board. In every move, Ana chooses one of her pieces of paper and hands it to Bojan who chooses one of his own, writes their sum on the board and removes them both from the game. When they run out of pieces, they multiply the numbers on the board together. If the result has the same remainder than $a+b$ when divided by $2017$, Bojan wins, otherwise, Ana wins. Who has the winning strategy?
