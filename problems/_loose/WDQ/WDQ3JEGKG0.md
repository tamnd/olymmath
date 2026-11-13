---
tag: WDQ3JEGKG0
kind: problem
type: answer
answer: \frac{n}{2n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2007 Nanchang City High School Mathematics Competition Problem) The sequence of positive integers $\{f(n)\}$ satisfies: $f(2)=15$ and
$$
\begin{aligned}
2 & +\frac{4}{f(n)+1}<\frac{f(n)}{f(n)-4 n+2}+\frac{f(n)}{f(n+1)-4 n-2}<2+\frac{4}{f(n)-1}, \\
\text { Calculate } S(n)= & \frac{1}{f(1)}+\frac{1}{f(2)}+\cdots+\frac{1}{f(n)} .
\end{aligned}
$$
