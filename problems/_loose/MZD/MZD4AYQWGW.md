---
tag: MZD4AYQWGW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that

$$
\sum_{k=1}^{n}(-1)^{n-k} k^{m} C_{n}^{k}= \begin{cases}0 & \text { for } 0<m<n \\ n! & \text { for } m=n\end{cases}
$$

Let $f=1+a_{1} x+a_{2} x^{2}+\ldots$ be a formal series. The formal logarithm of $f$ is defined as the formal series

$$
\operatorname{Ln}(f)=g-\frac{1}{2} g^{2}+\frac{1}{3} g^{3}-\ldots=\sum_{k=1}^{\infty}(-1)^{k+1} \frac{g^{k}}{k}
$$

where $g=f-1=a_{1} x+a_{2} x^{2}+\ldots$ Note that the formal series $\operatorname{Ln}(f)$ is well-defined, since the coefficient of $x^{n}$ is completely determined by the finite sum $g-\frac{1}{2} g^{2}+\frac{1}{3} g^{3}-\ldots+(-1)^{n+1} \frac{1}{n} g^{n}$.
