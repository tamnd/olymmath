---
tag: AS071NMQZP
kind: problem
type: answer
answer: f(n)={\begin{pmatrix}n+1\text{if}n\text{isodd}\\n-1\text{if}n\text{iseven}\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set $N=\{1,2,3, \ldots\}$ of natural numbers and the function $f$ : $N \rightarrow N$ that satisfies the following two conditions:

a) $f(f(n))=n$ for all $n \in N$.

b) $f(f(n)+1)=\left\{\begin{array}{cc}n-1, & \text { if } n \text { is even; } \\ n+3, & \text { if } n \text { is odd. }\end{array}\right.$

Determine the value of $f(n)$ for each $n \in N$ by first observing that $f$ is bijective and that, since $f(f(n)+1)$ is never $2$, it must be that $f(1)=2$.
