---
tag: BE9P5MFZW0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The positive reals $x$, $y$, $z$ satisfy the relations
\begin{align*}
x^2+xy+y^2&=1\\
y^2+yz+z^2&=2\\
z^2+zx+x^2&=3.
\end{align*}
The value of $y^2$ can be expressed uniquely as $\tfrac{m-n\sqrt p}q$, where $m$, $n$, $p$, $q$ are positive integers such that $p$ is not divisible by the square of any prime and no prime dividing $q$ divides both $m$ and $n$. Compute $m+n+p+q$.
