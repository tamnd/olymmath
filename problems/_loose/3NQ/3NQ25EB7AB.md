---
tag: 3NQ25EB7AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that the number of representations of a number $n$ as a sum of distinct positive integers is equal to the number of representations of the same number as a sum of identical or distinct positive odd integers.

For example, the number 6 can be represented in four ways as a sum of distinct integers:

$$
6,1+5, 2+4, 1+2+3
$$

The same number 6 can also be represented in four ways as a sum of identical or distinct positive odd integers:

$1+5,3+3,1+1+1+3,1+1+1+1+1+1$.

b) Prove that the number of representations of a number $n$ as a sum of positive integers, none of which is repeated more than $k-1$ times, is equal to the number of representations of the same number as a sum of integers, none of which is divisible by $k$.

For example, the number 6 can be represented in seven ways as a sum of integers, none of which is repeated more than twice:

$$
\begin{gathered}
6,3+3,4+2,5+1, 3+2+1 \\
2+2+1+1, 4+1+1
\end{gathered}
$$

The same number 6 can also be represented in seven ways as a sum of integers, none of which is divisible by 3:

$$
\begin{gathered}
5+1, 4+2, 4+1+1 \\
2+2+2, 2+2+1+1 \\
2+1+1+1+1, 1+1+1+1+1+1
\end{gathered}
$$

We also note, without proof, the following propositions, analogous to the theorems of problems 31a) and b) (the first of which is obviously a special case of the second):

The number of representations of a number $n$ as a sum of positive integers, in which each number $a$ appears no more than $a-1$ times (respectively, no more than $a^{k-1}-1$ times), is equal to the number of representations of the same number as a sum of integers, none of which is a perfect square (respectively, a $k$-th power) of an integer.

For example, there are eight representations of the number 10 as a sum of integers, in which 1 does not appear at all, 2 appears no more than once, 3 appears no more than twice, 4 appears no more than three times, and so on:

$$
\begin{gathered}
10, 8+2, 7+3, 6+4 \\
5+5, 5+3+2, 4+4+2, 4+3+3
\end{gathered}
$$

And there are as many representations of this number as a sum of integers, none of which are 1 and 4 (squares):

$$
\begin{gathered}
10, 8+2, 7+3,6+2+2, 5+5 \\
5+3+2,3+3+2+2,2+2+2+2+2
\end{gathered}
$$
