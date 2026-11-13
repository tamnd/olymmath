---
tag: FWB91Y1BHQ
kind: problem
type: answer
answer: P(x)=x+1orP(x)=x+p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $p$ is a prime number. Find all integer-coefficient polynomials $P(x)$ such that:
(1) $P(x)>x\left(x \in \mathbf{Z}_{+}\right)$;
(2) If the sequence $\left\{p_{n}\right\}(n \geqslant 0)$ satisfies:
$$
p_{0}=p, p_{n+1}=P\left(p_{n}\right)(n \in \mathbf{N}) \text {, }
$$

then for each $m \in \mathbf{Z}_{+}$, there exists $l \geqslant 0$, such that $m \mid p_{l}$.
