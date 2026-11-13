---
tag: VVERBJHKGV
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha$ be the unique real root of the polynomial $x^3-2x^2+x-1$. It is known that $1<\alpha<2$. We define the sequence of polynomials $\left\{{p_n(x)}\right\}_{n\ge0}$ by taking $p_0(x)=x$ and setting
\begin{align*}
p_{n+1}(x)=(p_n(x))^2-\alpha
\end{align*}
How many distinct real roots does $p_{10}(x)$ have?
