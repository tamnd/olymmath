---
tag: XK1MHEMCP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Show that if $f:[-1,1]\to \mathbb{R}$ is a convex and $C^2$ function such that $f(1),f(-1)\geq 0$, then:
$$\min_{x\in[-1,1]} \{f(x)\} \geq - \int_{-1}^1 f''$$

(b) Let $B\subset \mathbb{R}^2$ the closed ball with center $0$ and radius $1$. Show that if $f: B \to \mathbb{R}$ is a convex and $C^2$ function and $f\geq 0$ in $\partial B$, then:
$$f(0)\geq -\frac{1}{\sqrt{\pi}} \left( \int_{B} (f_{xx}f_{yy}-f_{xy}^2) \right)^{1/2}$$
