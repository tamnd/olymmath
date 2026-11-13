---
tag: VDCH0GW5Z6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
suppose that $S_{\mathbb N}$ is the set of all permutations of natural numbers. finite permutations are a subset of $S_{\mathbb N}$ that behave like the identity permutation from somewhere. in other words bijective functions like $\pi: \mathbb N \longrightarrow \mathbb N$ that only for finite natural numbers $i$, $\pi(i)\neq i$. prove that we cannot put probability measure that is countably additive on $\wp(S_{\mathbb N})$ (family of all the subsets of $S_{\mathbb N}$) that is invarient under finite permutations.
