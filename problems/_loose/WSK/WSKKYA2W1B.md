---
tag: WSKKYA2W1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Sigma$ be a finite set. For $x,y \in \Sigma^{\ast}$, define $$x\preceq y$$ if $x$ is a sub-string (**not necessarily contiguous**) of $y$. For example, $ac \preceq abc$. We call a set $S\subseteq \Sigma^{\ast}$ **good** if $\forall x,y \in \Sigma^{\ast}$,
$$ x\preceq y, y \in S \Rightarrow x\in S .$$ Prove or disprove: Every good set is regular.
