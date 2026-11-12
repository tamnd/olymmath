---
tag: AX7SAG5N6S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $p$ is a prime number, then the difference

$$
C_{n}^{p}-\left[\frac{n}{p}\right]
$$

is divisible by $p$ ( $C_{n}^{p}$ is the number of combinations of $n$ elements taken $p$ at a time; $n$ is an arbitrary positive integer not less than $p$ ).

For example, $C_{11}^{5}=\frac{11 \cdot 10 \cdot 9 \cdot 8 \cdot 7}{1 \cdot 2 \cdot 3 \cdot 4 \cdot 5}=462 ; C_{11}^{5}-\left[\frac{11}{5}\right]=462-2$ is divisible by 5.
