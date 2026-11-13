---
tag: 8EH7KKZHN3
kind: problem
type: answer
answer: 4(\frac{p^{2}}{q}+\frac{q^{2}}{r}+\frac{r^{2}}{p})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's write the following expression in a simpler form:

$$
\begin{aligned}
& \left(\frac{p}{q}+\frac{q}{r}+\frac{r}{p}-1\right)(p+q+r)+\left(\frac{p}{q}+\frac{q}{r}-\frac{r}{p}+1\right)(p+q-r)+ \\
+ & \left(\frac{p}{q}-\frac{q}{r}+\frac{r}{p}+1\right)(p-q+r)+\left(-\frac{p}{q}+\frac{q}{r}+\frac{r}{p}+1\right)(-p+q+r)
\end{aligned}
$$
