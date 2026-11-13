---
tag: YGKWQ75Z2D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2006 Tianjin College Entrance Examination for Science) Given $\{f(n)\},\{g(n)\}$ satisfy $f(1)=f(2)=1, g(1)=$ $g(2)=2$, and $\frac{f(n+1)}{f(n)}=\lambda \frac{f(n)}{f(n-1)}, \frac{g(n+1)}{g(n)} \geqslant \lambda \frac{g(n)}{g(n-1)}$ ($\lambda$ is a non-zero parameter, $n=2,3,4, \cdots$).
(1) When $\lambda>0$, prove: $\frac{g(n+1)}{f(n+1)} \geqslant \frac{g(n)}{f(n)}\left(n \in \mathbf{N}^{+}\right)$;
(2) When $\lambda>1$, prove: $\frac{g(1)-f(1)}{g(2)-f(2)}+\frac{g(2)-f(2)}{g(3)-f(3)}+\cdots+\frac{g(n)-f(n)}{g(n+1)-f(n+1)}<\frac{\lambda}{\lambda-1}$ $\left(n \in \mathbf{N}^{+}\right)$.
