---
tag: CRE6TT9YGE
kind: problem
type: answer
answer: "-1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124410
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(44th IM() Preliminary Question) Let $m$ be a fixed integer greater than 1, and the sequence $x_{11}, x_{1}, x_{2}, \cdots$ is defined as follows:
$$
x_{i}=\left\{\begin{array}{ll}
2^{i}, & 0 \leqslant i \leqslant m-1, \\
\sum_{j=1}^{m} x_{i j}, & i \geqslant m .
\end{array}\right.
$$

Find the maximum value of $k$ such that there are $k$ consecutive terms in the sequence that are divisible by $m$.
