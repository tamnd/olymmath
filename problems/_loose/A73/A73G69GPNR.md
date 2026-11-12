---
tag: A73G69GPNR
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\begin{aligned}
& 42=\frac{1}{\sqrt{x+2}+\sqrt{x+3}}+\frac{1}{\sqrt{x+3}+\sqrt{x+4}}+\ldots+\frac{1}{\sqrt{x+2017}+\sqrt{x+2018}} \equiv \\
& \equiv(\sqrt{x+3}-\sqrt{x+2})+(\sqrt{x+4}-\sqrt{x+3})+\ldots(\sqrt{x+2018}-\sqrt{x+2017}) \equiv \\
& \equiv \sqrt{x+2018}-\sqrt{x+2} \Leftrightarrow \\
& \Leftrightarrow 42(\sqrt{x+2018}+\sqrt{x+2})=2018-2 \Leftrightarrow x=7
\end{aligned}
$$
