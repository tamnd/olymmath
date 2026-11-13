---
tag: GY8SV5P68S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let us show - based on a combinatorial interpretation - that

$$
\begin{gathered}
\binom{2 n+1}{2 k+1}=\binom{k}{k}\binom{2 n-k}{k}+\binom{k+1}{k}\binom{2 n-k-1}{k}+\ldots \\
+\binom{m}{k}\binom{2 n-m}{k}+\ldots+\binom{2 n-k}{k}\binom{k}{k}
\end{gathered}
$$
