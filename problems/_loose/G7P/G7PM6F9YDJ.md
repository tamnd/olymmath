---
tag: G7PM6F9YDJ
kind: problem
type: answer
answer: \frac{2^{4031}+1}{3}-2^{2015}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set
$$
\begin{array}{c}
A_{k}=\left\{2^{k-1}+\sum_{i=0}^{k-2} a_{i} 2^{a_{i}+i} \mid a_{i} \in\{0,1\},\right. \\
i=0,1, \cdots, k-2\} .
\end{array}
$$

Let $n_{k}$ denote the sum of all elements in the set $A_{k}$. Then
$$
\sum_{k=1}^{2015} n_{k}=
$$
$ $
