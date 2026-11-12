---
tag: SVHCTA4Z0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A table with two columns of positive integers and some number of rows is written according to the following rule. In the top row, we write arbitrary numbers $a$ and $b$; then under $a$ we write (a positive integer) number $a_{1}$, equal to $\frac{a}{2}$ if $a$ is even, and equal to $\frac{a-1}{2}$ if $a$ is odd, and under $b$ we write the number $b_{1}=2 b$. Next, we proceed with the numbers $a_{1}$ and $b_{1}$ in the same way as we previously did with the numbers $a$ and $b$: under $a_{1}$ we write the number $a_{2}$, equal to $\frac{a_{1}}{2}$ if $a_{1}$ is even, and equal to $\frac{a_{1}-1}{2}$ if $a_{1}$ is odd; under $b_{1}$ we write the number $b_{2}=2 b_{1}$. Under $a_{2}$ and $b_{2}$, we place the numbers $a_{3}$ and $b_{3}$, formed from $a_{2}$ and $b_{2}$ in the same way that the numbers $a_{2}$ and $b_{2}$ are formed from $a_{1}$ and $b_{1}$, and so on; this process ends when we reach some number $a_{n}=1$ (to which the number $b_{n}=2 b_{n-1}$ corresponds). Prove that the sum of all numbers $b_{i}$ in the right column, corresponding to odd numbers $a_{i}$ (where $i=0,1, \ldots, n$; under $a_{0}$ and $b_{0}$ we understand the numbers $a$ and $b$), is equal to the product $a b$.
