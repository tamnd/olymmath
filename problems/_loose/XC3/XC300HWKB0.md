---
tag: XC300HWKB0
kind: problem
type: answer
answer: (\frac{BC}{AC})^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In triangle $A B C$, the angle at $C$ is divided into $n$ equal parts by lines that intersect the side $A B$ at points $C_{1}, C_{2}, \ldots, C_{n-1}$. Show that the value of the fraction

$$
\frac{\frac{1}{A C_{1}}-\frac{1}{A B}}{\frac{1}{C_{n-1} B}-\frac{1}{A B}}
$$

does not depend on $n$.
