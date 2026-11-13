---
tag: QRYZ6KXMTT
kind: problem
type: answer
answer: "99"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115758
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$S(n)$ represents the sum of the digits of the natural number $n$, for example, $S(123)=1+2+3=6$. If two different positive integers $m, n$ satisfy
$$
\left\{\begin{array}{l}
mn \\
m+S(n)=n+2 S(m)
\end{array} \text {, then we say that } m, n \text { form a pair } \langle m, n>\text { . }\right.
$$

The number of pairs $\langle m, n\rangle$ is $ $ pairs.
