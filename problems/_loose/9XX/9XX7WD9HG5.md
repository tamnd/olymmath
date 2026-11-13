---
tag: 9XX7WD9HG5
kind: problem
type: answer
answer: \log()^{n\cdot2^{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that:

$$
\begin{gathered}
\log a^{n}+\binom{n}{1} \log \left(a^{n-1} b\right)+\binom{n}{2} \log \left(a^{n-2} b^{2}\right)+\ldots+ \\
+\binom{n}{n-1} \log \left(a b^{n-1}\right)+\log b^{n}=\log (a b)^{n 2^{n-1}}
\end{gathered}
$$
