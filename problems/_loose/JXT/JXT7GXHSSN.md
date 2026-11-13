---
tag: JXT7GXHSSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way Baltic Way
---
Show that there exist two distinct positive integers $a, b$, each having exactly 2014 digits (in base ten; initial zeroes disallowed), with the following properties.
* The digits of $b$ are those of $a$ in reverse order.
* When a digit in each of $a$ and $b$ is deleted at random, and the resulting numbers are denoted $a'$ and $b'$, respectively, then
$$
\frac{a'}{b'} = \frac{a}{b}
$$
with a likelihood exceeding 99%.
