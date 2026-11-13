---
tag: X3BAQJC3H3
kind: problem
type: answer
answer: x < f(x) < x^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose the function $f:[1,+\infty)\to[1,+\infty)$ satisfies the following two conditions:
(i) $f(f(x))=x^2$ for any $x\geq 1$;
(ii) $f(x)\leq x^2+2021x$ for any $x\geq 1$.

1. Prove that $x<f(x)<x^2$ for any $x\geq 1$.

2. Prove that there exists a function $f$ satisfies the above two conditions and the following one:
(iii) There are no real constants $c$ and $A$, such that $0<c<1$, and $\frac{f(x)}{x^2}<c$ for any $x>A$.
