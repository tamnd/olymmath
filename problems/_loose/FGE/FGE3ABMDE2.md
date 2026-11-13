---
tag: FGE3ABMDE2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix integers $m \geq 3$ and $n \geq 3$. Each cell of an array with $m$ rows and $n$ columns is coloured one of two colours such that:

**(1)** Both colours occur on every column; and
**(2)** On every two rows the cells on the same column share colour on exactly $k$ columns. Show that, if $m$ is odd, then

$$\frac{n(m-1)}{2m}\leq k\leq \frac{n(m-2)}{m}$$

*The Problem Selection Committee*
