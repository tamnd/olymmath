---
tag: VTVB5EDT5Q
kind: problem
type: answer
answer: x_{1}=\frac{1}{2}(-1\\sqrt{5})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}=0, a_{1}=1, a_{n+2}=a_{n+1}+a_{n}(n=0,1,2, \cdots)$. Also let $x_{1} \in \mathbf{R}, x_{n}=\frac{a_{n-1}+a_{n-2} \cdot x_{1}}{a_{n}+a_{n-1} \cdot x_{1}}(n=2,3, \cdots)$. If $x_{2004}=\frac{1}{x_{1}}-1$, find $x_{1}$.
