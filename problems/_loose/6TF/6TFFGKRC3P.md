---
tag: 6TFFGKRC3P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that $\left(\frac{x^{r}+y^{r}}{2}\right)^{1 / r}$ and generally

$$
\left(\frac{x_{1}^{r}+x_{2}^{r}+\ldots+x_{n}^{r}}{n}\right)^{1 / r} (r>1)
$$

is convex. (Apply the Hölder inequality with $b_{1}=\left(x_{1}+x_{2}\right)^{r-1}, q_{2}=\left(y_{1}+y_{2}\right)^{r-1}$ and once $a_{1}=x_{1}, a_{2}=y_{1}$ and another time $a_{1}=x_{2}, a_{2}=y_{2}$. We can similarly achieve the goal in the second case as well.)
