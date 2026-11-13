---
tag: 1N7A6YQ8DP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h381488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54030
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2002
    source: hf-ai-mo-aops
    label: 2002 Romania National Olympiad
---
Let $I\subseteq \mathbb{R}$ be an interval and $f:I\rightarrow\mathbb{R}$ a function such that:
$$|f(x)-f(y)|\le |x-y|, \text{for all}\ x,y\in I. $$
Show that $f$ is monotonic on $I$ if and only if, for any $x,y\in I$ , either $f(x)\le f\left(\frac{x+y}{2}\right)\le f(y)$ or $f(y)\le f\left(\frac{x+y}{2}\right)\le f(x)$ .
