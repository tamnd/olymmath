---
tag: ZAB5RDP6VM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, \ldots$ be numbers. Then, in many calculations, the expression $a d - b c$ denoted by (1) is commonly understood, and the notation is typically referred to as the determinant of the second order (or a 2x2 determinant) formed by the elements $a, b, c, d$. Transform the determinant (2) into the product of two second-order determinants. Write the obtained product in different forms, still as second-order determinants. Write the product (3) in the form of a single second-order determinant.

$$
\begin{aligned}
& \left|\begin{array}{ll}
a & b \\
c & d
\end{array}\right| \\
& \left| a e + b g c e + d g \right| \\
& \left| a f + b h c f + d h \right| \\
& (a b - c d)(k l - m n)(x y - z v)
\end{aligned}
$$
