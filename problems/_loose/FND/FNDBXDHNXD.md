---
tag: FNDBXDHNXD
kind: problem
type: answer
answer: (10,9,1),(10,9,-1),(10,-9,1),(-10,9,1),(10,-9,-1),(-10,-9,1),(-10,9,-1),(-10,-9,-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integer solutions of the system of equations

$$
\begin{aligned}
& x^{2}-y^{2}-z^{2}=18 \\
& 3 x^{2}-2 y^{2}-4 z^{2}=134
\end{aligned}
$$
