---
tag: 37RBQVPMBP
kind: problem
type: answer
answer: "72"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97714
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
20.3 .9 * Find the maximum number of elements in a set $S$ that satisfies the following conditions:
(1) Each element in $S$ is a positive integer not exceeding 100;
(2) For any two different elements $a$ and $b$ in $S$, there exists an element $c$ in $S$ such that the greatest common divisor (gcd) of $a$ and $c$ is 1, and the gcd of $b$ and $c$ is also 1;
(3) For any two different elements $a$ and $b$ in $S$, there exists an element $d$ in $S$ different from $a$ and $b$ such that the gcd of $a$ and $d$ is greater than 1, and the gcd of $b$ and $d$ is also greater than 1.
