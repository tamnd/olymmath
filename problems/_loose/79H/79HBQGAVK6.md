---
tag: 79HBQGAVK6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [87], [106].) Let $\xi_{1}, \xi_{2}, \ldots \sim \mathscr{N}(0,1)$. Then

$$
\begin{gathered}
\mathrm{E} \xi_{n: n} \leqslant \sqrt{2 \ln n}, n \geqslant 1, \\
\frac{\lim _{n}}{}\left[\xi_{n: n}-\sqrt{2 \ln n}\right] \leqslant 0 \text { a.s., }
\end{gathered}
$$

where $\xi_{n: n}=\max \left\{\xi_{1}, \ldots, \xi_{n}\right\}$.

If in addition $\xi_{1}, \xi_{2}, \ldots$ are independent, then

$$
\lim _{n}\left[\xi_{n: n}-\sqrt{2 \ln n}\right]=0 \text { a.s. }
$$

Refine the last result by showing that

$$
\varlimsup_{n} \frac{\sqrt{2 \ln n}\left[\xi_{n: n}-\sqrt{2 \ln n}\right]}{\ln \ln n}=\frac{1}{2}, \frac{\lim }{n} \frac{\sqrt{2 \ln n}\left[\xi_{n: n}-\sqrt{2 \ln n}\right]}{\ln \ln n}=-\frac{1}{2}
$$

Remark. Similar equalities with $\varlimsup$ and $\varliminf$ for maxima of the form

$$
\max _{0 \leqslant i<j \leqslant n} \frac{\xi_{i+1}+\ldots+\xi_{j}}{\sqrt{i-i}}
$$

were obtained in the paper [72].
