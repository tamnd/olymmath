---
tag: K7AZZ44YS3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Argentina National Olympiad Level 2
    url: https://artofproblemsolving.com/community/c6h3482092
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2019
    source: hf-ai-mo-aops
    label: 2019 Argentina National Olympiad Level 2
---
Let $n$ be a natural number. We define $f(n)$ as the number of ways to express $n$ as a sum of powers of $2$ , where the order of the terms is taken into account. For example, $f(4) = 6$ , because $4$ can be written as:
\begin{align*}
4;
2 + 2;
2 + 1 + 1;
1 + 2 + 1;
1 + 1 + 2;
1 + 1 + 1 + 1.
\end{align*}
Find the smallest $n$ greater than $2019$ for which $f(n)$ is odd.
