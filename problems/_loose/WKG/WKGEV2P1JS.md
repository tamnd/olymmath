---
tag: WKGEV2P1JS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathscr{A}=\left\{A_{1}, A_{2}, \cdots, A_{t}\right\}$ be a family of $l$-element subsets of $X$, and the binomial representation of $t$ is
$$
t=C_{a_{t}}^{l}+C_{a_{i-1}}^{t-1}+\cdots+C_{a_{m}}^{m},
$$
$a_{i}>a_{t-1}>\cdots>a_{m} \geqslant m$, then
$$
|\Delta \mathscr{A}| \geqslant C_{a_{l}}^{l-1}+C_{a_{j-1}}^{l 2}+\cdots+C_{a_{m}}^{m-1} .
$$

This conclusion is known as the Kruskal-Katona Theorem.
