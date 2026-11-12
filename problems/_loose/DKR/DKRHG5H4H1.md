---
tag: DKRHG5H4H1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of numbers $x_{n}=(1+\sqrt{2}+\sqrt{3})^{n}$. Each of them can be expressed in the form

$$
x_{n}=q_{n}+r_{n} \sqrt{2}+s_{n} \sqrt{3}+t_{n} \sqrt{6}
$$

where $q_{n}, r_{n}, s_{n}, t_{n}$ are integers. Find the limits

$$
\lim _{n \rightarrow \infty} \frac{r_{n}}{q_{n}}, \lim _{n \rightarrow \infty} \frac{s_{n}}{q_{n}}, \lim _{n \rightarrow \infty} \frac{t_{n}}{q_{n}}
$$
