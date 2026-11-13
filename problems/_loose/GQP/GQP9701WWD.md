---
tag: GQP9701WWD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h1520070
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44674
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1988
    source: hf-ai-mo-aops
    label: 1988 Irish Math Olympiad
---
A function $f$ , defined on the set of real numbers $\mathbb{R}$ is said to have a *horizontal chord* of length $a>0$ if there is a real number $x$ such that $f(a+x)=f(x)$ . Show that the cubic $$ f(x)=x^3-x (x\in \mathbb{R}) $$ has a horizontal chord of length $a$ if, and only if, $0<a\le 2$ .
