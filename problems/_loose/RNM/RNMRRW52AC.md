---
tag: RNMRRW52AC
kind: problem
type: answer
answer: "203"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
7 Does there exist a row of Pascal's Triangle containing four distinct elements $a, b, c$ and $d$ such that $b=2 a$ and $d=2 c$ ?
Note that the values must be distinct, so $a, b, c, d$ must be four different numbers.
Recall that Pascal's triangle is the pattern of numbers that begins as follows
where the elements of each row are the sums of pairs of adjacent elements of the prior row. For example, $10=$ $4+6$. Also note that the last row displayed above contains the four elements $a=5, b=10, d=10, c=5$, satisfying $b=2 a$ and $d=2 c$, but these four elements are NOT distinct.
