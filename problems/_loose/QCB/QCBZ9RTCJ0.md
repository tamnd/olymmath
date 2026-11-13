---
tag: QCBZ9RTCJ0
kind: problem
type: answer
answer: \frac{y^{n}-x^{n}}{y^{n}+x^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's write the following expression in a simpler form:

$$
\frac{(\sqrt{r+1}-\sqrt{r-1})^{n}-(\sqrt{r+1}+\sqrt{r-1})^{n}}{(\sqrt{r+1}-\sqrt{r-1})^{n}+(\sqrt{r+1}+\sqrt{r-1})^{n}}
$$

where $r=\left(x^{2}+y^{2}\right) / 2 x y, x$ and $y$ are different positive numbers, and $n$ is equal to 2, 3, or 4.
