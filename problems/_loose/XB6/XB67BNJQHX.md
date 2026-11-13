---
tag: XB67BNJQHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integer triples $(a, b, c)$ such that:
$$
\begin{array}{l}
a^{2}+b^{2}=n[a, b]+n^{2}, \\
b^{2}+c^{2}=n[b, c]+n^{2}, \\
c^{2}+a^{2}=n[c, a]+n^{2}
\end{array}
$$

hold simultaneously for some positive integer $n$.
