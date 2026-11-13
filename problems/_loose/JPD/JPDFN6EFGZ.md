---
tag: JPDFN6EFGZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Deep Mean Inequality) Let $M_{r}(x)$ denote the $r$-th deep mean of $n$ positive real numbers $x_{1}, x_{2}, \cdots, x_{n}$, i.e.,
$$
M_{r}(x) = \left(\frac{x_{1}^{r}+x_{2}^{r}+\cdots+x_{n}^{r}}{n}\right)^{\frac{1}{r}}, r \neq 0 \text {. }
$$

Prove: If $\alpha>\beta$, then $M_{\alpha}(x) \geqslant M_{\beta}(x)$. Equality holds if and only if $x_{1}=x_{2}=\cdots=x_{n}$.
