---
tag: 94WEQGM8YP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $a, b, c$ are positive integers such that

$$
\begin{aligned}
& b=a^{2}-a \\
& c=b^{2}-b \\
& a=c^{2}-c
\end{aligned}
$$

Prove that $a=b=c=2$.

Remark. Note that if you try a value larger than 2 (say $a=3$ ) and use the three equations to compute $b$, and then $a$ again, the values get successively larger $(b=6, c=30, a=870 \neq 3)$. This is the motivation for the following proof.
