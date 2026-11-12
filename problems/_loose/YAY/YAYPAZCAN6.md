---
tag: YAYPAZCAN6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h529914
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10287
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2013
    source: hf-ai-mo-aops
    label: 2013 Romania National Olympiad
---
Consider a nonzero integer number $n$ and the function $f:\mathbb{N}\to \mathbb{N}$ by
$$ f(x) = \begin{cases}
\frac{x}{2} & \text{if } x \text{ is even}
\frac{x-1}{2} + 2^{n-1} & \text{if } x \text{ is odd}
\end{cases}.
$$ Determine the set: $$
A = \{ x\in \mathbb{N} \mid \underbrace{\left( f\circ f\circ ....\circ f \right)}_{n\ f\text{'s}}\left( x \right)=x \}.
$$
