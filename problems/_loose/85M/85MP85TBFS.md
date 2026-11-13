---
tag: 85MP85TBFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211024
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\lfloor x\rfloor$ denote the greatest integer less than or equal to $x$. Let $m$ be a positive integer, $m\geq 3$. For every integer $i$ with $1\leq i\leq m$, let $$S_{m,i}=\left\{\left\lfloor\dfrac{2^m-1}{2^{i-1}}n-2^{m-i}+1\right\rfloor\,: n=1,2,3,\ldots\right\}.$$ For example, for $m=3$,
\begin{align*}S_{3,1}&=\{\lfloor 7n-3\rfloor\,: n=1,2,3,\ldots\}
\\&=\{4,11,18,\ldots\},
\\S_{3,2}&=\left\{\left\lfloor\dfrac72n-1\right\rfloor\,: n=1,2,3,\ldots\right\}
\\&=\{2,6,9,\ldots\},
\\S_{3,3}&=\left\{\left\lfloor\dfrac74n\right\rfloor\,: n=1,2,3,\ldots\right\}
\\&=\{1,3,5,\ldots\}.\end{align*}

Prove that for all $m\geq 3$, each positive integer occurs in exactly one of the sets $S_{m,i}$.
