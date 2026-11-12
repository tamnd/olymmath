---
tag: 5G3PGAST0J
kind: problem
type: answer
answer: \frac{(p-1)(q-1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $p$ and $q$ are coprime integers, then

$$
\begin{aligned}
& {\left[\frac{p}{q}\right]+\left[\frac{2 p}{q}\right]+\left[\frac{3 p}{q}\right]+\ldots+\left[\frac{(q-1) p}{q}\right]=} \\
& =\left[\frac{q}{p}\right]+\left[\frac{2 q}{p}\right]+\left[\frac{3 q}{p}\right]+\ldots+\left[\frac{(p-1) q}{p}\right]=\frac{(p-1)(q-1)}{2}
\end{aligned}
$$
