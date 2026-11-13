---
tag: KEQD79VG49
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73099
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad
---
A $3 \times 3$ square is filled with the numbers $a, b, c, d, e, f, g, h$ and $i$ as follows:

| $c$ | $f$ | $i$ |
| :--- | :--- | :--- |
| $b$ | $e$ | $h$ |
| $a$ | $d$ | $g$ |

We know that it is a magic square, that is, there is a value $S$ which is equal to the sums of the numbers in each row, column, and each of the two diagonals. Verify that:

a) $2(a+c+g+i)=b+d+f+h+4 e$.

b) $S=3 e$.

c) $a c+c i+a g+g i=e(b+d+f+h)$.

d) $2\left(a^{2}+c^{2}+g^{2}+i^{2}\right)=b^{2}+d^{2}+f^{2}+h^{2}+4 e^{2}$.
