---
tag: NBJQQPZ87M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $a_{1}, a_{2}, a_{3}, \ldots$, we form a new sequence $b_{1}, b_{2}, b_{3}, \ldots$ as follows, and by applying the recognized pattern further:

$$
\begin{array}{llll}
b_{1}=a_{1}, & b_{2}=a_{2}-a_{1}, & b_{3}=a_{2}, & b_{4}=a_{2}+a_{1}, \\
b_{2}=a_{2}-a_{2}, & b_{6}=a_{3}-a_{1}, & b_{7}=a_{3}, & b_{8}=a_{3}+a_{1} \\
b_{9}=a_{3}+a_{2}, & b_{10}=a_{4}-a_{3}, & b_{11}=a_{4}-a_{2}, & \ldots
\end{array}
$$

Find a method to write the $m$-th term of the new sequence without writing all the preceding terms. Use the values $m=1968$ and 3968 as examples.

How can we express the sum $b_{1}+b_{2}+\ldots+b_{m}$ in terms of the terms of the given sequence?
