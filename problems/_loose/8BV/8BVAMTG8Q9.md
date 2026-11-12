---
tag: 8BVAMTG8Q9
kind: problem
type: answer
answer: f(x)={\begin{pmatrix}\frac{1}{0.5+x},x\neq-0.5,\\0.5,-0.50\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is known that the function $f(x)$ for each value of $x \in(-\infty ;+\infty)$ satisfies the equation $f(x)-(x-0.5) f(-x-1)=1$. Find all such functions $f(x)$.
