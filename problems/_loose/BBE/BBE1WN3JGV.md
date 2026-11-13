---
tag: BBE1WN3JGV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75782
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board, there is a list of numbers $1,2,3,4,5,6$ and the "equation"

$$
\bar{\square} x^{2}+\frac{\square}{\square} x+\frac{\square}{\square}=0 .
$$

Marek and Tomáš are playing the following game. First, Marek chooses any number from the list, writes it into one of the empty boxes in the "equation," and erases the number from the list. Then Tomáš chooses one of the remaining numbers, writes it into another empty box, and erases it from the list. Next, Marek does the same, and finally, Tomáš fills in the three remaining numbers into the three remaining empty boxes in the "equation." Marek wins if the resulting quadratic equation with rational coefficients has two distinct real roots; otherwise, Tomáš wins. Determine which player can win regardless of the other player's moves.
