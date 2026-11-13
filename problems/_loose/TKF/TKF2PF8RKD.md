---
tag: TKF2PF8RKD
kind: problem
type: answer
answer: "167"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting with a positive integer $n$, a sequence is created satisfying the following rule: each term is obtained from the previous one by subtracting the largest perfect square that is less than or equal to the previous term, until reaching the number zero. For example, if $n=142$, we will have the following sequence of 5 terms:

$$
a_{1}=142, a_{2}=21, a_{3}=5, a_{4}=1, a_{5}=0
$$

since $21=142-11^{2}, 5=21-4^{2}, 1=5-2^{2}$ and $0=1-1^{2}$.

a) Give an example of a sequence that has exactly 6 terms.

b) Find the smallest value of $n$ for which the sequence thus created has exactly 7 terms.
