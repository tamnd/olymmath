---
tag: GCJCK5BN27
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Morse-Thue Sequence) Starting from 0, each time append the "complement sequence" of the current sequence:
$$
0,01,0110,01101001, \cdots
$$
(1) Let the digits of the final sequence be denoted as $x(0), x(1), x(2), \cdots$. Prove that: $x(2 n)=x(n)$, $x(2 n+1)=1-x(2 n)$;
(2) Prove that: $x(n)=1-x\left(n-2^{k}\right)$, where $2^{k}$ is the largest power of 2 not exceeding $n$. Find $x(1993)$;
(3) Prove that the sequence is not periodic;
(4) Represent non-negative integers in binary in increasing order: $0,1,10,11, \cdots$. Now take the sum of the digits of each number modulo 2, resulting in a $0-1$ sequence. Prove that this sequence is the Morse-Thue sequence.
