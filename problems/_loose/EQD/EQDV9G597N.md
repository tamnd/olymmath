---
tag: EQDV9G597N
kind: problem
type: answer
answer: '{(20,20,5),(20-10,10,5),(10-5,5,5)\mid'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(R. Henner) Determine all triples $(a, b, c)$ of positive integers for which the conditions

$$
\begin{aligned}
\operatorname{gcd}(a, 20) & =b, \\
\operatorname{gcd}(b, 15) & =c \text { and } \\
\operatorname{gcd}(a, c) & =5
\end{aligned}
$$

hold.
