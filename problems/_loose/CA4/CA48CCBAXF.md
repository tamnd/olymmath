---
tag: CA48CCBAXF
kind: problem
type: answer
answer: \frac{19}{30}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $f(x)=\{\begin{array}{ll}x+\frac{1}{2} & 0 \leqslant x \leqslant \frac{1}{2}, \\ 2(1-x) & \frac{1}{2}<x \leqslant 1,\end{array}$ define $f_{n}(x)=\underbrace{f(f(\cdots f}_{n \uparrow 1}(x) \cdots)), n \in \mathbf{N}^{*}$. Find the value of $f_{2006}\left(\frac{2}{15}\right)$.
