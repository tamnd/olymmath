---
tag: DHKTCK403V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3275715
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49573
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2023
    source: hf-ai-mo-aops
    label: 2023 Abelkonkurransen Finale
---
Find all functions $f: \mathbb R^{+} \to \mathbb R^{+}$ satisfying
\begin{align*}
f(f(x)+y) = f(y) + x, \text{for all } x,y \in \mathbb R^{+}.
\end{align*}
Note that $\mathbb R^{+}$ is the set of all positive real numbers.
