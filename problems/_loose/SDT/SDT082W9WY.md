---
tag: SDT082W9WY
kind: problem
type: answer
answer: f(x)isincreasingon(0,1)decreasingon[-1,0]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$f(x)$ is a function defined on $[-1,1]$ and is an even function, $g(x)$'s graph is symmetric to the graph of $f(x)$ about the line $x=1$. When $x \in[2,3]$, $g(x)=2 a(x-2)-3(x-2)^{3}$, where $a>\frac{9}{2}$, find: (1) the analytical expression of $f(x)$; (2) the monotonicity of $f(x)$.
