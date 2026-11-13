---
tag: GGZYH9ED2S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=64401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two lines are given in barycentric coordinates by the equations $a_{1} \alpha+b_{1} \beta+c_{1} \gamma=0$ and $a_{2} \alpha+b_{2} \beta+c_{2} \gamma=0$. a) Prove that the point of intersection of these lines has barycentric coordinates

$$
\left(\left|\begin{array}{ll}
b_{1} & c_{1} \\
b_{2} & c_{2}
\end{array}\right|:\left|\begin{array}{ll}
c_{1} & a_{1} \\
c_{2} & a_{2}
\end{array}\right|:\left|\begin{array}{ll}
a_{1} & b_{1} \\
a_{2} & b_{2}
\end{array}\right|\right)
$$

b) Prove that these lines are parallel if and only if

$$
\left|\begin{array}{ll}
b_{1} & c_{1} \\
b_{2} & c_{2}
\end{array}\right|+\left|\begin{array}{ll}
c_{1} & a_{1} \\
c_{2} & a_{2}
\end{array}\right|+\left|\begin{array}{ll}
a_{1} & b_{1} \\
a_{2} & b_{2}
\end{array}\right|=0
$$
