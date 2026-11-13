---
tag: PF6M3FMEPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer. Initially, a positive integer $A$ is written on the board. At each step, we can perform one of the following two operations with the number written on the board:

(i) Add $N$ to the number written on the board and replace that number with the sum obtained;

(ii) If the number on the board is greater than $1$ and has at least one digit $1$, then we can remove the digit $1$ from that number, and replace the number initially written with this one (with removal of possible leading zeros)

For example, if $N = 63$ and $A = 25$, we can do the following sequence of operations:
$$25 \rightarrow 88 \rightarrow 151 \rightarrow 51 \rightarrow 5$$
And if $N = 143$ and $A = 2$, we can do the following sequence of operations:
$$2 \rightarrow 145 \rightarrow 288 \rightarrow 431 \rightarrow 574 \rightarrow 717 \rightarrow 860 \rightarrow 1003 \rightarrow 3$$

For what values of $N$ is it always possible, regardless of the initial value of $A$ on the blackboard, to obtain the number $1$ on the blackboard, through a finite number of operations?
