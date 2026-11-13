---
tag: MSHG6MPD2D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $p>1,\frac1p+\frac1q=1$ and $r>1$. If $x_{00},y_{00}>0$, and reals $x_{ij},y_{ij},i=1,2,\ldots,n$, $j=1,2,\ldots,m$, then prove that
$$\left(\frac{\left( \sum_{j=1}^m \sum_{i=1}^n(x_{ij}+y_{ij})^r\right)^{1/r}}{(x_{00}+y_{00})^{1/q}}\right)^p\le\left(\frac{\left( \sum_{j=1}^m \sum_{i=1}^nx_{ij}^r\right)^{1/r}}{x_{00}^{1/q}}\right)^p+\left(\frac{\left( \sum_{j=1}^m \sum_{i=1}^ny_{ij}^r\right)^{1/r}}{y_{00}^{1/q}}\right)^p$$
with equality if and only if either $x_{ij}=y_{ij}=0$ for $i=1,\ldots,n,j=1,\ldots,m$ or $x_{ij}=\alpha y_{ij}$ for $i=0,1,\ldots,n,j=0,1,\ldots,m$, and some $\alpha>0$.

*Proposed by Chang-Jian Zhao*
