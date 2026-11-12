---
tag: QQHHFYYRQ6
kind: problem
type: answer
answer: \beta_{i}=(-1)^{i+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34034
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Y, X_{1}, X_{2}, \ldots$ be random variables in $L^{2}$. Suppose also that $X_{i} (i \geqslant 1)$ does not lie in the closure of the linear span in $L^{2}$ of the variables $X_{j}$, $j \neq i$ (the condition of relevance of the factor $X_{i}$). Define $\beta_{1 p}, \ldots, \beta_{p p}$ as the solution to the following prediction problem:

$$
\mathrm{E}\left(Y-b_{1} X_{1}-\ldots-b_{p} X_{p}\right)^{2} \rightarrow \min
$$

where $\min$ is taken over all $b_{1}, \ldots, b_{p} \in \mathbb{R}$.

(a) Prove that for each $i$ the condition

$$
\beta_{i p} \rightarrow \beta_{i}, p \rightarrow \infty,
$$

holds for some $\beta_{i} \in \mathbb{R}$.

(b) Part (a) allows us to introduce the formal series " $\sum_{i \geqslant 1} \beta_{i} X_{i}$ ", corresponding to the projection of the variable $Y$ onto the closure in $L^{2}$ of the linear span of the variables $X_{1}, X_{2}, \ldots$ Propose a method for recovering this projection from the given formal series.
(c) Find $\beta_{i}$ in the case when $Y=X_{0}$ and $X_{i-1}=e_{i-1}+e_{i}, i \geqslant 1$, for some i.i.d. random variables $e_{0}, e_{1}, \ldots, \mathrm{E} e_{0}=0$ and $\mathrm{E} e_{0}^{2}=1$.
