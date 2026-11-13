---
tag: CCW8JTXQFC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We read about an African tribe that multiplies using pebbles as follows. If someone wants to calculate $18 \cdot 23$, they place two piles of pebbles next to each other. The first pile has 18 pebbles, and the second pile has 23 pebbles. Then, they place half as many (9) under the 18, and twice as many (46) under the 23. They repeat the halving and doubling, but since 9 is an odd number and half a pebble does not exist, they halve the number that is one less. They continue this process until the number in the first column is 1.

$$
\begin{array}{cc}
1 \& & \not 2 \not 3 \\
9 & 46 \\
A & 92 \\
\not 2 & 1 \& A \\
1 & 368
\end{array}
$$

They eliminate the rows where the first number is even. The sum of the pebbles in the second column that remain is the result of the multiplication: $46+368=414$.

It needs to be proven that for integers, this method always leads to the correct result!
