---
tag: A95AY6ESJJ
kind: problem
type: answer
answer: (((((0+3)+2)\cdot8)+4)\cdot9)+7)\cdot5)=2015
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nезнayka came up with an entertainment for himself. He writes on the board an expression

$$
((((0 \ldots) \ldots) \ldots .) \ldots) \ldots)
$$

where the number of parentheses he chooses at his discretion. Then, instead of each ellipsis, he inserts a plus or multiply sign and a natural number from 1 to 9, with each number used no more than once, and then calculates the value of the resulting expression. For example, he can write such an expression:

$$
(((0+2) \cdot 3)+8)=14
$$

or such

$$
(((((((0 \cdot 7)+3)+4)+1) \cdot 2) \cdot 5) \cdot 6)+9)=105
$$

or such

$$
((((((0+3) \cdot 9) \cdot 8)+7) \cdot 6) \cdot 4)+5)=5357
$$

But he cannot write

$$
(((((0+7) \cdot 3)+4) \cdot 7)+5)
$$

because the number 7 is used twice here.

Nезнayka wants to write an expression that, when evaluated, results in 2015. Help him do this.
