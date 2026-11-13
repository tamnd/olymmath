---
tag: DJV2SA98DA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247081
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1]\to(0,\infty)$ be a continous function on $[0,1]$ and let $A=\int_0^1 f(t)\mathrm{d}t.$

- Consider the function $F:[0,1]\to[0,A]$ defined by $$F(x)=\int_0^xf(t)\mathrm{d}t.$$Prove that $F(x)$ has an inverse function, which is differentiable.

- Prove that there exists a unique function $g:[0,1]\to[0,1]$ for which$$\int_0^xf(t)\mathrm{d}t=\int_{g(x)}^1f(t)\mathrm{d}t$$is satisfied for every $x\in [0,1].$

- Prove that there exists $c\in[0,1]$ for which$$\lim_{x\to c}\frac{g(x)-c}{x-c}=-1,$$whre $g$ is the function uniquely determined at b.
