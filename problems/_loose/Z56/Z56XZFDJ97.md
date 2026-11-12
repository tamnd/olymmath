---
tag: Z56XZFDJ97
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [20].) Let $X_{1}, X_{2}, \ldots$ be i.i.d. random variables, $\mathrm{P}\left(X_{1}>0\right)=1$. Let

$$
\phi(\lambda)=\mathrm{E} e^{-\lambda X_{1}}, \lambda \geqslant 0,
$$

- the Laplace transform of the variable $X_{1}$. Express the quantity

$$
R_{n}(l, \alpha)=\mathrm{E} \frac{X_{1}^{l}+\ldots+X_{n}^{l}}{\left(X_{1}+\ldots+X_{n}\right)^{\alpha}}, l=0,1,2, \ldots, \alpha>0
$$

in terms of $\phi$. Using the obtained formula, prove that if $\mathrm{E} X_{1}^{2}<\infty$, the conditions

$$
R_{n}(2,1) \rightarrow \frac{E X_{1}^{2}}{E X_{1}} \text { and } n R_{n}(2,2) \rightarrow \frac{E X_{1}^{2}}{\left(E X_{1}\right)^{2}}
$$

are satisfied.
