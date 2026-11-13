---
tag: CDVFVB1BF8
kind: problem
type: answer
answer: C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2・44 $c \geqslant 1$ is a fixed positive integer. For each non-empty subset $A$ of the set $\{1,2, \cdots, n\}$, a positive integer $\omega(A)$ is assigned from the set $\{1,2, \cdots, c\}$, satisfying
$$
\omega(A \cap B)=\min (\omega(A), \omega(B)),
$$

where $A, B$ are any two non-empty intersecting subsets of $\{1,2, \cdots, n\}$. If there are $a(n)$ such assignment methods, calculate
$$
\lim _{n \rightarrow \infty} \sqrt[n]{a(n)} .
$$
