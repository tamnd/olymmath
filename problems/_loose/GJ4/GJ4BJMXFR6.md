---
tag: GJ4BJMXFR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that the number of representations of a number $n$ as a sum of $m$ positive integers, which may be the same or different, is equal to the number of representations of the number $n-m$ as a sum of terms taking values $1,2, \ldots, m$.

For example, the number 8 can be represented as a sum of three terms in the following five ways:

$$
\begin{gathered}
1+1+6,1+2+5,1+3+4 \\
2+2+4,2+3+3
\end{gathered}
$$

There are also exactly five representations of the number $5 = 8-3$ as a sum of terms taking values 1, 2, and 3, namely:

$$
\begin{gathered}
1+1+1+1+1,1+1+1+2 \\
1+1+3,1+2+2,2+3 .
\end{gathered}
$$

b) Prove that the number of representations of a number $n$ as a sum of $m$ different positive integers is equal to the number of representations of the number

$$
n-\frac{m(m+1)}{2}
$$

as a sum of terms taking values $1,2, \ldots, n$.

For example, the number 10 can be represented as a sum of three different terms in the following four ways:

$$
1+2+7, 1+3+6, 1+4+5, 2+3+5
$$

There are also exactly four representations of the number

$$
4=10-\frac{3 \cdot 4}{2}
$$

as a sum of terms taking values 1, 2, and 3:

$$
1+1+1+1, 1+1+2, 1+3, 2+2
$$

From the theorems of problems 30a) and b), it follows that the number of representations of a number $n$ as a sum of $m$ identical or different terms is equal to the number of representations of $n+\frac{m(m-1)}{2}$ as a sum of $m$ different terms (both these numbers are equal to the number of representations of $n-m$ as a sum of terms taking values $1,2, \ldots, m$).

2 A. M. Yaglom and I. M. Yaglom
