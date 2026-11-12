---
tag: Z3BCZM8FDG
kind: problem
type: answer
answer: 8,14,18
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya wants to test the knowledge of his brother Kolya, the winner of the "Higher Test" mathematics Olympiad. For this, Petya thought of three natural numbers $a, b, c$, and calculated $x = \text{GCD}(a, b)$, $y = \text{GCD}(b, c)$, $z = \text{GCD}(c, a)$. Then he wrote three rows of five numbers each on the board:

$$
\begin{gathered}
6, 8, 12, 18, 24 \\
14, 20, 28, 44, 56 \\
5, 15, 18, 27, 42
\end{gathered}
$$

Petya informed Kolya that one of the numbers in the first row is $x$, one of the numbers in the second row is $y$, and one of the numbers in the third row is $z$, and asked him to guess the numbers $x, y, z$. After thinking for a few minutes, Kolya managed to solve the problem, correctly naming all three numbers. Name them and you. Prove that there is a unique such triplet $(x, y, z)$.
