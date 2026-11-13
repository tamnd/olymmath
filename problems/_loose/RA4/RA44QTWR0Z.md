---
tag: RA44QTWR0Z
kind: problem
type: answer
answer: \leqslant-2or\geqslant2or=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $f(x)$ is an odd function defined on $[-1,1]$, and $f(1)=$ 1, if $a, b \in[-1,1], a+b \neq 0$, then $\frac{f(a)+f(b)}{a+b}>0$. If the inequality
$$
f(x) \leqslant m^{2}-2 a m+1
$$

holds for all $x \in[-1,1], a \in[-1,1]$, find the range of real numbers $m$.
