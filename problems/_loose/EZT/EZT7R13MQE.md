---
tag: EZT7R13MQE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Property 5 Let $a, b, c$ be the lengths of the sides of a triangle, and let
$$
\begin{aligned}
f(a, b, c) & =A\left(a^{3}+b^{3}+c^{3}\right)+B\left(a^{2} b+b^{2} c+c^{2} a+a b^{2}+b c^{2}+c a^{2}\right)+C a b c \\
& =A \cdot \sum a^{3}+B \cdot \sum a^{2}(b+c)+C \cdot a b c,
\end{aligned}
$$
(1) If $f(1,1,1), f(1,1,0)$, and $f(2,1,1)$ are all non-negative, then $f(a, b, c) \geqslant 0$.
$(25-5)$
(2) If $f(1,1,1)>0$, and $f(1,1,0) \geqslant 0, f(2,1,1) \geqslant 0$, then $f(a, b, c)>0$.
(3) If $f(1,1,1)=0$, and $f(1,1,0)>0, f(2,1,1) \geqslant 0$, then $f(a, b, c) \geqslant 0$.

Where the equality in $(25-5),(25-7)$ holds if and only if $a=b=c$.
