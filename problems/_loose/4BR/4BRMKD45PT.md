---
tag: 4BRMKD45PT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138998
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=403
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \ldots, x_{k}$ be a sequence of integers. A rearrangement of this sequence (the numbers in the sequence listed in some other order) is called a scramble if no number in the new sequence is equal to the number originally in its location. For example, if the original sequence is $1,3,3,5$ then $3,5,1,3$ is a scramble, but $3,3,1,5$ is not.
A rearrangement is called a two-two if exactly two of the numbers in the new sequence are each exactly two more than the numbers that originally occupied those locations. For example, 3,5,1,3 is a two-two of the sequence $1,3,3,5$ (the first two values 3 and 5 of the new sequence are exactly two more than their original values 1 and 3 ).
Let $n \geq 2$. Prove that the number of scrambles of
$$
1,1,2,3, \ldots, n-1, n
$$
is equal to the number of two-twos of
$$
1,2,3, \ldots, n, n+1 \text {. }
$$
(Notice that both sequences have $n+1$ numbers, but the first one contains two $1 \mathrm{~s}$.)
