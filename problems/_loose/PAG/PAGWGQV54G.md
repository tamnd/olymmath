---
tag: PAGWGQV54G
kind: problem
type: answer
answer: \frac{a_{1}}{2}-\sqrt{(\frac{a_{1}}{2})^{2}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168937
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the numbers $a_{1}, a_{2}, \ldots$, we know that $a_{1} \geq 2$, and $a_{n+1}=a_{n}^{2}-2$ for $n=1,2, \ldots$. Show that the sum of the following sequence

$$
\frac{1}{a_{1}}+\frac{1}{a_{1} a_{2}}+\frac{1}{a_{1} a_{2} a_{3}} \ldots
$$

is exactly

$$
\frac{a_{1}}{2}-\sqrt{\left(\frac{a_{1}}{2}\right)^{2}-1}
$$
