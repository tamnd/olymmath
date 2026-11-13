---
tag: K4BW36YCHB
kind: problem
type: answer
answer: f(n+1)=\frac{n+1+(-1)^{n+1}}{n+2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $f(x)$ is an $n$-degree polynomial, and $f(k)$
$$
=\frac{k}{k+1}, k=0,1, \cdots, n \text {, }
$$

find $f(n+1)$.
