---
tag: ZQSRRG6FPP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $a \in \mathbf{R}$ and $b \in \mathbf{R}^{*}$, consider the function $f_{a+b i}: \mathbf{C} \rightarrow \mathbf{C} . f_{a+b i}(x+i y)=x+(a+i b) y$ and denote $G=\left\{f_{a+b i} \mid a \in \mathbf{R}, b \in \mathbf{R}^{*}\right\}$.

a) Prove that $G$ is a non-commutative group with respect to the composition of functions.

b) Consider also the group $H=\left\{f_{a, b} \mid a \in \mathbf{R}^{*}, b \in \mathbf{R}\right\}$, where $f_{a, b}: \mathbf{R} \rightarrow \mathbf{R}, f_{a, b}(x)=a x+b$ and the operation is also the composition of functions.

Prove that the application $h: H \rightarrow G, h\left(f_{a, b}\right)=f_{-\frac{b}{a}+\frac{1}{a} i}$ is a group isomorphism.
