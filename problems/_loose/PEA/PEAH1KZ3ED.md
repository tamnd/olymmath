---
tag: PEAH1KZ3ED
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find arithmetic sequences of natural numbers

$$
\begin{array}{llllll}
a_{1}, & a_{2}, & a_{3}, & \ldots, & a_{k}, & \ldots \\
b_{1}, & b_{2}, & b_{3}, & \ldots, & b_{k}, & \ldots \\
c_{1}, & c_{2}, & c_{3}, & \ldots, & c_{k}, & \ldots \\
d_{1}, & d_{2}, & d_{3}, & \ldots, & d_{k}, & \ldots
\end{array}
$$

such that in the sequence obtained by merging them

$$
a_{1}, b_{1}, c_{1}, d_{1}, a_{2}, b_{2}, c_{2}, d_{2}, \ldots, a_{k}, b_{k}, c_{k}, d_{k}, \ldots
$$

any term after $a_{1}$ is the sum of the term immediately preceding it and the last digit of that term.
