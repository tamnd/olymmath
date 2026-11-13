---
tag: XHQAV4TD0Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h386607
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54011
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2001
    source: hf-ai-mo-aops
    label: 2001 Romania National Olympiad
---
The continuous function $f:[0,1]\rightarrow\mathbb{R}$ has the property:
$$\lim_{x\rightarrow\infty}\ n\left(f\left(x+\frac{1}{n}\right)-f(x)\right)=0 $$
for every $x\in [0,1)$ .

Show that:

a) For every $\epsilon >0$ and $\lambda\in (0,1)$ , we have:
$$ \sup\ \{x\in[0,\lambda )\mid |f(x)-f(0)|\le \epsilon x \}=\lambda $$
b) $f$ is a constant function.
