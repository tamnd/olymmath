---
tag: Q7JFQ6TG5J
kind: problem
type: answer
answer: "181"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $F$ fractions $\frac{m}{n}$ with the properties:

- $m$ and $n$ are positive integers with $m<n$,
- $\frac{m}{n}$ is in lowest terms,
- $n$ is not divisible by the square of any integer larger than 1 , and
- the shortest sequence of consecutive digits that repeats consecutively and indefinitely in the decimal equivalent of $\frac{m}{n}$ has length 6 .

(Note: The length of the shortest sequence of consecutive digits that repeats consecutively and indefinitely in $0.12 \overline{745}=0.12745745745745 \ldots$ is 3 and the length of the shortest sequence of consecutive digits that repeats consecutively and indefinitely in $0 . \overline{5}$ is 1 .)

We define $G=F+p$, where the integer $F$ has $p$ digits. What is the sum of the squares of the digits of $G$ ?
(A) 170
(B) 168
(C) 217
(D) 195
(E) 181
