---
tag: T3BR05JZCS
kind: problem
type: answer
answer: "1018"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the real number $k$ such that $a$, $b$, $c$, and $d$ are real numbers that satisfy the system of equations
\begin{align*}
abcd &= 2007,\\
a &= \sqrt{55 + \sqrt{k+a}},\\
b &= \sqrt{55 - \sqrt{k+b}},\\
c &= \sqrt{55 + \sqrt{k-c}},\\
d &= \sqrt{55 - \sqrt{k-d}}.
\end{align*}
