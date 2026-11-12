---
tag: XBPGBEXJTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a $2n$-digit number special if it is a perfect square, and the numbers formed by its first $n$ digits and its last $n$ digits are also perfect squares (the second $n$-digit number may start with a 0, but it should not be zero, and the first one should not start with a 0).

a) Find all two-digit and four-digit special numbers.

b) Are six-digit special numbers possible? (Prove that they do not exist or provide an example of such a number.)

c)* Prove that there is at least one 20-digit special number.
d)* Prove that there are no more than 10 special 100-digit numbers.

e)* Prove that there is at least one 30-digit special number.

$24 \mathbf{a}^{*}$. Given a set of positive numbers $\left\{a_{1}, a_{2}, \ldots, a_{n}\right\}$. For each of its subsets, write down the sum of the numbers in it (consider sums of one, two, ..., $n$ terms). Prove that all the written numbers can be divided into $n$ groups such that in each group the ratio of the largest number to the smallest number does not exceed 2.
