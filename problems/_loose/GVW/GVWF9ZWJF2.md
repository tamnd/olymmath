---
tag: GVWF9ZWJF2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Gamma$ be a cover of an $n$-element set $A$. If each element of $\Gamma$ is a $k$-element subset of $A$, then $\Gamma$ is called a $k$-uniform cover of the $n$-element set $A$. Let $g_{n}^{k}$ denote the number of $k$-uniform covers of the $n$-element set $A$. Prove that:
$$
g_{n}^{k}=\sum_{j=k}^{n}(-1)^{n-j}\binom{n}{j}\left(2\binom{j}{k}-1\right) (n \geqslant k \geqslant 1) .
$$
