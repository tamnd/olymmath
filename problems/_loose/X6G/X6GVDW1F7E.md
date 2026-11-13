---
tag: X6GVDW1F7E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set $S=\{ \frac{1}{n} \vert n \in \mathbb{N} \}$ contains arithmetic progressions of various lengths. For instance, $\frac{1}{20}$, $\frac{1}{8}$, $\frac{1}{5}$ is such a progression of length $3$ and common difference $\frac{3}{40}$. Moreover, this is a maximal progression in $S$ since it cannot be extended to the left or the right within $S$ ($\frac{11}{40}$ and $\frac{-1}{40}$ not being members of $S$). Prove that for all $n \in \mathbb{N}$, there exists a maximal arithmetic progression of length $n$ in $S$.
