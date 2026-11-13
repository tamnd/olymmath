---
tag: D54THK69YQ
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the $\textit{number}$ of ordered quadruples $(w,x,y,z)$ of complex numbers (not necessarily nonreal) such that the following system is satisfied:
\begin{align*}
wxyz &= 1\\
wxy^2 + wx^2z + w^2yz + xyz^2 &=2\\
wx^2y + w^2y^2 + w^2xz + xy^2z + x^2z^2 + ywz^2 &= -3 \\
w^2xy + x^2yz + wy^2z + wxz^2 &= -1\end{align*}
