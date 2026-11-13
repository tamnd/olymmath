---
tag: Z39MQCY56F
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85528
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0000.parquet#row=210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider sequences of integers $a_{1}, a_{2}, \ldots, a_{n}$ consisting of $n$ integers. For a given $k \leqslant n$, we can divide the numbers in the sequence into $k$ groups as follows: $a_{1}$ goes into the first group, $a_{2}$ into the second group, and so on until $a_{k}$ which goes into the $k$-th group. Then $a_{k+1}$ goes back into the first group, $a_{k+2}$ into the second group, and so forth. We call the sequence $k$-divisible if this division has the property that the sum of the numbers in each group is the same.

For example, the sequence $1,2,3,4,-2,6,13,12,17,8$ is 4-divisible, because

$$
1+(-2)+17=2+6+8=3+13=4+12 \text {. }
$$

However, this sequence is not 3-divisible, because the sums of $1+4+13+8, 2+(-2)+12$, and $3+6+17$ are not all the same.

(a) Give a sequence of 6 different numbers that is both 2-divisible and 3-divisible.

(b) Give a sequence of 7 different numbers that is simultaneously 2-divisible, 3-divisible, and 4-divisible.

(c) Find the largest number $k \leqslant 99$ for which there exists a $k$-divisible sequence of 99 different numbers. (Thus, provide an example of such a sequence and prove that such a sequence does not exist for larger $k$.)
