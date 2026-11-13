---
tag: Q9HRWA1H5D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $a_{1}, a_{2}, \cdots, a_{n}$ are $n$ distinct real numbers, $k$ is an integer greater than 1, and $A_{1}, A_{2}, \cdots, A_{k}$ are subsets of $\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$, where each subset $A_{i}$ has at least $\frac{n}{2}$ elements, and for any $i \neq j$, $\left|A_{i} \cap A_{j}\right| \leqslant \frac{n}{4}$. Let $A=\bigcup_{i=1}^{k} A_{i}, C=\{x+y \mid x, y \in A\}$, $D=\{x-y \mid x, y \in A\}$. Prove: $|C|^{2} \geqslant \frac{k n}{k+1}|D|$.
(2nd "Liu Hui Cup" Mathematics Competition)
