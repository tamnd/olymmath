---
tag: H0K7SDBDZD
kind: problem
type: answer
answer: \frac{n(n^{2}+3n-1)}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{B_{n}\right\}$ is defined as
$$
B_{n}=\cot \left(\operatorname{arccot} A_{n}+\operatorname{arccot} A_{n+1}+\operatorname{arccot} A_{n+2}\right) \text {, }
$$

where the sequence $\left\{A_{n}\right\}$ satisfies $A_{1}=1, A_{n+1}=A_{n}+2 n$.
Prove:
$$
\sum_{k=1}^{n} B_{k}=\frac{n\left(n^{2}+3 n-1\right)}{9} .
$$
