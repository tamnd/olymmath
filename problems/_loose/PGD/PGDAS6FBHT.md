---
tag: PGDAS6FBHT
kind: problem
type: answer
answer: f(n)=n,\foralln\in\mathbb{N},\quad(n)={\begin{pmatrix},&n=0\\n,&n\geq1\end{pmatrix},\in\mathbb{N}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the functions $f, g: \mathbb{N} \rightarrow \mathbb{N}$ knowing that:
a) $f(0)=0$ and $f(n) \neq 0$ for any non-zero natural number $n$;
b) $n^{2} f(n)+m^{2} f(m)=\left(f^{2}(n)+f^{2}(m)-f(n) \cdot f(m)\right) \cdot g(m+n)$, for any $m, n \in \mathbb{N}$.
