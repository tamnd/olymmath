---
tag: MV7ZPEQV7W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a plane, there is a polygon $A_{1} A_{2} \ldots A_{n}$ and a point $O$ inside it. Prove that the equalities

$$
\begin{gathered}
\overrightarrow{O A_{1}}+\overrightarrow{O A_{3}}=2 \cos \frac{2 \pi}{n} \overrightarrow{O A_{2}} \\
\overrightarrow{O A_{2}}+\overrightarrow{O A_{4}}=2 \cos \frac{2 \pi}{n} \overrightarrow{O A_{3}} \\
\cdots \cdots \cdots \cdots \cdots \cdots \cdots \cdots \cdots \cdots \\
\overrightarrow{O A_{n-1}}+\overrightarrow{O A_{1}}=2 \cos \frac{2 \pi}{n} \overrightarrow{O A_{n}}
\end{gathered}
$$

are necessary and sufficient for the existence of an affine transformation that maps the given polygon to a regular one and the point $O$ to its center.

A polygon that can be mapped to a regular polygon by an affine transformation is called affinely regular.
