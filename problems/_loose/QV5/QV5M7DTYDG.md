---
tag: QV5M7DTYDG
kind: problem
type: answer
answer: \frac{7}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the functions $f: \mathbf{R} \rightarrow \mathbf{R}, f(x)=1+\{x\}(1-\{x\})$ and $F: \mathbf{R} \rightarrow \mathbf{R}, F(x)=\int_{0}^{x} f(t) d t$, where $\{x\}$ denotes the fractional part of the real number $x$.

a) Prove that $f$ admits primitives and that any primitive of it is strictly increasing on $\mathbf{R}$.
b) Show that there exists $a \in \mathbf{R}$ such that the function $G: \mathbf{R} \rightarrow \mathbf{R}, G(x)=F(x)-a x$ is periodic, with a period equal to 1.
