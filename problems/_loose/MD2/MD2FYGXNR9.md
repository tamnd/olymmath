---
tag: MD2FYGXNR9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$^{+}$ At the beginning, take $U$ to be a small connected set of vertices $V_{3}$. If the subgraph induced by its neighbors requires many colors, then by induction it should be able to contract to $K^{r-1}$. In this case, contracting $V_{0}$ can produce $K^{r}$. If it requires only a few colors, let the set of its neighbors be $V_{1}$, and contract $V_{0} \cup V_{1}$. Proceed inductively. If each $V_{n}$ requires only a few colors, this would contradict the assumption that $\chi(G)$ is large. In what sense, as a function of $\chi(G)$, is "few" in the final argument still valid? The corresponding "large" concept will give us a function $f$ that makes the theorem true.
