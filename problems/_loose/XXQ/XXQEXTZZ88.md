---
tag: XXQEXTZZ88
kind: problem
type: answer
answer: \frac{5+3\sqrt{5}}{10}(\frac{1+\sqrt{5}}{2})^{n}+\frac{5-3\sqrt{5}}{10}(\frac{1-\sqrt{5}}{2})^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, evaluate
$$
\sum_{i=0}^{\left\lfloor\frac{n+1}{2}\right\rfloor}\binom{n-i+1}{i},
$$
where $\binom{m}{k}=\frac{m!}{k!(m-k)!}$ and $\left\lfloor\frac{n+1}{2}\right\rfloor$ is the greatest integer less than or equal to $\frac{n+1}{2}$.
