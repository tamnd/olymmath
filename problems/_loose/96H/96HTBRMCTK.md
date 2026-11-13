---
tag: 96HTBRMCTK
kind: problem
type: answer
answer: "48"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=159761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the least positive integer $n$ for which there exists a set $\left\{s_{1}, s_{2}, \ldots, s_{n}\right\}$ consisting of $n$ distinct positive integers such that
$$
\left(1-\frac{1}{s_{1}}\right)\left(1-\frac{1}{s_{2}}\right) \ldots\left(1-\frac{1}{s_{n}}\right)=\frac{51}{2010} .
$$
$\mathrm{N1}^{\prime}$. Same as Problem N1, but the constant $\frac{51}{2010}$ is replaced by $\frac{42}{2010}$.
