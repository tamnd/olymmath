---
tag: AS502V3PCP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show the Hölder's inequality: for any integer $n \geq 0$,

$\forall p, q \in] ;+\infty\left[: \frac{1}{p}+\frac{1}{q}=1, \forall\left(a_{1}, a_{2}, \ldots, a_{n}, b_{1}, b_{2}, \ldots, b_{n}\right) \in\left(\mathbb{R}^{+}\right)^{2 n},\left(\sum_{i=1}^{n} a_{i}^{p}\right)^{\frac{1}{p}}\left(\sum_{i=1}^{n} b_{i}^{q}\right)^{\frac{1}{q}} \geq \sum_{i=1}^{n} a_{i} b_{i}\right.$.

Deduce the "bad students' inequality":

$$
\forall n \in \mathbb{N}, \forall r \in \mathbb{R}^{+}, \forall\left(x_{1}, x_{2}, \ldots, x_{n}, y_{1}, y_{2}, \ldots, y_{n}\right) \in\left(\mathbb{R}_{+}^{*}\right)^{2 n}, \sum_{i=1}^{n} \frac{x_{i}^{r+1}}{y_{i}^{r}} \geq \frac{\left(\sum_{i=1}^{n} x_{i}\right)^{r+1}}{\left(\sum_{i=1}^{n} y_{i}\right)^{r}}
$$
