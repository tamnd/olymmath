---
tag: WF60Y1CEDE
kind: problem
type: answer
answer: x>4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 2020 numbers

$$
1 \cdot 2, 2 \cdot 3, 3 \cdot 4, \ldots, 2020 \cdot 2021
$$

are written on the board. A move consists of choosing three numbers $a, b, c$ written on the board, erasing them, and writing on the board the number

$$
\frac{a b c}{a b + b c + a c}
$$

a) Verify that

$$
\frac{1}{a} + \frac{1}{b} + \frac{1}{c} = \left( \frac{a b c}{a b + b c + a c} \right)^{-1}
$$

b) Using

$$
\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}
$$

find the value of the sum

$$
\frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \frac{1}{3 \cdot 4} + \ldots + \frac{1}{2020 \cdot 2021}
$$

c) After 1009 moves, two numbers remain on the board. Prove that if one of them is $ \frac{4}{3} $, the other is greater than 4.
