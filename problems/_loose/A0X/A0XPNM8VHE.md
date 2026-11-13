---
tag: A0XPNM8VHE
kind: problem
type: answer
answer: x+y+1orx+y+-3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $x, y$, the following holds:

$$
\begin{aligned}
& |x+y|=1-z, \\
& |y+z|=1-x, \\
& |z+x|=1-y .
\end{aligned}
$$

Determine the values that the sum $x+y+z$ can take. For each valid sum, provide an example of corresponding numbers $x, y, z$. (Mária Dományová \& Patrik Bak)
