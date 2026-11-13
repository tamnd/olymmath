---
tag: EFXZP64WY7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. Let $p$ be an odd prime, $g(x)$ be an integer-coefficient polynomial of degree $m$, and $k \in \mathbf{Z}_{+}$. Let
$$
\binom{g(p x)}{k}=\sum_{t=0}^{m k} c_{t}\binom{x}{t} .
$$

Prove: $c_{j} \in \mathbf{Z}$, and
$$
\left.p^{j-\left[\frac{k}{p}\right]} \right\rvert c_{j}(j=0,1, \cdots, m k) \text {. }
$$
(2015, Peking University Mathematics Autumn Camp)
