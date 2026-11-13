---
tag: EDPD4F2XVE
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Call a natural number *twistable* if it does not contain digits $3$, $4$, $7$ and its last digit is not zero. The *twisting* of a twistable number is the number obtained after the following two steps:
* Reverse the order of digits of the given number;
* Twist each digit: $0$, $1$ and $8$ remain unchanged, $2$ and $5$ are turned into each other, $6$ and $9$ are turned into each other.

For instance, the twisting of the number $68012$ is $51089$ and the twisting of the number $69$ is $69$.

Find all integers that can be represented as the ratio of a twistable positive integer $n$ and its twisting $k$.
