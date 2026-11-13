---
tag: M2QGMT6HXV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179994
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: R \rightarrow R$ be a function that admits primitives and has the property that $\lim _{x \rightarrow-\infty} \frac{F(x)}{x}=\lim _{x \rightarrow+\infty} \frac{F(x)}{x}=a, a \in R$, where $F$ is a primitive of $f$. Prove that the function $g: R \rightarrow R, g(x)=\left\{\begin{array}{c}f\left(\frac{1}{x}\right), x \neq 0 \\ \alpha, x=0\end{array}\right.$ admits primitives if and only if $\alpha=a$.
