---
tag: 8RM2Y3PTVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a fixed number, and $f(x)$ be a function having derivatives up to order $n+1$ inclusive for any $x$ between $a$ and $b$ (for some $b$). Prove that if the number $x$ is between $a$ and $b$ and if

$T(x)=f(a)+\frac{f^{\prime}(a)}{1!}(x-a)+\frac{f^{\prime \prime}(a)}{2!}(x-a)^{2}+\ldots+\frac{f^{(n)}(a)}{n!}(x-a)^{n}$, then

$$
f(x)-T(x)=\frac{f^{(n+1)}(\vartheta)}{(n+1)!}(x-a)^{n+1}
$$

for some $\vartheta$ between $a$ and $x$ (Taylor's formula).
