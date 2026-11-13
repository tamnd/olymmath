---
tag: XJRSGJ29DF
kind: problem
type: answer
answer: \leqslantC_{n-1}^{r-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $k<r, \mathscr{A}=\left\{A_{1}, A_{2}, \cdots, A_{t}\right\}$ is a $H_{k}$ family, and $A_{i}$ are all $r$-element sets $(1 \leqslant i \leqslant t)$, then
$$
t \leqslant C_{n-1}^{r-1} .
$$

Equality holds if and only if $\mathscr{A}$ consists of all $r$-element subsets containing a certain element $x \in X$.
