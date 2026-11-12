---
tag: QRQ7QF72P8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the validity of the following result on integration by substitution in $\mathbb{R}$.

Let $\varphi=\varphi(y)$ be a smooth function on $[a, b]$, $\varphi(a)<\varphi(b)$, and let $f=f(x)$ be a Borel function that is Lebesgue integrable on $[\varphi(a), \varphi(b)]$. Then the function $f(\varphi(y)) \varphi^{\prime}(y)$ is also integrable and

$$
\int_{\varphi(a)}^{\varphi(b)} f(x) d x=\int_{a}^{b} f(\varphi(y)) \varphi^{\prime}(y) d y
$$
