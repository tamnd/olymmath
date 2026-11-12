---
tag: KMKAST04H0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if the functions $f(x)$ and $g(x)$ are differentiable at the point $x_{0}$, then:

a) $(f+g)^{\prime}\left(x_{0}\right)=f^{\prime}\left(x_{0}\right)+g^{\prime}\left(x_{0}\right)$

b) $(f g)^{\prime}\left(x_{0}\right)=f^{\prime}\left(x_{0}\right) g\left(x_{0}\right)+f\left(x_{0}\right) g^{\prime}\left(x_{0}\right)$, where $(f g)(x)=f(x) g(x)$;

c) $\left(\frac{f}{g}\right)^{\prime}\left(x_{0}\right)=\frac{f^{\prime}\left(x_{0}\right) g\left(x_{0}\right)-f\left(x_{0}\right) g^{\prime}\left(x_{0}\right)}{\left(g\left(x_{0}\right)\right)^{2}}$, if $g\left(x_{0}\right) \neq 0$.

- The composition of functions $f$ and $g$ is the function $g \circ f(x)=g(f(x))$.
