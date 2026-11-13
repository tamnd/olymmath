---
tag: HG1MVQTZYR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,\infty)\to\mathbb R$ ba a strictly convex continuous function such that
$$\lim_{x\to+\infty}\frac{f(x)}x=+\infty.$$Prove that the improper integral $\int^{+\infty}_0\sin(f(x))\text dx$ is convergent but not absolutely convergent.
