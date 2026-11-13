---
tag: AV9YYTBGDA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(X,d)$ be a metric space and $f:X \to X$ be a function such that $\forall x,y\in X : d(f(x),f(y))=d(x,y)$.
$\text{a})$ Prove that for all $x \in X$, $\lim_{n \rightarrow +\infty} \frac{d(x,f^n(x))}{n}$ exists, where $f^n(x)$ is $\underbrace{f(f(\cdots f(x)}_{n \text{times}} \cdots ))$.
$\text{b})$ Prove that the amount of the limit does **not** depend on choosing $x$.
