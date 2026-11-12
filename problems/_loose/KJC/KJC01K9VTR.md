---
tag: KJC01K9VTR
kind: problem
type: answer
answer: '[\frac{3}{50};3]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find the range of the function $f(x)=g\left(g^{2}(x)\right)$, where $g(x)=\frac{3}{x^{2}-4 x+5}$.

The function $g(x)=\frac{3}{x^{2}-4 x+5}=\frac{3}{(x-2)^{2}+1}$ is defined for all real numbers and takes all values from the interval $(0 ; 3]$. The function $g(x)$ reaches its maximum value at the point $x=2$, $g_{\max }=g(2)=3$, on the interval $(-\infty ; 2)$ the function $g(x)$ is increasing, and on the interval $(2 ;+\infty)$ it is decreasing. The function $g^{2}(x)$ takes all values from the interval $(0 ; 9]$, since $t=g(x) \in(0 ; 3]$, and the function $t^{2}$ is increasing in this interval. To find the range of the function $f(x)=g\left(g^{2}(x)\right)$, it is sufficient to find the range of the function $g(x)$ on the interval $(0 ; 9]$. On this interval, $g(x)$ takes all values from the set $[g(9) ; g(2)]=[3 / 50 ; 3]$.
