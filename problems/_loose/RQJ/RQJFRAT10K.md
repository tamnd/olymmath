---
tag: RQJFRAT10K
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the vectors $\vec{a}=(3, x), \vec{b}=(\sqrt{x-2}, 4)$, then $\vec{a} \cdot \vec{b} \leq|\vec{a}||\vec{b}|$, which is equivalent to

$$
3 \sqrt{x-2}+4 x \leq \sqrt{\left(9+x^{2}\right)(x+14)}
$$

Equality is possible if and only if the vectors are collinear

$$
\frac{\sqrt{x-2}}{3}=\frac{4}{x}>0 \Leftrightarrow x \sqrt{x-2}=12
$$

The left side of the considered equation is a monotonically increasing function on the domain of definition, so the equation has no more than one root. By trial, we find $x=6$.
