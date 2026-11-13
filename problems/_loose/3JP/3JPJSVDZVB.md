---
tag: 3JPJSVDZVB
kind: problem
type: answer
answer: a_n < \frac{119}{120} \cdot n + \frac{7}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $(a_{n})_{n\geqslant 1}$ be defined as:
$$a_{n}=\sqrt{A_{n+2}^{1}\sqrt[3]{A_{n+3}^{2}\sqrt[4]{A_{n+4}^{3}\sqrt[5]{A_{n+5}^{4}}}}},$$
where $A_{m}^{k}$ are defined by $$A_{m}^{k}=\binom{m}{k}\cdot k!.$$
Prove that $$a_{n}<\frac{119}{120}\cdot n+\frac{7}{3}.$$
